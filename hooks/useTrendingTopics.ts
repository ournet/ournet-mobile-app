import {useEffect, useState} from "react";
import {getTrendingTopics} from "../api";
import {Topic} from "../api/generated-api-client/schema";
import {Locale} from "../common/types";

export default function useTrendingTopics(locale: Locale) {
  const [topics, setTopics] = useState<Topic[] | null>(null);

  //Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadData() {
      const data = await getTrendingTopics(locale);
      setTopics(() => data);
    }
    if (locale.country && locale.language) loadData();
  }, [locale]);

  return topics;
}
