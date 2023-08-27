import AsyncStorage from "@react-native-async-storage/async-storage";
import {inSeconds, uniq} from "../common/util";
import apiClient from "./api-client";
import {NewsTopItem, Topic, TopicRequest} from "./generated-api-client/schema";
import {Locale} from "../common/types";

// #region Cache

type CacheItem<T> = {
  value: T;
  expires: number;
};

const formatApiKey = (key: string) => `api-${key}`;

const parseCacheItem = <T>(value: string): CacheItem<T> | null => {
  const item = JSON.parse(value);
  if (item.value === undefined) return null;
  return item;
};

const getCacheItems = async <T>(keys: string[]): Promise<CacheItem<T>[]> =>
  AsyncStorage.multiGet(keys.map(formatApiKey)).then(
    items =>
      items
        .map<CacheItem<T> | null>(([_, value]) =>
          value ? parseCacheItem<T>(value) : null,
        )
        .filter(it => !!it) as never,
  );

const getCacheItem = async <T>(key: string): Promise<CacheItem<T> | null> =>
  AsyncStorage.getItem(formatApiKey(key)).then(value =>
    value ? parseCacheItem<T>(value) : null,
  );

const setCacheItem = async <T>(key: string, item: CacheItem<T>) => {
  if (item.value === undefined) throw new Error("item.value is undefined");
  return AsyncStorage.setItem(formatApiKey(key), JSON.stringify(item));
};

const apiCall = async <T>(
  call: () => Promise<T>,
  key: string = "",
  ttl = inSeconds("1h"),
) => {
  let item: CacheItem<T> | null = null;
  if (key) item = await getCacheItem(key);

  if (item && item.expires > Date.now() / 1000) {
    console.log(`Cache hit for ${key}`);
    return item.value;
  } else if (key) console.log(`Cache miss for ${key}`);

  const data = await call().catch(error => {
    console.error(error.message);
    return null;
  });

  if (item && !data) return item.value;
  if (key) {
    const expires =
      data === null
        ? Date.now() / 1000 + inSeconds("15m")
        : Date.now() / 1000 + ttl;
    await setCacheItem(key, {value: data, expires});
  }

  return data;
};

// #endregion

// #region Topics

const topicRequest: TopicRequest = {
  id: 1,
  name: 1,
  type: 1,
  englishName: 1,
  abbr: 1,
  about: 1,
  commonName: 1,
  country: 1,
  lang: 1,
  description: 1,
  isActive: 1,
  updatedAt: 1,
};

const formatTopicKey = (id: string) => `tpc-${id}`;

export const getTopic = (id: string) =>
  apiCall(
    () => apiClient.chain.query.topics_topicById({id}).execute(topicRequest),
    formatTopicKey(id),
    inSeconds("7d"),
  );

export const getTopics = async (ids: string[]): Promise<Topic[]> => {
  ids = uniq(ids);
  if (ids.length === 0) return [];
  const existing = await getCacheItems<Topic>(ids.map(formatTopicKey)).then(
    items =>
      items
        // .filter(it => it && it.value && it.expires > Date.now() / 1000)
        .filter(it => it && it.expires < 100)
        .map(it => it.value),
  );
  const notExisingIds = ids.filter(id => !existing.find(it => it.id === id));
  if (notExisingIds.length === 0) return existing;
  const newData: Topic[] = (await Promise.all(notExisingIds.map(getTopic)).then(
    topics => topics.filter(it => it),
  )) as never;
  return [...existing, ...newData].filter(it => it);
};

export const getTrendingTopics = async (locale: Locale) => {
  const trending: NewsTopItem[] = ((await apiCall(
    () =>
      apiClient.chain.query
        .news_trendingTopics({
          params: {
            country: locale.country,
            lang: locale.language,
            limit: 10,
            period: "24h",
          },
        })
        .execute({id: 1}),
    `trndgt-${locale.country}-${locale.language}`,
    inSeconds("4h"),
  )) || []) as never;
  const topics = await getTopics((trending || []).map(it => it!.id));

  return trending
    .map(it => topics.find(t => t.id === it.id))
    .filter(it => !!it) as Topic[];
};

// #endregion
