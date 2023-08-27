import { Observable } from 'graphql-typed-client'

export interface Query {
  errorCodes: ErrorCode[]
  nodePropertyConnection: NodePropertyConnection
  currentNodePropertyConnection: NodePropertyConnection
  nodeById: Node | null
  nodeBySlug: Node | null
  nodeConnection: NodeConnection
  teamMemberConnection: TeamMemberConnection
  __typename: 'Query'
}

export enum ErrorCode {
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  VALIDATION = 'VALIDATION',
  DUPLICATION = 'DUPLICATION',
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export enum NodeType {
  COIN = 'COIN',
  REPO = 'REPO',
  PERSON = 'PERSON',
  ORG = 'ORG',
}

export enum NodePropertyName {
  GH_ID = 'GH_ID',
  GH_LOGIN = 'GH_LOGIN',
  CG_ID = 'CG_ID',
  IMAGE = 'IMAGE',
  URL = 'URL',
  LOCATION = 'LOCATION',
  EMAIL = 'EMAIL',
  CODE_STARTED_AT = 'CODE_STARTED_AT',
  CODE_UPDATED_AT = 'CODE_UPDATED_AT',
  CODE_LAST_COMMIT_AT = 'CODE_LAST_COMMIT_AT',
  SYMBOL = 'SYMBOL',
  TEAM_MEMBER = 'TEAM_MEMBER',
  CATEGORY = 'CATEGORY',
  NAME = 'NAME',
  ATH_DATE = 'ATH_DATE',
  ATL_DATE = 'ATL_DATE',
  TI_ID = 'TI_ID',
  TI_SLUG = 'TI_SLUG',
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export enum NodePropertyStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface NodePropertyConnection {
  edges: NodePropertyCursorEdge[]
  pageInfo: PageInfo
  totalCount: Int
  __typename: 'NodePropertyConnection'
}

export interface NodePropertyCursorEdge {
  node: NodeProperty
  cursor: String
  __typename: 'NodePropertyCursorEdge'
}

export interface NodeProperty {
  id: ID
  createdAt: String
  updatedAt: String | null
  nodeId: ID
  name: NodePropertyName
  nodeType: NodeType | null
  refNodeId: ID | null
  value: String
  numberValue: Float | null
  uniqueValue: String | null
  isVerified: Boolean
  data: String | null
  status: NodePropertyStatus
  startAt: String | null
  endAt: String | null
  info: String | null
  lastSeenAt: String | null
  sourceUrl: String | null
  statusInfo: String | null
  role: NodePropertyRole | null
  domain: String | null
  host: String | null
  format: NodePropertyFormat | null
  priority: Int | null
  refNodeType: NodeType | null
  verifiedAt: String | null
  node: Node
  refNode: Node | null
  __typename: 'NodeProperty'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export enum NodePropertyRole {
  WEBSITE = 'WEBSITE',
  CODE = 'CODE',
  BLOCKCHAIN = 'BLOCKCHAIN',
  SOCIAL = 'SOCIAL',
  MEMBER = 'MEMBER',
  ADVISOR = 'ADVISOR',
  IMAGE = 'IMAGE',
}

export enum NodePropertyFormat {
  URL = 'URL',
  DATE = 'DATE',
}

export interface Node {
  id: ID
  createdAt: String
  updatedAt: String | null
  type: NodeType
  name: String
  slug: String
  status: NodeStatus
  currentProps: NodeProperty[]
  properties: NodeProperties
  metrics: NodeMetrics
  currentMetric: NodeMetric | null
  /** Team members of this node */
  teamMembers: TeamMemberConnection
  /** Teams this node is a member of */
  memberOfTeams: TeamMemberConnection
  image: ImageDetails | null
  __typename: 'Node'
}

export enum NodeStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export interface NodeProperties {
  ghId: String | null
  ghLogin: String | null
  cgId: String | null
  location: String[] | null
  email: String[] | null
  codeStartedAt: String | null
  codeUpdatedAt: String | null
  codeLastCommitAt: String | null
  symbol: String | null
  category: String[] | null
  name: String[] | null
  athDate: String | null
  atlDate: String | null
  image: ImageDetails | null
  url: UrlDetails[] | null
  __typename: 'NodeProperties'
}

export interface ImageDetails {
  small: String
  medium: String
  large: String
  __typename: 'ImageDetails'
}

export interface UrlDetails {
  url: String
  domain: String
  host: String
  hash: String
  __typename: 'UrlDetails'
}

export interface NodeMetrics {
  codeCommits: NodeMetric | null
  marketCapRank: NodeMetric | null
  marketCap24h: NodeMetric | null
  athPrice: NodeMetric | null
  atlPrice: NodeMetric | null
  price24h: NodeMetric | null
  price7d: NodeMetric | null
  price14d: NodeMetric | null
  price30d: NodeMetric | null
  price1y: NodeMetric | null
  circulatingSupply: NodeMetric | null
  totalSupply: NodeMetric | null
  maxSupply: NodeMetric | null
  volume24h: NodeMetric | null
  fdValuation: NodeMetric | null
  ghFollowers: NodeMetric | null
  ghStars: NodeMetric | null
  ghForks: NodeMetric | null
  ghOpenIssues: NodeMetric | null
  ghWatchers: NodeMetric | null
  devScore: NodeMetric | null
  score: NodeMetric | null
  countDevsInTop1000: NodeMetric | null
  countActiveDevsInTop1000: NodeMetric | null
  countDevs: NodeMetric | null
  countActiveDevs: NodeMetric | null
  __typename: 'NodeMetrics'
}

export interface NodeMetric {
  id: ID
  createdAt: String
  updatedAt: String | null
  rank: Int
  share: Float | null
  total: Float | null
  coinId: ID | null
  personId: ID | null
  repoId: ID | null
  orgId: ID | null
  name: NodeMetricName
  dimension: String
  value: Float
  date: String
  minValue: Float | null
  maxValue: Float | null
  changeValue: Float | null
  changePercent: Float | null
  __typename: 'NodeMetric'
}

export enum NodeMetricName {
  CODE_COMMITS = 'CODE_COMMITS',
  MARKETCAP_RANK = 'MARKETCAP_RANK',
  MARKETCAP_24H = 'MARKETCAP_24H',
  ATH_PRICE = 'ATH_PRICE',
  ATL_PRICE = 'ATL_PRICE',
  PRICE_24H = 'PRICE_24H',
  PRICE_7D = 'PRICE_7D',
  PRICE_14D = 'PRICE_14D',
  PRICE_30D = 'PRICE_30D',
  PRICE_1Y = 'PRICE_1Y',
  CIRCULATING_SUPPLY = 'CIRCULATING_SUPPLY',
  TOTAL_SUPPLY = 'TOTAL_SUPPLY',
  MAX_SUPPLY = 'MAX_SUPPLY',
  VOLUME_24H = 'VOLUME_24H',
  FD_VALUATION = 'FD_VALUATION',
  GH_FOLLOWERS = 'GH_FOLLOWERS',
  GH_STARS = 'GH_STARS',
  GH_FORKS = 'GH_FORKS',
  GH_OPEN_ISSUES = 'GH_OPEN_ISSUES',
  GH_WATCHERS = 'GH_WATCHERS',
  DEV_SCORE = 'DEV_SCORE',
  SCORE = 'SCORE',
  COUNT_DEVS_IN_TOP1000 = 'COUNT_DEVS_IN_TOP1000',
  COUNT_ACTIVE_DEVS_IN_TOP1000 = 'COUNT_ACTIVE_DEVS_IN_TOP1000',
  COUNT_DEVS = 'COUNT_DEVS',
  COUNT_ACTIVE_DEVS = 'COUNT_ACTIVE_DEVS',
}

export enum TeamMemberFilterName {
  ID = 'ID',
  TEAM_ID = 'TEAM_ID',
  TEAM_TYPE = 'TEAM_TYPE',
  MEMBER_ID = 'MEMBER_ID',
  MEMBER_TYPE = 'MEMBER_TYPE',
  ROLE = 'ROLE',
  STATUS = 'STATUS',
  START_DATE = 'START_DATE',
  END_DATE = 'END_DATE',
}

export enum SqlOperator {
  EQ = 'EQ',
  NEQ = 'NEQ',
  GT = 'GT',
  GTE = 'GTE',
  LT = 'LT',
  LTE = 'LTE',
  CONTAINS = 'CONTAINS',
}

/** Number, string or array of both */
export type FilterFieldValue = any

export enum TeamMemberSortBy {
  ID = 'ID',
  PRIORITY = 'PRIORITY',
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface TeamMemberConnection {
  edges: TeamMemberCursorEdge[]
  pageInfo: PageInfo
  totalCount: Int
  __typename: 'TeamMemberConnection'
}

export interface TeamMemberCursorEdge {
  node: TeamMember
  cursor: String
  __typename: 'TeamMemberCursorEdge'
}

export interface TeamMember {
  id: ID
  createdAt: String
  updatedAt: String | null
  teamId: ID
  teamType: NodeType
  memberId: ID
  memberType: NodeType
  status: TeamMemberStatus
  priority: Int
  isVerified: Boolean
  lastSeenAt: String | null
  sourceUrl: String | null
  startDate: String | null
  endDate: String | null
  positions: String[]
  roles: TeamMemberRole[]
  team: Node | null
  member: Node | null
  __typename: 'TeamMember'
}

export enum TeamMemberStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum TeamMemberRole {
  LEADERSHIP = 'LEADERSHIP',
  CONSULTING = 'CONSULTING',
  DEVELOPMENT = 'DEVELOPMENT',
}

export interface PageInfo {
  endCursor: String | null
  hasNextPage: Boolean | null
  __typename: 'PageInfo'
}

export enum FindNodeFilterName {
  ID = 'ID',
  TYPE = 'TYPE',
  CODE_STARTED_AT = 'CODE_STARTED_AT',
  CODE_LAST_COMMIT_AT = 'CODE_LAST_COMMIT_AT',
  RANK = 'RANK',
  COUNT_DEVS = 'COUNT_DEVS',
  COUNT_REPOS = 'COUNT_REPOS',
  MARKETCAP = 'MARKETCAP',
  MARKETCAP_RANK = 'MARKETCAP_RANK',
  SCORE = 'SCORE',
  SYMBOL = 'SYMBOL',
  SLUG = 'SLUG',
  Q = 'Q',
  DEV_SCORE = 'DEV_SCORE',
  DEV_RANK = 'DEV_RANK',
  COUNT_DEVS_IN_TOP1000 = 'COUNT_DEVS_IN_TOP1000',
  COUNT_ACTIVE_DEVS_IN_TOP1000 = 'COUNT_ACTIVE_DEVS_IN_TOP1000',
  COUNT_ACTIVE_DEVS = 'COUNT_ACTIVE_DEVS',
  CREATED_AT = 'CREATED_AT',
}

export interface NodeConnection {
  edges: NodeCursorEdge[]
  pageInfo: PageInfo
  totalCount: Int
  __typename: 'NodeConnection'
}

export interface NodeCursorEdge {
  node: Node
  cursor: String
  __typename: 'NodeCursorEdge'
}

export interface Mutation {
  createNodeProperty: NodeProperty
  updateNodeProperty: NodeProperty
  createNode: Node
  exploreCoingekoId: TaskLogStatus | null
  mergeNodes: Node
  __typename: 'Mutation'
}

export enum NodePropertySource {
  GITHUB = 'GITHUB',
  COINGECKO = 'COINGECKO',
  WEBSITE = 'WEBSITE',
  TOKENINSIGHT = 'TOKENINSIGHT',
}

export enum TaskLogStatus {
  RUNNING = 'RUNNING',
  WAITING = 'WAITING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export interface QueryRequest {
  errorCodes?: boolean | number
  nodePropertyConnection?: [{ input: InputNodePropertyConnection }, NodePropertyConnectionRequest]
  currentNodePropertyConnection?: [{ input: InputNodePropertyConnection }, NodePropertyConnectionRequest]
  nodeById?: [{ id: ID }, NodeRequest]
  nodeBySlug?: [{ slug: String; type: NodeType }, NodeRequest]
  nodeConnection?:
    | [
        {
          filter?: InputNodeFilter[] | null
          sort?: InputNodeSortBy[] | null
          after?: String | null
          type?: NodeType | null
          first?: Int | null
        },
        NodeConnectionRequest,
      ]
    | NodeConnectionRequest
  teamMemberConnection?: [
    { filter?: InputTeamMemberFilter[] | null; sort?: InputTeamMemberSortBy[] | null; after?: String | null; first: Int },
    TeamMemberConnectionRequest,
  ]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InputNodePropertyConnection {
  first: Int
  after?: String | null
  nodeType?: NodeType[] | null
  id?: Int[] | null
  name?: NodePropertyName[] | null
  nodeId?: ID[] | null
  uniqueValue?: String[] | null
  status?: NodePropertyStatus[] | null
}

export interface NodePropertyConnectionRequest {
  edges?: NodePropertyCursorEdgeRequest
  pageInfo?: PageInfoRequest
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodePropertyCursorEdgeRequest {
  node?: NodePropertyRequest
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodePropertyRequest {
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  nodeId?: boolean | number
  name?: boolean | number
  nodeType?: boolean | number
  refNodeId?: boolean | number
  value?: boolean | number
  numberValue?: boolean | number
  uniqueValue?: boolean | number
  isVerified?: boolean | number
  data?: boolean | number
  status?: boolean | number
  startAt?: boolean | number
  endAt?: boolean | number
  info?: boolean | number
  lastSeenAt?: boolean | number
  sourceUrl?: boolean | number
  statusInfo?: boolean | number
  role?: boolean | number
  domain?: boolean | number
  host?: boolean | number
  format?: boolean | number
  priority?: boolean | number
  refNodeType?: boolean | number
  verifiedAt?: boolean | number
  node?: NodeRequest
  refNode?: NodeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodeRequest {
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  type?: boolean | number
  name?: boolean | number
  slug?: boolean | number
  status?: boolean | number
  currentProps?: [{ name?: NodePropertyName[] | null; first?: Float | null }, NodePropertyRequest] | NodePropertyRequest
  properties?: NodePropertiesRequest
  metrics?: NodeMetricsRequest
  currentMetric?: [
    { orgId?: ID | null; repoId?: ID | null; personId?: ID | null; coinId?: ID | null; name: NodeMetricName },
    NodeMetricRequest,
  ]
  /** Team members of this node */
  teamMembers?:
    | [
        {
          filter?: InputTeamMemberFilter[] | null
          sort?: InputTeamMemberSortBy[] | null
          after?: String | null
          first?: Int | null
        },
        TeamMemberConnectionRequest,
      ]
    | TeamMemberConnectionRequest
  /** Teams this node is a member of */
  memberOfTeams?:
    | [
        {
          filter?: InputTeamMemberFilter[] | null
          sort?: InputTeamMemberSortBy[] | null
          after?: String | null
          first?: Int | null
        },
        TeamMemberConnectionRequest,
      ]
    | TeamMemberConnectionRequest
  image?: ImageDetailsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodePropertiesRequest {
  ghId?: boolean | number
  ghLogin?: boolean | number
  cgId?: boolean | number
  location?: boolean | number
  email?: boolean | number
  codeStartedAt?: boolean | number
  codeUpdatedAt?: boolean | number
  codeLastCommitAt?: boolean | number
  symbol?: boolean | number
  category?: boolean | number
  name?: boolean | number
  athDate?: boolean | number
  atlDate?: boolean | number
  image?: ImageDetailsRequest
  url?: UrlDetailsRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ImageDetailsRequest {
  small?: boolean | number
  medium?: boolean | number
  large?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UrlDetailsRequest {
  url?: boolean | number
  domain?: boolean | number
  host?: boolean | number
  hash?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodeMetricsRequest {
  codeCommits?: NodeMetricRequest
  marketCapRank?: NodeMetricRequest
  marketCap24h?: NodeMetricRequest
  athPrice?: NodeMetricRequest
  atlPrice?: NodeMetricRequest
  price24h?: NodeMetricRequest
  price7d?: NodeMetricRequest
  price14d?: NodeMetricRequest
  price30d?: NodeMetricRequest
  price1y?: NodeMetricRequest
  circulatingSupply?: NodeMetricRequest
  totalSupply?: NodeMetricRequest
  maxSupply?: NodeMetricRequest
  volume24h?: NodeMetricRequest
  fdValuation?: NodeMetricRequest
  ghFollowers?: NodeMetricRequest
  ghStars?: NodeMetricRequest
  ghForks?: NodeMetricRequest
  ghOpenIssues?: NodeMetricRequest
  ghWatchers?: NodeMetricRequest
  devScore?: NodeMetricRequest
  score?: NodeMetricRequest
  countDevsInTop1000?: NodeMetricRequest
  countActiveDevsInTop1000?: NodeMetricRequest
  countDevs?: NodeMetricRequest
  countActiveDevs?: NodeMetricRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodeMetricRequest {
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  rank?: boolean | number
  share?: boolean | number
  total?: boolean | number
  coinId?: boolean | number
  personId?: boolean | number
  repoId?: boolean | number
  orgId?: boolean | number
  name?: boolean | number
  dimension?: boolean | number
  value?: boolean | number
  date?: boolean | number
  minValue?: boolean | number
  maxValue?: boolean | number
  changeValue?: boolean | number
  changePercent?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InputTeamMemberFilter {
  name: TeamMemberFilterName
  op?: SqlOperator | null
  value: FilterFieldValue
}

export interface InputTeamMemberSortBy {
  name: TeamMemberSortBy
  direction?: SortDirection | null
}

export interface TeamMemberConnectionRequest {
  edges?: TeamMemberCursorEdgeRequest
  pageInfo?: PageInfoRequest
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TeamMemberCursorEdgeRequest {
  node?: TeamMemberRequest
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface TeamMemberRequest {
  id?: boolean | number
  createdAt?: boolean | number
  updatedAt?: boolean | number
  teamId?: boolean | number
  teamType?: boolean | number
  memberId?: boolean | number
  memberType?: boolean | number
  status?: boolean | number
  priority?: boolean | number
  isVerified?: boolean | number
  lastSeenAt?: boolean | number
  sourceUrl?: boolean | number
  startDate?: boolean | number
  endDate?: boolean | number
  positions?: boolean | number
  roles?: boolean | number
  team?: NodeRequest
  member?: NodeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PageInfoRequest {
  endCursor?: boolean | number
  hasNextPage?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InputNodeFilter {
  name: FindNodeFilterName
  op?: SqlOperator | null
  value: FilterFieldValue
}

export interface InputNodeSortBy {
  name: FindNodeFilterName
  direction?: SortDirection | null
}

export interface NodeConnectionRequest {
  edges?: NodeCursorEdgeRequest
  pageInfo?: PageInfoRequest
  totalCount?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodeCursorEdgeRequest {
  node?: NodeRequest
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MutationRequest {
  createNodeProperty?: [{ input: InputCreateNodeProperty }, NodePropertyRequest]
  updateNodeProperty?: [{ input: InputUpdateNodeProperty }, NodePropertyRequest]
  createNode?: [{ input: InputCreateNode }, NodeRequest]
  exploreCoingekoId?: [{ id: String }]
  mergeNodes?: [{ secondaryNodeId: ID; nodeId: ID }, NodeRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface InputCreateNodeProperty {
  source: NodePropertySource
  nodeId: ID
  name: NodePropertyName
  value: String
  refNodeId?: ID | null
  numberValue?: Float | null
  data?: String | null
  startAt?: String | null
  endAt?: String | null
  info?: String | null
  lastSeenAt?: String | null
  sourceUrl?: String | null
  statusInfo?: String | null
  role?: NodePropertyRole | null
  format?: NodePropertyFormat | null
  uniqueValue?: String | null
  isVerified?: Boolean | null
  status?: NodePropertyStatus | null
}

export interface InputUpdateNodeProperty {
  id: ID
  value?: String | null
  refNodeId?: ID | null
  numberValue?: Float | null
  data?: String | null
  startAt?: String | null
  endAt?: String | null
  info?: String | null
  lastSeenAt?: String | null
  sourceUrl?: String | null
  statusInfo?: String | null
  role?: NodePropertyRole | null
  format?: NodePropertyFormat | null
  uniqueValue?: String | null
  isVerified?: Boolean | null
  status?: NodePropertyStatus | null
}

export interface InputCreateNode {
  name: String
  type: NodeType
  props: InputCreateNodeProp[]
}

export interface InputCreateNodeProp {
  source: NodePropertySource
  nodeId: ID
  name: NodePropertyName
  value: String
  refNodeId?: ID | null
  numberValue?: Float | null
  data?: String | null
  startAt?: String | null
  endAt?: String | null
  info?: String | null
  lastSeenAt?: String | null
  sourceUrl?: String | null
  statusInfo?: String | null
  role?: NodePropertyRole | null
  format?: NodePropertyFormat | null
  uniqueValue?: String | null
  isVerified?: Boolean | null
  status?: NodePropertyStatus | null
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const NodePropertyConnection_possibleTypes = ['NodePropertyConnection']
export const isNodePropertyConnection = (obj: { __typename: String }): obj is NodePropertyConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodePropertyConnection_possibleTypes.includes(obj.__typename)
}

const NodePropertyCursorEdge_possibleTypes = ['NodePropertyCursorEdge']
export const isNodePropertyCursorEdge = (obj: { __typename: String }): obj is NodePropertyCursorEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodePropertyCursorEdge_possibleTypes.includes(obj.__typename)
}

const NodeProperty_possibleTypes = ['NodeProperty']
export const isNodeProperty = (obj: { __typename: String }): obj is NodeProperty => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeProperty_possibleTypes.includes(obj.__typename)
}

const Node_possibleTypes = ['Node']
export const isNode = (obj: { __typename: String }): obj is Node => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Node_possibleTypes.includes(obj.__typename)
}

const NodeProperties_possibleTypes = ['NodeProperties']
export const isNodeProperties = (obj: { __typename: String }): obj is NodeProperties => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeProperties_possibleTypes.includes(obj.__typename)
}

const ImageDetails_possibleTypes = ['ImageDetails']
export const isImageDetails = (obj: { __typename: String }): obj is ImageDetails => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ImageDetails_possibleTypes.includes(obj.__typename)
}

const UrlDetails_possibleTypes = ['UrlDetails']
export const isUrlDetails = (obj: { __typename: String }): obj is UrlDetails => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UrlDetails_possibleTypes.includes(obj.__typename)
}

const NodeMetrics_possibleTypes = ['NodeMetrics']
export const isNodeMetrics = (obj: { __typename: String }): obj is NodeMetrics => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeMetrics_possibleTypes.includes(obj.__typename)
}

const NodeMetric_possibleTypes = ['NodeMetric']
export const isNodeMetric = (obj: { __typename: String }): obj is NodeMetric => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeMetric_possibleTypes.includes(obj.__typename)
}

const TeamMemberConnection_possibleTypes = ['TeamMemberConnection']
export const isTeamMemberConnection = (obj: { __typename: String }): obj is TeamMemberConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return TeamMemberConnection_possibleTypes.includes(obj.__typename)
}

const TeamMemberCursorEdge_possibleTypes = ['TeamMemberCursorEdge']
export const isTeamMemberCursorEdge = (obj: { __typename: String }): obj is TeamMemberCursorEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return TeamMemberCursorEdge_possibleTypes.includes(obj.__typename)
}

const TeamMember_possibleTypes = ['TeamMember']
export const isTeamMember = (obj: { __typename: String }): obj is TeamMember => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return TeamMember_possibleTypes.includes(obj.__typename)
}

const PageInfo_possibleTypes = ['PageInfo']
export const isPageInfo = (obj: { __typename: String }): obj is PageInfo => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PageInfo_possibleTypes.includes(obj.__typename)
}

const NodeConnection_possibleTypes = ['NodeConnection']
export const isNodeConnection = (obj: { __typename: String }): obj is NodeConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeConnection_possibleTypes.includes(obj.__typename)
}

const NodeCursorEdge_possibleTypes = ['NodeCursorEdge']
export const isNodeCursorEdge = (obj: { __typename: String }): obj is NodeCursorEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return NodeCursorEdge_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  errorCodes: { execute: (request?: boolean | number, defaultValue?: ErrorCode[]) => Promise<ErrorCode[]> }
  nodePropertyConnection: (args: {
    input: InputNodePropertyConnection
  }) => NodePropertyConnectionPromiseChain & {
    execute: (
      request: NodePropertyConnectionRequest,
      defaultValue?: NodePropertyConnection,
    ) => Promise<NodePropertyConnection>
  }
  currentNodePropertyConnection: (args: {
    input: InputNodePropertyConnection
  }) => NodePropertyConnectionPromiseChain & {
    execute: (
      request: NodePropertyConnectionRequest,
      defaultValue?: NodePropertyConnection,
    ) => Promise<NodePropertyConnection>
  }
  nodeById: (args: {
    id: ID
  }) => NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Promise<Node | null> }
  nodeBySlug: (args: {
    slug: String
    type: NodeType
  }) => NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Promise<Node | null> }
  nodeConnection: ((args?: {
    filter?: InputNodeFilter[] | null
    sort?: InputNodeSortBy[] | null
    after?: String | null
    type?: NodeType | null
    first?: Int | null
  }) => NodeConnectionPromiseChain & {
    execute: (request: NodeConnectionRequest, defaultValue?: NodeConnection) => Promise<NodeConnection>
  }) &
    (NodeConnectionPromiseChain & {
      execute: (request: NodeConnectionRequest, defaultValue?: NodeConnection) => Promise<NodeConnection>
    })
  teamMemberConnection: (args: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first: Int
  }) => TeamMemberConnectionPromiseChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Promise<TeamMemberConnection>
  }
}

export interface QueryObservableChain {
  errorCodes: { execute: (request?: boolean | number, defaultValue?: ErrorCode[]) => Observable<ErrorCode[]> }
  nodePropertyConnection: (args: {
    input: InputNodePropertyConnection
  }) => NodePropertyConnectionObservableChain & {
    execute: (
      request: NodePropertyConnectionRequest,
      defaultValue?: NodePropertyConnection,
    ) => Observable<NodePropertyConnection>
  }
  currentNodePropertyConnection: (args: {
    input: InputNodePropertyConnection
  }) => NodePropertyConnectionObservableChain & {
    execute: (
      request: NodePropertyConnectionRequest,
      defaultValue?: NodePropertyConnection,
    ) => Observable<NodePropertyConnection>
  }
  nodeById: (args: {
    id: ID
  }) => NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Observable<Node | null> }
  nodeBySlug: (args: {
    slug: String
    type: NodeType
  }) => NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Observable<Node | null> }
  nodeConnection: ((args?: {
    filter?: InputNodeFilter[] | null
    sort?: InputNodeSortBy[] | null
    after?: String | null
    type?: NodeType | null
    first?: Int | null
  }) => NodeConnectionObservableChain & {
    execute: (request: NodeConnectionRequest, defaultValue?: NodeConnection) => Observable<NodeConnection>
  }) &
    (NodeConnectionObservableChain & {
      execute: (request: NodeConnectionRequest, defaultValue?: NodeConnection) => Observable<NodeConnection>
    })
  teamMemberConnection: (args: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first: Int
  }) => TeamMemberConnectionObservableChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Observable<TeamMemberConnection>
  }
}

export interface NodePropertyConnectionPromiseChain {
  edges: {
    execute: (
      request: NodePropertyCursorEdgeRequest,
      defaultValue?: NodePropertyCursorEdge[],
    ) => Promise<NodePropertyCursorEdge[]>
  }
  pageInfo: PageInfoPromiseChain & { execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Promise<PageInfo> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface NodePropertyConnectionObservableChain {
  edges: {
    execute: (
      request: NodePropertyCursorEdgeRequest,
      defaultValue?: NodePropertyCursorEdge[],
    ) => Observable<NodePropertyCursorEdge[]>
  }
  pageInfo: PageInfoObservableChain & {
    execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface NodePropertyCursorEdgePromiseChain {
  node: NodePropertyPromiseChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Promise<NodeProperty>
  }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface NodePropertyCursorEdgeObservableChain {
  node: NodePropertyObservableChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Observable<NodeProperty>
  }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface NodePropertyPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  nodeId: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  name: { execute: (request?: boolean | number, defaultValue?: NodePropertyName) => Promise<NodePropertyName> }
  nodeType: { execute: (request?: boolean | number, defaultValue?: NodeType | null) => Promise<NodeType | null> }
  refNodeId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  numberValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  uniqueValue: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  isVerified: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  data: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  status: { execute: (request?: boolean | number, defaultValue?: NodePropertyStatus) => Promise<NodePropertyStatus> }
  startAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  endAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  info: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  lastSeenAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  sourceUrl: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  statusInfo: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  role: { execute: (request?: boolean | number, defaultValue?: NodePropertyRole | null) => Promise<NodePropertyRole | null> }
  domain: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  host: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  format: {
    execute: (request?: boolean | number, defaultValue?: NodePropertyFormat | null) => Promise<NodePropertyFormat | null>
  }
  priority: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  refNodeType: { execute: (request?: boolean | number, defaultValue?: NodeType | null) => Promise<NodeType | null> }
  verifiedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  node: NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node) => Promise<Node> }
  refNode: NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Promise<Node | null> }
}

export interface NodePropertyObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  nodeId: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  name: { execute: (request?: boolean | number, defaultValue?: NodePropertyName) => Observable<NodePropertyName> }
  nodeType: { execute: (request?: boolean | number, defaultValue?: NodeType | null) => Observable<NodeType | null> }
  refNodeId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  value: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  numberValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  uniqueValue: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  isVerified: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  data: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  status: { execute: (request?: boolean | number, defaultValue?: NodePropertyStatus) => Observable<NodePropertyStatus> }
  startAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  endAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  info: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  lastSeenAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  sourceUrl: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  statusInfo: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  role: {
    execute: (request?: boolean | number, defaultValue?: NodePropertyRole | null) => Observable<NodePropertyRole | null>
  }
  domain: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  host: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  format: {
    execute: (request?: boolean | number, defaultValue?: NodePropertyFormat | null) => Observable<NodePropertyFormat | null>
  }
  priority: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  refNodeType: { execute: (request?: boolean | number, defaultValue?: NodeType | null) => Observable<NodeType | null> }
  verifiedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  node: NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node) => Observable<Node> }
  refNode: NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Observable<Node | null> }
}

export interface NodePromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: NodeType) => Promise<NodeType> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  status: { execute: (request?: boolean | number, defaultValue?: NodeStatus) => Promise<NodeStatus> }
  currentProps: ((args?: {
    name?: NodePropertyName[] | null
    first?: Float | null
  }) => { execute: (request: NodePropertyRequest, defaultValue?: NodeProperty[]) => Promise<NodeProperty[]> }) & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty[]) => Promise<NodeProperty[]>
  }
  properties: NodePropertiesPromiseChain & {
    execute: (request: NodePropertiesRequest, defaultValue?: NodeProperties) => Promise<NodeProperties>
  }
  metrics: NodeMetricsPromiseChain & {
    execute: (request: NodeMetricsRequest, defaultValue?: NodeMetrics) => Promise<NodeMetrics>
  }
  currentMetric: (args: {
    orgId?: ID | null
    repoId?: ID | null
    personId?: ID | null
    coinId?: ID | null
    name: NodeMetricName
  }) => NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  /** Team members of this node */
  teamMembers: ((args?: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first?: Int | null
  }) => TeamMemberConnectionPromiseChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Promise<TeamMemberConnection>
  }) &
    (TeamMemberConnectionPromiseChain & {
      execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Promise<TeamMemberConnection>
    })
  /** Teams this node is a member of */
  memberOfTeams: ((args?: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first?: Int | null
  }) => TeamMemberConnectionPromiseChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Promise<TeamMemberConnection>
  }) &
    (TeamMemberConnectionPromiseChain & {
      execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Promise<TeamMemberConnection>
    })
  image: ImageDetailsPromiseChain & {
    execute: (request: ImageDetailsRequest, defaultValue?: ImageDetails | null) => Promise<ImageDetails | null>
  }
}

export interface NodeObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  type: { execute: (request?: boolean | number, defaultValue?: NodeType) => Observable<NodeType> }
  name: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  slug: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  status: { execute: (request?: boolean | number, defaultValue?: NodeStatus) => Observable<NodeStatus> }
  currentProps: ((args?: {
    name?: NodePropertyName[] | null
    first?: Float | null
  }) => { execute: (request: NodePropertyRequest, defaultValue?: NodeProperty[]) => Observable<NodeProperty[]> }) & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty[]) => Observable<NodeProperty[]>
  }
  properties: NodePropertiesObservableChain & {
    execute: (request: NodePropertiesRequest, defaultValue?: NodeProperties) => Observable<NodeProperties>
  }
  metrics: NodeMetricsObservableChain & {
    execute: (request: NodeMetricsRequest, defaultValue?: NodeMetrics) => Observable<NodeMetrics>
  }
  currentMetric: (args: {
    orgId?: ID | null
    repoId?: ID | null
    personId?: ID | null
    coinId?: ID | null
    name: NodeMetricName
  }) => NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  /** Team members of this node */
  teamMembers: ((args?: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first?: Int | null
  }) => TeamMemberConnectionObservableChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Observable<TeamMemberConnection>
  }) &
    (TeamMemberConnectionObservableChain & {
      execute: (
        request: TeamMemberConnectionRequest,
        defaultValue?: TeamMemberConnection,
      ) => Observable<TeamMemberConnection>
    })
  /** Teams this node is a member of */
  memberOfTeams: ((args?: {
    filter?: InputTeamMemberFilter[] | null
    sort?: InputTeamMemberSortBy[] | null
    after?: String | null
    first?: Int | null
  }) => TeamMemberConnectionObservableChain & {
    execute: (request: TeamMemberConnectionRequest, defaultValue?: TeamMemberConnection) => Observable<TeamMemberConnection>
  }) &
    (TeamMemberConnectionObservableChain & {
      execute: (
        request: TeamMemberConnectionRequest,
        defaultValue?: TeamMemberConnection,
      ) => Observable<TeamMemberConnection>
    })
  image: ImageDetailsObservableChain & {
    execute: (request: ImageDetailsRequest, defaultValue?: ImageDetails | null) => Observable<ImageDetails | null>
  }
}

export interface NodePropertiesPromiseChain {
  ghId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  ghLogin: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  cgId: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Promise<String[] | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Promise<String[] | null> }
  codeStartedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  codeUpdatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  codeLastCommitAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  symbol: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  category: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Promise<String[] | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Promise<String[] | null> }
  athDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  atlDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  image: ImageDetailsPromiseChain & {
    execute: (request: ImageDetailsRequest, defaultValue?: ImageDetails | null) => Promise<ImageDetails | null>
  }
  url: { execute: (request: UrlDetailsRequest, defaultValue?: UrlDetails[] | null) => Promise<UrlDetails[] | null> }
}

export interface NodePropertiesObservableChain {
  ghId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  ghLogin: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  cgId: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  location: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Observable<String[] | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Observable<String[] | null> }
  codeStartedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  codeUpdatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  codeLastCommitAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  symbol: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  category: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Observable<String[] | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String[] | null) => Observable<String[] | null> }
  athDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  atlDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  image: ImageDetailsObservableChain & {
    execute: (request: ImageDetailsRequest, defaultValue?: ImageDetails | null) => Observable<ImageDetails | null>
  }
  url: { execute: (request: UrlDetailsRequest, defaultValue?: UrlDetails[] | null) => Observable<UrlDetails[] | null> }
}

export interface ImageDetailsPromiseChain {
  small: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  medium: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  large: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface ImageDetailsObservableChain {
  small: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  medium: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  large: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface UrlDetailsPromiseChain {
  url: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  domain: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  hash: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface UrlDetailsObservableChain {
  url: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  domain: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  host: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  hash: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface NodeMetricsPromiseChain {
  codeCommits: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  marketCapRank: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  marketCap24h: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  athPrice: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  atlPrice: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  price24h: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  price7d: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  price14d: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  price30d: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  price1y: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  circulatingSupply: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  totalSupply: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  maxSupply: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  volume24h: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  fdValuation: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  ghFollowers: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  ghStars: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  ghForks: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  ghOpenIssues: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  ghWatchers: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  devScore: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  score: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  countDevsInTop1000: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  countActiveDevsInTop1000: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  countDevs: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
  countActiveDevs: NodeMetricPromiseChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Promise<NodeMetric | null>
  }
}

export interface NodeMetricsObservableChain {
  codeCommits: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  marketCapRank: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  marketCap24h: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  athPrice: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  atlPrice: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  price24h: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  price7d: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  price14d: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  price30d: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  price1y: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  circulatingSupply: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  totalSupply: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  maxSupply: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  volume24h: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  fdValuation: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  ghFollowers: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  ghStars: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  ghForks: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  ghOpenIssues: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  ghWatchers: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  devScore: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  score: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  countDevsInTop1000: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  countActiveDevsInTop1000: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  countDevs: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
  countActiveDevs: NodeMetricObservableChain & {
    execute: (request: NodeMetricRequest, defaultValue?: NodeMetric | null) => Observable<NodeMetric | null>
  }
}

export interface NodeMetricPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  rank: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  share: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  total: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  coinId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  personId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  repoId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  orgId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  name: { execute: (request?: boolean | number, defaultValue?: NodeMetricName) => Promise<NodeMetricName> }
  dimension: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  value: { execute: (request?: boolean | number, defaultValue?: Float) => Promise<Float> }
  date: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  minValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  maxValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  changeValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  changePercent: { execute: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
}

export interface NodeMetricObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  rank: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  share: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  total: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  coinId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  personId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  repoId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  orgId: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  name: { execute: (request?: boolean | number, defaultValue?: NodeMetricName) => Observable<NodeMetricName> }
  dimension: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  value: { execute: (request?: boolean | number, defaultValue?: Float) => Observable<Float> }
  date: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  minValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  maxValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  changeValue: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  changePercent: { execute: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
}

export interface TeamMemberConnectionPromiseChain {
  edges: {
    execute: (request: TeamMemberCursorEdgeRequest, defaultValue?: TeamMemberCursorEdge[]) => Promise<TeamMemberCursorEdge[]>
  }
  pageInfo: PageInfoPromiseChain & { execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Promise<PageInfo> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface TeamMemberConnectionObservableChain {
  edges: {
    execute: (
      request: TeamMemberCursorEdgeRequest,
      defaultValue?: TeamMemberCursorEdge[],
    ) => Observable<TeamMemberCursorEdge[]>
  }
  pageInfo: PageInfoObservableChain & {
    execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface TeamMemberCursorEdgePromiseChain {
  node: TeamMemberPromiseChain & { execute: (request: TeamMemberRequest, defaultValue?: TeamMember) => Promise<TeamMember> }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface TeamMemberCursorEdgeObservableChain {
  node: TeamMemberObservableChain & {
    execute: (request: TeamMemberRequest, defaultValue?: TeamMember) => Observable<TeamMember>
  }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface TeamMemberPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  teamId: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  teamType: { execute: (request?: boolean | number, defaultValue?: NodeType) => Promise<NodeType> }
  memberId: { execute: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  memberType: { execute: (request?: boolean | number, defaultValue?: NodeType) => Promise<NodeType> }
  status: { execute: (request?: boolean | number, defaultValue?: TeamMemberStatus) => Promise<TeamMemberStatus> }
  priority: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  isVerified: { execute: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  lastSeenAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  sourceUrl: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  startDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  endDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  positions: { execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  roles: { execute: (request?: boolean | number, defaultValue?: TeamMemberRole[]) => Promise<TeamMemberRole[]> }
  team: NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Promise<Node | null> }
  member: NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Promise<Node | null> }
}

export interface TeamMemberObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  createdAt: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  updatedAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  teamId: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  teamType: { execute: (request?: boolean | number, defaultValue?: NodeType) => Observable<NodeType> }
  memberId: { execute: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  memberType: { execute: (request?: boolean | number, defaultValue?: NodeType) => Observable<NodeType> }
  status: { execute: (request?: boolean | number, defaultValue?: TeamMemberStatus) => Observable<TeamMemberStatus> }
  priority: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  isVerified: { execute: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  lastSeenAt: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  sourceUrl: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  startDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  endDate: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  positions: { execute: (request?: boolean | number, defaultValue?: String[]) => Observable<String[]> }
  roles: { execute: (request?: boolean | number, defaultValue?: TeamMemberRole[]) => Observable<TeamMemberRole[]> }
  team: NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Observable<Node | null> }
  member: NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node | null) => Observable<Node | null> }
}

export interface PageInfoPromiseChain {
  endCursor: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  hasNextPage: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
}

export interface PageInfoObservableChain {
  endCursor: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  hasNextPage: { execute: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
}

export interface NodeConnectionPromiseChain {
  edges: { execute: (request: NodeCursorEdgeRequest, defaultValue?: NodeCursorEdge[]) => Promise<NodeCursorEdge[]> }
  pageInfo: PageInfoPromiseChain & { execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Promise<PageInfo> }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
}

export interface NodeConnectionObservableChain {
  edges: { execute: (request: NodeCursorEdgeRequest, defaultValue?: NodeCursorEdge[]) => Observable<NodeCursorEdge[]> }
  pageInfo: PageInfoObservableChain & {
    execute: (request: PageInfoRequest, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  totalCount: { execute: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
}

export interface NodeCursorEdgePromiseChain {
  node: NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node) => Promise<Node> }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

export interface NodeCursorEdgeObservableChain {
  node: NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node) => Observable<Node> }
  cursor: { execute: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface MutationPromiseChain {
  createNodeProperty: (args: {
    input: InputCreateNodeProperty
  }) => NodePropertyPromiseChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Promise<NodeProperty>
  }
  updateNodeProperty: (args: {
    input: InputUpdateNodeProperty
  }) => NodePropertyPromiseChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Promise<NodeProperty>
  }
  createNode: (args: {
    input: InputCreateNode
  }) => NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node) => Promise<Node> }
  exploreCoingekoId: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: TaskLogStatus | null) => Promise<TaskLogStatus | null> }
  mergeNodes: (args: {
    secondaryNodeId: ID
    nodeId: ID
  }) => NodePromiseChain & { execute: (request: NodeRequest, defaultValue?: Node) => Promise<Node> }
}

export interface MutationObservableChain {
  createNodeProperty: (args: {
    input: InputCreateNodeProperty
  }) => NodePropertyObservableChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Observable<NodeProperty>
  }
  updateNodeProperty: (args: {
    input: InputUpdateNodeProperty
  }) => NodePropertyObservableChain & {
    execute: (request: NodePropertyRequest, defaultValue?: NodeProperty) => Observable<NodeProperty>
  }
  createNode: (args: {
    input: InputCreateNode
  }) => NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node) => Observable<Node> }
  exploreCoingekoId: (args: {
    id: String
  }) => { execute: (request?: boolean | number, defaultValue?: TaskLogStatus | null) => Observable<TaskLogStatus | null> }
  mergeNodes: (args: {
    secondaryNodeId: ID
    nodeId: ID
  }) => NodeObservableChain & { execute: (request: NodeRequest, defaultValue?: Node) => Observable<Node> }
}
