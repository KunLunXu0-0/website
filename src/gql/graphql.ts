/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Auth: { input: any; output: any; }
  BillInput: { input: any; output: any; }
  BodyIndexInput: { input: any; output: any; }
  /** Date类型值 */
  Date: { input: any; output: any; }
  DietInput: { input: any; output: any; }
  FitnessInput: { input: any; output: any; }
  Pagination: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AiChat = {
  __typename?: 'AiChat';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  messages?: Maybe<Array<Maybe<AiChatMessage>>>;
  name?: Maybe<Scalars['String']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type AiChatFields = {
  messages?: InputMaybe<Array<InputMaybe<AiChatMessageField>>>;
  name?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AiChatMessage = {
  __typename?: 'AiChatMessage';
  content?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type AiChatMessageField = {
  content?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type AiChatSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type AiChats = {
  __typename?: 'AiChats';
  change?: Maybe<Array<Maybe<AiChat>>>;
  list?: Maybe<Array<Maybe<AiChat>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Algorithm = {
  __typename?: 'Algorithm';
  content?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type AlgorithmFields = {
  content?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AlgorithmSearch = {
  content?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Algorithms = {
  __typename?: 'Algorithms';
  change?: Maybe<Array<Maybe<Algorithm>>>;
  list?: Maybe<Array<Maybe<Algorithm>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  folder?: Maybe<Folder>;
  id?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Scalars['ID']['output']>>;
  thumb?: Maybe<Scalars['String']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
  viewCount?: Maybe<Scalars['Int']['output']>;
  viewHistory?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ArticleFields = {
  content?: InputMaybe<Scalars['String']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
  thumb?: InputMaybe<Scalars['String']['input']>;
};

export type ArticleSearch = {
  content?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tag?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
  thumb?: InputMaybe<Scalars['String']['input']>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Articles = {
  __typename?: 'Articles';
  change?: Maybe<Array<Maybe<Article>>>;
  list?: Maybe<Array<Maybe<Article>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Bill = {
  __typename?: 'Bill';
  desc?: Maybe<Scalars['String']['output']>;
  expend?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
  tag?: Maybe<Scalars['Int']['output']>;
};

export type BodyIndex = {
  __typename?: 'BodyIndex';
  bim?: Maybe<Scalars['Float']['output']>;
  bodyfat?: Maybe<Scalars['Float']['output']>;
  moistureContent?: Maybe<Scalars['Float']['output']>;
  muscle?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type Diaries = {
  __typename?: 'Diaries';
  change?: Maybe<Array<Maybe<Diary>>>;
  list?: Maybe<Array<Maybe<Diary>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Diary = {
  __typename?: 'Diary';
  bill?: Maybe<Array<Maybe<Bill>>>;
  bodyIndex?: Maybe<BodyIndex>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  diet?: Maybe<Array<Maybe<Diet>>>;
  fitness?: Maybe<Array<Maybe<Fitness>>>;
  getUp?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  informalEssay?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  toRest?: Maybe<Scalars['Date']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type DiaryFields = {
  bill?: InputMaybe<Scalars['BillInput']['input']>;
  bodyIndex?: InputMaybe<Scalars['BodyIndexInput']['input']>;
  diet?: InputMaybe<Scalars['DietInput']['input']>;
  fitness?: InputMaybe<Scalars['FitnessInput']['input']>;
  getUp?: InputMaybe<Scalars['Date']['input']>;
  informalEssay?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  toRest?: InputMaybe<Scalars['Date']['input']>;
};

export type DiarySearch = {
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type Diet = {
  __typename?: 'Diet';
  desc?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type Fitness = {
  __typename?: 'Fitness';
  place?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
};

export type Folder = {
  __typename?: 'Folder';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Folder>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type FolderFields = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type FolderSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Folders = {
  __typename?: 'Folders';
  change?: Maybe<Array<Maybe<Folder>>>;
  list?: Maybe<Array<Maybe<Folder>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Interview = {
  __typename?: 'Interview';
  content?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type InterviewFields = {
  content?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type InterviewSearch = {
  content?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Interviews = {
  __typename?: 'Interviews';
  change?: Maybe<Array<Maybe<Interview>>>;
  list?: Maybe<Array<Maybe<Interview>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Kanban = {
  __typename?: 'Kanban';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type KanbanFields = {
  desc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type KanbanGroup = {
  __typename?: 'KanbanGroup';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  kanban?: Maybe<Kanban>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type KanbanGroupFields = {
  desc?: InputMaybe<Scalars['String']['input']>;
  kanban?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type KanbanGroupSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  kanban?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type KanbanGroups = {
  __typename?: 'KanbanGroups';
  change?: Maybe<Array<Maybe<KanbanGroup>>>;
  list?: Maybe<Array<Maybe<KanbanGroup>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type KanbanSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type KanbanTask = {
  __typename?: 'KanbanTask';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  group?: Maybe<KanbanGroup>;
  id?: Maybe<Scalars['ID']['output']>;
  kanban?: Maybe<Kanban>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type KanbanTaskFields = {
  desc?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['ID']['input']>;
  kanban?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type KanbanTaskSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  kanban?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type KanbanTasks = {
  __typename?: 'KanbanTasks';
  change?: Maybe<Array<Maybe<KanbanTask>>>;
  list?: Maybe<Array<Maybe<KanbanTask>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Kanbans = {
  __typename?: 'Kanbans';
  change?: Maybe<Array<Maybe<Kanban>>>;
  list?: Maybe<Array<Maybe<Kanban>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Login = {
  __typename?: 'Login';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type MonthlyBill = {
  __typename?: 'MonthlyBill';
  expend?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAiChats?: Maybe<AiChats>;
  createAlgorithms?: Maybe<Algorithms>;
  createArticles?: Maybe<Articles>;
  createDiaries?: Maybe<Diaries>;
  createFolders?: Maybe<Folders>;
  createInterviews?: Maybe<Interviews>;
  createKanbanGroups?: Maybe<KanbanGroups>;
  createKanbanTasks?: Maybe<KanbanTasks>;
  createKanbans?: Maybe<Kanbans>;
  createRoles?: Maybe<Roles>;
  createSnippets?: Maybe<Snippets>;
  createTags?: Maybe<Tags>;
  createUsers?: Maybe<Users>;
  login?: Maybe<Login>;
  releaseArticles?: Maybe<Articles>;
  removeAiChats?: Maybe<AiChats>;
  removeAlgorithms?: Maybe<Algorithms>;
  removeArticles?: Maybe<Articles>;
  removeDiaries?: Maybe<Diaries>;
  removeFolders?: Maybe<Folders>;
  removeInterviews?: Maybe<Interviews>;
  removeKanbanGroups?: Maybe<KanbanGroups>;
  removeKanbanTasks?: Maybe<KanbanTasks>;
  removeKanbans?: Maybe<Kanbans>;
  removePhotos?: Maybe<Photos>;
  removeRoles?: Maybe<Roles>;
  removeSnippets?: Maybe<Snippets>;
  removeTags?: Maybe<Tags>;
  removeUsers?: Maybe<Users>;
  revokeArticles?: Maybe<Articles>;
  updateAiChats?: Maybe<AiChats>;
  updateAlgorithms?: Maybe<Algorithms>;
  updateArticles?: Maybe<Articles>;
  updateDiaries?: Maybe<Diaries>;
  updateFolders?: Maybe<Folders>;
  updateInterviews?: Maybe<Interviews>;
  updateKanbanGroups?: Maybe<KanbanGroups>;
  updateKanbanTasks?: Maybe<KanbanTasks>;
  updateKanbans?: Maybe<Kanbans>;
  updateRoles?: Maybe<Roles>;
  updateSnippets?: Maybe<Snippets>;
  updateTags?: Maybe<Tags>;
  updateUsers?: Maybe<Users>;
  uploadPhotos?: Maybe<Photos>;
};


export type MutationCreateAiChatsArgs = {
  body: Array<AiChatFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AiChatSearch>;
};


export type MutationCreateAlgorithmsArgs = {
  body: Array<AlgorithmFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AlgorithmSearch>;
};


export type MutationCreateArticlesArgs = {
  body: Array<ArticleFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type MutationCreateDiariesArgs = {
  body: Array<DiaryFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<DiarySearch>;
};


export type MutationCreateFoldersArgs = {
  body: Array<FolderFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<FolderSearch>;
};


export type MutationCreateInterviewsArgs = {
  body: Array<InterviewFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<InterviewSearch>;
};


export type MutationCreateKanbanGroupsArgs = {
  body: Array<KanbanGroupFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanGroupSearch>;
};


export type MutationCreateKanbanTasksArgs = {
  body: Array<KanbanTaskFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanTaskSearch>;
};


export type MutationCreateKanbansArgs = {
  body: Array<KanbanFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanSearch>;
};


export type MutationCreateRolesArgs = {
  body: Array<RoleFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<RoleSearch>;
};


export type MutationCreateSnippetsArgs = {
  body: Array<SnippetFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<SnippetSearch>;
};


export type MutationCreateTagsArgs = {
  body: Array<TagFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<TagSearch>;
};


export type MutationCreateUsersArgs = {
  body: Array<UserFields>;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<UserSearch>;
};


export type MutationLoginArgs = {
  account?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationReleaseArticlesArgs = {
  conds: ArticleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type MutationRemoveAiChatsArgs = {
  conds: AiChatSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AiChatSearch>;
};


export type MutationRemoveAlgorithmsArgs = {
  conds: AlgorithmSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AlgorithmSearch>;
};


export type MutationRemoveArticlesArgs = {
  conds: ArticleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type MutationRemoveDiariesArgs = {
  conds: DiarySearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<DiarySearch>;
};


export type MutationRemoveFoldersArgs = {
  conds: FolderSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<FolderSearch>;
};


export type MutationRemoveInterviewsArgs = {
  conds: InterviewSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<InterviewSearch>;
};


export type MutationRemoveKanbanGroupsArgs = {
  conds: KanbanGroupSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanGroupSearch>;
};


export type MutationRemoveKanbanTasksArgs = {
  conds: KanbanTaskSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanTaskSearch>;
};


export type MutationRemoveKanbansArgs = {
  conds: KanbanSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanSearch>;
};


export type MutationRemovePhotosArgs = {
  conds: PhotoSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<PhotoSearch>;
};


export type MutationRemoveRolesArgs = {
  conds: RoleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<RoleSearch>;
};


export type MutationRemoveSnippetsArgs = {
  conds: SnippetSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<SnippetSearch>;
};


export type MutationRemoveTagsArgs = {
  conds: TagSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<TagSearch>;
};


export type MutationRemoveUsersArgs = {
  conds: UserSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<UserSearch>;
};


export type MutationRevokeArticlesArgs = {
  conds: ArticleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type MutationUpdateAiChatsArgs = {
  body: AiChatFields;
  conds: AiChatSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AiChatSearch>;
};


export type MutationUpdateAlgorithmsArgs = {
  body: AlgorithmFields;
  conds: AlgorithmSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AlgorithmSearch>;
};


export type MutationUpdateArticlesArgs = {
  body: ArticleFields;
  conds: ArticleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type MutationUpdateDiariesArgs = {
  body: DiaryFields;
  conds: DiarySearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<DiarySearch>;
};


export type MutationUpdateFoldersArgs = {
  body: FolderFields;
  conds: FolderSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<FolderSearch>;
};


export type MutationUpdateInterviewsArgs = {
  body: InterviewFields;
  conds: InterviewSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<InterviewSearch>;
};


export type MutationUpdateKanbanGroupsArgs = {
  body: KanbanGroupFields;
  conds: KanbanGroupSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanGroupSearch>;
};


export type MutationUpdateKanbanTasksArgs = {
  body: KanbanTaskFields;
  conds: KanbanTaskSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanTaskSearch>;
};


export type MutationUpdateKanbansArgs = {
  body: KanbanFields;
  conds: KanbanSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanSearch>;
};


export type MutationUpdateRolesArgs = {
  body: RoleFields;
  conds: RoleSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<RoleSearch>;
};


export type MutationUpdateSnippetsArgs = {
  body: SnippetFields;
  conds: SnippetSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<SnippetSearch>;
};


export type MutationUpdateTagsArgs = {
  body: TagFields;
  conds: TagSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<TagSearch>;
};


export type MutationUpdateUsersArgs = {
  body: UserFields;
  conds: UserSearch;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<UserSearch>;
};


export type MutationUploadPhotosArgs = {
  body: PhotoFields;
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<PhotoSearch>;
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Options = {
  __typename?: 'Options';
  list?: Maybe<Array<Maybe<Option>>>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type OptionsSearch = {
  filter?: InputMaybe<Array<Scalars['ID']['input']>>;
  include?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrderBy = {
  creationTime?: InputMaybe<Scalars['Int']['input']>;
  updateTime?: InputMaybe<Scalars['Int']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  viewCount?: InputMaybe<Scalars['Int']['input']>;
};

export type Photo = {
  __typename?: 'Photo';
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sourceFileName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PhotoFields = {
  files?: InputMaybe<Array<Scalars['Upload']['input']>>;
  payload?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type PhotoSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  sourceFileName?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  type?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Photos = {
  __typename?: 'Photos';
  change?: Maybe<Array<Maybe<Photo>>>;
  list?: Maybe<Array<Maybe<Photo>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type PublicKey = {
  __typename?: 'PublicKey';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  aiChats?: Maybe<AiChats>;
  algorithms?: Maybe<Algorithms>;
  appleTouchbar?: Maybe<Touchbar>;
  articles?: Maybe<Articles>;
  diaries?: Maybe<Diaries>;
  folders?: Maybe<Folders>;
  interviews?: Maybe<Interviews>;
  kanbanGroups?: Maybe<KanbanGroups>;
  kanbanTasks?: Maybe<KanbanTasks>;
  kanbans?: Maybe<Kanbans>;
  options?: Maybe<Options>;
  photos?: Maybe<Photos>;
  publicKey?: Maybe<PublicKey>;
  roles?: Maybe<Roles>;
  snippets?: Maybe<Snippets>;
  statsBill?: Maybe<StatsBill>;
  tags?: Maybe<Tags>;
  tagsWithArticles?: Maybe<Tags>;
  userInfo?: Maybe<UserInfo>;
  users?: Maybe<Users>;
};


export type QueryAiChatsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AiChatSearch>;
};


export type QueryAlgorithmsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<AlgorithmSearch>;
};


export type QueryArticlesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<ArticleSearch>;
};


export type QueryDiariesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<DiarySearch>;
};


export type QueryFoldersArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<FolderSearch>;
};


export type QueryInterviewsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<InterviewSearch>;
};


export type QueryKanbanGroupsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanGroupSearch>;
};


export type QueryKanbanTasksArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanTaskSearch>;
};


export type QueryKanbansArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<KanbanSearch>;
};


export type QueryOptionsArgs = {
  model: Scalars['String']['input'];
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<OptionsSearch>;
};


export type QueryPhotosArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<PhotoSearch>;
};


export type QueryRolesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<RoleSearch>;
};


export type QuerySnippetsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<SnippetSearch>;
};


export type QueryStatsBillArgs = {
  search?: InputMaybe<StatsBillSearch>;
};


export type QueryTagsArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<TagSearch>;
};


export type QueryTagsWithArticlesArgs = {
  orderBy?: InputMaybe<OrderBy>;
  search?: InputMaybe<ArticleSearch>;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<OrderBy>;
  pagination?: InputMaybe<Scalars['Pagination']['input']>;
  search?: InputMaybe<UserSearch>;
};

export type Role = {
  __typename?: 'Role';
  auth?: Maybe<Array<Maybe<Scalars['Auth']['output']>>>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  desc?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type RoleFields = {
  auth?: InputMaybe<Array<InputMaybe<Scalars['Auth']['input']>>>;
  desc?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleSearch = {
  creator?: InputMaybe<Scalars['ID']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export enum RoleType {
  Admin = 'ADMIN',
  Tourist = 'TOURIST'
}

export type Roles = {
  __typename?: 'Roles';
  change?: Maybe<Array<Maybe<Role>>>;
  list?: Maybe<Array<Maybe<Role>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Snippet = {
  __typename?: 'Snippet';
  content?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type SnippetFields = {
  content?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type SnippetSearch = {
  content?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Snippets = {
  __typename?: 'Snippets';
  change?: Maybe<Array<Maybe<Snippet>>>;
  list?: Maybe<Array<Maybe<Snippet>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type StatsBill = {
  __typename?: 'StatsBill';
  groupWithName?: Maybe<Array<Maybe<StatsBillItem>>>;
  message?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<Bill>;
};

export type StatsBillItem = {
  __typename?: 'StatsBillItem';
  diaries?: Maybe<Array<Maybe<Diary>>>;
  expend?: Maybe<Scalars['Float']['output']>;
  income?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StatsBillSearch = {
  name?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  span?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Tag>;
  status?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type TagFields = {
  color?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
};

export type TagSearch = {
  color?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Tags = {
  __typename?: 'Tags';
  change?: Maybe<Array<Maybe<Tag>>>;
  list?: Maybe<Array<Maybe<Tag>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type Touchbar = {
  __typename?: 'Touchbar';
  latestWeight?: Maybe<Scalars['Float']['output']>;
  monthlyBill?: Maybe<MonthlyBill>;
};

export type User = {
  __typename?: 'User';
  account?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  creationTime?: Maybe<Scalars['Date']['output']>;
  creator?: Maybe<User>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  sex?: Maybe<Scalars['Int']['output']>;
  updateTime?: Maybe<Scalars['Date']['output']>;
  updater?: Maybe<User>;
};

export type UserFields = {
  account?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
};

export type UserInfo = {
  __typename?: 'UserInfo';
  message?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserSearch = {
  account?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['ID']['input']>;
  endCreationTime?: InputMaybe<Scalars['Date']['input']>;
  endUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Scalars['Int']['input']>;
  startCreationTime?: InputMaybe<Scalars['Date']['input']>;
  startUpdateTime?: InputMaybe<Scalars['Date']['input']>;
  updater?: InputMaybe<Scalars['ID']['input']>;
};

export type Users = {
  __typename?: 'Users';
  change?: Maybe<Array<Maybe<User>>>;
  list?: Maybe<Array<Maybe<User>>>;
  message?: Maybe<Scalars['String']['output']>;
  pagination?: Maybe<Scalars['Pagination']['output']>;
};

export type UserItemFragment = { __typename?: 'User', id?: string | null, sex?: number | null, bio?: string | null, name?: string | null, avatar?: string | null, account?: string | null, role?: { __typename?: 'Role', id?: string | null, desc?: string | null, auth?: Array<any | null> | null, name?: string | null } | null } & { ' $fragmentName'?: 'UserItemFragment' };

export type UserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type UserInfoQuery = { __typename?: 'Query', userInfo?: { __typename?: 'UserInfo', message?: string | null, user?: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserItemFragment': UserItemFragment } }
    ) | null } | null };

export const UserItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserItemFragment, unknown>;
export const UserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sex"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"account"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"auth"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserInfoQuery, UserInfoQueryVariables>;