import { Observable } from 'graphql-typed-client'

export interface Query {
  ping: String
  publicHolidays: (PublicHoliday | null)[] | null
  weather_forecastReport: ForecastReport | null
  weather_datePlacesForecast: (DailyForecastDataPoint | null)[] | null
  weather_nowPlaceForecast: HourlyForecastDataPoint | null
  places_placeById: Place | null
  places_searchPlace: (Place | null)[] | null
  places_placesByIds: (Place | null)[] | null
  places_placesByAdmin1Code: (Place | null)[] | null
  places_mainPlaces: (Place | null)[] | null
  places_admin1s: (Place | null)[] | null
  places_admin1: Place | null
  places_placeOldId: PlaceOldId | null
  news_itemById: NewsItem | null
  news_itemsByIds: (NewsItem | null)[]
  news_itemsSearch: (NewsItem | null)[]
  news_itemsLatest: (NewsItem | null)[]
  news_itemsLatestBySource: (NewsItem | null)[]
  news_itemsLatestByTopic: (NewsItem | null)[]
  news_itemsLatestByEvent: (NewsItem | null)[]
  news_itemsCount: Int
  news_itemsCountBySource: Int
  news_itemsCountByTopic: Int
  news_itemsCountByEvent: Int
  news_topSources: (NewsTopItem | null)[]
  news_topSourceTopics: (NewsTopItem | null)[]
  news_eventById: NewsEvent | null
  news_eventsByIds: (NewsEvent | null)[]
  news_eventsLatest: (NewsEvent | null)[]
  news_eventsLatestByTopic: (NewsEvent | null)[]
  news_eventsCount: Int
  news_eventsCountByTopic: Int
  news_topTopics: (NewsTopItem | null)[]
  news_trendingTopics: (NewsTopItem | null)[]
  news_similarEventsByTopics: (NewsEvent | null)[]
  news_articleContentById: ArticleContent | null
  news_articleContentsByIds: (ArticleContent | null)[]
  topics_topicById: Topic | null
  topics_topicsByIds: (Topic | null)[]
  topics_topicsByWikiIds: (Topic | null)[]
  quotes_quoteById: Quote | null
  quotes_quotesByIds: (Quote | null)[]
  quotes_latest: (Quote | null)[]
  quotes_latestByTopic: (Quote | null)[]
  quotes_latestByAuthor: (Quote | null)[]
  quotes_count: Int
  quotes_countByTopic: Int
  quotes_countByAuthor: Int
  quotes_topTopics: (QuoteTopItem | null)[]
  quotes_topAuthors: (QuoteTopItem | null)[]
  quotes_topAuthorTopics: (QuoteTopItem | null)[]
  quotes_popularByAuthor: (Quote | null)[]
  horoscopes_reportById: HoroscopeReport | null
  horoscopes_reportsByIds: (HoroscopeReport | null)[]
  horoscopes_phraseById: HoroscopePhrase | null
  horoscopes_generateReports: (HoroscopeReport | null)[]
  horoscopes_phraseList: (HoroscopePhrase | null)[]
  videos_videoById: Video | null
  videos_videosByIds: (Video | null)[]
  cocoshel_unsubsribe: Boolean
  __typename: 'Query'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export interface PublicHoliday {
  date: Int
  name: String
  __typename: 'PublicHoliday'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

export interface ForecastReport {
  latitude: Float
  longitude: Float
  timezone: String
  units: String
  hourly: HourlyForecastDataBlock | null
  details: HoursForecastDataBlock | null
  daily: DailyForecastDataBlock | null
  __typename: 'ForecastReport'
}

export interface HourlyForecastDataBlock extends IForecastDataBlock {
  icon: Int
  night: Boolean | null
  data: (HourlyForecastDataPoint | null)[]
  __typename: 'HourlyForecastDataBlock'
}

export interface IForecastDataBlock {
  icon: Int
  night: Boolean | null
  __typename: 'HourlyForecastDataBlock' | 'HoursForecastDataBlock' | 'DailyForecastDataBlock'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface HourlyForecastDataPoint extends IForecastDataPoint {
  cloudCover: Float | null
  dewPoint: Float | null
  humidity: Float | null
  icon: Int
  night: Boolean | null
  ozone: Float | null
  precipAccumulation: Float | null
  precipIntensity: Float | null
  precipProbability: Float | null
  precipType: String | null
  pressure: Float | null
  temperature: Float
  time: Int
  uvIndex: Float | null
  visibility: Float | null
  windDir: String | null
  windGust: Float | null
  windSpeed: Float | null
  __typename: 'HourlyForecastDataPoint'
}

export interface IForecastDataPoint {
  cloudCover: Float | null
  dewPoint: Float | null
  humidity: Float | null
  icon: Int
  night: Boolean | null
  ozone: Float | null
  precipAccumulation: Float | null
  precipIntensity: Float | null
  precipProbability: Float | null
  precipType: String | null
  pressure: Float | null
  temperature: Float
  time: Int
  uvIndex: Float | null
  visibility: Float | null
  windDir: String | null
  windGust: Float | null
  windSpeed: Float | null
  __typename: 'HourlyForecastDataPoint' | 'HoursForecastDataPoint' | 'DailyForecastDataPoint'
}

export interface HoursForecastDataBlock extends IForecastDataBlock {
  icon: Int
  night: Boolean | null
  data: (HoursForecastDataPoint | null)[]
  __typename: 'HoursForecastDataBlock'
}

export interface HoursForecastDataPoint extends IForecastDataPoint {
  cloudCover: Float | null
  dewPoint: Float | null
  humidity: Float | null
  icon: Int
  night: Boolean | null
  ozone: Float | null
  precipAccumulation: Float | null
  precipIntensity: Float | null
  precipProbability: Float | null
  precipType: String | null
  pressure: Float | null
  temperature: Float
  time: Int
  uvIndex: Float | null
  visibility: Float | null
  windDir: String | null
  windGust: Float | null
  windSpeed: Float | null
  temperatureHigh: Float | null
  temperatureHighTime: Int | null
  temperatureLow: Float | null
  temperatureLowTime: Int | null
  __typename: 'HoursForecastDataPoint'
}

export interface DailyForecastDataBlock extends IForecastDataBlock {
  icon: Int
  night: Boolean | null
  data: (DailyForecastDataPoint | null)[]
  __typename: 'DailyForecastDataBlock'
}

export interface DailyForecastDataPoint extends IForecastDataPoint {
  cloudCover: Float | null
  dewPoint: Float | null
  humidity: Float | null
  icon: Int
  night: Boolean | null
  ozone: Float | null
  precipAccumulation: Float | null
  precipIntensity: Float | null
  precipProbability: Float | null
  precipType: String | null
  pressure: Float | null
  temperature: Float
  time: Int
  uvIndex: Float | null
  visibility: Float | null
  windDir: String | null
  windGust: Float | null
  windSpeed: Float | null
  temperatureHigh: Float | null
  temperatureHighTime: Int | null
  temperatureLow: Float | null
  temperatureLowTime: Int | null
  moonPhase: Float | null
  sunriseTime: Int | null
  sunsetTime: Int | null
  __typename: 'DailyForecastDataPoint'
}

export interface Place {
  id: String
  name: String
  asciiname: String
  names: String | null
  latitude: Float
  longitude: Float
  featureClass: String
  featureCode: String | null
  countryCode: String
  admin1Code: String
  admin2Code: String | null
  admin3Code: String | null
  population: Int | null
  elevation: Int | null
  dem: Int | null
  timezone: String
  admin1: Place | null
  __typename: 'Place'
}

export interface PlaceOldId {
  id: Int
  geonameid: Int
  __typename: 'PlaceOldId'
}

export interface NewsItem {
  id: String
  title: String
  summary: String
  lang: String
  country: String
  urlPath: String
  urlHost: String
  slug: String
  sourceId: String
  imagesIds: (String | null)[] | null
  videoId: String | null
  topics: (NewsTopic | null)[] | null
  eventId: String | null
  createdAt: String
  updatedAt: String | null
  publishedAt: String
  expiresAt: Int
  titleHash: String
  hasContent: Boolean
  countViews: Int
  countQuotes: Int
  quotesIds: (String | null)[] | null
  __typename: 'NewsItem'
}

export interface NewsTopic {
  id: String
  name: String
  slug: String
  abbr: String | null
  type: String | null
  __typename: 'NewsTopic'
}

export interface NewsTopItem {
  id: String
  count: Int
  __typename: 'NewsTopItem'
}

export interface NewsEvent {
  id: String
  title: String
  slug: String
  summary: String
  source: NewsEventSource
  lang: String
  country: String
  imageId: String
  imageHost: String
  imageSourceId: String
  countNews: Int
  countViews: Int
  countQuotes: Int
  countVideos: Int
  countImages: Int
  topics: (NewsTopic | null)[]
  items: (NewsEventItem | null)[]
  quotesIds: (String | null)[] | null
  videosIds: (String | null)[] | null
  imagesIds: (String | null)[] | null
  status: String | null
  createdAt: String
  updatedAt: String | null
  expiresAt: Int
  hasContent: Boolean
  __typename: 'NewsEvent'
}

export interface NewsEventSource {
  id: String
  host: String
  path: String
  sourceId: String
  __typename: 'NewsEventSource'
}

export interface NewsEventItem {
  id: String
  title: String
  sourceId: String
  host: String
  path: String
  publishedAt: String
  __typename: 'NewsEventItem'
}

export interface ArticleContent {
  id: String
  refId: String
  refType: String
  content: String
  format: String
  formatVersion: Int | null
  topicsMap: JSON | null
  expiresAt: Int
  createdAt: String
  updatedAt: String | null
  __typename: 'ArticleContent'
}

/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any

export interface Topic {
  id: String
  lang: String
  country: String
  wikiId: String | null
  name: String
  commonName: String | null
  englishName: String | null
  abbr: String | null
  type: String | null
  description: String | null
  about: String | null
  isActive: Boolean | null
  createdAt: String
  updatedAt: String | null
  __typename: 'Topic'
}

export interface Quote {
  id: String
  lang: String
  country: String
  source: QuoteSource
  author: QuoteAuthor
  text: String
  topics: (QuoteTopic | null)[] | null
  lastFoundAt: String
  createdAt: String
  expiresAt: Int
  countViews: Int
  events: (QuoteEvent | null)[] | null
  __typename: 'Quote'
}

export interface QuoteSource {
  host: String
  path: String
  title: String
  id: String
  imageId: String | null
  __typename: 'QuoteSource'
}

export interface QuoteAuthor {
  name: String
  slug: String
  id: String
  __typename: 'QuoteAuthor'
}

export interface QuoteTopic {
  id: String
  name: String
  slug: String
  abbr: String | null
  type: String | null
  rel: String | null
  __typename: 'QuoteTopic'
}

export interface QuoteEvent {
  title: String
  id: String
  imageId: String | null
  __typename: 'QuoteEvent'
}

export interface QuoteTopItem {
  id: String
  count: Int
  __typename: 'QuoteTopItem'
}

export interface HoroscopeReport {
  id: String
  lang: String
  text: String
  length: Int
  sign: Int
  period: String
  phrasesIds: String[]
  phrases: HoroscopePhrase[]
  numbers: Int[]
  stats: HoroscopeReportStats
  createdAt: String
  expiresAt: Int
  __typename: 'HoroscopeReport'
}

export interface HoroscopePhrase {
  iid: Int | null
  id: String
  lang: String
  source: String
  text: String
  length: Int
  sign: Int
  period: String
  createdAt: String
  __typename: 'HoroscopePhrase'
}

export interface HoroscopeReportStats {
  love: Int
  success: Int
  health: Int
  __typename: 'HoroscopeReportStats'
}

export interface Video {
  id: String
  sourceId: String
  sourceType: String
  websites: (String | null)[]
  createdAt: String
  expiresAt: Int
  width: Int | null
  height: Int | null
  countViews: Int
  __typename: 'Video'
}

export interface Mutation {
  add: Int
  news_viewNewsEvent: Int
  news_viewNewsItem: Int
  topics_setTopicType: Topic
  __typename: 'Mutation'
}

export enum TopicType {
  PLACE = 'PLACE',
  ORG = 'ORG',
  PERSON = 'PERSON',
  WORK = 'WORK',
  EVENT = 'EVENT',
}

export enum NewsTopicType {
  PERSON = 'PERSON',
  ORG = 'ORG',
  PLACE = 'PLACE',
  PRODUCT = 'PRODUCT',
  WORK = 'WORK',
  EVENT = 'EVENT',
}

export enum NewsEventStatus {
  ADULT = 'ADULT',
}

export enum ArticleContentFormat {
  text = 'text',
  md = 'md',
  json = 'json',
}

export enum ArticleContentRefType {
  NEWS = 'NEWS',
  EVENT = 'EVENT',
}

export interface ArticleContentRef {
  refId: String
  refType: String
  __typename: 'ArticleContentRef'
}

export enum QuoteTopicType {
  PERSON = 'PERSON',
  ORG = 'ORG',
  PLACE = 'PLACE',
  PRODUCT = 'PRODUCT',
  WORK = 'WORK',
  EVENT = 'EVENT',
}

export enum QuoteTopicRelation {
  MENTION = 'MENTION',
}

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

export interface QueryRequest {
  ping?: boolean | number
  publicHolidays?: [{ country: String; lang: String; start?: Int | null; end?: Int | null }, PublicHolidayRequest]
  weather_forecastReport?: [{ place: InputTimezoneGeoPoint }, ForecastReportRequest]
  weather_datePlacesForecast?: [{ places: (InputTimezoneGeoPoint | null)[]; date: String }, DailyForecastDataPointRequest]
  weather_nowPlaceForecast?: [{ place: InputTimezoneGeoPoint }, HourlyForecastDataPointRequest]
  places_placeById?: [{ id: String }, PlaceRequest]
  places_searchPlace?: [{ query: String; country: String; limit: Int; type?: String | null }, PlaceRequest]
  places_placesByIds?: [{ ids: (String | null)[] }, PlaceRequest]
  places_placesByAdmin1Code?: [{ country: String; admin1Code: String; limit: Int }, PlaceRequest]
  places_mainPlaces?: [{ country: String; limit: Int }, PlaceRequest]
  places_admin1s?: [{ country: String; limit: Int }, PlaceRequest]
  places_admin1?: [{ admin1Code: String; country: String }, PlaceRequest]
  places_placeOldId?: [{ id: Int }, PlaceOldIdRequest]
  news_itemById?: [{ id: String }, NewsItemRequest]
  news_itemsByIds?: [{ ids: (String | null)[] }, NewsItemRequest]
  news_itemsSearch?: [{ params: NewsSearchParams }, NewsItemRequest]
  news_itemsLatest?: [{ params?: LatestNewsQueryParams | null }, NewsItemRequest] | NewsItemRequest
  news_itemsLatestBySource?: [{ params?: LatestNewsBySourceQueryParams | null }, NewsItemRequest] | NewsItemRequest
  news_itemsLatestByTopic?: [{ params?: LatestNewsByTopicQueryParams | null }, NewsItemRequest] | NewsItemRequest
  news_itemsLatestByEvent?: [{ params?: LatestNewsByEventQueryParams | null }, NewsItemRequest] | NewsItemRequest
  news_itemsCount?: [{ params?: CountNewsQueryParams | null }] | boolean | number
  news_itemsCountBySource?: [{ params?: CountNewsBySourceQueryParams | null }] | boolean | number
  news_itemsCountByTopic?: [{ params?: CountNewsByTopicQueryParams | null }] | boolean | number
  news_itemsCountByEvent?: [{ params?: CountNewsByEventQueryParams | null }] | boolean | number
  news_topSources?: [{ params?: LatestNewsQueryParams | null }, NewsTopItemRequest] | NewsTopItemRequest
  news_topSourceTopics?: [{ params?: LatestNewsBySourceQueryParams | null }, NewsTopItemRequest] | NewsTopItemRequest
  news_eventById?: [{ id: String }, NewsEventRequest]
  news_eventsByIds?: [{ ids: (String | null)[] }, NewsEventRequest]
  news_eventsLatest?: [{ params?: LatestEventsQueryParams | null }, NewsEventRequest] | NewsEventRequest
  news_eventsLatestByTopic?: [{ params?: LatestEventsByTopicQueryParams | null }, NewsEventRequest] | NewsEventRequest
  news_eventsCount?: [{ params?: CountEventsQueryParams | null }] | boolean | number
  news_eventsCountByTopic?: [{ params?: CountEventsByTopicQueryParams | null }] | boolean | number
  news_topTopics?: [{ params?: LatestEventsQueryParams | null }, NewsTopItemRequest] | NewsTopItemRequest
  news_trendingTopics?: [{ params?: TrendingTopicsQueryParams | null }, NewsTopItemRequest] | NewsTopItemRequest
  news_similarEventsByTopics?: [{ params?: SimilarEventsByTopicsQueryParams | null }, NewsEventRequest] | NewsEventRequest
  news_articleContentById?: [{ id: String }, ArticleContentRequest]
  news_articleContentsByIds?: [{ ids: (String | null)[] }, ArticleContentRequest]
  topics_topicById?: [{ id: String }, TopicRequest]
  topics_topicsByIds?: [{ ids: (String | null)[] }, TopicRequest]
  topics_topicsByWikiIds?: [{ wikiIds: (TopicWikiId | null)[] }, TopicRequest]
  quotes_quoteById?: [{ id: String }, QuoteRequest]
  quotes_quotesByIds?: [{ ids: String[] }, QuoteRequest]
  quotes_latest?: [{ params?: ListQuotesQueryParams | null }, QuoteRequest] | QuoteRequest
  quotes_latestByTopic?: [{ params?: ListQuotesByTopicQueryParams | null }, QuoteRequest] | QuoteRequest
  quotes_latestByAuthor?: [{ params?: ListQuotesByAuthorQueryParams | null }, QuoteRequest] | QuoteRequest
  quotes_count?: [{ params?: CountQuotesQueryParams | null }] | boolean | number
  quotes_countByTopic?: [{ params?: CountQuotesByTopicQueryParams | null }] | boolean | number
  quotes_countByAuthor?: [{ params?: CountQuotesByAuthorQueryParams | null }] | boolean | number
  quotes_topTopics?: [{ params?: ListQuotesQueryParams | null }, QuoteTopItemRequest] | QuoteTopItemRequest
  quotes_topAuthors?: [{ params?: ListQuotesQueryParams | null }, QuoteTopItemRequest] | QuoteTopItemRequest
  quotes_topAuthorTopics?: [{ params?: ListQuotesByAuthorQueryParams | null }, QuoteTopItemRequest] | QuoteTopItemRequest
  quotes_popularByAuthor?: [{ params?: ListQuotesByAuthorQueryParams | null }, QuoteRequest] | QuoteRequest
  horoscopes_reportById?: [{ id: String }, HoroscopeReportRequest]
  horoscopes_reportsByIds?: [{ ids: String[] }, HoroscopeReportRequest]
  horoscopes_phraseById?: [{ id: String }, HoroscopePhraseRequest]
  horoscopes_generateReports?: [{ params: HoroscopeGenerateReportsParams }, HoroscopeReportRequest]
  horoscopes_phraseList?: [{ params: HoroscopeListPhraseParams }, HoroscopePhraseRequest]
  videos_videoById?: [{ id: String }, VideoRequest]
  videos_videosByIds?: [{ ids: String[] }, VideoRequest]
  cocoshel_unsubsribe?: [{ id: String }]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PublicHolidayRequest {
  date?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InputTimezoneGeoPoint {
  longitude: Float
  latitude: Float
  timezone: String
}

export interface ForecastReportRequest {
  latitude?: boolean | number
  longitude?: boolean | number
  timezone?: boolean | number
  units?: boolean | number
  hourly?: HourlyForecastDataBlockRequest
  details?: HoursForecastDataBlockRequest
  daily?: DailyForecastDataBlockRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HourlyForecastDataBlockRequest {
  icon?: boolean | number
  night?: boolean | number
  data?: HourlyForecastDataPointRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface IForecastDataBlockRequest {
  icon?: boolean | number
  night?: boolean | number
  on_HourlyForecastDataBlock?: HourlyForecastDataBlockRequest
  on_HoursForecastDataBlock?: HoursForecastDataBlockRequest
  on_DailyForecastDataBlock?: DailyForecastDataBlockRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HourlyForecastDataPointRequest {
  cloudCover?: boolean | number
  dewPoint?: boolean | number
  humidity?: boolean | number
  icon?: boolean | number
  night?: boolean | number
  ozone?: boolean | number
  precipAccumulation?: boolean | number
  precipIntensity?: boolean | number
  precipProbability?: boolean | number
  precipType?: boolean | number
  pressure?: boolean | number
  temperature?: boolean | number
  time?: boolean | number
  uvIndex?: boolean | number
  visibility?: boolean | number
  windDir?: boolean | number
  windGust?: boolean | number
  windSpeed?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface IForecastDataPointRequest {
  cloudCover?: boolean | number
  dewPoint?: boolean | number
  humidity?: boolean | number
  icon?: boolean | number
  night?: boolean | number
  ozone?: boolean | number
  precipAccumulation?: boolean | number
  precipIntensity?: boolean | number
  precipProbability?: boolean | number
  precipType?: boolean | number
  pressure?: boolean | number
  temperature?: boolean | number
  time?: boolean | number
  uvIndex?: boolean | number
  visibility?: boolean | number
  windDir?: boolean | number
  windGust?: boolean | number
  windSpeed?: boolean | number
  on_HourlyForecastDataPoint?: HourlyForecastDataPointRequest
  on_HoursForecastDataPoint?: HoursForecastDataPointRequest
  on_DailyForecastDataPoint?: DailyForecastDataPointRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoursForecastDataBlockRequest {
  icon?: boolean | number
  night?: boolean | number
  data?: HoursForecastDataPointRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoursForecastDataPointRequest {
  cloudCover?: boolean | number
  dewPoint?: boolean | number
  humidity?: boolean | number
  icon?: boolean | number
  night?: boolean | number
  ozone?: boolean | number
  precipAccumulation?: boolean | number
  precipIntensity?: boolean | number
  precipProbability?: boolean | number
  precipType?: boolean | number
  pressure?: boolean | number
  temperature?: boolean | number
  time?: boolean | number
  uvIndex?: boolean | number
  visibility?: boolean | number
  windDir?: boolean | number
  windGust?: boolean | number
  windSpeed?: boolean | number
  temperatureHigh?: boolean | number
  temperatureHighTime?: boolean | number
  temperatureLow?: boolean | number
  temperatureLowTime?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface DailyForecastDataBlockRequest {
  icon?: boolean | number
  night?: boolean | number
  data?: DailyForecastDataPointRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface DailyForecastDataPointRequest {
  cloudCover?: boolean | number
  dewPoint?: boolean | number
  humidity?: boolean | number
  icon?: boolean | number
  night?: boolean | number
  ozone?: boolean | number
  precipAccumulation?: boolean | number
  precipIntensity?: boolean | number
  precipProbability?: boolean | number
  precipType?: boolean | number
  pressure?: boolean | number
  temperature?: boolean | number
  time?: boolean | number
  uvIndex?: boolean | number
  visibility?: boolean | number
  windDir?: boolean | number
  windGust?: boolean | number
  windSpeed?: boolean | number
  temperatureHigh?: boolean | number
  temperatureHighTime?: boolean | number
  temperatureLow?: boolean | number
  temperatureLowTime?: boolean | number
  moonPhase?: boolean | number
  sunriseTime?: boolean | number
  sunsetTime?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PlaceRequest {
  id?: boolean | number
  name?: boolean | number
  asciiname?: boolean | number
  names?: boolean | number
  latitude?: boolean | number
  longitude?: boolean | number
  featureClass?: boolean | number
  featureCode?: boolean | number
  countryCode?: boolean | number
  admin1Code?: boolean | number
  admin2Code?: boolean | number
  admin3Code?: boolean | number
  population?: boolean | number
  elevation?: boolean | number
  dem?: boolean | number
  timezone?: boolean | number
  admin1?: PlaceRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PlaceOldIdRequest {
  id?: boolean | number
  geonameid?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsItemRequest {
  id?: boolean | number
  title?: boolean | number
  summary?: boolean | number
  lang?: boolean | number
  country?: boolean | number
  urlPath?: boolean | number
  urlHost?: boolean | number
  slug?: boolean | number
  sourceId?: boolean | number
  imagesIds?: boolean | number
  videoId?: boolean | number
  topics?: NewsTopicRequest
  eventId?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  publishedAt?: boolean | number
  expiresAt?: boolean | number
  titleHash?: boolean | number
  hasContent?: boolean | number
  countViews?: boolean | number
  countQuotes?: boolean | number
  quotesIds?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsTopicRequest {
  id?: boolean | number
  name?: boolean | number
  slug?: boolean | number
  abbr?: boolean | number
  type?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsSearchParams {
  lang: String
  country: String
  q: String
  limit: Int
  minScore?: Float | null
  type?: String | null
}

export interface LatestNewsQueryParams {
  lang: String
  country: String
  limit: Int
  minDate?: String | null
  maxDate?: String | null
}

export interface LatestNewsBySourceQueryParams {
  lang: String
  country: String
  limit: Int
  minDate?: String | null
  maxDate?: String | null
  sourceId: String
}

export interface LatestNewsByTopicQueryParams {
  lang: String
  country: String
  limit: Int
  minDate?: String | null
  maxDate?: String | null
  topicId: String
}

export interface LatestNewsByEventQueryParams {
  lang: String
  country: String
  limit: Int
  minDate?: String | null
  maxDate?: String | null
  eventId: String
}

export interface CountNewsQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
}

export interface CountNewsBySourceQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  sourceId: String
}

export interface CountNewsByTopicQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  topicId: String
}

export interface CountNewsByEventQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  eventId: String
}

export interface NewsTopItemRequest {
  id?: boolean | number
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsEventRequest {
  id?: boolean | number
  title?: boolean | number
  slug?: boolean | number
  summary?: boolean | number
  source?: NewsEventSourceRequest
  lang?: boolean | number
  country?: boolean | number
  imageId?: boolean | number
  imageHost?: boolean | number
  imageSourceId?: boolean | number
  countNews?: boolean | number
  countViews?: boolean | number
  countQuotes?: boolean | number
  countVideos?: boolean | number
  countImages?: boolean | number
  topics?: NewsTopicRequest
  items?: NewsEventItemRequest
  quotesIds?: boolean | number
  videosIds?: boolean | number
  imagesIds?: boolean | number
  status?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  expiresAt?: boolean | number
  hasContent?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsEventSourceRequest {
  id?: boolean | number
  host?: boolean | number
  path?: boolean | number
  sourceId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NewsEventItemRequest {
  id?: boolean | number
  title?: boolean | number
  sourceId?: boolean | number
  host?: boolean | number
  path?: boolean | number
  publishedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface LatestEventsQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  limit: Int
}

export interface LatestEventsByTopicQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  limit: Int
  topicId: String
}

export interface CountEventsQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
}

export interface CountEventsByTopicQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  topicId: String
}

export interface TrendingTopicsQueryParams {
  lang: String
  country: String
  limit: Int
  period: String
}

export interface SimilarEventsByTopicsQueryParams {
  lang: String
  country: String
  minDate?: String | null
  maxDate?: String | null
  limit: Int
  topicIds: (String | null)[]
  exceptId?: String | null
}

export interface ArticleContentRequest {
  id?: boolean | number
  refId?: boolean | number
  refType?: boolean | number
  content?: boolean | number
  format?: boolean | number
  formatVersion?: boolean | number
  topicsMap?: boolean | number
  expiresAt?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TopicRequest {
  id?: boolean | number
  lang?: boolean | number
  country?: boolean | number
  wikiId?: boolean | number
  name?: boolean | number
  commonName?: boolean | number
  englishName?: boolean | number
  abbr?: boolean | number
  type?: boolean | number
  description?: boolean | number
  about?: boolean | number
  isActive?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TopicWikiId {
  lang: String
  country: String
  wikiId: String
}

export interface QuoteRequest {
  id?: boolean | number
  lang?: boolean | number
  country?: boolean | number
  source?: QuoteSourceRequest
  author?: QuoteAuthorRequest
  text?: boolean | number
  topics?: QuoteTopicRequest
  lastFoundAt?: boolean | number
  createdAt?: boolean | number
  expiresAt?: boolean | number
  countViews?: boolean | number
  events?: QuoteEventRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface QuoteSourceRequest {
  host?: boolean | number
  path?: boolean | number
  title?: boolean | number
  id?: boolean | number
  imageId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface QuoteAuthorRequest {
  name?: boolean | number
  slug?: boolean | number
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface QuoteTopicRequest {
  id?: boolean | number
  name?: boolean | number
  slug?: boolean | number
  abbr?: boolean | number
  type?: boolean | number
  rel?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface QuoteEventRequest {
  title?: boolean | number
  id?: boolean | number
  imageId?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ListQuotesQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
  limit: Int
}

export interface ListQuotesByTopicQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
  limit: Int
  topicId: String
}

export interface ListQuotesByAuthorQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
  limit: Int
  authorId: String
}

export interface CountQuotesQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
}

export interface CountQuotesByTopicQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
  topicId: String
}

export interface CountQuotesByAuthorQueryParams {
  lang: String
  country: String
  maxDate?: String | null
  minDate?: String | null
  authorId: String
}

export interface QuoteTopItemRequest {
  id?: boolean | number
  count?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoroscopeReportRequest {
  id?: boolean | number
  lang?: boolean | number
  text?: boolean | number
  length?: boolean | number
  sign?: boolean | number
  period?: boolean | number
  phrasesIds?: boolean | number
  phrases?: HoroscopePhraseRequest
  numbers?: boolean | number
  stats?: HoroscopeReportStatsRequest
  createdAt?: boolean | number
  expiresAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoroscopePhraseRequest {
  iid?: boolean | number
  id?: boolean | number
  lang?: boolean | number
  source?: boolean | number
  text?: boolean | number
  length?: boolean | number
  sign?: boolean | number
  period?: boolean | number
  createdAt?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoroscopeReportStatsRequest {
  love?: boolean | number
  success?: boolean | number
  health?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface HoroscopeGenerateReportsParams {
  lang: String
  period: String
}

export interface HoroscopeListPhraseParams {
  lang: String
  limit: Int
  offset?: Int | null
}

export interface VideoRequest {
  id?: boolean | number
  sourceId?: boolean | number
  sourceType?: boolean | number
  websites?: boolean | number
  createdAt?: boolean | number
  expiresAt?: boolean | number
  width?: boolean | number
  height?: boolean | number
  countViews?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MutationRequest {
  add?: [{ n1: Int; n2: Int }]
  news_viewNewsEvent?: [{ id: String }]
  news_viewNewsItem?: [{ id: String }]
  topics_setTopicType?: [{ id: String; type?: TopicType | null }, TopicRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ArticleContentRefRequest {
  refId?: boolean | number
  refType?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const PublicHoliday_possibleTypes = ['PublicHoliday']
export const isPublicHoliday = (obj: { __typename: String }): obj is PublicHoliday => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PublicHoliday_possibleTypes.includes(obj.__typename)
}

const ForecastReport_possibleTypes = ['ForecastReport']
export const isForecastReport = (obj: { __typename: String }): obj is ForecastReport => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ForecastReport_possibleTypes.includes(obj.__typename)
}

const HourlyForecastDataBlock_possibleTypes = ['HourlyForecastDataBlock']
export const isHourlyForecastDataBlock = (obj: { __typename: String }): obj is HourlyForecastDataBlock => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HourlyForecastDataBlock_possibleTypes.includes(obj.__typename)
}

const IForecastDataBlock_possibleTypes = ['HourlyForecastDataBlock', 'HoursForecastDataBlock', 'DailyForecastDataBlock']
export const isIForecastDataBlock = (obj: { __typename: String }): obj is IForecastDataBlock => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return IForecastDataBlock_possibleTypes.includes(obj.__typename)
}

const HourlyForecastDataPoint_possibleTypes = ['HourlyForecastDataPoint']
export const isHourlyForecastDataPoint = (obj: { __typename: String }): obj is HourlyForecastDataPoint => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HourlyForecastDataPoint_possibleTypes.includes(obj.__typename)
}

const IForecastDataPoint_possibleTypes = ['HourlyForecastDataPoint', 'HoursForecastDataPoint', 'DailyForecastDataPoint']
export const isIForecastDataPoint = (obj: { __typename: String }): obj is IForecastDataPoint => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return IForecastDataPoint_possibleTypes.includes(obj.__typename)
}

const HoursForecastDataBlock_possibleTypes = ['HoursForecastDataBlock']
export const isHoursForecastDataBlock = (obj: { __typename: String }): obj is HoursForecastDataBlock => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HoursForecastDataBlock_possibleTypes.includes(obj.__typename)
}

const HoursForecastDataPoint_possibleTypes = ['HoursForecastDataPoint']
export const isHoursForecastDataPoint = (obj: { __typename: String }): obj is HoursForecastDataPoint => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HoursForecastDataPoint_possibleTypes.includes(obj.__typename)
}

const DailyForecastDataBlock_possibleTypes = ['DailyForecastDataBlock']
export const isDailyForecastDataBlock = (obj: { __typename: String }): obj is DailyForecastDataBlock => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return DailyForecastDataBlock_possibleTypes.includes(obj.__typename)
}

const DailyForecastDataPoint_possibleTypes = ['DailyForecastDataPoint']
export const isDailyForecastDataPoint = (obj: { __typename: String }): obj is DailyForecastDataPoint => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return DailyForecastDataPoint_possibleTypes.includes(obj.__typename)
}

const Place_possibleTypes = ['Place']
export const isPlace = (obj: { __typename: String }): obj is Place => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Place_possibleTypes.includes(obj.__typename)
}

const PlaceOldId_possibleTypes = ['PlaceOldId']
export const isPlaceOldId = (obj: { __typename: String }): obj is PlaceOldId => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PlaceOldId_possibleTypes.includes(obj.__typename)
}

const NewsItem_possibleTypes = ['NewsItem']
export const isNewsItem = (obj: { __typename: String }): obj is NewsItem => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsItem_possibleTypes.includes(obj.__typename)
}

const NewsTopic_possibleTypes = ['NewsTopic']
export const isNewsTopic = (obj: { __typename: String }): obj is NewsTopic => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsTopic_possibleTypes.includes(obj.__typename)
}

const NewsTopItem_possibleTypes = ['NewsTopItem']
export const isNewsTopItem = (obj: { __typename: String }): obj is NewsTopItem => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsTopItem_possibleTypes.includes(obj.__typename)
}

const NewsEvent_possibleTypes = ['NewsEvent']
export const isNewsEvent = (obj: { __typename: String }): obj is NewsEvent => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsEvent_possibleTypes.includes(obj.__typename)
}

const NewsEventSource_possibleTypes = ['NewsEventSource']
export const isNewsEventSource = (obj: { __typename: String }): obj is NewsEventSource => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsEventSource_possibleTypes.includes(obj.__typename)
}

const NewsEventItem_possibleTypes = ['NewsEventItem']
export const isNewsEventItem = (obj: { __typename: String }): obj is NewsEventItem => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NewsEventItem_possibleTypes.includes(obj.__typename)
}

const ArticleContent_possibleTypes = ['ArticleContent']
export const isArticleContent = (obj: { __typename: String }): obj is ArticleContent => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ArticleContent_possibleTypes.includes(obj.__typename)
}

const Topic_possibleTypes = ['Topic']
export const isTopic = (obj: { __typename: String }): obj is Topic => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Topic_possibleTypes.includes(obj.__typename)
}

const Quote_possibleTypes = ['Quote']
export const isQuote = (obj: { __typename: String }): obj is Quote => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Quote_possibleTypes.includes(obj.__typename)
}

const QuoteSource_possibleTypes = ['QuoteSource']
export const isQuoteSource = (obj: { __typename: String }): obj is QuoteSource => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return QuoteSource_possibleTypes.includes(obj.__typename)
}

const QuoteAuthor_possibleTypes = ['QuoteAuthor']
export const isQuoteAuthor = (obj: { __typename: String }): obj is QuoteAuthor => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return QuoteAuthor_possibleTypes.includes(obj.__typename)
}

const QuoteTopic_possibleTypes = ['QuoteTopic']
export const isQuoteTopic = (obj: { __typename: String }): obj is QuoteTopic => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return QuoteTopic_possibleTypes.includes(obj.__typename)
}

const QuoteEvent_possibleTypes = ['QuoteEvent']
export const isQuoteEvent = (obj: { __typename: String }): obj is QuoteEvent => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return QuoteEvent_possibleTypes.includes(obj.__typename)
}

const QuoteTopItem_possibleTypes = ['QuoteTopItem']
export const isQuoteTopItem = (obj: { __typename: String }): obj is QuoteTopItem => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return QuoteTopItem_possibleTypes.includes(obj.__typename)
}

const HoroscopeReport_possibleTypes = ['HoroscopeReport']
export const isHoroscopeReport = (obj: { __typename: String }): obj is HoroscopeReport => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HoroscopeReport_possibleTypes.includes(obj.__typename)
}

const HoroscopePhrase_possibleTypes = ['HoroscopePhrase']
export const isHoroscopePhrase = (obj: { __typename: String }): obj is HoroscopePhrase => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HoroscopePhrase_possibleTypes.includes(obj.__typename)
}

const HoroscopeReportStats_possibleTypes = ['HoroscopeReportStats']
export const isHoroscopeReportStats = (obj: { __typename: String }): obj is HoroscopeReportStats => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return HoroscopeReportStats_possibleTypes.includes(obj.__typename)
}

const Video_possibleTypes = ['Video']
export const isVideo = (obj: { __typename: String }): obj is Video => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Video_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

const ArticleContentRef_possibleTypes = ['ArticleContentRef']
export const isArticleContentRef = (obj: { __typename: String }): obj is ArticleContentRef => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ArticleContentRef_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  ping: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  publicHolidays: (args: {
    country: String
    lang: String
    start?: Int | null
    end?: Int | null
  }) => {
    execute: (
      request: PublicHolidayRequest,
      defaultValue?: (PublicHoliday | null)[] | null,
    ) => Promise<(PublicHoliday | null)[] | null>
  }
  weather_forecastReport: (args: {
    place: InputTimezoneGeoPoint
  }) => ForecastReportPromiseChain & {
    execute: (request: ForecastReportRequest, defaultValue?: ForecastReport | null) => Promise<ForecastReport | null>
  }
  weather_datePlacesForecast: (args: {
    places: (InputTimezoneGeoPoint | null)[]
    date: String
  }) => {
    execute: (
      request: DailyForecastDataPointRequest,
      defaultValue?: (DailyForecastDataPoint | null)[] | null,
    ) => Promise<(DailyForecastDataPoint | null)[] | null>
  }
  weather_nowPlaceForecast: (args: {
    place: InputTimezoneGeoPoint
  }) => HourlyForecastDataPointPromiseChain & {
    execute: (
      request: HourlyForecastDataPointRequest,
      defaultValue?: HourlyForecastDataPoint | null,
    ) => Promise<HourlyForecastDataPoint | null>
  }
  places_placeById: (args: {
    id: String
  }) => PlacePromiseChain & { execute: (request: PlaceRequest, defaultValue?: Place | null) => Promise<Place | null> }
  places_searchPlace: (args: {
    query: String
    country: String
    limit: Int
    type?: String | null
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Promise<(Place | null)[] | null> }
  places_placesByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Promise<(Place | null)[] | null> }
  places_placesByAdmin1Code: (args: {
    country: String
    admin1Code: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Promise<(Place | null)[] | null> }
  places_mainPlaces: (args: {
    country: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Promise<(Place | null)[] | null> }
  places_admin1s: (args: {
    country: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Promise<(Place | null)[] | null> }
  places_admin1: (args: {
    admin1Code: String
    country: String
  }) => PlacePromiseChain & { execute: (request: PlaceRequest, defaultValue?: Place | null) => Promise<Place | null> }
  places_placeOldId: (args: {
    id: Int
  }) => PlaceOldIdPromiseChain & {
    execute: (request: PlaceOldIdRequest, defaultValue?: PlaceOldId | null) => Promise<PlaceOldId | null>
  }
  news_itemById: (args: {
    id: String
  }) => NewsItemPromiseChain & {
    execute: (request: NewsItemRequest, defaultValue?: NewsItem | null) => Promise<NewsItem | null>
  }
  news_itemsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }
  news_itemsSearch: (args: {
    params: NewsSearchParams
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }
  news_itemsLatest: ((args?: {
    params?: LatestNewsQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]>
  }
  news_itemsLatestBySource: ((args?: {
    params?: LatestNewsBySourceQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]>
  }
  news_itemsLatestByTopic: ((args?: {
    params?: LatestNewsByTopicQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]>
  }
  news_itemsLatestByEvent: ((args?: {
    params?: LatestNewsByEventQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Promise<(NewsItem | null)[]>
  }
  news_itemsCount: ((args?: {
    params?: CountNewsQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_itemsCountBySource: ((args?: {
    params?: CountNewsBySourceQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_itemsCountByTopic: ((args?: {
    params?: CountNewsByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_itemsCountByEvent: ((args?: {
    params?: CountNewsByEventQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_topSources: ((args?: {
    params?: LatestNewsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]>
  }) & { execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]> }
  news_topSourceTopics: ((args?: {
    params?: LatestNewsBySourceQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]>
  }) & { execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]> }
  news_eventById: (args: {
    id: String
  }) => NewsEventPromiseChain & {
    execute: (request: NewsEventRequest, defaultValue?: NewsEvent | null) => Promise<NewsEvent | null>
  }
  news_eventsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]> }
  news_eventsLatest: ((args?: {
    params?: LatestEventsQueryParams | null
  }) => { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]> }) & {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]>
  }
  news_eventsLatestByTopic: ((args?: {
    params?: LatestEventsByTopicQueryParams | null
  }) => { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]> }) & {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]>
  }
  news_eventsCount: ((args?: {
    params?: CountEventsQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_eventsCountByTopic: ((args?: {
    params?: CountEventsByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  news_topTopics: ((args?: {
    params?: LatestEventsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]>
  }) & { execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]> }
  news_trendingTopics: ((args?: {
    params?: TrendingTopicsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]>
  }) & { execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Promise<(NewsTopItem | null)[]> }
  news_similarEventsByTopics: ((args?: {
    params?: SimilarEventsByTopicsQueryParams | null
  }) => { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]> }) & {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Promise<(NewsEvent | null)[]>
  }
  news_articleContentById: (args: {
    id: String
  }) => ArticleContentPromiseChain & {
    execute: (request: ArticleContentRequest, defaultValue?: ArticleContent | null) => Promise<ArticleContent | null>
  }
  news_articleContentsByIds: (args: {
    ids: (String | null)[]
  }) => {
    execute: (request: ArticleContentRequest, defaultValue?: (ArticleContent | null)[]) => Promise<(ArticleContent | null)[]>
  }
  topics_topicById: (args: {
    id: String
  }) => TopicPromiseChain & { execute: (request: TopicRequest, defaultValue?: Topic | null) => Promise<Topic | null> }
  topics_topicsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: TopicRequest, defaultValue?: (Topic | null)[]) => Promise<(Topic | null)[]> }
  topics_topicsByWikiIds: (args: {
    wikiIds: (TopicWikiId | null)[]
  }) => { execute: (request: TopicRequest, defaultValue?: (Topic | null)[]) => Promise<(Topic | null)[]> }
  quotes_quoteById: (args: {
    id: String
  }) => QuotePromiseChain & { execute: (request: QuoteRequest, defaultValue?: Quote | null) => Promise<Quote | null> }
  quotes_quotesByIds: (args: {
    ids: String[]
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]> }
  quotes_latest: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]>
  }
  quotes_latestByTopic: ((args?: {
    params?: ListQuotesByTopicQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]>
  }
  quotes_latestByAuthor: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]>
  }
  quotes_count: ((args?: {
    params?: CountQuotesQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  quotes_countByTopic: ((args?: {
    params?: CountQuotesByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  quotes_countByAuthor: ((args?: {
    params?: CountQuotesByAuthorQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int>
  }
  quotes_topTopics: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }
  quotes_topAuthors: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }
  quotes_topAuthorTopics: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Promise<(QuoteTopItem | null)[]>
  }
  quotes_popularByAuthor: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Promise<(Quote | null)[]>
  }
  horoscopes_reportById: (args: {
    id: String
  }) => HoroscopeReportPromiseChain & {
    execute: (request: HoroscopeReportRequest, defaultValue?: HoroscopeReport | null) => Promise<HoroscopeReport | null>
  }
  horoscopes_reportsByIds: (args: {
    ids: String[]
  }) => {
    execute: (
      request: HoroscopeReportRequest,
      defaultValue?: (HoroscopeReport | null)[],
    ) => Promise<(HoroscopeReport | null)[]>
  }
  horoscopes_phraseById: (args: {
    id: String
  }) => HoroscopePhrasePromiseChain & {
    execute: (request: HoroscopePhraseRequest, defaultValue?: HoroscopePhrase | null) => Promise<HoroscopePhrase | null>
  }
  horoscopes_generateReports: (args: {
    params: HoroscopeGenerateReportsParams
  }) => {
    execute: (
      request: HoroscopeReportRequest,
      defaultValue?: (HoroscopeReport | null)[],
    ) => Promise<(HoroscopeReport | null)[]>
  }
  horoscopes_phraseList: (args: {
    params: HoroscopeListPhraseParams
  }) => {
    execute: (
      request: HoroscopePhraseRequest,
      defaultValue?: (HoroscopePhrase | null)[],
    ) => Promise<(HoroscopePhrase | null)[]>
  }
  videos_videoById: (args: {
    id: String
  }) => VideoPromiseChain & { execute: (request: VideoRequest, defaultValue?: Video | null) => Promise<Video | null> }
  videos_videosByIds: (args: {
    ids: String[]
  }) => { execute: (request: VideoRequest, defaultValue?: (Video | null)[]) => Promise<(Video | null)[]> }
  cocoshel_unsubsribe: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
}

export interface QueryObservableChain {
  ping: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  publicHolidays: (args: {
    country: String
    lang: String
    start?: Int | null
    end?: Int | null
  }) => {
    execute: (
      request: PublicHolidayRequest,
      defaultValue?: (PublicHoliday | null)[] | null,
    ) => Observable<(PublicHoliday | null)[] | null>
  }
  weather_forecastReport: (args: {
    place: InputTimezoneGeoPoint
  }) => ForecastReportObservableChain & {
    execute: (request: ForecastReportRequest, defaultValue?: ForecastReport | null) => Observable<ForecastReport | null>
  }
  weather_datePlacesForecast: (args: {
    places: (InputTimezoneGeoPoint | null)[]
    date: String
  }) => {
    execute: (
      request: DailyForecastDataPointRequest,
      defaultValue?: (DailyForecastDataPoint | null)[] | null,
    ) => Observable<(DailyForecastDataPoint | null)[] | null>
  }
  weather_nowPlaceForecast: (args: {
    place: InputTimezoneGeoPoint
  }) => HourlyForecastDataPointObservableChain & {
    execute: (
      request: HourlyForecastDataPointRequest,
      defaultValue?: HourlyForecastDataPoint | null,
    ) => Observable<HourlyForecastDataPoint | null>
  }
  places_placeById: (args: {
    id: String
  }) => PlaceObservableChain & { execute: (request: PlaceRequest, defaultValue?: Place | null) => Observable<Place | null> }
  places_searchPlace: (args: {
    query: String
    country: String
    limit: Int
    type?: String | null
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Observable<(Place | null)[] | null> }
  places_placesByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Observable<(Place | null)[] | null> }
  places_placesByAdmin1Code: (args: {
    country: String
    admin1Code: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Observable<(Place | null)[] | null> }
  places_mainPlaces: (args: {
    country: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Observable<(Place | null)[] | null> }
  places_admin1s: (args: {
    country: String
    limit: Int
  }) => { execute: (request: PlaceRequest, defaultValue?: (Place | null)[] | null) => Observable<(Place | null)[] | null> }
  places_admin1: (args: {
    admin1Code: String
    country: String
  }) => PlaceObservableChain & { execute: (request: PlaceRequest, defaultValue?: Place | null) => Observable<Place | null> }
  places_placeOldId: (args: {
    id: Int
  }) => PlaceOldIdObservableChain & {
    execute: (request: PlaceOldIdRequest, defaultValue?: PlaceOldId | null) => Observable<PlaceOldId | null>
  }
  news_itemById: (args: {
    id: String
  }) => NewsItemObservableChain & {
    execute: (request: NewsItemRequest, defaultValue?: NewsItem | null) => Observable<NewsItem | null>
  }
  news_itemsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }
  news_itemsSearch: (args: {
    params: NewsSearchParams
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }
  news_itemsLatest: ((args?: {
    params?: LatestNewsQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]>
  }
  news_itemsLatestBySource: ((args?: {
    params?: LatestNewsBySourceQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]>
  }
  news_itemsLatestByTopic: ((args?: {
    params?: LatestNewsByTopicQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]>
  }
  news_itemsLatestByEvent: ((args?: {
    params?: LatestNewsByEventQueryParams | null
  }) => { execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]> }) & {
    execute: (request: NewsItemRequest, defaultValue?: (NewsItem | null)[]) => Observable<(NewsItem | null)[]>
  }
  news_itemsCount: ((args?: {
    params?: CountNewsQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_itemsCountBySource: ((args?: {
    params?: CountNewsBySourceQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_itemsCountByTopic: ((args?: {
    params?: CountNewsByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_itemsCountByEvent: ((args?: {
    params?: CountNewsByEventQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_topSources: ((args?: {
    params?: LatestNewsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }) & {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }
  news_topSourceTopics: ((args?: {
    params?: LatestNewsBySourceQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }) & {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }
  news_eventById: (args: {
    id: String
  }) => NewsEventObservableChain & {
    execute: (request: NewsEventRequest, defaultValue?: NewsEvent | null) => Observable<NewsEvent | null>
  }
  news_eventsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]> }
  news_eventsLatest: ((args?: {
    params?: LatestEventsQueryParams | null
  }) => {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]>
  }) & { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]> }
  news_eventsLatestByTopic: ((args?: {
    params?: LatestEventsByTopicQueryParams | null
  }) => {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]>
  }) & { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]> }
  news_eventsCount: ((args?: {
    params?: CountEventsQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_eventsCountByTopic: ((args?: {
    params?: CountEventsByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  news_topTopics: ((args?: {
    params?: LatestEventsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }) & {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }
  news_trendingTopics: ((args?: {
    params?: TrendingTopicsQueryParams | null
  }) => {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }) & {
    execute: (request: NewsTopItemRequest, defaultValue?: (NewsTopItem | null)[]) => Observable<(NewsTopItem | null)[]>
  }
  news_similarEventsByTopics: ((args?: {
    params?: SimilarEventsByTopicsQueryParams | null
  }) => {
    execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]>
  }) & { execute: (request: NewsEventRequest, defaultValue?: (NewsEvent | null)[]) => Observable<(NewsEvent | null)[]> }
  news_articleContentById: (args: {
    id: String
  }) => ArticleContentObservableChain & {
    execute: (request: ArticleContentRequest, defaultValue?: ArticleContent | null) => Observable<ArticleContent | null>
  }
  news_articleContentsByIds: (args: {
    ids: (String | null)[]
  }) => {
    execute: (
      request: ArticleContentRequest,
      defaultValue?: (ArticleContent | null)[],
    ) => Observable<(ArticleContent | null)[]>
  }
  topics_topicById: (args: {
    id: String
  }) => TopicObservableChain & { execute: (request: TopicRequest, defaultValue?: Topic | null) => Observable<Topic | null> }
  topics_topicsByIds: (args: {
    ids: (String | null)[]
  }) => { execute: (request: TopicRequest, defaultValue?: (Topic | null)[]) => Observable<(Topic | null)[]> }
  topics_topicsByWikiIds: (args: {
    wikiIds: (TopicWikiId | null)[]
  }) => { execute: (request: TopicRequest, defaultValue?: (Topic | null)[]) => Observable<(Topic | null)[]> }
  quotes_quoteById: (args: {
    id: String
  }) => QuoteObservableChain & { execute: (request: QuoteRequest, defaultValue?: Quote | null) => Observable<Quote | null> }
  quotes_quotesByIds: (args: {
    ids: String[]
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]> }
  quotes_latest: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]>
  }
  quotes_latestByTopic: ((args?: {
    params?: ListQuotesByTopicQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]>
  }
  quotes_latestByAuthor: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]>
  }
  quotes_count: ((args?: {
    params?: CountQuotesQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  quotes_countByTopic: ((args?: {
    params?: CountQuotesByTopicQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  quotes_countByAuthor: ((args?: {
    params?: CountQuotesByAuthorQueryParams | null
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }) & {
    execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int>
  }
  quotes_topTopics: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }
  quotes_topAuthors: ((args?: {
    params?: ListQuotesQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }
  quotes_topAuthorTopics: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }) & {
    execute: (request: QuoteTopItemRequest, defaultValue?: (QuoteTopItem | null)[]) => Observable<(QuoteTopItem | null)[]>
  }
  quotes_popularByAuthor: ((args?: {
    params?: ListQuotesByAuthorQueryParams | null
  }) => { execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]> }) & {
    execute: (request: QuoteRequest, defaultValue?: (Quote | null)[]) => Observable<(Quote | null)[]>
  }
  horoscopes_reportById: (args: {
    id: String
  }) => HoroscopeReportObservableChain & {
    execute: (request: HoroscopeReportRequest, defaultValue?: HoroscopeReport | null) => Observable<HoroscopeReport | null>
  }
  horoscopes_reportsByIds: (args: {
    ids: String[]
  }) => {
    execute: (
      request: HoroscopeReportRequest,
      defaultValue?: (HoroscopeReport | null)[],
    ) => Observable<(HoroscopeReport | null)[]>
  }
  horoscopes_phraseById: (args: {
    id: String
  }) => HoroscopePhraseObservableChain & {
    execute: (request: HoroscopePhraseRequest, defaultValue?: HoroscopePhrase | null) => Observable<HoroscopePhrase | null>
  }
  horoscopes_generateReports: (args: {
    params: HoroscopeGenerateReportsParams
  }) => {
    execute: (
      request: HoroscopeReportRequest,
      defaultValue?: (HoroscopeReport | null)[],
    ) => Observable<(HoroscopeReport | null)[]>
  }
  horoscopes_phraseList: (args: {
    params: HoroscopeListPhraseParams
  }) => {
    execute: (
      request: HoroscopePhraseRequest,
      defaultValue?: (HoroscopePhrase | null)[],
    ) => Observable<(HoroscopePhrase | null)[]>
  }
  videos_videoById: (args: {
    id: String
  }) => VideoObservableChain & { execute: (request: VideoRequest, defaultValue?: Video | null) => Observable<Video | null> }
  videos_videosByIds: (args: {
    ids: String[]
  }) => { execute: (request: VideoRequest, defaultValue?: (Video | null)[]) => Observable<(Video | null)[]> }
  cocoshel_unsubsribe: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
}

export interface PublicHolidayPromiseChain {
  date: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface PublicHolidayObservableChain {
  date: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface ForecastReportPromiseChain {
  latitude: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  longitude: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  timezone: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  units: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  hourly: HourlyForecastDataBlockPromiseChain & {
    execute: (
      request: HourlyForecastDataBlockRequest,
      defaultValue?: HourlyForecastDataBlock | null,
    ) => Promise<HourlyForecastDataBlock | null>
  }
  details: HoursForecastDataBlockPromiseChain & {
    execute: (
      request: HoursForecastDataBlockRequest,
      defaultValue?: HoursForecastDataBlock | null,
    ) => Promise<HoursForecastDataBlock | null>
  }
  daily: DailyForecastDataBlockPromiseChain & {
    execute: (
      request: DailyForecastDataBlockRequest,
      defaultValue?: DailyForecastDataBlock | null,
    ) => Promise<DailyForecastDataBlock | null>
  }
}

export interface ForecastReportObservableChain {
  latitude: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  longitude: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  timezone: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  units: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  hourly: HourlyForecastDataBlockObservableChain & {
    execute: (
      request: HourlyForecastDataBlockRequest,
      defaultValue?: HourlyForecastDataBlock | null,
    ) => Observable<HourlyForecastDataBlock | null>
  }
  details: HoursForecastDataBlockObservableChain & {
    execute: (
      request: HoursForecastDataBlockRequest,
      defaultValue?: HoursForecastDataBlock | null,
    ) => Observable<HoursForecastDataBlock | null>
  }
  daily: DailyForecastDataBlockObservableChain & {
    execute: (
      request: DailyForecastDataBlockRequest,
      defaultValue?: DailyForecastDataBlock | null,
    ) => Observable<DailyForecastDataBlock | null>
  }
}

export interface HourlyForecastDataBlockPromiseChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  data: {
    execute: (
      request: HourlyForecastDataPointRequest,
      defaultValue?: (HourlyForecastDataPoint | null)[],
    ) => Promise<(HourlyForecastDataPoint | null)[]>
  }
}

export interface HourlyForecastDataBlockObservableChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  data: {
    execute: (
      request: HourlyForecastDataPointRequest,
      defaultValue?: (HourlyForecastDataPoint | null)[],
    ) => Observable<(HourlyForecastDataPoint | null)[]>
  }
}

export interface IForecastDataBlockPromiseChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
}

export interface IForecastDataBlockObservableChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
}

export interface HourlyForecastDataPointPromiseChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

export interface HourlyForecastDataPointObservableChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

export interface IForecastDataPointPromiseChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

export interface IForecastDataPointObservableChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

export interface HoursForecastDataBlockPromiseChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  data: {
    execute: (
      request: HoursForecastDataPointRequest,
      defaultValue?: (HoursForecastDataPoint | null)[],
    ) => Promise<(HoursForecastDataPoint | null)[]>
  }
}

export interface HoursForecastDataBlockObservableChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  data: {
    execute: (
      request: HoursForecastDataPointRequest,
      defaultValue?: (HoursForecastDataPoint | null)[],
    ) => Observable<(HoursForecastDataPoint | null)[]>
  }
}

export interface HoursForecastDataPointPromiseChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureHigh: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureHighTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  temperatureLow: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureLowTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface HoursForecastDataPointObservableChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureHigh: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureHighTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  temperatureLow: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureLowTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface DailyForecastDataBlockPromiseChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  data: {
    execute: (
      request: DailyForecastDataPointRequest,
      defaultValue?: (DailyForecastDataPoint | null)[],
    ) => Promise<(DailyForecastDataPoint | null)[]>
  }
}

export interface DailyForecastDataBlockObservableChain {
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  data: {
    execute: (
      request: DailyForecastDataPointRequest,
      defaultValue?: (DailyForecastDataPoint | null)[],
    ) => Observable<(DailyForecastDataPoint | null)[]>
  }
}

export interface DailyForecastDataPointPromiseChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureHigh: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureHighTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  temperatureLow: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  temperatureLowTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  moonPhase: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  sunriseTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  sunsetTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
}

export interface DailyForecastDataPointObservableChain {
  cloudCover: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  dewPoint: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  humidity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  icon: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  night: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  ozone: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipAccumulation: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipIntensity: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipProbability: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  precipType: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  pressure: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperature: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  time: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  uvIndex: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  visibility: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windDir: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  windGust: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  windSpeed: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureHigh: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureHighTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  temperatureLow: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  temperatureLowTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  moonPhase: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  sunriseTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  sunsetTime: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
}

export interface PlacePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  asciiname: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  names: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  latitude: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  longitude: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  featureClass: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  featureCode: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  countryCode: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  admin1Code: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  admin2Code: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  admin3Code: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  population: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  elevation: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  dem: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  timezone: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  admin1: PlacePromiseChain & { execute: (request: PlaceRequest, defaultValue?: Place | null) => Promise<Place | null> }
}

export interface PlaceObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  asciiname: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  names: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  latitude: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  longitude: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  featureClass: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  featureCode: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  countryCode: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  admin1Code: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  admin2Code: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  admin3Code: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  population: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  elevation: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  dem: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  timezone: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  admin1: PlaceObservableChain & {
    execute: (request: PlaceRequest, defaultValue?: Place | null) => Observable<Place | null>
  }
}

export interface PlaceOldIdPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  geonameid: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface PlaceOldIdObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  geonameid: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface NewsItemPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  summary: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  urlPath: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  urlHost: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imagesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  videoId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  topics: {
    execute: (request: NewsTopicRequest, defaultValue?: (NewsTopic | null)[] | null) => Promise<(NewsTopic | null)[] | null>
  }
  eventId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  titleHash: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  hasContent: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countQuotes: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  quotesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
}

export interface NewsItemObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  summary: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  urlPath: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  urlHost: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imagesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Observable<(String | null)[] | null>
  }
  videoId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  topics: {
    execute: (
      request: NewsTopicRequest,
      defaultValue?: (NewsTopic | null)[] | null,
    ) => Observable<(NewsTopic | null)[] | null>
  }
  eventId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  titleHash: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  hasContent: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countQuotes: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  quotesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Observable<(String | null)[] | null>
  }
}

export interface NewsTopicPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface NewsTopicObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface NewsTopItemPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface NewsTopItemObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface NewsEventPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  summary: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  source: NewsEventSourcePromiseChain & {
    execute: (request: NewsEventSourceRequest, defaultValue?: NewsEventSource) => Promise<NewsEventSource>
  }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imageHost: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imageSourceId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  countNews: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countQuotes: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countVideos: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countImages: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  topics: { execute: (request: NewsTopicRequest, defaultValue?: (NewsTopic | null)[]) => Promise<(NewsTopic | null)[]> }
  items: {
    execute: (request: NewsEventItemRequest, defaultValue?: (NewsEventItem | null)[]) => Promise<(NewsEventItem | null)[]>
  }
  quotesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  videosIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  imagesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  status: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  hasContent: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
}

export interface NewsEventObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  summary: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  source: NewsEventSourceObservableChain & {
    execute: (request: NewsEventSourceRequest, defaultValue?: NewsEventSource) => Observable<NewsEventSource>
  }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imageHost: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imageSourceId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  countNews: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countQuotes: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countVideos: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countImages: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  topics: { execute: (request: NewsTopicRequest, defaultValue?: (NewsTopic | null)[]) => Observable<(NewsTopic | null)[]> }
  items: {
    execute: (request: NewsEventItemRequest, defaultValue?: (NewsEventItem | null)[]) => Observable<(NewsEventItem | null)[]>
  }
  quotesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Observable<(String | null)[] | null>
  }
  videosIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Observable<(String | null)[] | null>
  }
  imagesIds: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Observable<(String | null)[] | null>
  }
  status: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  hasContent: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
}

export interface NewsEventSourcePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface NewsEventSourceObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface NewsEventItemPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface NewsEventItemObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  publishedAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface ArticleContentPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  refId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  refType: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  content: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  format: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  formatVersion: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  topicsMap: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Promise<JSON | null> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface ArticleContentObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  refId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  refType: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  content: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  format: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  formatVersion: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  topicsMap: { execute: (request?: boolean | number, defaultValue?: JSON | null) => Observable<JSON | null> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface TopicPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  wikiId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  commonName: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  englishName: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  about: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  isActive: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface TopicObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  wikiId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  commonName: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  englishName: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  description: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  about: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  isActive: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface QuotePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  source: QuoteSourcePromiseChain & {
    execute: (request: QuoteSourceRequest, defaultValue?: QuoteSource) => Promise<QuoteSource>
  }
  author: QuoteAuthorPromiseChain & {
    execute: (request: QuoteAuthorRequest, defaultValue?: QuoteAuthor) => Promise<QuoteAuthor>
  }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  topics: {
    execute: (
      request: QuoteTopicRequest,
      defaultValue?: (QuoteTopic | null)[] | null,
    ) => Promise<(QuoteTopic | null)[] | null>
  }
  lastFoundAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  events: {
    execute: (
      request: QuoteEventRequest,
      defaultValue?: (QuoteEvent | null)[] | null,
    ) => Promise<(QuoteEvent | null)[] | null>
  }
}

export interface QuoteObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  country: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  source: QuoteSourceObservableChain & {
    execute: (request: QuoteSourceRequest, defaultValue?: QuoteSource) => Observable<QuoteSource>
  }
  author: QuoteAuthorObservableChain & {
    execute: (request: QuoteAuthorRequest, defaultValue?: QuoteAuthor) => Observable<QuoteAuthor>
  }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  topics: {
    execute: (
      request: QuoteTopicRequest,
      defaultValue?: (QuoteTopic | null)[] | null,
    ) => Observable<(QuoteTopic | null)[] | null>
  }
  lastFoundAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  events: {
    execute: (
      request: QuoteEventRequest,
      defaultValue?: (QuoteEvent | null)[] | null,
    ) => Observable<(QuoteEvent | null)[] | null>
  }
}

export interface QuoteSourcePromiseChain {
  host: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface QuoteSourceObservableChain {
  host: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  path: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface QuoteAuthorPromiseChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface QuoteAuthorObservableChain {
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface QuoteTopicPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  rel: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface QuoteTopicObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  abbr: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  rel: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface QuoteEventPromiseChain {
  title: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface QuoteEventObservableChain {
  title: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  imageId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface QuoteTopItemPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface QuoteTopItemObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  count: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface HoroscopeReportPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  length: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  sign: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  period: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  phrasesIds: { execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  phrases: { execute: (request: HoroscopePhraseRequest, defaultValue?: HoroscopePhrase[]) => Promise<HoroscopePhrase[]> }
  numbers: { execute: (request?: boolean | number, defaultValue?: Int[]) => Promise<Int[]> }
  stats: HoroscopeReportStatsPromiseChain & {
    execute: (request: HoroscopeReportStatsRequest, defaultValue?: HoroscopeReportStats) => Promise<HoroscopeReportStats>
  }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface HoroscopeReportObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  length: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  sign: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  period: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  phrasesIds: { execute: (request?: boolean | number, defaultValue?: String[]) => Observable<String[]> }
  phrases: { execute: (request: HoroscopePhraseRequest, defaultValue?: HoroscopePhrase[]) => Observable<HoroscopePhrase[]> }
  numbers: { execute: (request?: boolean | number, defaultValue?: Int[]) => Observable<Int[]> }
  stats: HoroscopeReportStatsObservableChain & {
    execute: (request: HoroscopeReportStatsRequest, defaultValue?: HoroscopeReportStats) => Observable<HoroscopeReportStats>
  }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface HoroscopePhrasePromiseChain {
  iid: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  source: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  length: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  sign: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  period: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface HoroscopePhraseObservableChain {
  iid: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  lang: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  source: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  text: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  length: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  sign: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  period: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface HoroscopeReportStatsPromiseChain {
  love: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  success: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  health: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface HoroscopeReportStatsObservableChain {
  love: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  success: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  health: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface VideoPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  sourceType: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  websites: { execute: (request?: boolean | number, defaultValue?: (String | null)[]) => Promise<(String | null)[]> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  width: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  height: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface VideoObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sourceId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  sourceType: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  websites: { execute: (request?: boolean | number, defaultValue?: (String | null)[]) => Observable<(String | null)[]> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  expiresAt: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  width: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  height: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  countViews: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface MutationPromiseChain {
  add: (args: { n1: Int; n2: Int }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  news_viewNewsEvent: (args: { id: String }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  news_viewNewsItem: (args: { id: String }) => { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  topics_setTopicType: (args: {
    id: String
    type?: TopicType | null
  }) => TopicPromiseChain & { execute: (request: TopicRequest, defaultValue?: Topic) => Promise<Topic> }
}

export interface MutationObservableChain {
  add: (args: { n1: Int; n2: Int }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  news_viewNewsEvent: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  news_viewNewsItem: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  topics_setTopicType: (args: {
    id: String
    type?: TopicType | null
  }) => TopicObservableChain & { execute: (request: TopicRequest, defaultValue?: Topic) => Observable<Topic> }
}

export interface ArticleContentRefPromiseChain {
  refId: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  refType: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface ArticleContentRefObservableChain {
  refId: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  refType: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}
