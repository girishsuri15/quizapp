import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addQuestionToQuize: ResponseInfo;
  createQuize: QuizeResponse;
  deleteQuize: ResponseInfo;
  login: User;
  register: User;
  updateQuestionToQuize: ResponseInfo;
  updateQuize: QuizeResponse;
};


export type MutationAddQuestionToQuizeArgs = {
  input: QuestionWriteRequest;
  quizeId: Scalars['ID'];
};


export type MutationCreateQuizeArgs = {
  title: Scalars['String'];
};


export type MutationDeleteQuizeArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationUpdateQuestionToQuizeArgs = {
  input: QuestionWriteRequest;
  questionId: Scalars['ID'];
  quizeId: Scalars['ID'];
};


export type MutationUpdateQuizeArgs = {
  input: QuizeWriteRequest;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  quize?: Maybe<Quize>;
  quizeAttendByUser: Array<Quize>;
  quizeCreatedByUser: Array<Quize>;
  quizes: Array<Quize>;
};


export type QueryQuizeArgs = {
  id: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  id: Scalars['ID'];
  pageInfo: PageInfo;
  possibleAnswer: Array<Scalars['String']>;
  score: Scalars['Float'];
  title: Scalars['String'];
  typeOfQuestion: TypeOfQuestion;
};

export type QuestionWriteRequest = {
  __typename?: 'QuestionWriteRequest';
  answer: Array<Scalars['String']>;
  possibleAnswer: Array<Scalars['String']>;
  title: Scalars['String'];
  typeOfQuestion: TypeOfQuestion;
};

export type Quize = {
  __typename?: 'Quize';
  createdBy: User;
  id: Scalars['ID'];
  pageInfo: PageInfo;
  questions: Array<Question>;
  score: Scalars['Float'];
  title: Scalars['String'];
};

export type QuizeCreatedResult = {
  __typename?: 'QuizeCreatedResult';
  code: ResponseCode;
  quize: Quize;
};

export type QuizeReaderResult = {
  __typename?: 'QuizeReaderResult';
  createdByMe?: Maybe<Array<Maybe<Quize>>>;
  global?: Maybe<Array<Maybe<Quize>>>;
  submittedByMe?: Maybe<Array<Maybe<Quize>>>;
};

export type QuizeResponse = {
  __typename?: 'QuizeResponse';
  data?: Maybe<Quize>;
  response: ResponseInfo;
};

export type QuizeWriteRequest = {
  __typename?: 'QuizeWriteRequest';
  id: Scalars['ID'];
  questions: Array<Question>;
  title: Scalars['String'];
};

export enum ResponseCode {
  Created = 'Created',
  Deleted = 'Deleted',
  Error = 'Error',
  Modifyed = 'Modifyed'
}

export type ResponseInfo = {
  __typename?: 'ResponseInfo';
  code: ResponseCode;
  message: Scalars['String'];
  sucess: Scalars['Boolean'];
};

export enum Status {
  Active = 'Active',
  Delete = 'Delete',
  Published = 'Published'
}

export enum TypeOfQuestion {
  MultipleCorrect = 'MultipleCorrect',
  SingleCorrect = 'SingleCorrect'
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  token: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionWriteRequest: ResolverTypeWrapper<QuestionWriteRequest>;
  Quize: ResolverTypeWrapper<Quize>;
  QuizeCreatedResult: ResolverTypeWrapper<QuizeCreatedResult>;
  QuizeReaderResult: ResolverTypeWrapper<QuizeReaderResult>;
  QuizeResponse: ResolverTypeWrapper<QuizeResponse>;
  QuizeWriteRequest: ResolverTypeWrapper<QuizeWriteRequest>;
  ResponseCode: ResponseCode;
  ResponseInfo: ResolverTypeWrapper<ResponseInfo>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  TypeOfQuestion: TypeOfQuestion;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Mutation: {};
  PageInfo: PageInfo;
  Query: {};
  Question: Question;
  QuestionWriteRequest: QuestionWriteRequest;
  Quize: Quize;
  QuizeCreatedResult: QuizeCreatedResult;
  QuizeReaderResult: QuizeReaderResult;
  QuizeResponse: QuizeResponse;
  QuizeWriteRequest: QuizeWriteRequest;
  ResponseInfo: ResponseInfo;
  String: Scalars['String'];
  User: User;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addQuestionToQuize?: Resolver<ResolversTypes['ResponseInfo'], ParentType, ContextType, RequireFields<MutationAddQuestionToQuizeArgs, 'input' | 'quizeId'>>;
  createQuize?: Resolver<ResolversTypes['QuizeResponse'], ParentType, ContextType, RequireFields<MutationCreateQuizeArgs, 'title'>>;
  deleteQuize?: Resolver<ResolversTypes['ResponseInfo'], ParentType, ContextType, RequireFields<MutationDeleteQuizeArgs, 'id'>>;
  login?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input' | 'password'>>;
  register?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'password' | 'username'>>;
  updateQuestionToQuize?: Resolver<ResolversTypes['ResponseInfo'], ParentType, ContextType, RequireFields<MutationUpdateQuestionToQuizeArgs, 'input' | 'questionId' | 'quizeId'>>;
  updateQuize?: Resolver<ResolversTypes['QuizeResponse'], ParentType, ContextType, RequireFields<MutationUpdateQuizeArgs, 'input'>>;
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  quize?: Resolver<Maybe<ResolversTypes['Quize']>, ParentType, ContextType, RequireFields<QueryQuizeArgs, 'id'>>;
  quizeAttendByUser?: Resolver<Array<ResolversTypes['Quize']>, ParentType, ContextType>;
  quizeCreatedByUser?: Resolver<Array<ResolversTypes['Quize']>, ParentType, ContextType>;
  quizes?: Resolver<Array<ResolversTypes['Quize']>, ParentType, ContextType>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  possibleAnswer?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeOfQuestion?: Resolver<ResolversTypes['TypeOfQuestion'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuestionWriteRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionWriteRequest'] = ResolversParentTypes['QuestionWriteRequest']> = ResolversObject<{
  answer?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  possibleAnswer?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  typeOfQuestion?: Resolver<ResolversTypes['TypeOfQuestion'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quize'] = ResolversParentTypes['Quize']> = ResolversObject<{
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizeCreatedResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuizeCreatedResult'] = ResolversParentTypes['QuizeCreatedResult']> = ResolversObject<{
  code?: Resolver<ResolversTypes['ResponseCode'], ParentType, ContextType>;
  quize?: Resolver<ResolversTypes['Quize'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizeReaderResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuizeReaderResult'] = ResolversParentTypes['QuizeReaderResult']> = ResolversObject<{
  createdByMe?: Resolver<Maybe<Array<Maybe<ResolversTypes['Quize']>>>, ParentType, ContextType>;
  global?: Resolver<Maybe<Array<Maybe<ResolversTypes['Quize']>>>, ParentType, ContextType>;
  submittedByMe?: Resolver<Maybe<Array<Maybe<ResolversTypes['Quize']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuizeResponse'] = ResolversParentTypes['QuizeResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['Quize']>, ParentType, ContextType>;
  response?: Resolver<ResolversTypes['ResponseInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuizeWriteRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuizeWriteRequest'] = ResolversParentTypes['QuizeWriteRequest']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseInfo'] = ResolversParentTypes['ResponseInfo']> = ResolversObject<{
  code?: Resolver<ResolversTypes['ResponseCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sucess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionWriteRequest?: QuestionWriteRequestResolvers<ContextType>;
  Quize?: QuizeResolvers<ContextType>;
  QuizeCreatedResult?: QuizeCreatedResultResolvers<ContextType>;
  QuizeReaderResult?: QuizeReaderResultResolvers<ContextType>;
  QuizeResponse?: QuizeResponseResolvers<ContextType>;
  QuizeWriteRequest?: QuizeWriteRequestResolvers<ContextType>;
  ResponseInfo?: ResponseInfoResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

