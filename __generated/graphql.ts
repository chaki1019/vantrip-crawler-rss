/* eslint-disable */
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  geography: { input: unknown; output: unknown };
  geometry: { input: unknown; output: unknown };
  numeric: { input: number; output: number };
  smallint: { input: number; output: number };
  timestamp: { input: string; output: string };
  uuid: { input: string; output: string };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type SampleOutput = {
  __typename?: "SampleOutput";
  flag: Scalars["Boolean"]["output"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** ブロックユーザー */
export type Block_User = {
  __typename?: "block_user";
  /** 作成ユーザーID */
  created_by: Scalars["uuid"]["output"];
  /** An object relationship */
  user: Users;
  /** ブロック対象のユーザーID */
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "block_user" */
export type Block_User_Aggregate = {
  __typename?: "block_user_aggregate";
  aggregate?: Maybe<Block_User_Aggregate_Fields>;
  nodes: Array<Block_User>;
};

export type Block_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Block_User_Aggregate_Bool_Exp_Count>;
};

export type Block_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Block_User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Block_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "block_user" */
export type Block_User_Aggregate_Fields = {
  __typename?: "block_user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Block_User_Max_Fields>;
  min?: Maybe<Block_User_Min_Fields>;
};

/** aggregate fields of "block_user" */
export type Block_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Block_User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "block_user" */
export type Block_User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Block_User_Max_Order_By>;
  min?: InputMaybe<Block_User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "block_user" */
export type Block_User_Arr_Rel_Insert_Input = {
  data: Array<Block_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Block_User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "block_user". All fields are combined with a logical 'AND'. */
export type Block_User_Bool_Exp = {
  _and?: InputMaybe<Array<Block_User_Bool_Exp>>;
  _not?: InputMaybe<Block_User_Bool_Exp>;
  _or?: InputMaybe<Array<Block_User_Bool_Exp>>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "block_user" */
export enum Block_User_Constraint {
  /** unique or primary key constraint on columns "user_id", "created_by" */
  BlockUserPk = "block_user_pk",
}

/** input type for inserting data into table "block_user" */
export type Block_User_Insert_Input = {
  /** 作成ユーザーID */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** ブロック対象のユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Block_User_Max_Fields = {
  __typename?: "block_user_max_fields";
  /** 作成ユーザーID */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ブロック対象のユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "block_user" */
export type Block_User_Max_Order_By = {
  /** 作成ユーザーID */
  created_by?: InputMaybe<Order_By>;
  /** ブロック対象のユーザーID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Block_User_Min_Fields = {
  __typename?: "block_user_min_fields";
  /** 作成ユーザーID */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ブロック対象のユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "block_user" */
export type Block_User_Min_Order_By = {
  /** 作成ユーザーID */
  created_by?: InputMaybe<Order_By>;
  /** ブロック対象のユーザーID */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "block_user" */
export type Block_User_Mutation_Response = {
  __typename?: "block_user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Block_User>;
};

/** on_conflict condition type for table "block_user" */
export type Block_User_On_Conflict = {
  constraint: Block_User_Constraint;
  update_columns?: Array<Block_User_Update_Column>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

/** Ordering options when selecting data from "block_user". */
export type Block_User_Order_By = {
  created_by?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: block_user */
export type Block_User_Pk_Columns_Input = {
  /** 作成ユーザーID */
  created_by: Scalars["uuid"]["input"];
  /** ブロック対象のユーザーID */
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "block_user" */
export enum Block_User_Select_Column {
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "block_user" */
export type Block_User_Set_Input = {
  /** 作成ユーザーID */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ブロック対象のユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "block_user" */
export type Block_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Block_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Block_User_Stream_Cursor_Value_Input = {
  /** 作成ユーザーID */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ブロック対象のユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "block_user" */
export enum Block_User_Update_Column {
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  UserId = "user_id",
}

export type Block_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Block_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Block_User_Bool_Exp;
};

/** お気に入り */
export type Bookmark = {
  __typename?: "bookmark";
  created_at: Scalars["timestamp"]["output"];
  /** An object relationship */
  poi: Poi;
  poi_id: Scalars["uuid"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "bookmark" */
export type Bookmark_Aggregate = {
  __typename?: "bookmark_aggregate";
  aggregate?: Maybe<Bookmark_Aggregate_Fields>;
  nodes: Array<Bookmark>;
};

export type Bookmark_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bookmark_Aggregate_Bool_Exp_Count>;
};

export type Bookmark_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bookmark_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Bookmark_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bookmark" */
export type Bookmark_Aggregate_Fields = {
  __typename?: "bookmark_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Bookmark_Max_Fields>;
  min?: Maybe<Bookmark_Min_Fields>;
};

/** aggregate fields of "bookmark" */
export type Bookmark_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bookmark_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "bookmark" */
export type Bookmark_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bookmark_Max_Order_By>;
  min?: InputMaybe<Bookmark_Min_Order_By>;
};

/** input type for inserting array relation for remote table "bookmark" */
export type Bookmark_Arr_Rel_Insert_Input = {
  data: Array<Bookmark_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};

/** Boolean expression to filter rows from the table "bookmark". All fields are combined with a logical 'AND'. */
export type Bookmark_Bool_Exp = {
  _and?: InputMaybe<Array<Bookmark_Bool_Exp>>;
  _not?: InputMaybe<Bookmark_Bool_Exp>;
  _or?: InputMaybe<Array<Bookmark_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "bookmark" */
export enum Bookmark_Constraint {
  /** unique or primary key constraint on columns "user_id", "poi_id" */
  BookmarkPk = "bookmark_pk",
}

/** input type for inserting data into table "bookmark" */
export type Bookmark_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Bookmark_Max_Fields = {
  __typename?: "bookmark_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "bookmark" */
export type Bookmark_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bookmark_Min_Fields = {
  __typename?: "bookmark_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "bookmark" */
export type Bookmark_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bookmark" */
export type Bookmark_Mutation_Response = {
  __typename?: "bookmark_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Bookmark>;
};

/** on_conflict condition type for table "bookmark" */
export type Bookmark_On_Conflict = {
  constraint: Bookmark_Constraint;
  update_columns?: Array<Bookmark_Update_Column>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

/** Ordering options when selecting data from "bookmark". */
export type Bookmark_Order_By = {
  created_at?: InputMaybe<Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bookmark */
export type Bookmark_Pk_Columns_Input = {
  poi_id: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "bookmark" */
export enum Bookmark_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "bookmark" */
export type Bookmark_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "bookmark" */
export type Bookmark_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bookmark_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bookmark_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "bookmark" */
export enum Bookmark_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  UserId = "user_id",
}

export type Bookmark_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bookmark_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bookmark_Bool_Exp;
};

/** お問い合わせ */
export type Contact = {
  __typename?: "contact";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** メールアドレス */
  email: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  /** 問い合わせ内容 */
  message: Scalars["String"]["output"];
  /** 名前 */
  name: Scalars["String"]["output"];
  /** 問い合わせタイプ */
  type: Scalars["String"]["output"];
  /** ユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: "contact_aggregate";
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: "contact_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactPk = "contact_pk",
}

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 問い合わせ内容 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 問い合わせタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: "contact_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 問い合わせ内容 */
  message?: Maybe<Scalars["String"]["output"]>;
  /** 名前 */
  name?: Maybe<Scalars["String"]["output"]>;
  /** 問い合わせタイプ */
  type?: Maybe<Scalars["String"]["output"]>;
  /** ユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: "contact_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 問い合わせ内容 */
  message?: Maybe<Scalars["String"]["output"]>;
  /** 名前 */
  name?: Maybe<Scalars["String"]["output"]>;
  /** 問い合わせタイプ */
  type?: Maybe<Scalars["String"]["output"]>;
  /** ユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: "contact_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Message = "message",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 問い合わせ内容 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 問い合わせタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "contact" */
export type Contact_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 問い合わせ内容 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 問い合わせタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Message = "message",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "user_id",
}

export type Contact_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Set_Input>;
  /** filter the rows which have to be updated */
  where: Contact_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** アカウント登録前ユーザー */
export type Draft_User = {
  __typename?: "draft_user";
  created_at: Scalars["timestamp"]["output"];
  id: Scalars["uuid"]["output"];
  /** IDトークン */
  id_token: Scalars["String"]["output"];
  provider_id: Scalars["String"]["output"];
};

/** aggregated selection of "draft_user" */
export type Draft_User_Aggregate = {
  __typename?: "draft_user_aggregate";
  aggregate?: Maybe<Draft_User_Aggregate_Fields>;
  nodes: Array<Draft_User>;
};

/** aggregate fields of "draft_user" */
export type Draft_User_Aggregate_Fields = {
  __typename?: "draft_user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Draft_User_Max_Fields>;
  min?: Maybe<Draft_User_Min_Fields>;
};

/** aggregate fields of "draft_user" */
export type Draft_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Draft_User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "draft_user". All fields are combined with a logical 'AND'. */
export type Draft_User_Bool_Exp = {
  _and?: InputMaybe<Array<Draft_User_Bool_Exp>>;
  _not?: InputMaybe<Draft_User_Bool_Exp>;
  _or?: InputMaybe<Array<Draft_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  provider_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft_user" */
export enum Draft_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  DraftUserPk = "draft_user_pk",
}

/** input type for inserting data into table "draft_user" */
export type Draft_User_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** IDトークン */
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  provider_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Draft_User_Max_Fields = {
  __typename?: "draft_user_max_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** IDトークン */
  id_token?: Maybe<Scalars["String"]["output"]>;
  provider_id?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Draft_User_Min_Fields = {
  __typename?: "draft_user_min_fields";
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** IDトークン */
  id_token?: Maybe<Scalars["String"]["output"]>;
  provider_id?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "draft_user" */
export type Draft_User_Mutation_Response = {
  __typename?: "draft_user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Draft_User>;
};

/** on_conflict condition type for table "draft_user" */
export type Draft_User_On_Conflict = {
  constraint: Draft_User_Constraint;
  update_columns?: Array<Draft_User_Update_Column>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

/** Ordering options when selecting data from "draft_user". */
export type Draft_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  provider_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: draft_user */
export type Draft_User_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "draft_user" */
export enum Draft_User_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  ProviderId = "provider_id",
}

/** input type for updating data in table "draft_user" */
export type Draft_User_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** IDトークン */
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  provider_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "draft_user" */
export type Draft_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Draft_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Draft_User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** IDトークン */
  id_token?: InputMaybe<Scalars["String"]["input"]>;
  provider_id?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "draft_user" */
export enum Draft_User_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "id_token",
  /** column name */
  ProviderId = "provider_id",
}

export type Draft_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Draft_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Draft_User_Bool_Exp;
};

/** フィードバック */
export type Feedback = {
  __typename?: "feedback";
  category: Scalars["smallint"]["output"];
  created_at: Scalars["timestamp"]["output"];
  created_by: Scalars["uuid"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  /** 処理日時 */
  done_at?: Maybe<Scalars["timestamp"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** 処理済みフラグ */
  is_done: Scalars["Boolean"]["output"];
  /** An object relationship */
  poi: Poi;
  /** An object relationship */
  poi_draft?: Maybe<Poi_Draft>;
  poi_id: Scalars["uuid"]["output"];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "feedback" */
export type Feedback_Aggregate = {
  __typename?: "feedback_aggregate";
  aggregate?: Maybe<Feedback_Aggregate_Fields>;
  nodes: Array<Feedback>;
};

/** aggregate fields of "feedback" */
export type Feedback_Aggregate_Fields = {
  __typename?: "feedback_aggregate_fields";
  avg?: Maybe<Feedback_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Feedback_Max_Fields>;
  min?: Maybe<Feedback_Min_Fields>;
  stddev?: Maybe<Feedback_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Sum_Fields>;
  var_pop?: Maybe<Feedback_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Variance_Fields>;
};

/** aggregate fields of "feedback" */
export type Feedback_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Feedback_Avg_Fields = {
  __typename?: "feedback_avg_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "feedback". All fields are combined with a logical 'AND'. */
export type Feedback_Bool_Exp = {
  _and?: InputMaybe<Array<Feedback_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Bool_Exp>>;
  category?: InputMaybe<Smallint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  done_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_done?: InputMaybe<Boolean_Comparison_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_draft?: InputMaybe<Poi_Draft_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "feedback" */
export enum Feedback_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeedbackPk = "feedback_pk",
}

/** input type for incrementing numeric columns in table "feedback" */
export type Feedback_Inc_Input = {
  category?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "feedback" */
export type Feedback_Insert_Input = {
  category?: InputMaybe<Scalars["smallint"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** 処理日時 */
  done_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 処理済みフラグ */
  is_done?: InputMaybe<Scalars["Boolean"]["input"]>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  poi_draft?: InputMaybe<Poi_Draft_Obj_Rel_Insert_Input>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Feedback_Max_Fields = {
  __typename?: "feedback_max_fields";
  category?: Maybe<Scalars["smallint"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** 処理日時 */
  done_at?: Maybe<Scalars["timestamp"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Feedback_Min_Fields = {
  __typename?: "feedback_min_fields";
  category?: Maybe<Scalars["smallint"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** 処理日時 */
  done_at?: Maybe<Scalars["timestamp"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "feedback" */
export type Feedback_Mutation_Response = {
  __typename?: "feedback_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback>;
};

/** on_conflict condition type for table "feedback" */
export type Feedback_On_Conflict = {
  constraint: Feedback_Constraint;
  update_columns?: Array<Feedback_Update_Column>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback". */
export type Feedback_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  done_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_done?: InputMaybe<Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_draft?: InputMaybe<Poi_Draft_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: feedback */
export type Feedback_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "feedback" */
export enum Feedback_Select_Column {
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  DoneAt = "done_at",
  /** column name */
  Id = "id",
  /** column name */
  IsDone = "is_done",
  /** column name */
  PoiId = "poi_id",
}

/** input type for updating data in table "feedback" */
export type Feedback_Set_Input = {
  category?: InputMaybe<Scalars["smallint"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** 処理日時 */
  done_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 処理済みフラグ */
  is_done?: InputMaybe<Scalars["Boolean"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Feedback_Stddev_Fields = {
  __typename?: "feedback_stddev_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Stddev_Pop_Fields = {
  __typename?: "feedback_stddev_pop_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Stddev_Samp_Fields = {
  __typename?: "feedback_stddev_samp_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "feedback" */
export type Feedback_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feedback_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feedback_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars["smallint"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** 処理日時 */
  done_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 処理済みフラグ */
  is_done?: InputMaybe<Scalars["Boolean"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Feedback_Sum_Fields = {
  __typename?: "feedback_sum_fields";
  category?: Maybe<Scalars["smallint"]["output"]>;
};

/** update columns of table "feedback" */
export enum Feedback_Update_Column {
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  DoneAt = "done_at",
  /** column name */
  Id = "id",
  /** column name */
  IsDone = "is_done",
  /** column name */
  PoiId = "poi_id",
}

export type Feedback_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Feedback_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feedback_Set_Input>;
  /** filter the rows which have to be updated */
  where: Feedback_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Feedback_Var_Pop_Fields = {
  __typename?: "feedback_var_pop_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Feedback_Var_Samp_Fields = {
  __typename?: "feedback_var_samp_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Feedback_Variance_Fields = {
  __typename?: "feedback_variance_fields";
  category?: Maybe<Scalars["Float"]["output"]>;
};

export type Geography_Cast_Exp = {
  geometry?: InputMaybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: InputMaybe<Geography_Cast_Exp>;
  _eq?: InputMaybe<Scalars["geography"]["input"]>;
  _gt?: InputMaybe<Scalars["geography"]["input"]>;
  _gte?: InputMaybe<Scalars["geography"]["input"]>;
  _in?: InputMaybe<Array<Scalars["geography"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["geography"]["input"]>;
  _lte?: InputMaybe<Scalars["geography"]["input"]>;
  _neq?: InputMaybe<Scalars["geography"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["geography"]["input"]>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: InputMaybe<Scalars["geography"]["input"]>;
};

export type Geometry_Cast_Exp = {
  geography?: InputMaybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: InputMaybe<Geometry_Cast_Exp>;
  _eq?: InputMaybe<Scalars["geometry"]["input"]>;
  _gt?: InputMaybe<Scalars["geometry"]["input"]>;
  _gte?: InputMaybe<Scalars["geometry"]["input"]>;
  _in?: InputMaybe<Array<Scalars["geometry"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["geometry"]["input"]>;
  _lte?: InputMaybe<Scalars["geometry"]["input"]>;
  _neq?: InputMaybe<Scalars["geometry"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["geometry"]["input"]>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column contain the given geometry value */
  _st_contains?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column cross the given geometry value */
  _st_crosses?: InputMaybe<Scalars["geometry"]["input"]>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: InputMaybe<Scalars["geometry"]["input"]>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: InputMaybe<Scalars["geometry"]["input"]>;
  /** is the column contained in the given geometry value */
  _st_within?: InputMaybe<Scalars["geometry"]["input"]>;
};

/** columns and relationships of "japan_polygon" */
export type Japan_Polygon = {
  __typename?: "japan_polygon";
  geom?: Maybe<Scalars["geometry"]["output"]>;
  id: Scalars["uuid"]["output"];
};

/** aggregated selection of "japan_polygon" */
export type Japan_Polygon_Aggregate = {
  __typename?: "japan_polygon_aggregate";
  aggregate?: Maybe<Japan_Polygon_Aggregate_Fields>;
  nodes: Array<Japan_Polygon>;
};

/** aggregate fields of "japan_polygon" */
export type Japan_Polygon_Aggregate_Fields = {
  __typename?: "japan_polygon_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Japan_Polygon_Max_Fields>;
  min?: Maybe<Japan_Polygon_Min_Fields>;
};

/** aggregate fields of "japan_polygon" */
export type Japan_Polygon_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Japan_Polygon_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "japan_polygon". All fields are combined with a logical 'AND'. */
export type Japan_Polygon_Bool_Exp = {
  _and?: InputMaybe<Array<Japan_Polygon_Bool_Exp>>;
  _not?: InputMaybe<Japan_Polygon_Bool_Exp>;
  _or?: InputMaybe<Array<Japan_Polygon_Bool_Exp>>;
  geom?: InputMaybe<Geometry_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "japan_polygon" */
export enum Japan_Polygon_Constraint {
  /** unique or primary key constraint on columns "id" */
  JapanPolygonPk = "japan_polygon_pk",
}

/** input type for inserting data into table "japan_polygon" */
export type Japan_Polygon_Insert_Input = {
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Japan_Polygon_Max_Fields = {
  __typename?: "japan_polygon_max_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type Japan_Polygon_Min_Fields = {
  __typename?: "japan_polygon_min_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "japan_polygon" */
export type Japan_Polygon_Mutation_Response = {
  __typename?: "japan_polygon_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Japan_Polygon>;
};

/** on_conflict condition type for table "japan_polygon" */
export type Japan_Polygon_On_Conflict = {
  constraint: Japan_Polygon_Constraint;
  update_columns?: Array<Japan_Polygon_Update_Column>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

/** Ordering options when selecting data from "japan_polygon". */
export type Japan_Polygon_Order_By = {
  geom?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: japan_polygon */
export type Japan_Polygon_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "japan_polygon" */
export enum Japan_Polygon_Select_Column {
  /** column name */
  Geom = "geom",
  /** column name */
  Id = "id",
}

/** input type for updating data in table "japan_polygon" */
export type Japan_Polygon_Set_Input = {
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "japan_polygon" */
export type Japan_Polygon_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Japan_Polygon_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Japan_Polygon_Stream_Cursor_Value_Input = {
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "japan_polygon" */
export enum Japan_Polygon_Update_Column {
  /** column name */
  Geom = "geom",
  /** column name */
  Id = "id",
}

export type Japan_Polygon_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Japan_Polygon_Set_Input>;
  /** filter the rows which have to be updated */
  where: Japan_Polygon_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** Firebase Authenticationからユーザー削除 */
  deleteUser?: Maybe<SampleOutput>;
  /** delete data from the table: "block_user" */
  delete_block_user?: Maybe<Block_User_Mutation_Response>;
  /** delete single row from the table: "block_user" */
  delete_block_user_by_pk?: Maybe<Block_User>;
  /** delete data from the table: "bookmark" */
  delete_bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** delete single row from the table: "bookmark" */
  delete_bookmark_by_pk?: Maybe<Bookmark>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "draft_user" */
  delete_draft_user?: Maybe<Draft_User_Mutation_Response>;
  /** delete single row from the table: "draft_user" */
  delete_draft_user_by_pk?: Maybe<Draft_User>;
  /** delete data from the table: "feedback" */
  delete_feedback?: Maybe<Feedback_Mutation_Response>;
  /** delete single row from the table: "feedback" */
  delete_feedback_by_pk?: Maybe<Feedback>;
  /** delete data from the table: "japan_polygon" */
  delete_japan_polygon?: Maybe<Japan_Polygon_Mutation_Response>;
  /** delete single row from the table: "japan_polygon" */
  delete_japan_polygon_by_pk?: Maybe<Japan_Polygon>;
  /** delete data from the table: "notification" */
  delete_notification?: Maybe<Notification_Mutation_Response>;
  /** delete single row from the table: "notification" */
  delete_notification_by_pk?: Maybe<Notification>;
  /** delete data from the table: "poi" */
  delete_poi?: Maybe<Poi_Mutation_Response>;
  /** delete single row from the table: "poi" */
  delete_poi_by_pk?: Maybe<Poi>;
  /** delete data from the table: "poi_draft" */
  delete_poi_draft?: Maybe<Poi_Draft_Mutation_Response>;
  /** delete single row from the table: "poi_draft" */
  delete_poi_draft_by_pk?: Maybe<Poi_Draft>;
  /** delete data from the table: "poi_draft_photo" */
  delete_poi_draft_photo?: Maybe<Poi_Draft_Photo_Mutation_Response>;
  /** delete data from the table: "poi_photo" */
  delete_poi_photo?: Maybe<Poi_Photo_Mutation_Response>;
  /** delete single row from the table: "poi_photo" */
  delete_poi_photo_by_pk?: Maybe<Poi_Photo>;
  /** delete data from the table: "poi_rate" */
  delete_poi_rate?: Maybe<Poi_Rate_Mutation_Response>;
  /** delete single row from the table: "poi_rate" */
  delete_poi_rate_by_pk?: Maybe<Poi_Rate>;
  /** delete data from the table: "poi_rate_draft" */
  delete_poi_rate_draft?: Maybe<Poi_Rate_Draft_Mutation_Response>;
  /** delete single row from the table: "poi_rate_draft" */
  delete_poi_rate_draft_by_pk?: Maybe<Poi_Rate_Draft>;
  /** delete data from the table: "post" */
  delete_post?: Maybe<Post_Mutation_Response>;
  /** delete single row from the table: "post" */
  delete_post_by_pk?: Maybe<Post>;
  /** delete data from the table: "post_draft" */
  delete_post_draft?: Maybe<Post_Draft_Mutation_Response>;
  /** delete single row from the table: "post_draft" */
  delete_post_draft_by_pk?: Maybe<Post_Draft>;
  /** delete data from the table: "post_like" */
  delete_post_like?: Maybe<Post_Like_Mutation_Response>;
  /** delete single row from the table: "post_like" */
  delete_post_like_by_pk?: Maybe<Post_Like>;
  /** delete data from the table: "post_photo" */
  delete_post_photo?: Maybe<Post_Photo_Mutation_Response>;
  /** delete single row from the table: "post_photo" */
  delete_post_photo_by_pk?: Maybe<Post_Photo>;
  /** delete data from the table: "report_post" */
  delete_report_post?: Maybe<Report_Post_Mutation_Response>;
  /** delete single row from the table: "report_post" */
  delete_report_post_by_pk?: Maybe<Report_Post>;
  /** delete data from the table: "user_location" */
  delete_user_location?: Maybe<User_Location_Mutation_Response>;
  /** delete single row from the table: "user_location" */
  delete_user_location_by_pk?: Maybe<User_Location>;
  /** delete data from the table: "user_spot" */
  delete_user_spot?: Maybe<User_Spot_Mutation_Response>;
  /** delete single row from the table: "user_spot" */
  delete_user_spot_by_pk?: Maybe<User_Spot>;
  /** delete data from the table: "user_spot_photo" */
  delete_user_spot_photo?: Maybe<User_Spot_Photo_Mutation_Response>;
  /** delete single row from the table: "user_spot_photo" */
  delete_user_spot_photo_by_pk?: Maybe<User_Spot_Photo>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "block_user" */
  insert_block_user?: Maybe<Block_User_Mutation_Response>;
  /** insert a single row into the table: "block_user" */
  insert_block_user_one?: Maybe<Block_User>;
  /** insert data into the table: "bookmark" */
  insert_bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** insert a single row into the table: "bookmark" */
  insert_bookmark_one?: Maybe<Bookmark>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "draft_user" */
  insert_draft_user?: Maybe<Draft_User_Mutation_Response>;
  /** insert a single row into the table: "draft_user" */
  insert_draft_user_one?: Maybe<Draft_User>;
  /** insert data into the table: "feedback" */
  insert_feedback?: Maybe<Feedback_Mutation_Response>;
  /** insert a single row into the table: "feedback" */
  insert_feedback_one?: Maybe<Feedback>;
  /** insert data into the table: "japan_polygon" */
  insert_japan_polygon?: Maybe<Japan_Polygon_Mutation_Response>;
  /** insert a single row into the table: "japan_polygon" */
  insert_japan_polygon_one?: Maybe<Japan_Polygon>;
  /** insert data into the table: "notification" */
  insert_notification?: Maybe<Notification_Mutation_Response>;
  /** insert a single row into the table: "notification" */
  insert_notification_one?: Maybe<Notification>;
  /** insert data into the table: "poi" */
  insert_poi?: Maybe<Poi_Mutation_Response>;
  /** insert data into the table: "poi_draft" */
  insert_poi_draft?: Maybe<Poi_Draft_Mutation_Response>;
  /** insert a single row into the table: "poi_draft" */
  insert_poi_draft_one?: Maybe<Poi_Draft>;
  /** insert data into the table: "poi_draft_photo" */
  insert_poi_draft_photo?: Maybe<Poi_Draft_Photo_Mutation_Response>;
  /** insert a single row into the table: "poi_draft_photo" */
  insert_poi_draft_photo_one?: Maybe<Poi_Draft_Photo>;
  /** insert a single row into the table: "poi" */
  insert_poi_one?: Maybe<Poi>;
  /** insert data into the table: "poi_photo" */
  insert_poi_photo?: Maybe<Poi_Photo_Mutation_Response>;
  /** insert a single row into the table: "poi_photo" */
  insert_poi_photo_one?: Maybe<Poi_Photo>;
  /** insert data into the table: "poi_rate" */
  insert_poi_rate?: Maybe<Poi_Rate_Mutation_Response>;
  /** insert data into the table: "poi_rate_draft" */
  insert_poi_rate_draft?: Maybe<Poi_Rate_Draft_Mutation_Response>;
  /** insert a single row into the table: "poi_rate_draft" */
  insert_poi_rate_draft_one?: Maybe<Poi_Rate_Draft>;
  /** insert a single row into the table: "poi_rate" */
  insert_poi_rate_one?: Maybe<Poi_Rate>;
  /** insert data into the table: "post" */
  insert_post?: Maybe<Post_Mutation_Response>;
  /** insert data into the table: "post_draft" */
  insert_post_draft?: Maybe<Post_Draft_Mutation_Response>;
  /** insert a single row into the table: "post_draft" */
  insert_post_draft_one?: Maybe<Post_Draft>;
  /** insert data into the table: "post_like" */
  insert_post_like?: Maybe<Post_Like_Mutation_Response>;
  /** insert a single row into the table: "post_like" */
  insert_post_like_one?: Maybe<Post_Like>;
  /** insert a single row into the table: "post" */
  insert_post_one?: Maybe<Post>;
  /** insert data into the table: "post_photo" */
  insert_post_photo?: Maybe<Post_Photo_Mutation_Response>;
  /** insert a single row into the table: "post_photo" */
  insert_post_photo_one?: Maybe<Post_Photo>;
  /** insert data into the table: "report_post" */
  insert_report_post?: Maybe<Report_Post_Mutation_Response>;
  /** insert a single row into the table: "report_post" */
  insert_report_post_one?: Maybe<Report_Post>;
  /** insert data into the table: "user_location" */
  insert_user_location?: Maybe<User_Location_Mutation_Response>;
  /** insert a single row into the table: "user_location" */
  insert_user_location_one?: Maybe<User_Location>;
  /** insert data into the table: "user_spot" */
  insert_user_spot?: Maybe<User_Spot_Mutation_Response>;
  /** insert a single row into the table: "user_spot" */
  insert_user_spot_one?: Maybe<User_Spot>;
  /** insert data into the table: "user_spot_photo" */
  insert_user_spot_photo?: Maybe<User_Spot_Photo_Mutation_Response>;
  /** insert a single row into the table: "user_spot_photo" */
  insert_user_spot_photo_one?: Maybe<User_Spot_Photo>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "block_user" */
  update_block_user?: Maybe<Block_User_Mutation_Response>;
  /** update single row of the table: "block_user" */
  update_block_user_by_pk?: Maybe<Block_User>;
  /** update multiples rows of table: "block_user" */
  update_block_user_many?: Maybe<Array<Maybe<Block_User_Mutation_Response>>>;
  /** update data of the table: "bookmark" */
  update_bookmark?: Maybe<Bookmark_Mutation_Response>;
  /** update single row of the table: "bookmark" */
  update_bookmark_by_pk?: Maybe<Bookmark>;
  /** update multiples rows of table: "bookmark" */
  update_bookmark_many?: Maybe<Array<Maybe<Bookmark_Mutation_Response>>>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update multiples rows of table: "contact" */
  update_contact_many?: Maybe<Array<Maybe<Contact_Mutation_Response>>>;
  /** update data of the table: "draft_user" */
  update_draft_user?: Maybe<Draft_User_Mutation_Response>;
  /** update single row of the table: "draft_user" */
  update_draft_user_by_pk?: Maybe<Draft_User>;
  /** update multiples rows of table: "draft_user" */
  update_draft_user_many?: Maybe<Array<Maybe<Draft_User_Mutation_Response>>>;
  /** update data of the table: "feedback" */
  update_feedback?: Maybe<Feedback_Mutation_Response>;
  /** update single row of the table: "feedback" */
  update_feedback_by_pk?: Maybe<Feedback>;
  /** update multiples rows of table: "feedback" */
  update_feedback_many?: Maybe<Array<Maybe<Feedback_Mutation_Response>>>;
  /** update data of the table: "japan_polygon" */
  update_japan_polygon?: Maybe<Japan_Polygon_Mutation_Response>;
  /** update single row of the table: "japan_polygon" */
  update_japan_polygon_by_pk?: Maybe<Japan_Polygon>;
  /** update multiples rows of table: "japan_polygon" */
  update_japan_polygon_many?: Maybe<
    Array<Maybe<Japan_Polygon_Mutation_Response>>
  >;
  /** update data of the table: "notification" */
  update_notification?: Maybe<Notification_Mutation_Response>;
  /** update single row of the table: "notification" */
  update_notification_by_pk?: Maybe<Notification>;
  /** update multiples rows of table: "notification" */
  update_notification_many?: Maybe<
    Array<Maybe<Notification_Mutation_Response>>
  >;
  /** update data of the table: "poi" */
  update_poi?: Maybe<Poi_Mutation_Response>;
  /** update single row of the table: "poi" */
  update_poi_by_pk?: Maybe<Poi>;
  /** update data of the table: "poi_draft" */
  update_poi_draft?: Maybe<Poi_Draft_Mutation_Response>;
  /** update single row of the table: "poi_draft" */
  update_poi_draft_by_pk?: Maybe<Poi_Draft>;
  /** update multiples rows of table: "poi_draft" */
  update_poi_draft_many?: Maybe<Array<Maybe<Poi_Draft_Mutation_Response>>>;
  /** update data of the table: "poi_draft_photo" */
  update_poi_draft_photo?: Maybe<Poi_Draft_Photo_Mutation_Response>;
  /** update multiples rows of table: "poi_draft_photo" */
  update_poi_draft_photo_many?: Maybe<
    Array<Maybe<Poi_Draft_Photo_Mutation_Response>>
  >;
  /** update multiples rows of table: "poi" */
  update_poi_many?: Maybe<Array<Maybe<Poi_Mutation_Response>>>;
  /** update data of the table: "poi_photo" */
  update_poi_photo?: Maybe<Poi_Photo_Mutation_Response>;
  /** update single row of the table: "poi_photo" */
  update_poi_photo_by_pk?: Maybe<Poi_Photo>;
  /** update multiples rows of table: "poi_photo" */
  update_poi_photo_many?: Maybe<Array<Maybe<Poi_Photo_Mutation_Response>>>;
  /** update data of the table: "poi_rate" */
  update_poi_rate?: Maybe<Poi_Rate_Mutation_Response>;
  /** update single row of the table: "poi_rate" */
  update_poi_rate_by_pk?: Maybe<Poi_Rate>;
  /** update data of the table: "poi_rate_draft" */
  update_poi_rate_draft?: Maybe<Poi_Rate_Draft_Mutation_Response>;
  /** update single row of the table: "poi_rate_draft" */
  update_poi_rate_draft_by_pk?: Maybe<Poi_Rate_Draft>;
  /** update multiples rows of table: "poi_rate_draft" */
  update_poi_rate_draft_many?: Maybe<
    Array<Maybe<Poi_Rate_Draft_Mutation_Response>>
  >;
  /** update multiples rows of table: "poi_rate" */
  update_poi_rate_many?: Maybe<Array<Maybe<Poi_Rate_Mutation_Response>>>;
  /** update data of the table: "post" */
  update_post?: Maybe<Post_Mutation_Response>;
  /** update single row of the table: "post" */
  update_post_by_pk?: Maybe<Post>;
  /** update data of the table: "post_draft" */
  update_post_draft?: Maybe<Post_Draft_Mutation_Response>;
  /** update single row of the table: "post_draft" */
  update_post_draft_by_pk?: Maybe<Post_Draft>;
  /** update multiples rows of table: "post_draft" */
  update_post_draft_many?: Maybe<Array<Maybe<Post_Draft_Mutation_Response>>>;
  /** update data of the table: "post_like" */
  update_post_like?: Maybe<Post_Like_Mutation_Response>;
  /** update single row of the table: "post_like" */
  update_post_like_by_pk?: Maybe<Post_Like>;
  /** update multiples rows of table: "post_like" */
  update_post_like_many?: Maybe<Array<Maybe<Post_Like_Mutation_Response>>>;
  /** update multiples rows of table: "post" */
  update_post_many?: Maybe<Array<Maybe<Post_Mutation_Response>>>;
  /** update data of the table: "post_photo" */
  update_post_photo?: Maybe<Post_Photo_Mutation_Response>;
  /** update single row of the table: "post_photo" */
  update_post_photo_by_pk?: Maybe<Post_Photo>;
  /** update multiples rows of table: "post_photo" */
  update_post_photo_many?: Maybe<Array<Maybe<Post_Photo_Mutation_Response>>>;
  /** update data of the table: "report_post" */
  update_report_post?: Maybe<Report_Post_Mutation_Response>;
  /** update single row of the table: "report_post" */
  update_report_post_by_pk?: Maybe<Report_Post>;
  /** update multiples rows of table: "report_post" */
  update_report_post_many?: Maybe<Array<Maybe<Report_Post_Mutation_Response>>>;
  /** update data of the table: "user_location" */
  update_user_location?: Maybe<User_Location_Mutation_Response>;
  /** update single row of the table: "user_location" */
  update_user_location_by_pk?: Maybe<User_Location>;
  /** update multiples rows of table: "user_location" */
  update_user_location_many?: Maybe<
    Array<Maybe<User_Location_Mutation_Response>>
  >;
  /** update data of the table: "user_spot" */
  update_user_spot?: Maybe<User_Spot_Mutation_Response>;
  /** update single row of the table: "user_spot" */
  update_user_spot_by_pk?: Maybe<User_Spot>;
  /** update multiples rows of table: "user_spot" */
  update_user_spot_many?: Maybe<Array<Maybe<User_Spot_Mutation_Response>>>;
  /** update data of the table: "user_spot_photo" */
  update_user_spot_photo?: Maybe<User_Spot_Photo_Mutation_Response>;
  /** update single row of the table: "user_spot_photo" */
  update_user_spot_photo_by_pk?: Maybe<User_Spot_Photo>;
  /** update multiples rows of table: "user_spot_photo" */
  update_user_spot_photo_many?: Maybe<
    Array<Maybe<User_Spot_Photo_Mutation_Response>>
  >;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Block_UserArgs = {
  where: Block_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Block_User_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_BookmarkArgs = {
  where: Bookmark_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Bookmark_By_PkArgs = {
  poi_id: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Draft_UserArgs = {
  where: Draft_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Draft_User_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_FeedbackArgs = {
  where: Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Feedback_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Japan_PolygonArgs = {
  where: Japan_Polygon_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Japan_Polygon_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_NotificationArgs = {
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Notification_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PoiArgs = {
  where: Poi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Poi_DraftArgs = {
  where: Poi_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Poi_Draft_PhotoArgs = {
  where: Poi_Draft_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_PhotoArgs = {
  where: Poi_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Poi_RateArgs = {
  where: Poi_Rate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_Rate_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Poi_Rate_DraftArgs = {
  where: Poi_Rate_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Poi_Rate_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PostArgs = {
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Post_DraftArgs = {
  where: Post_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Post_LikeArgs = {
  where: Post_Like_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Like_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  post_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Post_PhotoArgs = {
  where: Post_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Post_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  target_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Report_PostArgs = {
  where: Report_Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Report_Post_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_LocationArgs = {
  where: User_Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Location_By_PkArgs = {
  user_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_SpotArgs = {
  where: User_Spot_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Spot_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_User_Spot_PhotoArgs = {
  where: User_Spot_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_Spot_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_Block_UserArgs = {
  objects: Array<Block_User_Insert_Input>;
  on_conflict?: InputMaybe<Block_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Block_User_OneArgs = {
  object: Block_User_Insert_Input;
  on_conflict?: InputMaybe<Block_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BookmarkArgs = {
  objects: Array<Bookmark_Insert_Input>;
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Bookmark_OneArgs = {
  object: Bookmark_Insert_Input;
  on_conflict?: InputMaybe<Bookmark_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_UserArgs = {
  objects: Array<Draft_User_Insert_Input>;
  on_conflict?: InputMaybe<Draft_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_User_OneArgs = {
  object: Draft_User_Insert_Input;
  on_conflict?: InputMaybe<Draft_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FeedbackArgs = {
  objects: Array<Feedback_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Feedback_OneArgs = {
  object: Feedback_Insert_Input;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Japan_PolygonArgs = {
  objects: Array<Japan_Polygon_Insert_Input>;
  on_conflict?: InputMaybe<Japan_Polygon_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Japan_Polygon_OneArgs = {
  object: Japan_Polygon_Insert_Input;
  on_conflict?: InputMaybe<Japan_Polygon_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_NotificationArgs = {
  objects: Array<Notification_Insert_Input>;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notification_OneArgs = {
  object: Notification_Insert_Input;
  on_conflict?: InputMaybe<Notification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PoiArgs = {
  objects: Array<Poi_Insert_Input>;
  on_conflict?: InputMaybe<Poi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_DraftArgs = {
  objects: Array<Poi_Draft_Insert_Input>;
  on_conflict?: InputMaybe<Poi_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Draft_OneArgs = {
  object: Poi_Draft_Insert_Input;
  on_conflict?: InputMaybe<Poi_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Draft_PhotoArgs = {
  objects: Array<Poi_Draft_Photo_Insert_Input>;
  on_conflict?: InputMaybe<Poi_Draft_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Draft_Photo_OneArgs = {
  object: Poi_Draft_Photo_Insert_Input;
  on_conflict?: InputMaybe<Poi_Draft_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_OneArgs = {
  object: Poi_Insert_Input;
  on_conflict?: InputMaybe<Poi_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_PhotoArgs = {
  objects: Array<Poi_Photo_Insert_Input>;
  on_conflict?: InputMaybe<Poi_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Photo_OneArgs = {
  object: Poi_Photo_Insert_Input;
  on_conflict?: InputMaybe<Poi_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_RateArgs = {
  objects: Array<Poi_Rate_Insert_Input>;
  on_conflict?: InputMaybe<Poi_Rate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Rate_DraftArgs = {
  objects: Array<Poi_Rate_Draft_Insert_Input>;
  on_conflict?: InputMaybe<Poi_Rate_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Rate_Draft_OneArgs = {
  object: Poi_Rate_Draft_Insert_Input;
  on_conflict?: InputMaybe<Poi_Rate_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Poi_Rate_OneArgs = {
  object: Poi_Rate_Insert_Input;
  on_conflict?: InputMaybe<Poi_Rate_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostArgs = {
  objects: Array<Post_Insert_Input>;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_DraftArgs = {
  objects: Array<Post_Draft_Insert_Input>;
  on_conflict?: InputMaybe<Post_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Draft_OneArgs = {
  object: Post_Draft_Insert_Input;
  on_conflict?: InputMaybe<Post_Draft_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_LikeArgs = {
  objects: Array<Post_Like_Insert_Input>;
  on_conflict?: InputMaybe<Post_Like_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Like_OneArgs = {
  object: Post_Like_Insert_Input;
  on_conflict?: InputMaybe<Post_Like_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_OneArgs = {
  object: Post_Insert_Input;
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_PhotoArgs = {
  objects: Array<Post_Photo_Insert_Input>;
  on_conflict?: InputMaybe<Post_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Post_Photo_OneArgs = {
  object: Post_Photo_Insert_Input;
  on_conflict?: InputMaybe<Post_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Report_PostArgs = {
  objects: Array<Report_Post_Insert_Input>;
  on_conflict?: InputMaybe<Report_Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Report_Post_OneArgs = {
  object: Report_Post_Insert_Input;
  on_conflict?: InputMaybe<Report_Post_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_LocationArgs = {
  objects: Array<User_Location_Insert_Input>;
  on_conflict?: InputMaybe<User_Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Location_OneArgs = {
  object: User_Location_Insert_Input;
  on_conflict?: InputMaybe<User_Location_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_SpotArgs = {
  objects: Array<User_Spot_Insert_Input>;
  on_conflict?: InputMaybe<User_Spot_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Spot_OneArgs = {
  object: User_Spot_Insert_Input;
  on_conflict?: InputMaybe<User_Spot_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Spot_PhotoArgs = {
  objects: Array<User_Spot_Photo_Insert_Input>;
  on_conflict?: InputMaybe<User_Spot_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_Spot_Photo_OneArgs = {
  object: User_Spot_Photo_Insert_Input;
  on_conflict?: InputMaybe<User_Spot_Photo_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Block_UserArgs = {
  _set?: InputMaybe<Block_User_Set_Input>;
  where: Block_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Block_User_By_PkArgs = {
  _set?: InputMaybe<Block_User_Set_Input>;
  pk_columns: Block_User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Block_User_ManyArgs = {
  updates: Array<Block_User_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BookmarkArgs = {
  _set?: InputMaybe<Bookmark_Set_Input>;
  where: Bookmark_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Bookmark_By_PkArgs = {
  _set?: InputMaybe<Bookmark_Set_Input>;
  pk_columns: Bookmark_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Bookmark_ManyArgs = {
  updates: Array<Bookmark_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Contact_ManyArgs = {
  updates: Array<Contact_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_UserArgs = {
  _set?: InputMaybe<Draft_User_Set_Input>;
  where: Draft_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_User_By_PkArgs = {
  _set?: InputMaybe<Draft_User_Set_Input>;
  pk_columns: Draft_User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_User_ManyArgs = {
  updates: Array<Draft_User_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_FeedbackArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  where: Feedback_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Feedback_By_PkArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  pk_columns: Feedback_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Feedback_ManyArgs = {
  updates: Array<Feedback_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Japan_PolygonArgs = {
  _set?: InputMaybe<Japan_Polygon_Set_Input>;
  where: Japan_Polygon_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Japan_Polygon_By_PkArgs = {
  _set?: InputMaybe<Japan_Polygon_Set_Input>;
  pk_columns: Japan_Polygon_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Japan_Polygon_ManyArgs = {
  updates: Array<Japan_Polygon_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_NotificationArgs = {
  _set?: InputMaybe<Notification_Set_Input>;
  where: Notification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_By_PkArgs = {
  _set?: InputMaybe<Notification_Set_Input>;
  pk_columns: Notification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_ManyArgs = {
  updates: Array<Notification_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PoiArgs = {
  _inc?: InputMaybe<Poi_Inc_Input>;
  _set?: InputMaybe<Poi_Set_Input>;
  where: Poi_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_By_PkArgs = {
  _inc?: InputMaybe<Poi_Inc_Input>;
  _set?: InputMaybe<Poi_Set_Input>;
  pk_columns: Poi_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_DraftArgs = {
  _inc?: InputMaybe<Poi_Draft_Inc_Input>;
  _set?: InputMaybe<Poi_Draft_Set_Input>;
  where: Poi_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Draft_By_PkArgs = {
  _inc?: InputMaybe<Poi_Draft_Inc_Input>;
  _set?: InputMaybe<Poi_Draft_Set_Input>;
  pk_columns: Poi_Draft_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Draft_ManyArgs = {
  updates: Array<Poi_Draft_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Draft_PhotoArgs = {
  _inc?: InputMaybe<Poi_Draft_Photo_Inc_Input>;
  _set?: InputMaybe<Poi_Draft_Photo_Set_Input>;
  where: Poi_Draft_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Draft_Photo_ManyArgs = {
  updates: Array<Poi_Draft_Photo_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_ManyArgs = {
  updates: Array<Poi_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_PhotoArgs = {
  _inc?: InputMaybe<Poi_Photo_Inc_Input>;
  _set?: InputMaybe<Poi_Photo_Set_Input>;
  where: Poi_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Photo_By_PkArgs = {
  _inc?: InputMaybe<Poi_Photo_Inc_Input>;
  _set?: InputMaybe<Poi_Photo_Set_Input>;
  pk_columns: Poi_Photo_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Photo_ManyArgs = {
  updates: Array<Poi_Photo_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_RateArgs = {
  _inc?: InputMaybe<Poi_Rate_Inc_Input>;
  _set?: InputMaybe<Poi_Rate_Set_Input>;
  where: Poi_Rate_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Rate_By_PkArgs = {
  _inc?: InputMaybe<Poi_Rate_Inc_Input>;
  _set?: InputMaybe<Poi_Rate_Set_Input>;
  pk_columns: Poi_Rate_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Rate_DraftArgs = {
  _inc?: InputMaybe<Poi_Rate_Draft_Inc_Input>;
  _set?: InputMaybe<Poi_Rate_Draft_Set_Input>;
  where: Poi_Rate_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Rate_Draft_By_PkArgs = {
  _inc?: InputMaybe<Poi_Rate_Draft_Inc_Input>;
  _set?: InputMaybe<Poi_Rate_Draft_Set_Input>;
  pk_columns: Poi_Rate_Draft_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Rate_Draft_ManyArgs = {
  updates: Array<Poi_Rate_Draft_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Poi_Rate_ManyArgs = {
  updates: Array<Poi_Rate_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PostArgs = {
  _set?: InputMaybe<Post_Set_Input>;
  where: Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_By_PkArgs = {
  _set?: InputMaybe<Post_Set_Input>;
  pk_columns: Post_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_DraftArgs = {
  _set?: InputMaybe<Post_Draft_Set_Input>;
  where: Post_Draft_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Draft_By_PkArgs = {
  _set?: InputMaybe<Post_Draft_Set_Input>;
  pk_columns: Post_Draft_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Draft_ManyArgs = {
  updates: Array<Post_Draft_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_LikeArgs = {
  _set?: InputMaybe<Post_Like_Set_Input>;
  where: Post_Like_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Like_By_PkArgs = {
  _set?: InputMaybe<Post_Like_Set_Input>;
  pk_columns: Post_Like_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Like_ManyArgs = {
  updates: Array<Post_Like_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_ManyArgs = {
  updates: Array<Post_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Post_PhotoArgs = {
  _inc?: InputMaybe<Post_Photo_Inc_Input>;
  _set?: InputMaybe<Post_Photo_Set_Input>;
  where: Post_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Photo_By_PkArgs = {
  _inc?: InputMaybe<Post_Photo_Inc_Input>;
  _set?: InputMaybe<Post_Photo_Set_Input>;
  pk_columns: Post_Photo_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Post_Photo_ManyArgs = {
  updates: Array<Post_Photo_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Report_PostArgs = {
  _set?: InputMaybe<Report_Post_Set_Input>;
  where: Report_Post_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Report_Post_By_PkArgs = {
  _set?: InputMaybe<Report_Post_Set_Input>;
  pk_columns: Report_Post_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Report_Post_ManyArgs = {
  updates: Array<Report_Post_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_LocationArgs = {
  _set?: InputMaybe<User_Location_Set_Input>;
  where: User_Location_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Location_By_PkArgs = {
  _set?: InputMaybe<User_Location_Set_Input>;
  pk_columns: User_Location_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Location_ManyArgs = {
  updates: Array<User_Location_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_SpotArgs = {
  _inc?: InputMaybe<User_Spot_Inc_Input>;
  _set?: InputMaybe<User_Spot_Set_Input>;
  where: User_Spot_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Spot_By_PkArgs = {
  _inc?: InputMaybe<User_Spot_Inc_Input>;
  _set?: InputMaybe<User_Spot_Set_Input>;
  pk_columns: User_Spot_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Spot_ManyArgs = {
  updates: Array<User_Spot_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_User_Spot_PhotoArgs = {
  _inc?: InputMaybe<User_Spot_Photo_Inc_Input>;
  _set?: InputMaybe<User_Spot_Photo_Set_Input>;
  where: User_Spot_Photo_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_Spot_Photo_By_PkArgs = {
  _inc?: InputMaybe<User_Spot_Photo_Inc_Input>;
  _set?: InputMaybe<User_Spot_Photo_Set_Input>;
  pk_columns: User_Spot_Photo_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_User_Spot_Photo_ManyArgs = {
  updates: Array<User_Spot_Photo_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** 通知 */
export type Notification = {
  __typename?: "notification";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** An object relationship */
  from_user: Users;
  /** 差出ユーザー */
  from_user_id: Scalars["uuid"]["output"];
  id: Scalars["uuid"]["output"];
  /** 既読フラグ */
  is_read?: Maybe<Scalars["Boolean"]["output"]>;
  /** 送信済みフラグ */
  is_sent: Scalars["Boolean"]["output"];
  /** 通知本文 */
  message: Scalars["String"]["output"];
  /** An object relationship */
  poi?: Maybe<Poi>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 送信予定日時 */
  scheduled_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An object relationship */
  to_user?: Maybe<Users>;
  /** 宛先ユーザーID */
  to_user_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 参照先URL */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "notification" */
export type Notification_Aggregate = {
  __typename?: "notification_aggregate";
  aggregate?: Maybe<Notification_Aggregate_Fields>;
  nodes: Array<Notification>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_Fields = {
  __typename?: "notification_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Notification_Max_Fields>;
  min?: Maybe<Notification_Min_Fields>;
};

/** aggregate fields of "notification" */
export type Notification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Notification_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type Notification_Bool_Exp = {
  _and?: InputMaybe<Array<Notification_Bool_Exp>>;
  _not?: InputMaybe<Notification_Bool_Exp>;
  _or?: InputMaybe<Array<Notification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  from_user?: InputMaybe<Users_Bool_Exp>;
  from_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_read?: InputMaybe<Boolean_Comparison_Exp>;
  is_sent?: InputMaybe<Boolean_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  scheduled_at?: InputMaybe<Timestamp_Comparison_Exp>;
  to_user?: InputMaybe<Users_Bool_Exp>;
  to_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification" */
export enum Notification_Constraint {
  /** unique or primary key constraint on columns "id" */
  NotificationPk = "notification_pk",
}

/** input type for inserting data into table "notification" */
export type Notification_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  from_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** 差出ユーザー */
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 既読フラグ */
  is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 送信済みフラグ */
  is_sent?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 通知本文 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 送信予定日時 */
  scheduled_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  to_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** 宛先ユーザーID */
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 参照先URL */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Notification_Max_Fields = {
  __typename?: "notification_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 差出ユーザー */
  from_user_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 通知本文 */
  message?: Maybe<Scalars["String"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 送信予定日時 */
  scheduled_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 宛先ユーザーID */
  to_user_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 参照先URL */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Notification_Min_Fields = {
  __typename?: "notification_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 差出ユーザー */
  from_user_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 通知本文 */
  message?: Maybe<Scalars["String"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 送信予定日時 */
  scheduled_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 宛先ユーザーID */
  to_user_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 参照先URL */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "notification" */
export type Notification_Mutation_Response = {
  __typename?: "notification_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Notification>;
};

/** on_conflict condition type for table "notification" */
export type Notification_On_Conflict = {
  constraint: Notification_Constraint;
  update_columns?: Array<Notification_Update_Column>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

/** Ordering options when selecting data from "notification". */
export type Notification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_user?: InputMaybe<Users_Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_read?: InputMaybe<Order_By>;
  is_sent?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  scheduled_at?: InputMaybe<Order_By>;
  to_user?: InputMaybe<Users_Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: notification */
export type Notification_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "notification" */
export enum Notification_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromUserId = "from_user_id",
  /** column name */
  Id = "id",
  /** column name */
  IsRead = "is_read",
  /** column name */
  IsSent = "is_sent",
  /** column name */
  Message = "message",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PostId = "post_id",
  /** column name */
  ScheduledAt = "scheduled_at",
  /** column name */
  ToUserId = "to_user_id",
  /** column name */
  Url = "url",
}

/** input type for updating data in table "notification" */
export type Notification_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 差出ユーザー */
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 既読フラグ */
  is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 送信済みフラグ */
  is_sent?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 通知本文 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 送信予定日時 */
  scheduled_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 宛先ユーザーID */
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 参照先URL */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "notification" */
export type Notification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Notification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Notification_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 差出ユーザー */
  from_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 既読フラグ */
  is_read?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 送信済みフラグ */
  is_sent?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 通知本文 */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 送信予定日時 */
  scheduled_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 宛先ユーザーID */
  to_user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 参照先URL */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "notification" */
export enum Notification_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromUserId = "from_user_id",
  /** column name */
  Id = "id",
  /** column name */
  IsRead = "is_read",
  /** column name */
  IsSent = "is_sent",
  /** column name */
  Message = "message",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PostId = "post_id",
  /** column name */
  ScheduledAt = "scheduled_at",
  /** column name */
  ToUserId = "to_user_id",
  /** column name */
  Url = "url",
}

export type Notification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Notification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Notification_Bool_Exp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]["input"]>;
  _gt?: InputMaybe<Scalars["numeric"]["input"]>;
  _gte?: InputMaybe<Scalars["numeric"]["input"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["numeric"]["input"]>;
  _lte?: InputMaybe<Scalars["numeric"]["input"]>;
  _neq?: InputMaybe<Scalars["numeric"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "poi" */
export type Poi = {
  __typename?: "poi";
  address?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  bookmarks: Array<Bookmark>;
  /** An aggregate relationship */
  bookmarks_aggregate: Bookmark_Aggregate;
  category: Scalars["String"]["output"];
  created_at: Scalars["timestamp"]["output"];
  created_by: Scalars["uuid"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  geom?: Maybe<Scalars["geometry"]["output"]>;
  /** 休日 */
  holiday?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** 削除フラグ */
  is_deleted: Scalars["Boolean"]["output"];
  /** 警告あり */
  is_warning: Scalars["Boolean"]["output"];
  lat: Scalars["numeric"]["output"];
  lng: Scalars["numeric"]["output"];
  modified_at: Scalars["timestamp"]["output"];
  modified_by: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  /** 営業時間 */
  open_time?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  photos: Array<Poi_Photo>;
  /** An aggregate relationship */
  photos_aggregate: Poi_Photo_Aggregate;
  /** GooglePlaceId */
  place_id?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  poi_rates: Array<Poi_Rate>;
  /** An aggregate relationship */
  poi_rates_aggregate: Poi_Rate_Aggregate;
  /** 料金 */
  price?: Maybe<Scalars["String"]["output"]>;
  /** 電話番号 */
  tel?: Maybe<Scalars["String"]["output"]>;
  /** トイレ有無 */
  toilet?: Maybe<Scalars["String"]["output"]>;
  /** ホームページ */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "poi" */
export type PoiBookmarksArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

/** columns and relationships of "poi" */
export type PoiBookmarks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

/** columns and relationships of "poi" */
export type PoiPhotosArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

/** columns and relationships of "poi" */
export type PoiPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

/** columns and relationships of "poi" */
export type PoiPoi_RatesArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

/** columns and relationships of "poi" */
export type PoiPoi_Rates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

/** aggregated selection of "poi" */
export type Poi_Aggregate = {
  __typename?: "poi_aggregate";
  aggregate?: Maybe<Poi_Aggregate_Fields>;
  nodes: Array<Poi>;
};

/** aggregate fields of "poi" */
export type Poi_Aggregate_Fields = {
  __typename?: "poi_aggregate_fields";
  avg?: Maybe<Poi_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Max_Fields>;
  min?: Maybe<Poi_Min_Fields>;
  stddev?: Maybe<Poi_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Sum_Fields>;
  var_pop?: Maybe<Poi_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Var_Samp_Fields>;
  variance?: Maybe<Poi_Variance_Fields>;
};

/** aggregate fields of "poi" */
export type Poi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Poi_Avg_Fields = {
  __typename?: "poi_avg_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "poi". All fields are combined with a logical 'AND'. */
export type Poi_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Bool_Exp>>;
  _not?: InputMaybe<Poi_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  bookmarks?: InputMaybe<Bookmark_Bool_Exp>;
  bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Bool_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  geom?: InputMaybe<Geometry_Comparison_Exp>;
  holiday?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  is_warning?: InputMaybe<Boolean_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  lng?: InputMaybe<Numeric_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  modified_by?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  open_time?: InputMaybe<String_Comparison_Exp>;
  photos?: InputMaybe<Poi_Photo_Bool_Exp>;
  photos_aggregate?: InputMaybe<Poi_Photo_Aggregate_Bool_Exp>;
  place_id?: InputMaybe<String_Comparison_Exp>;
  poi_rates?: InputMaybe<Poi_Rate_Bool_Exp>;
  poi_rates_aggregate?: InputMaybe<Poi_Rate_Aggregate_Bool_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  toilet?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "poi" */
export enum Poi_Constraint {
  /** unique or primary key constraint on columns "id" */
  PoiPk = "poi_pk",
}

/** 本番未反映の新規・修正POIデータ */
export type Poi_Draft = {
  __typename?: "poi_draft";
  address?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamp"]["output"];
  created_by: Scalars["uuid"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  feedback_id?: Maybe<Scalars["uuid"]["output"]>;
  geom?: Maybe<Scalars["geometry"]["output"]>;
  holiday?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  lat: Scalars["numeric"]["output"];
  lng: Scalars["numeric"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  open_time?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  photos: Array<Poi_Draft_Photo>;
  /** An aggregate relationship */
  photos_aggregate: Poi_Draft_Photo_Aggregate;
  place_id?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  poi?: Maybe<Poi>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  price?: Maybe<Scalars["String"]["output"]>;
  tel?: Maybe<Scalars["String"]["output"]>;
  toilet?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  user: Users;
};

/** 本番未反映の新規・修正POIデータ */
export type Poi_DraftPhotosArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

/** 本番未反映の新規・修正POIデータ */
export type Poi_DraftPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

/** aggregated selection of "poi_draft" */
export type Poi_Draft_Aggregate = {
  __typename?: "poi_draft_aggregate";
  aggregate?: Maybe<Poi_Draft_Aggregate_Fields>;
  nodes: Array<Poi_Draft>;
};

/** aggregate fields of "poi_draft" */
export type Poi_Draft_Aggregate_Fields = {
  __typename?: "poi_draft_aggregate_fields";
  avg?: Maybe<Poi_Draft_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Draft_Max_Fields>;
  min?: Maybe<Poi_Draft_Min_Fields>;
  stddev?: Maybe<Poi_Draft_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Draft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Draft_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Draft_Sum_Fields>;
  var_pop?: Maybe<Poi_Draft_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Draft_Var_Samp_Fields>;
  variance?: Maybe<Poi_Draft_Variance_Fields>;
};

/** aggregate fields of "poi_draft" */
export type Poi_Draft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Draft_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Poi_Draft_Avg_Fields = {
  __typename?: "poi_draft_avg_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "poi_draft". All fields are combined with a logical 'AND'. */
export type Poi_Draft_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Draft_Bool_Exp>>;
  _not?: InputMaybe<Poi_Draft_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Draft_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  feedback_id?: InputMaybe<Uuid_Comparison_Exp>;
  geom?: InputMaybe<Geometry_Comparison_Exp>;
  holiday?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  lng?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  open_time?: InputMaybe<String_Comparison_Exp>;
  photos?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
  photos_aggregate?: InputMaybe<Poi_Draft_Photo_Aggregate_Bool_Exp>;
  place_id?: InputMaybe<String_Comparison_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<String_Comparison_Exp>;
  tel?: InputMaybe<String_Comparison_Exp>;
  toilet?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "poi_draft" */
export enum Poi_Draft_Constraint {
  /** unique or primary key constraint on columns "feedback_id" */
  PoiDraftFeedbackIdUk = "poi_draft_feedback_id_uk",
  /** unique or primary key constraint on columns "id" */
  PoiDraftPk = "poi_draft_pk",
}

/** input type for incrementing numeric columns in table "poi_draft" */
export type Poi_Draft_Inc_Input = {
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "poi_draft" */
export type Poi_Draft_Insert_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  feedback_id?: InputMaybe<Scalars["uuid"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  photos?: InputMaybe<Poi_Draft_Photo_Arr_Rel_Insert_Input>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Poi_Draft_Max_Fields = {
  __typename?: "poi_draft_max_fields";
  address?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  feedback_id?: Maybe<Scalars["uuid"]["output"]>;
  holiday?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  open_time?: Maybe<Scalars["String"]["output"]>;
  place_id?: Maybe<Scalars["String"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  price?: Maybe<Scalars["String"]["output"]>;
  tel?: Maybe<Scalars["String"]["output"]>;
  toilet?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Poi_Draft_Min_Fields = {
  __typename?: "poi_draft_min_fields";
  address?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  feedback_id?: Maybe<Scalars["uuid"]["output"]>;
  holiday?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  open_time?: Maybe<Scalars["String"]["output"]>;
  place_id?: Maybe<Scalars["String"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  price?: Maybe<Scalars["String"]["output"]>;
  tel?: Maybe<Scalars["String"]["output"]>;
  toilet?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "poi_draft" */
export type Poi_Draft_Mutation_Response = {
  __typename?: "poi_draft_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi_Draft>;
};

/** input type for inserting object relation for remote table "poi_draft" */
export type Poi_Draft_Obj_Rel_Insert_Input = {
  data: Poi_Draft_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Draft_On_Conflict>;
};

/** on_conflict condition type for table "poi_draft" */
export type Poi_Draft_On_Conflict = {
  constraint: Poi_Draft_Constraint;
  update_columns?: Array<Poi_Draft_Update_Column>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

/** Ordering options when selecting data from "poi_draft". */
export type Poi_Draft_Order_By = {
  address?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  feedback_id?: InputMaybe<Order_By>;
  geom?: InputMaybe<Order_By>;
  holiday?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  open_time?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<Poi_Draft_Photo_Aggregate_Order_By>;
  place_id?: InputMaybe<Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  toilet?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** ドラフトPOI写真 */
export type Poi_Draft_Photo = {
  __typename?: "poi_draft_photo";
  image: Scalars["String"]["output"];
  order_no: Scalars["smallint"]["output"];
  parent_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "poi_draft_photo" */
export type Poi_Draft_Photo_Aggregate = {
  __typename?: "poi_draft_photo_aggregate";
  aggregate?: Maybe<Poi_Draft_Photo_Aggregate_Fields>;
  nodes: Array<Poi_Draft_Photo>;
};

export type Poi_Draft_Photo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Poi_Draft_Photo_Aggregate_Bool_Exp_Count>;
};

export type Poi_Draft_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "poi_draft_photo" */
export type Poi_Draft_Photo_Aggregate_Fields = {
  __typename?: "poi_draft_photo_aggregate_fields";
  avg?: Maybe<Poi_Draft_Photo_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Draft_Photo_Max_Fields>;
  min?: Maybe<Poi_Draft_Photo_Min_Fields>;
  stddev?: Maybe<Poi_Draft_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Draft_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Draft_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Draft_Photo_Sum_Fields>;
  var_pop?: Maybe<Poi_Draft_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Draft_Photo_Var_Samp_Fields>;
  variance?: Maybe<Poi_Draft_Photo_Variance_Fields>;
};

/** aggregate fields of "poi_draft_photo" */
export type Poi_Draft_Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "poi_draft_photo" */
export type Poi_Draft_Photo_Aggregate_Order_By = {
  avg?: InputMaybe<Poi_Draft_Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Poi_Draft_Photo_Max_Order_By>;
  min?: InputMaybe<Poi_Draft_Photo_Min_Order_By>;
  stddev?: InputMaybe<Poi_Draft_Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Poi_Draft_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Poi_Draft_Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Poi_Draft_Photo_Sum_Order_By>;
  var_pop?: InputMaybe<Poi_Draft_Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Poi_Draft_Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<Poi_Draft_Photo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poi_draft_photo" */
export type Poi_Draft_Photo_Arr_Rel_Insert_Input = {
  data: Array<Poi_Draft_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Draft_Photo_On_Conflict>;
};

/** aggregate avg on columns */
export type Poi_Draft_Photo_Avg_Fields = {
  __typename?: "poi_draft_photo_avg_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Avg_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poi_draft_photo". All fields are combined with a logical 'AND'. */
export type Poi_Draft_Photo_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Draft_Photo_Bool_Exp>>;
  _not?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Draft_Photo_Bool_Exp>>;
  image?: InputMaybe<String_Comparison_Exp>;
  order_no?: InputMaybe<Smallint_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "poi_draft_photo" */
export enum Poi_Draft_Photo_Constraint {
  /** unique or primary key constraint on columns "order_no", "parent_id" */
  PoiDraftPhotoPk = "poi_draft_photo_pk",
}

/** input type for incrementing numeric columns in table "poi_draft_photo" */
export type Poi_Draft_Photo_Inc_Input = {
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "poi_draft_photo" */
export type Poi_Draft_Photo_Insert_Input = {
  image?: InputMaybe<Scalars["String"]["input"]>;
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Poi_Draft_Photo_Max_Fields = {
  __typename?: "poi_draft_photo_max_fields";
  image?: Maybe<Scalars["String"]["output"]>;
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Max_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Poi_Draft_Photo_Min_Fields = {
  __typename?: "poi_draft_photo_min_fields";
  image?: Maybe<Scalars["String"]["output"]>;
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Min_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "poi_draft_photo" */
export type Poi_Draft_Photo_Mutation_Response = {
  __typename?: "poi_draft_photo_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi_Draft_Photo>;
};

/** on_conflict condition type for table "poi_draft_photo" */
export type Poi_Draft_Photo_On_Conflict = {
  constraint: Poi_Draft_Photo_Constraint;
  update_columns?: Array<Poi_Draft_Photo_Update_Column>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

/** Ordering options when selecting data from "poi_draft_photo". */
export type Poi_Draft_Photo_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** select columns of table "poi_draft_photo" */
export enum Poi_Draft_Photo_Select_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

/** input type for updating data in table "poi_draft_photo" */
export type Poi_Draft_Photo_Set_Input = {
  image?: InputMaybe<Scalars["String"]["input"]>;
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Draft_Photo_Stddev_Fields = {
  __typename?: "poi_draft_photo_stddev_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Stddev_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poi_Draft_Photo_Stddev_Pop_Fields = {
  __typename?: "poi_draft_photo_stddev_pop_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Stddev_Pop_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poi_Draft_Photo_Stddev_Samp_Fields = {
  __typename?: "poi_draft_photo_stddev_samp_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Stddev_Samp_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "poi_draft_photo" */
export type Poi_Draft_Photo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Draft_Photo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Draft_Photo_Stream_Cursor_Value_Input = {
  image?: InputMaybe<Scalars["String"]["input"]>;
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Draft_Photo_Sum_Fields = {
  __typename?: "poi_draft_photo_sum_fields";
  order_no?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Sum_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** update columns of table "poi_draft_photo" */
export enum Poi_Draft_Photo_Update_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

export type Poi_Draft_Photo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Draft_Photo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Draft_Photo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Draft_Photo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Draft_Photo_Var_Pop_Fields = {
  __typename?: "poi_draft_photo_var_pop_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Var_Pop_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poi_Draft_Photo_Var_Samp_Fields = {
  __typename?: "poi_draft_photo_var_samp_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Var_Samp_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Poi_Draft_Photo_Variance_Fields = {
  __typename?: "poi_draft_photo_variance_fields";
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "poi_draft_photo" */
export type Poi_Draft_Photo_Variance_Order_By = {
  order_no?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poi_draft */
export type Poi_Draft_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "poi_draft" */
export enum Poi_Draft_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  FeedbackId = "feedback_id",
  /** column name */
  Geom = "geom",
  /** column name */
  Holiday = "holiday",
  /** column name */
  Id = "id",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  Name = "name",
  /** column name */
  OpenTime = "open_time",
  /** column name */
  PlaceId = "place_id",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  Price = "price",
  /** column name */
  Tel = "tel",
  /** column name */
  Toilet = "toilet",
  /** column name */
  Url = "url",
}

/** input type for updating data in table "poi_draft" */
export type Poi_Draft_Set_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  feedback_id?: InputMaybe<Scalars["uuid"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Draft_Stddev_Fields = {
  __typename?: "poi_draft_stddev_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Poi_Draft_Stddev_Pop_Fields = {
  __typename?: "poi_draft_stddev_pop_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Poi_Draft_Stddev_Samp_Fields = {
  __typename?: "poi_draft_stddev_samp_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "poi_draft" */
export type Poi_Draft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Draft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Draft_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  feedback_id?: InputMaybe<Scalars["uuid"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  price?: InputMaybe<Scalars["String"]["input"]>;
  tel?: InputMaybe<Scalars["String"]["input"]>;
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Draft_Sum_Fields = {
  __typename?: "poi_draft_sum_fields";
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
};

/** update columns of table "poi_draft" */
export enum Poi_Draft_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  FeedbackId = "feedback_id",
  /** column name */
  Geom = "geom",
  /** column name */
  Holiday = "holiday",
  /** column name */
  Id = "id",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  Name = "name",
  /** column name */
  OpenTime = "open_time",
  /** column name */
  PlaceId = "place_id",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  Price = "price",
  /** column name */
  Tel = "tel",
  /** column name */
  Toilet = "toilet",
  /** column name */
  Url = "url",
}

export type Poi_Draft_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Draft_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Draft_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Draft_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Draft_Var_Pop_Fields = {
  __typename?: "poi_draft_var_pop_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Poi_Draft_Var_Samp_Fields = {
  __typename?: "poi_draft_var_samp_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Poi_Draft_Variance_Fields = {
  __typename?: "poi_draft_variance_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** input type for incrementing numeric columns in table "poi" */
export type Poi_Inc_Input = {
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "poi" */
export type Poi_Insert_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  bookmarks?: InputMaybe<Bookmark_Arr_Rel_Insert_Input>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** 休日 */
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 警告あり */
  is_warning?: InputMaybe<Scalars["Boolean"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  modified_by?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 営業時間 */
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  photos?: InputMaybe<Poi_Photo_Arr_Rel_Insert_Input>;
  /** GooglePlaceId */
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  poi_rates?: InputMaybe<Poi_Rate_Arr_Rel_Insert_Input>;
  /** 料金 */
  price?: InputMaybe<Scalars["String"]["input"]>;
  /** 電話番号 */
  tel?: InputMaybe<Scalars["String"]["input"]>;
  /** トイレ有無 */
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  /** ホームページ */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Poi_Max_Fields = {
  __typename?: "poi_max_fields";
  address?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** 休日 */
  holiday?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  modified_by?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** 営業時間 */
  open_time?: Maybe<Scalars["String"]["output"]>;
  /** GooglePlaceId */
  place_id?: Maybe<Scalars["String"]["output"]>;
  /** 料金 */
  price?: Maybe<Scalars["String"]["output"]>;
  /** 電話番号 */
  tel?: Maybe<Scalars["String"]["output"]>;
  /** トイレ有無 */
  toilet?: Maybe<Scalars["String"]["output"]>;
  /** ホームページ */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Poi_Min_Fields = {
  __typename?: "poi_min_fields";
  address?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** 休日 */
  holiday?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  modified_by?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  /** 営業時間 */
  open_time?: Maybe<Scalars["String"]["output"]>;
  /** GooglePlaceId */
  place_id?: Maybe<Scalars["String"]["output"]>;
  /** 料金 */
  price?: Maybe<Scalars["String"]["output"]>;
  /** 電話番号 */
  tel?: Maybe<Scalars["String"]["output"]>;
  /** トイレ有無 */
  toilet?: Maybe<Scalars["String"]["output"]>;
  /** ホームページ */
  url?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "poi" */
export type Poi_Mutation_Response = {
  __typename?: "poi_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi>;
};

/** input type for inserting object relation for remote table "poi" */
export type Poi_Obj_Rel_Insert_Input = {
  data: Poi_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_On_Conflict>;
};

/** on_conflict condition type for table "poi" */
export type Poi_On_Conflict = {
  constraint: Poi_Constraint;
  update_columns?: Array<Poi_Update_Column>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

/** Ordering options when selecting data from "poi". */
export type Poi_Order_By = {
  address?: InputMaybe<Order_By>;
  bookmarks_aggregate?: InputMaybe<Bookmark_Aggregate_Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geom?: InputMaybe<Order_By>;
  holiday?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  is_warning?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  modified_by?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  open_time?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<Poi_Photo_Aggregate_Order_By>;
  place_id?: InputMaybe<Order_By>;
  poi_rates_aggregate?: InputMaybe<Poi_Rate_Aggregate_Order_By>;
  price?: InputMaybe<Order_By>;
  tel?: InputMaybe<Order_By>;
  toilet?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** POI写真 */
export type Poi_Photo = {
  __typename?: "poi_photo";
  /** 写真URL */
  image: Scalars["String"]["output"];
  /** 表示順序 */
  order_no: Scalars["smallint"]["output"];
  /** 写真所有レコードのID */
  parent_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "poi_photo" */
export type Poi_Photo_Aggregate = {
  __typename?: "poi_photo_aggregate";
  aggregate?: Maybe<Poi_Photo_Aggregate_Fields>;
  nodes: Array<Poi_Photo>;
};

export type Poi_Photo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Poi_Photo_Aggregate_Bool_Exp_Count>;
};

export type Poi_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Poi_Photo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "poi_photo" */
export type Poi_Photo_Aggregate_Fields = {
  __typename?: "poi_photo_aggregate_fields";
  avg?: Maybe<Poi_Photo_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Photo_Max_Fields>;
  min?: Maybe<Poi_Photo_Min_Fields>;
  stddev?: Maybe<Poi_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Photo_Sum_Fields>;
  var_pop?: Maybe<Poi_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Photo_Var_Samp_Fields>;
  variance?: Maybe<Poi_Photo_Variance_Fields>;
};

/** aggregate fields of "poi_photo" */
export type Poi_Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "poi_photo" */
export type Poi_Photo_Aggregate_Order_By = {
  avg?: InputMaybe<Poi_Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Poi_Photo_Max_Order_By>;
  min?: InputMaybe<Poi_Photo_Min_Order_By>;
  stddev?: InputMaybe<Poi_Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Poi_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Poi_Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Poi_Photo_Sum_Order_By>;
  var_pop?: InputMaybe<Poi_Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Poi_Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<Poi_Photo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poi_photo" */
export type Poi_Photo_Arr_Rel_Insert_Input = {
  data: Array<Poi_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Photo_On_Conflict>;
};

/** aggregate avg on columns */
export type Poi_Photo_Avg_Fields = {
  __typename?: "poi_photo_avg_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "poi_photo" */
export type Poi_Photo_Avg_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poi_photo". All fields are combined with a logical 'AND'. */
export type Poi_Photo_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Photo_Bool_Exp>>;
  _not?: InputMaybe<Poi_Photo_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Photo_Bool_Exp>>;
  image?: InputMaybe<String_Comparison_Exp>;
  order_no?: InputMaybe<Smallint_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "poi_photo" */
export enum Poi_Photo_Constraint {
  /** unique or primary key constraint on columns "order_no", "parent_id" */
  PoiPhotoPk = "poi_photo_pk",
}

/** input type for incrementing numeric columns in table "poi_photo" */
export type Poi_Photo_Inc_Input = {
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "poi_photo" */
export type Poi_Photo_Insert_Input = {
  /** 写真URL */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** 写真所有レコードのID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Poi_Photo_Max_Fields = {
  __typename?: "poi_photo_max_fields";
  /** 写真URL */
  image?: Maybe<Scalars["String"]["output"]>;
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** 写真所有レコードのID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "poi_photo" */
export type Poi_Photo_Max_Order_By = {
  /** 写真URL */
  image?: InputMaybe<Order_By>;
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
  /** 写真所有レコードのID */
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Poi_Photo_Min_Fields = {
  __typename?: "poi_photo_min_fields";
  /** 写真URL */
  image?: Maybe<Scalars["String"]["output"]>;
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** 写真所有レコードのID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "poi_photo" */
export type Poi_Photo_Min_Order_By = {
  /** 写真URL */
  image?: InputMaybe<Order_By>;
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
  /** 写真所有レコードのID */
  parent_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "poi_photo" */
export type Poi_Photo_Mutation_Response = {
  __typename?: "poi_photo_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi_Photo>;
};

/** on_conflict condition type for table "poi_photo" */
export type Poi_Photo_On_Conflict = {
  constraint: Poi_Photo_Constraint;
  update_columns?: Array<Poi_Photo_Update_Column>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

/** Ordering options when selecting data from "poi_photo". */
export type Poi_Photo_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poi_photo */
export type Poi_Photo_Pk_Columns_Input = {
  /** 表示順序 */
  order_no: Scalars["smallint"]["input"];
  /** 写真所有レコードのID */
  parent_id: Scalars["uuid"]["input"];
};

/** select columns of table "poi_photo" */
export enum Poi_Photo_Select_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

/** input type for updating data in table "poi_photo" */
export type Poi_Photo_Set_Input = {
  /** 写真URL */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** 写真所有レコードのID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Photo_Stddev_Fields = {
  __typename?: "poi_photo_stddev_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "poi_photo" */
export type Poi_Photo_Stddev_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poi_Photo_Stddev_Pop_Fields = {
  __typename?: "poi_photo_stddev_pop_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "poi_photo" */
export type Poi_Photo_Stddev_Pop_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poi_Photo_Stddev_Samp_Fields = {
  __typename?: "poi_photo_stddev_samp_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "poi_photo" */
export type Poi_Photo_Stddev_Samp_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "poi_photo" */
export type Poi_Photo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Photo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Photo_Stream_Cursor_Value_Input = {
  /** 写真URL */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** 写真所有レコードのID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Photo_Sum_Fields = {
  __typename?: "poi_photo_sum_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "poi_photo" */
export type Poi_Photo_Sum_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** update columns of table "poi_photo" */
export enum Poi_Photo_Update_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

export type Poi_Photo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Photo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Photo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Photo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Photo_Var_Pop_Fields = {
  __typename?: "poi_photo_var_pop_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "poi_photo" */
export type Poi_Photo_Var_Pop_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poi_Photo_Var_Samp_Fields = {
  __typename?: "poi_photo_var_samp_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "poi_photo" */
export type Poi_Photo_Var_Samp_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Poi_Photo_Variance_Fields = {
  __typename?: "poi_photo_variance_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "poi_photo" */
export type Poi_Photo_Variance_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poi */
export type Poi_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** POIの評価 */
export type Poi_Rate = {
  __typename?: "poi_rate";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** ID */
  id: Scalars["uuid"]["output"];
  /** 削除フラグ */
  is_deleted: Scalars["Boolean"]["output"];
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id: Scalars["uuid"]["output"];
  /** An object relationship */
  post?: Maybe<Post>;
  /** 評価 */
  rate: Scalars["smallint"]["output"];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "poi_rate" */
export type Poi_Rate_Aggregate = {
  __typename?: "poi_rate_aggregate";
  aggregate?: Maybe<Poi_Rate_Aggregate_Fields>;
  nodes: Array<Poi_Rate>;
};

export type Poi_Rate_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Poi_Rate_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Poi_Rate_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Poi_Rate_Aggregate_Bool_Exp_Count>;
};

export type Poi_Rate_Aggregate_Bool_Exp_Bool_And = {
  arguments: Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Poi_Rate_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Poi_Rate_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Poi_Rate_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Poi_Rate_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Poi_Rate_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "poi_rate" */
export type Poi_Rate_Aggregate_Fields = {
  __typename?: "poi_rate_aggregate_fields";
  avg?: Maybe<Poi_Rate_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Rate_Max_Fields>;
  min?: Maybe<Poi_Rate_Min_Fields>;
  stddev?: Maybe<Poi_Rate_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Rate_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Rate_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Rate_Sum_Fields>;
  var_pop?: Maybe<Poi_Rate_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Rate_Var_Samp_Fields>;
  variance?: Maybe<Poi_Rate_Variance_Fields>;
};

/** aggregate fields of "poi_rate" */
export type Poi_Rate_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "poi_rate" */
export type Poi_Rate_Aggregate_Order_By = {
  avg?: InputMaybe<Poi_Rate_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Poi_Rate_Max_Order_By>;
  min?: InputMaybe<Poi_Rate_Min_Order_By>;
  stddev?: InputMaybe<Poi_Rate_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Poi_Rate_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Poi_Rate_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Poi_Rate_Sum_Order_By>;
  var_pop?: InputMaybe<Poi_Rate_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Poi_Rate_Var_Samp_Order_By>;
  variance?: InputMaybe<Poi_Rate_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "poi_rate" */
export type Poi_Rate_Arr_Rel_Insert_Input = {
  data: Array<Poi_Rate_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Rate_On_Conflict>;
};

/** aggregate avg on columns */
export type Poi_Rate_Avg_Fields = {
  __typename?: "poi_rate_avg_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "poi_rate" */
export type Poi_Rate_Avg_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "poi_rate". All fields are combined with a logical 'AND'. */
export type Poi_Rate_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Rate_Bool_Exp>>;
  _not?: InputMaybe<Poi_Rate_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Rate_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Post_Bool_Exp>;
  rate?: InputMaybe<Smallint_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "poi_rate" */
export enum Poi_Rate_Constraint {
  /** unique or primary key constraint on columns "id" */
  PoiRatePk = "poi_rate_pk",
}

/** POI評価投稿ドラフト */
export type Poi_Rate_Draft = {
  __typename?: "poi_rate_draft";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** ID */
  id: Scalars["uuid"]["output"];
  /** 更新日時 */
  modified_at: Scalars["timestamp"]["output"];
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  poi_rate?: Maybe<Poi_Rate>;
  /** 元評価があればそのID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  post_draft?: Maybe<Post_Draft>;
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** aggregated selection of "poi_rate_draft" */
export type Poi_Rate_Draft_Aggregate = {
  __typename?: "poi_rate_draft_aggregate";
  aggregate?: Maybe<Poi_Rate_Draft_Aggregate_Fields>;
  nodes: Array<Poi_Rate_Draft>;
};

/** aggregate fields of "poi_rate_draft" */
export type Poi_Rate_Draft_Aggregate_Fields = {
  __typename?: "poi_rate_draft_aggregate_fields";
  avg?: Maybe<Poi_Rate_Draft_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Poi_Rate_Draft_Max_Fields>;
  min?: Maybe<Poi_Rate_Draft_Min_Fields>;
  stddev?: Maybe<Poi_Rate_Draft_Stddev_Fields>;
  stddev_pop?: Maybe<Poi_Rate_Draft_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poi_Rate_Draft_Stddev_Samp_Fields>;
  sum?: Maybe<Poi_Rate_Draft_Sum_Fields>;
  var_pop?: Maybe<Poi_Rate_Draft_Var_Pop_Fields>;
  var_samp?: Maybe<Poi_Rate_Draft_Var_Samp_Fields>;
  variance?: Maybe<Poi_Rate_Draft_Variance_Fields>;
};

/** aggregate fields of "poi_rate_draft" */
export type Poi_Rate_Draft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poi_Rate_Draft_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Poi_Rate_Draft_Avg_Fields = {
  __typename?: "poi_rate_draft_avg_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "poi_rate_draft". All fields are combined with a logical 'AND'. */
export type Poi_Rate_Draft_Bool_Exp = {
  _and?: InputMaybe<Array<Poi_Rate_Draft_Bool_Exp>>;
  _not?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
  _or?: InputMaybe<Array<Poi_Rate_Draft_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  poi_rate?: InputMaybe<Poi_Rate_Bool_Exp>;
  poi_rate_id?: InputMaybe<Uuid_Comparison_Exp>;
  post_draft?: InputMaybe<Post_Draft_Bool_Exp>;
  rate?: InputMaybe<Smallint_Comparison_Exp>;
};

/** unique or primary key constraints on table "poi_rate_draft" */
export enum Poi_Rate_Draft_Constraint {
  /** unique or primary key constraint on columns "id" */
  PoiRateDraftPk = "poi_rate_draft_pk",
  /** unique or primary key constraint on columns "poi_rate_id" */
  PoiRateDraftUk = "poi_rate_draft_uk",
}

/** input type for incrementing numeric columns in table "poi_rate_draft" */
export type Poi_Rate_Draft_Inc_Input = {
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "poi_rate_draft" */
export type Poi_Rate_Draft_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  poi_rate?: InputMaybe<Poi_Rate_Obj_Rel_Insert_Input>;
  /** 元評価があればそのID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_draft?: InputMaybe<Post_Draft_Obj_Rel_Insert_Input>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** aggregate max on columns */
export type Poi_Rate_Draft_Max_Fields = {
  __typename?: "poi_rate_draft_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 元評価があればそのID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** aggregate min on columns */
export type Poi_Rate_Draft_Min_Fields = {
  __typename?: "poi_rate_draft_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 元評価があればそのID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** response of any mutation on the table "poi_rate_draft" */
export type Poi_Rate_Draft_Mutation_Response = {
  __typename?: "poi_rate_draft_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi_Rate_Draft>;
};

/** input type for inserting object relation for remote table "poi_rate_draft" */
export type Poi_Rate_Draft_Obj_Rel_Insert_Input = {
  data: Poi_Rate_Draft_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Rate_Draft_On_Conflict>;
};

/** on_conflict condition type for table "poi_rate_draft" */
export type Poi_Rate_Draft_On_Conflict = {
  constraint: Poi_Rate_Draft_Constraint;
  update_columns?: Array<Poi_Rate_Draft_Update_Column>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

/** Ordering options when selecting data from "poi_rate_draft". */
export type Poi_Rate_Draft_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  poi_rate?: InputMaybe<Poi_Rate_Order_By>;
  poi_rate_id?: InputMaybe<Order_By>;
  post_draft?: InputMaybe<Post_Draft_Order_By>;
  rate?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poi_rate_draft */
export type Poi_Rate_Draft_Pk_Columns_Input = {
  /** ID */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "poi_rate_draft" */
export enum Poi_Rate_Draft_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateId = "poi_rate_id",
  /** column name */
  Rate = "rate",
}

/** input type for updating data in table "poi_rate_draft" */
export type Poi_Rate_Draft_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 元評価があればそのID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Rate_Draft_Stddev_Fields = {
  __typename?: "poi_rate_draft_stddev_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Poi_Rate_Draft_Stddev_Pop_Fields = {
  __typename?: "poi_rate_draft_stddev_pop_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Poi_Rate_Draft_Stddev_Samp_Fields = {
  __typename?: "poi_rate_draft_stddev_samp_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "poi_rate_draft" */
export type Poi_Rate_Draft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Rate_Draft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Rate_Draft_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 元評価があればそのID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Rate_Draft_Sum_Fields = {
  __typename?: "poi_rate_draft_sum_fields";
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** update columns of table "poi_rate_draft" */
export enum Poi_Rate_Draft_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateId = "poi_rate_id",
  /** column name */
  Rate = "rate",
}

export type Poi_Rate_Draft_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Rate_Draft_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Rate_Draft_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Rate_Draft_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Rate_Draft_Var_Pop_Fields = {
  __typename?: "poi_rate_draft_var_pop_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Poi_Rate_Draft_Var_Samp_Fields = {
  __typename?: "poi_rate_draft_var_samp_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Poi_Rate_Draft_Variance_Fields = {
  __typename?: "poi_rate_draft_variance_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** input type for incrementing numeric columns in table "poi_rate" */
export type Poi_Rate_Inc_Input = {
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "poi_rate" */
export type Poi_Rate_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Poi_Rate_Max_Fields = {
  __typename?: "poi_rate_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by max() on columns of table "poi_rate" */
export type Poi_Rate_Max_Order_By = {
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 作成者 */
  created_by?: InputMaybe<Order_By>;
  /** ID */
  id?: InputMaybe<Order_By>;
  /** 更新日時 */
  modified_at?: InputMaybe<Order_By>;
  /** POIID */
  poi_id?: InputMaybe<Order_By>;
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Poi_Rate_Min_Fields = {
  __typename?: "poi_rate_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by min() on columns of table "poi_rate" */
export type Poi_Rate_Min_Order_By = {
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 作成者 */
  created_by?: InputMaybe<Order_By>;
  /** ID */
  id?: InputMaybe<Order_By>;
  /** 更新日時 */
  modified_at?: InputMaybe<Order_By>;
  /** POIID */
  poi_id?: InputMaybe<Order_By>;
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "poi_rate" */
export type Poi_Rate_Mutation_Response = {
  __typename?: "poi_rate_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Poi_Rate>;
};

/** input type for inserting object relation for remote table "poi_rate" */
export type Poi_Rate_Obj_Rel_Insert_Input = {
  data: Poi_Rate_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Poi_Rate_On_Conflict>;
};

/** on_conflict condition type for table "poi_rate" */
export type Poi_Rate_On_Conflict = {
  constraint: Poi_Rate_Constraint;
  update_columns?: Array<Poi_Rate_Update_Column>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

/** Ordering options when selecting data from "poi_rate". */
export type Poi_Rate_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  post?: InputMaybe<Post_Order_By>;
  rate?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: poi_rate */
export type Poi_Rate_Pk_Columns_Input = {
  /** ID */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "poi_rate" */
export enum Poi_Rate_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  Rate = "rate",
}

/** select "poi_rate_aggregate_bool_exp_bool_and_arguments_columns" columns of table "poi_rate" */
export enum Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = "is_deleted",
}

/** select "poi_rate_aggregate_bool_exp_bool_or_arguments_columns" columns of table "poi_rate" */
export enum Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = "is_deleted",
}

/** input type for updating data in table "poi_rate" */
export type Poi_Rate_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Rate_Stddev_Fields = {
  __typename?: "poi_rate_stddev_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "poi_rate" */
export type Poi_Rate_Stddev_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Poi_Rate_Stddev_Pop_Fields = {
  __typename?: "poi_rate_stddev_pop_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "poi_rate" */
export type Poi_Rate_Stddev_Pop_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Poi_Rate_Stddev_Samp_Fields = {
  __typename?: "poi_rate_stddev_samp_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "poi_rate" */
export type Poi_Rate_Stddev_Samp_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "poi_rate" */
export type Poi_Rate_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Rate_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Rate_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 評価 */
  rate?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Rate_Sum_Fields = {
  __typename?: "poi_rate_sum_fields";
  /** 評価 */
  rate?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "poi_rate" */
export type Poi_Rate_Sum_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** update columns of table "poi_rate" */
export enum Poi_Rate_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  Rate = "rate",
}

export type Poi_Rate_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Rate_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Rate_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Rate_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Rate_Var_Pop_Fields = {
  __typename?: "poi_rate_var_pop_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "poi_rate" */
export type Poi_Rate_Var_Pop_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Poi_Rate_Var_Samp_Fields = {
  __typename?: "poi_rate_var_samp_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "poi_rate" */
export type Poi_Rate_Var_Samp_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Poi_Rate_Variance_Fields = {
  __typename?: "poi_rate_variance_fields";
  /** 評価 */
  rate?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "poi_rate" */
export type Poi_Rate_Variance_Order_By = {
  /** 評価 */
  rate?: InputMaybe<Order_By>;
};

/** select columns of table "poi" */
export enum Poi_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Geom = "geom",
  /** column name */
  Holiday = "holiday",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  IsWarning = "is_warning",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  ModifiedBy = "modified_by",
  /** column name */
  Name = "name",
  /** column name */
  OpenTime = "open_time",
  /** column name */
  PlaceId = "place_id",
  /** column name */
  Price = "price",
  /** column name */
  Tel = "tel",
  /** column name */
  Toilet = "toilet",
  /** column name */
  Url = "url",
}

/** input type for updating data in table "poi" */
export type Poi_Set_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** 休日 */
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 警告あり */
  is_warning?: InputMaybe<Scalars["Boolean"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  modified_by?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 営業時間 */
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  /** GooglePlaceId */
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  /** 料金 */
  price?: InputMaybe<Scalars["String"]["input"]>;
  /** 電話番号 */
  tel?: InputMaybe<Scalars["String"]["input"]>;
  /** トイレ有無 */
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  /** ホームページ */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Poi_Stddev_Fields = {
  __typename?: "poi_stddev_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Poi_Stddev_Pop_Fields = {
  __typename?: "poi_stddev_pop_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Poi_Stddev_Samp_Fields = {
  __typename?: "poi_stddev_samp_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "poi" */
export type Poi_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poi_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poi_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** 休日 */
  holiday?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 警告あり */
  is_warning?: InputMaybe<Scalars["Boolean"]["input"]>;
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  modified_by?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** 営業時間 */
  open_time?: InputMaybe<Scalars["String"]["input"]>;
  /** GooglePlaceId */
  place_id?: InputMaybe<Scalars["String"]["input"]>;
  /** 料金 */
  price?: InputMaybe<Scalars["String"]["input"]>;
  /** 電話番号 */
  tel?: InputMaybe<Scalars["String"]["input"]>;
  /** トイレ有無 */
  toilet?: InputMaybe<Scalars["String"]["input"]>;
  /** ホームページ */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Poi_Sum_Fields = {
  __typename?: "poi_sum_fields";
  lat?: Maybe<Scalars["numeric"]["output"]>;
  lng?: Maybe<Scalars["numeric"]["output"]>;
};

/** update columns of table "poi" */
export enum Poi_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Geom = "geom",
  /** column name */
  Holiday = "holiday",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  IsWarning = "is_warning",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  ModifiedBy = "modified_by",
  /** column name */
  Name = "name",
  /** column name */
  OpenTime = "open_time",
  /** column name */
  PlaceId = "place_id",
  /** column name */
  Price = "price",
  /** column name */
  Tel = "tel",
  /** column name */
  Toilet = "toilet",
  /** column name */
  Url = "url",
}

export type Poi_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poi_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poi_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poi_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poi_Var_Pop_Fields = {
  __typename?: "poi_var_pop_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Poi_Var_Samp_Fields = {
  __typename?: "poi_var_samp_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Poi_Variance_Fields = {
  __typename?: "poi_variance_fields";
  lat?: Maybe<Scalars["Float"]["output"]>;
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** 投稿 */
export type Post = {
  __typename?: "post";
  comment: Scalars["String"]["output"];
  /** An array relationship */
  comments: Array<Post>;
  /** An aggregate relationship */
  comments_aggregate: Post_Aggregate;
  created_at: Scalars["timestamp"]["output"];
  created_by: Scalars["uuid"]["output"];
  /** A computed field, executes function "has_mylike_post" */
  has_mylike?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["uuid"]["output"];
  /** 削除フラグ */
  is_deleted: Scalars["Boolean"]["output"];
  /** An array relationship */
  likes: Array<Post_Like>;
  /** An aggregate relationship */
  likes_aggregate: Post_Like_Aggregate;
  modified_at: Scalars["timestamp"]["output"];
  /** An object relationship */
  parent?: Maybe<Post>;
  /** 親投稿、コメントID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  photos: Array<Post_Photo>;
  /** An aggregate relationship */
  photos_aggregate: Post_Photo_Aggregate;
  /** An object relationship */
  poi?: Maybe<Poi>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  poi_rate?: Maybe<Poi_Rate>;
  /** レートID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  reply_to?: Maybe<Post>;
  /** 返信先投稿ID */
  reply_to_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  root?: Maybe<Post>;
  root_post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** An object relationship */
  user: Users;
};

/** 投稿 */
export type PostCommentsArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** 投稿 */
export type PostComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** 投稿 */
export type PostLikesArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

/** 投稿 */
export type PostLikes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

/** 投稿 */
export type PostPhotosArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

/** 投稿 */
export type PostPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

/** aggregated selection of "post" */
export type Post_Aggregate = {
  __typename?: "post_aggregate";
  aggregate?: Maybe<Post_Aggregate_Fields>;
  nodes: Array<Post>;
};

export type Post_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Post_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Post_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Post_Aggregate_Bool_Exp_Count>;
};

export type Post_Aggregate_Bool_Exp_Bool_And = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Post_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post" */
export type Post_Aggregate_Fields = {
  __typename?: "post_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Post_Max_Fields>;
  min?: Maybe<Post_Min_Fields>;
};

/** aggregate fields of "post" */
export type Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "post" */
export type Post_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Max_Order_By>;
  min?: InputMaybe<Post_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Bool_Exp>>;
  _not?: InputMaybe<Post_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  comments?: InputMaybe<Post_Bool_Exp>;
  comments_aggregate?: InputMaybe<Post_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  has_mylike?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  likes?: InputMaybe<Post_Like_Bool_Exp>;
  likes_aggregate?: InputMaybe<Post_Like_Aggregate_Bool_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  parent?: InputMaybe<Post_Bool_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
  photos?: InputMaybe<Post_Photo_Bool_Exp>;
  photos_aggregate?: InputMaybe<Post_Photo_Aggregate_Bool_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  poi_rate?: InputMaybe<Poi_Rate_Bool_Exp>;
  poi_rate_id?: InputMaybe<Uuid_Comparison_Exp>;
  reply_to?: InputMaybe<Post_Bool_Exp>;
  reply_to_id?: InputMaybe<Uuid_Comparison_Exp>;
  root?: InputMaybe<Post_Bool_Exp>;
  root_post_id?: InputMaybe<Uuid_Comparison_Exp>;
  stay_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "post" */
export enum Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostPk = "post_pk",
  /** unique or primary key constraint on columns "poi_rate_id" */
  PostPoiRateIdUk = "post_poi_rate_id_uk",
}

/** 投稿下書き */
export type Post_Draft = {
  __typename?: "post_draft";
  /** コメント */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** id */
  id: Scalars["uuid"]["output"];
  /** 更新日時 */
  modified_at: Scalars["timestamp"]["output"];
  /** An array relationship */
  photos: Array<Post_Photo>;
  /** An aggregate relationship */
  photos_aggregate: Post_Photo_Aggregate;
  /** An object relationship */
  poi?: Maybe<Poi>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An object relationship */
  poi_rate_draft?: Maybe<Poi_Rate_Draft>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
};

/** 投稿下書き */
export type Post_DraftPhotosArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

/** 投稿下書き */
export type Post_DraftPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

/** aggregated selection of "post_draft" */
export type Post_Draft_Aggregate = {
  __typename?: "post_draft_aggregate";
  aggregate?: Maybe<Post_Draft_Aggregate_Fields>;
  nodes: Array<Post_Draft>;
};

/** aggregate fields of "post_draft" */
export type Post_Draft_Aggregate_Fields = {
  __typename?: "post_draft_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Post_Draft_Max_Fields>;
  min?: Maybe<Post_Draft_Min_Fields>;
};

/** aggregate fields of "post_draft" */
export type Post_Draft_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Draft_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "post_draft". All fields are combined with a logical 'AND'. */
export type Post_Draft_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Draft_Bool_Exp>>;
  _not?: InputMaybe<Post_Draft_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Draft_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  photos?: InputMaybe<Post_Photo_Bool_Exp>;
  photos_aggregate?: InputMaybe<Post_Photo_Aggregate_Bool_Exp>;
  poi?: InputMaybe<Poi_Bool_Exp>;
  poi_id?: InputMaybe<Uuid_Comparison_Exp>;
  poi_rate_draft?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
  poi_rate_draft_id?: InputMaybe<Uuid_Comparison_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  stay_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_draft" */
export enum Post_Draft_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostDraftPk = "post_draft_pk",
  /** unique or primary key constraint on columns "poi_rate_draft_id" */
  PostDraftPk2 = "post_draft_pk2",
}

/** input type for inserting data into table "post_draft" */
export type Post_Draft_Insert_Input = {
  /** コメント */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** id */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  photos?: InputMaybe<Post_Photo_Arr_Rel_Insert_Input>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  poi_rate_draft?: InputMaybe<Poi_Rate_Draft_Obj_Rel_Insert_Input>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** aggregate max on columns */
export type Post_Draft_Max_Fields = {
  __typename?: "post_draft_max_fields";
  /** コメント */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** id */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
};

/** aggregate min on columns */
export type Post_Draft_Min_Fields = {
  __typename?: "post_draft_min_fields";
  /** コメント */
  comment?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** id */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** POIID */
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
};

/** response of any mutation on the table "post_draft" */
export type Post_Draft_Mutation_Response = {
  __typename?: "post_draft_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Draft>;
};

/** input type for inserting object relation for remote table "post_draft" */
export type Post_Draft_Obj_Rel_Insert_Input = {
  data: Post_Draft_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Draft_On_Conflict>;
};

/** on_conflict condition type for table "post_draft" */
export type Post_Draft_On_Conflict = {
  constraint: Post_Draft_Constraint;
  update_columns?: Array<Post_Draft_Update_Column>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

/** Ordering options when selecting data from "post_draft". */
export type Post_Draft_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<Post_Photo_Aggregate_Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  poi_rate_draft?: InputMaybe<Poi_Rate_Draft_Order_By>;
  poi_rate_draft_id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  stay_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_draft */
export type Post_Draft_Pk_Columns_Input = {
  /** id */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "post_draft" */
export enum Post_Draft_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateDraftId = "poi_rate_draft_id",
  /** column name */
  PostId = "post_id",
  /** column name */
  StayAt = "stay_at",
}

/** input type for updating data in table "post_draft" */
export type Post_Draft_Set_Input = {
  /** コメント */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** id */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** Streaming cursor of the table "post_draft" */
export type Post_Draft_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Draft_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Draft_Stream_Cursor_Value_Input = {
  /** コメント */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** id */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** POIID */
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** POI評価ドラフトID */
  poi_rate_draft_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 投稿ID（編集時に使用） */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** update columns of table "post_draft" */
export enum Post_Draft_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateDraftId = "poi_rate_draft_id",
  /** column name */
  PostId = "post_id",
  /** column name */
  StayAt = "stay_at",
}

export type Post_Draft_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Draft_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Draft_Bool_Exp;
};

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  comments?: InputMaybe<Post_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  likes?: InputMaybe<Post_Like_Arr_Rel_Insert_Input>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  parent?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  /** 親投稿、コメントID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
  photos?: InputMaybe<Post_Photo_Arr_Rel_Insert_Input>;
  poi?: InputMaybe<Poi_Obj_Rel_Insert_Input>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  poi_rate?: InputMaybe<Poi_Rate_Obj_Rel_Insert_Input>;
  /** レートID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  reply_to?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  /** 返信先投稿ID */
  reply_to_id?: InputMaybe<Scalars["uuid"]["input"]>;
  root?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  root_post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** 投稿へのいいね */
export type Post_Like = {
  __typename?: "post_like";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** An object relationship */
  post: Post;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id: Scalars["uuid"]["output"];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "post_like" */
export type Post_Like_Aggregate = {
  __typename?: "post_like_aggregate";
  aggregate?: Maybe<Post_Like_Aggregate_Fields>;
  nodes: Array<Post_Like>;
};

export type Post_Like_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Like_Aggregate_Bool_Exp_Count>;
};

export type Post_Like_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Like_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Post_Like_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_like" */
export type Post_Like_Aggregate_Fields = {
  __typename?: "post_like_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Post_Like_Max_Fields>;
  min?: Maybe<Post_Like_Min_Fields>;
};

/** aggregate fields of "post_like" */
export type Post_Like_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Like_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "post_like" */
export type Post_Like_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Like_Max_Order_By>;
  min?: InputMaybe<Post_Like_Min_Order_By>;
};

/** input type for inserting array relation for remote table "post_like" */
export type Post_Like_Arr_Rel_Insert_Input = {
  data: Array<Post_Like_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Like_On_Conflict>;
};

/** Boolean expression to filter rows from the table "post_like". All fields are combined with a logical 'AND'. */
export type Post_Like_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Like_Bool_Exp>>;
  _not?: InputMaybe<Post_Like_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Like_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Post_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "post_like" */
export enum Post_Like_Constraint {
  /** unique or primary key constraint on columns "post_id", "created_by" */
  PostLikePk = "post_like_pk",
}

/** input type for inserting data into table "post_like" */
export type Post_Like_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Post_Obj_Rel_Insert_Input>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Post_Like_Max_Fields = {
  __typename?: "post_like_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "post_like" */
export type Post_Like_Max_Order_By = {
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 作成者 */
  created_by?: InputMaybe<Order_By>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Like_Min_Fields = {
  __typename?: "post_like_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "post_like" */
export type Post_Like_Min_Order_By = {
  /** 作成日時 */
  created_at?: InputMaybe<Order_By>;
  /** 作成者 */
  created_by?: InputMaybe<Order_By>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_like" */
export type Post_Like_Mutation_Response = {
  __typename?: "post_like_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Like>;
};

/** on_conflict condition type for table "post_like" */
export type Post_Like_On_Conflict = {
  constraint: Post_Like_Constraint;
  update_columns?: Array<Post_Like_Update_Column>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

/** Ordering options when selecting data from "post_like". */
export type Post_Like_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  post?: InputMaybe<Post_Order_By>;
  post_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: post_like */
export type Post_Like_Pk_Columns_Input = {
  /** 作成者 */
  created_by: Scalars["uuid"]["input"];
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id: Scalars["uuid"]["input"];
};

/** select columns of table "post_like" */
export enum Post_Like_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  PostId = "post_id",
}

/** input type for updating data in table "post_like" */
export type Post_Like_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "post_like" */
export type Post_Like_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Like_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Like_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "post_like" */
export enum Post_Like_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  PostId = "post_id",
}

export type Post_Like_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Like_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Like_Bool_Exp;
};

/** aggregate max on columns */
export type Post_Max_Fields = {
  __typename?: "post_max_fields";
  comment?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 親投稿、コメントID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** レートID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 返信先投稿ID */
  reply_to_id?: Maybe<Scalars["uuid"]["output"]>;
  root_post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by max() on columns of table "post" */
export type Post_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  /** 親投稿、コメントID */
  parent_id?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  /** レートID */
  poi_rate_id?: InputMaybe<Order_By>;
  /** 返信先投稿ID */
  reply_to_id?: InputMaybe<Order_By>;
  root_post_id?: InputMaybe<Order_By>;
  /** 滞在日 */
  stay_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Min_Fields = {
  __typename?: "post_min_fields";
  comment?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 親投稿、コメントID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
  poi_id?: Maybe<Scalars["uuid"]["output"]>;
  /** レートID */
  poi_rate_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 返信先投稿ID */
  reply_to_id?: Maybe<Scalars["uuid"]["output"]>;
  root_post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** 滞在日 */
  stay_at?: Maybe<Scalars["timestamp"]["output"]>;
};

/** order by min() on columns of table "post" */
export type Post_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  /** 親投稿、コメントID */
  parent_id?: InputMaybe<Order_By>;
  poi_id?: InputMaybe<Order_By>;
  /** レートID */
  poi_rate_id?: InputMaybe<Order_By>;
  /** 返信先投稿ID */
  reply_to_id?: InputMaybe<Order_By>;
  root_post_id?: InputMaybe<Order_By>;
  /** 滞在日 */
  stay_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post" */
export type Post_Mutation_Response = {
  __typename?: "post_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Post>;
};

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_On_Conflict>;
};

/** on_conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: InputMaybe<Post_Bool_Exp>;
};

/** Ordering options when selecting data from "post". */
export type Post_Order_By = {
  comment?: InputMaybe<Order_By>;
  comments_aggregate?: InputMaybe<Post_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  has_mylike?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  likes_aggregate?: InputMaybe<Post_Like_Aggregate_Order_By>;
  modified_at?: InputMaybe<Order_By>;
  parent?: InputMaybe<Post_Order_By>;
  parent_id?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<Post_Photo_Aggregate_Order_By>;
  poi?: InputMaybe<Poi_Order_By>;
  poi_id?: InputMaybe<Order_By>;
  poi_rate?: InputMaybe<Poi_Rate_Order_By>;
  poi_rate_id?: InputMaybe<Order_By>;
  reply_to?: InputMaybe<Post_Order_By>;
  reply_to_id?: InputMaybe<Order_By>;
  root?: InputMaybe<Post_Order_By>;
  root_post_id?: InputMaybe<Order_By>;
  stay_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** 投稿写真 */
export type Post_Photo = {
  __typename?: "post_photo";
  /** 写真ID */
  image: Scalars["String"]["output"];
  /** 表示順序 */
  order_no: Scalars["smallint"]["output"];
  /** レビューレコードのID */
  target_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "post_photo" */
export type Post_Photo_Aggregate = {
  __typename?: "post_photo_aggregate";
  aggregate?: Maybe<Post_Photo_Aggregate_Fields>;
  nodes: Array<Post_Photo>;
};

export type Post_Photo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Post_Photo_Aggregate_Bool_Exp_Count>;
};

export type Post_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Post_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Post_Photo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "post_photo" */
export type Post_Photo_Aggregate_Fields = {
  __typename?: "post_photo_aggregate_fields";
  avg?: Maybe<Post_Photo_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Post_Photo_Max_Fields>;
  min?: Maybe<Post_Photo_Min_Fields>;
  stddev?: Maybe<Post_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Post_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Post_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Post_Photo_Sum_Fields>;
  var_pop?: Maybe<Post_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Post_Photo_Var_Samp_Fields>;
  variance?: Maybe<Post_Photo_Variance_Fields>;
};

/** aggregate fields of "post_photo" */
export type Post_Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Post_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "post_photo" */
export type Post_Photo_Aggregate_Order_By = {
  avg?: InputMaybe<Post_Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Post_Photo_Max_Order_By>;
  min?: InputMaybe<Post_Photo_Min_Order_By>;
  stddev?: InputMaybe<Post_Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Post_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Post_Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Post_Photo_Sum_Order_By>;
  var_pop?: InputMaybe<Post_Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Post_Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<Post_Photo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "post_photo" */
export type Post_Photo_Arr_Rel_Insert_Input = {
  data: Array<Post_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Post_Photo_On_Conflict>;
};

/** aggregate avg on columns */
export type Post_Photo_Avg_Fields = {
  __typename?: "post_photo_avg_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "post_photo" */
export type Post_Photo_Avg_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "post_photo". All fields are combined with a logical 'AND'. */
export type Post_Photo_Bool_Exp = {
  _and?: InputMaybe<Array<Post_Photo_Bool_Exp>>;
  _not?: InputMaybe<Post_Photo_Bool_Exp>;
  _or?: InputMaybe<Array<Post_Photo_Bool_Exp>>;
  image?: InputMaybe<String_Comparison_Exp>;
  order_no?: InputMaybe<Smallint_Comparison_Exp>;
  target_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "post_photo" */
export enum Post_Photo_Constraint {
  /** unique or primary key constraint on columns "target_id", "order_no" */
  PostPhotoPk = "post_photo_pk",
}

/** input type for incrementing numeric columns in table "post_photo" */
export type Post_Photo_Inc_Input = {
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "post_photo" */
export type Post_Photo_Insert_Input = {
  /** 写真ID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** レビューレコードのID */
  target_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Post_Photo_Max_Fields = {
  __typename?: "post_photo_max_fields";
  /** 写真ID */
  image?: Maybe<Scalars["String"]["output"]>;
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** レビューレコードのID */
  target_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "post_photo" */
export type Post_Photo_Max_Order_By = {
  /** 写真ID */
  image?: InputMaybe<Order_By>;
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
  /** レビューレコードのID */
  target_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Post_Photo_Min_Fields = {
  __typename?: "post_photo_min_fields";
  /** 写真ID */
  image?: Maybe<Scalars["String"]["output"]>;
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** レビューレコードのID */
  target_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "post_photo" */
export type Post_Photo_Min_Order_By = {
  /** 写真ID */
  image?: InputMaybe<Order_By>;
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
  /** レビューレコードのID */
  target_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "post_photo" */
export type Post_Photo_Mutation_Response = {
  __typename?: "post_photo_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Post_Photo>;
};

/** on_conflict condition type for table "post_photo" */
export type Post_Photo_On_Conflict = {
  constraint: Post_Photo_Constraint;
  update_columns?: Array<Post_Photo_Update_Column>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

/** Ordering options when selecting data from "post_photo". */
export type Post_Photo_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  target_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post_photo */
export type Post_Photo_Pk_Columns_Input = {
  /** 表示順序 */
  order_no: Scalars["smallint"]["input"];
  /** レビューレコードのID */
  target_id: Scalars["uuid"]["input"];
};

/** select columns of table "post_photo" */
export enum Post_Photo_Select_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  TargetId = "target_id",
}

/** input type for updating data in table "post_photo" */
export type Post_Photo_Set_Input = {
  /** 写真ID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** レビューレコードのID */
  target_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Post_Photo_Stddev_Fields = {
  __typename?: "post_photo_stddev_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "post_photo" */
export type Post_Photo_Stddev_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Post_Photo_Stddev_Pop_Fields = {
  __typename?: "post_photo_stddev_pop_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "post_photo" */
export type Post_Photo_Stddev_Pop_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Post_Photo_Stddev_Samp_Fields = {
  __typename?: "post_photo_stddev_samp_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "post_photo" */
export type Post_Photo_Stddev_Samp_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "post_photo" */
export type Post_Photo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Photo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Photo_Stream_Cursor_Value_Input = {
  /** 写真ID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** 表示順序 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** レビューレコードのID */
  target_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Post_Photo_Sum_Fields = {
  __typename?: "post_photo_sum_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "post_photo" */
export type Post_Photo_Sum_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** update columns of table "post_photo" */
export enum Post_Photo_Update_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  TargetId = "target_id",
}

export type Post_Photo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Post_Photo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Photo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Photo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Post_Photo_Var_Pop_Fields = {
  __typename?: "post_photo_var_pop_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "post_photo" */
export type Post_Photo_Var_Pop_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Post_Photo_Var_Samp_Fields = {
  __typename?: "post_photo_var_samp_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "post_photo" */
export type Post_Photo_Var_Samp_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Post_Photo_Variance_Fields = {
  __typename?: "post_photo_variance_fields";
  /** 表示順序 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "post_photo" */
export type Post_Photo_Variance_Order_By = {
  /** 表示順序 */
  order_no?: InputMaybe<Order_By>;
};

/** primary key columns input for table: post */
export type Post_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "post" */
export enum Post_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateId = "poi_rate_id",
  /** column name */
  ReplyToId = "reply_to_id",
  /** column name */
  RootPostId = "root_post_id",
  /** column name */
  StayAt = "stay_at",
}

/** select "post_aggregate_bool_exp_bool_and_arguments_columns" columns of table "post" */
export enum Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDeleted = "is_deleted",
}

/** select "post_aggregate_bool_exp_bool_or_arguments_columns" columns of table "post" */
export enum Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDeleted = "is_deleted",
}

/** input type for updating data in table "post" */
export type Post_Set_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 親投稿、コメントID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** レートID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 返信先投稿ID */
  reply_to_id?: InputMaybe<Scalars["uuid"]["input"]>;
  root_post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** Streaming cursor of the table "post" */
export type Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Post_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 削除フラグ */
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 親投稿、コメントID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
  poi_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** レートID */
  poi_rate_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 返信先投稿ID */
  reply_to_id?: InputMaybe<Scalars["uuid"]["input"]>;
  root_post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 滞在日 */
  stay_at?: InputMaybe<Scalars["timestamp"]["input"]>;
};

/** update columns of table "post" */
export enum Post_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Id = "id",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  PoiId = "poi_id",
  /** column name */
  PoiRateId = "poi_rate_id",
  /** column name */
  ReplyToId = "reply_to_id",
  /** column name */
  RootPostId = "root_post_id",
  /** column name */
  StayAt = "stay_at",
}

export type Post_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Post_Bool_Exp;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "block_user" */
  block_user: Array<Block_User>;
  /** fetch aggregated fields from the table: "block_user" */
  block_user_aggregate: Block_User_Aggregate;
  /** fetch data from the table: "block_user" using primary key columns */
  block_user_by_pk?: Maybe<Block_User>;
  /** fetch data from the table: "bookmark" */
  bookmark: Array<Bookmark>;
  /** fetch aggregated fields from the table: "bookmark" */
  bookmark_aggregate: Bookmark_Aggregate;
  /** fetch data from the table: "bookmark" using primary key columns */
  bookmark_by_pk?: Maybe<Bookmark>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "draft_user" */
  draft_user: Array<Draft_User>;
  /** fetch aggregated fields from the table: "draft_user" */
  draft_user_aggregate: Draft_User_Aggregate;
  /** fetch data from the table: "draft_user" using primary key columns */
  draft_user_by_pk?: Maybe<Draft_User>;
  /** fetch data from the table: "feedback" */
  feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "feedback" */
  feedback_aggregate: Feedback_Aggregate;
  /** fetch data from the table: "feedback" using primary key columns */
  feedback_by_pk?: Maybe<Feedback>;
  /** fetch data from the table: "japan_polygon" */
  japan_polygon: Array<Japan_Polygon>;
  /** fetch aggregated fields from the table: "japan_polygon" */
  japan_polygon_aggregate: Japan_Polygon_Aggregate;
  /** fetch data from the table: "japan_polygon" using primary key columns */
  japan_polygon_by_pk?: Maybe<Japan_Polygon>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table: "poi" */
  poi: Array<Poi>;
  /** fetch aggregated fields from the table: "poi" */
  poi_aggregate: Poi_Aggregate;
  /** fetch data from the table: "poi" using primary key columns */
  poi_by_pk?: Maybe<Poi>;
  /** fetch data from the table: "poi_draft" */
  poi_draft: Array<Poi_Draft>;
  /** fetch aggregated fields from the table: "poi_draft" */
  poi_draft_aggregate: Poi_Draft_Aggregate;
  /** fetch data from the table: "poi_draft" using primary key columns */
  poi_draft_by_pk?: Maybe<Poi_Draft>;
  /** fetch data from the table: "poi_draft_photo" */
  poi_draft_photo: Array<Poi_Draft_Photo>;
  /** fetch aggregated fields from the table: "poi_draft_photo" */
  poi_draft_photo_aggregate: Poi_Draft_Photo_Aggregate;
  /** fetch data from the table: "poi_photo" */
  poi_photo: Array<Poi_Photo>;
  /** fetch aggregated fields from the table: "poi_photo" */
  poi_photo_aggregate: Poi_Photo_Aggregate;
  /** fetch data from the table: "poi_photo" using primary key columns */
  poi_photo_by_pk?: Maybe<Poi_Photo>;
  /** fetch data from the table: "poi_rate" */
  poi_rate: Array<Poi_Rate>;
  /** fetch aggregated fields from the table: "poi_rate" */
  poi_rate_aggregate: Poi_Rate_Aggregate;
  /** fetch data from the table: "poi_rate" using primary key columns */
  poi_rate_by_pk?: Maybe<Poi_Rate>;
  /** fetch data from the table: "poi_rate_draft" */
  poi_rate_draft: Array<Poi_Rate_Draft>;
  /** fetch aggregated fields from the table: "poi_rate_draft" */
  poi_rate_draft_aggregate: Poi_Rate_Draft_Aggregate;
  /** fetch data from the table: "poi_rate_draft" using primary key columns */
  poi_rate_draft_by_pk?: Maybe<Poi_Rate_Draft>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_draft" */
  post_draft: Array<Post_Draft>;
  /** fetch aggregated fields from the table: "post_draft" */
  post_draft_aggregate: Post_Draft_Aggregate;
  /** fetch data from the table: "post_draft" using primary key columns */
  post_draft_by_pk?: Maybe<Post_Draft>;
  /** fetch data from the table: "post_like" */
  post_like: Array<Post_Like>;
  /** fetch aggregated fields from the table: "post_like" */
  post_like_aggregate: Post_Like_Aggregate;
  /** fetch data from the table: "post_like" using primary key columns */
  post_like_by_pk?: Maybe<Post_Like>;
  /** fetch data from the table: "post_photo" */
  post_photo: Array<Post_Photo>;
  /** fetch aggregated fields from the table: "post_photo" */
  post_photo_aggregate: Post_Photo_Aggregate;
  /** fetch data from the table: "post_photo" using primary key columns */
  post_photo_by_pk?: Maybe<Post_Photo>;
  /** fetch data from the table: "report_post" */
  report_post: Array<Report_Post>;
  /** fetch aggregated fields from the table: "report_post" */
  report_post_aggregate: Report_Post_Aggregate;
  /** fetch data from the table: "report_post" using primary key columns */
  report_post_by_pk?: Maybe<Report_Post>;
  /** execute function "search_neighbors" which returns "poi" */
  search_neighbors: Array<Poi>;
  /** execute function "search_neighbors" and query aggregates on result of table type "poi" */
  search_neighbors_aggregate: Poi_Aggregate;
  /** fetch data from the table: "user_location" */
  user_location: Array<User_Location>;
  /** fetch aggregated fields from the table: "user_location" */
  user_location_aggregate: User_Location_Aggregate;
  /** fetch data from the table: "user_location" using primary key columns */
  user_location_by_pk?: Maybe<User_Location>;
  /** fetch data from the table: "user_spot" */
  user_spot: Array<User_Spot>;
  /** fetch aggregated fields from the table: "user_spot" */
  user_spot_aggregate: User_Spot_Aggregate;
  /** fetch data from the table: "user_spot" using primary key columns */
  user_spot_by_pk?: Maybe<User_Spot>;
  /** fetch data from the table: "user_spot_photo" */
  user_spot_photo: Array<User_Spot_Photo>;
  /** fetch aggregated fields from the table: "user_spot_photo" */
  user_spot_photo_aggregate: User_Spot_Photo_Aggregate;
  /** fetch data from the table: "user_spot_photo" using primary key columns */
  user_spot_photo_by_pk?: Maybe<User_Spot_Photo>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

export type Query_RootBlock_UserArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

export type Query_RootBlock_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

export type Query_RootBlock_User_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type Query_RootBookmarkArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

export type Query_RootBookmark_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

export type Query_RootBookmark_By_PkArgs = {
  poi_id: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

export type Query_RootContact_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDraft_UserArgs = {
  distinct_on?: InputMaybe<Array<Draft_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_User_Order_By>>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

export type Query_RootDraft_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_User_Order_By>>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

export type Query_RootDraft_User_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

export type Query_RootFeedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

export type Query_RootFeedback_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootJapan_PolygonArgs = {
  distinct_on?: InputMaybe<Array<Japan_Polygon_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Japan_Polygon_Order_By>>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

export type Query_RootJapan_Polygon_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Japan_Polygon_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Japan_Polygon_Order_By>>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

export type Query_RootJapan_Polygon_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Query_RootNotification_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPoiArgs = {
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Query_RootPoi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Query_RootPoi_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPoi_DraftArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Order_By>>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

export type Query_RootPoi_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Order_By>>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

export type Query_RootPoi_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPoi_Draft_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

export type Query_RootPoi_Draft_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

export type Query_RootPoi_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

export type Query_RootPoi_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

export type Query_RootPoi_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

export type Query_RootPoi_RateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

export type Query_RootPoi_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

export type Query_RootPoi_Rate_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPoi_Rate_DraftArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Draft_Order_By>>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

export type Query_RootPoi_Rate_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Draft_Order_By>>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

export type Query_RootPoi_Rate_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Query_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Query_RootPost_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPost_DraftArgs = {
  distinct_on?: InputMaybe<Array<Post_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Draft_Order_By>>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

export type Query_RootPost_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Draft_Order_By>>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

export type Query_RootPost_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPost_LikeArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

export type Query_RootPost_Like_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

export type Query_RootPost_Like_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  post_id: Scalars["uuid"]["input"];
};

export type Query_RootPost_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

export type Query_RootPost_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

export type Query_RootPost_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  target_id: Scalars["uuid"]["input"];
};

export type Query_RootReport_PostArgs = {
  distinct_on?: InputMaybe<Array<Report_Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Report_Post_Order_By>>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

export type Query_RootReport_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Report_Post_Order_By>>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

export type Query_RootReport_Post_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootSearch_NeighborsArgs = {
  args: Search_Neighbors_Args;
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Query_RootSearch_Neighbors_AggregateArgs = {
  args: Search_Neighbors_Args;
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Query_RootUser_LocationArgs = {
  distinct_on?: InputMaybe<Array<User_Location_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Location_Order_By>>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

export type Query_RootUser_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Location_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Location_Order_By>>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

export type Query_RootUser_Location_By_PkArgs = {
  user_id: Scalars["uuid"]["input"];
};

export type Query_RootUser_SpotArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Order_By>>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

export type Query_RootUser_Spot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Order_By>>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

export type Query_RootUser_Spot_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUser_Spot_PhotoArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

export type Query_RootUser_Spot_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

export type Query_RootUser_Spot_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** ユーザーからの報告 */
export type Report_Post = {
  __typename?: "report_post";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** 内容 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Scalars["uuid"]["output"];
  /** 報告対象の投稿ID */
  post_id: Scalars["uuid"]["output"];
  /** レポートタイプ */
  type: Scalars["String"]["output"];
};

/** aggregated selection of "report_post" */
export type Report_Post_Aggregate = {
  __typename?: "report_post_aggregate";
  aggregate?: Maybe<Report_Post_Aggregate_Fields>;
  nodes: Array<Report_Post>;
};

/** aggregate fields of "report_post" */
export type Report_Post_Aggregate_Fields = {
  __typename?: "report_post_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Report_Post_Max_Fields>;
  min?: Maybe<Report_Post_Min_Fields>;
};

/** aggregate fields of "report_post" */
export type Report_Post_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Report_Post_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "report_post". All fields are combined with a logical 'AND'. */
export type Report_Post_Bool_Exp = {
  _and?: InputMaybe<Array<Report_Post_Bool_Exp>>;
  _not?: InputMaybe<Report_Post_Bool_Exp>;
  _or?: InputMaybe<Array<Report_Post_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "report_post" */
export enum Report_Post_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReportPostPk = "report_post_pk",
}

/** input type for inserting data into table "report_post" */
export type Report_Post_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 内容 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 報告対象の投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** レポートタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Report_Post_Max_Fields = {
  __typename?: "report_post_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** 内容 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 報告対象の投稿ID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** レポートタイプ */
  type?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Report_Post_Min_Fields = {
  __typename?: "report_post_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** 内容 */
  description?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 報告対象の投稿ID */
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  /** レポートタイプ */
  type?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "report_post" */
export type Report_Post_Mutation_Response = {
  __typename?: "report_post_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Report_Post>;
};

/** on_conflict condition type for table "report_post" */
export type Report_Post_On_Conflict = {
  constraint: Report_Post_Constraint;
  update_columns?: Array<Report_Post_Update_Column>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

/** Ordering options when selecting data from "report_post". */
export type Report_Post_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: report_post */
export type Report_Post_Pk_Columns_Input = {
  /** ID */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "report_post" */
export enum Report_Post_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "report_post" */
export type Report_Post_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 内容 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 報告対象の投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** レポートタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "report_post" */
export type Report_Post_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Report_Post_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Report_Post_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 内容 */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 報告対象の投稿ID */
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** レポートタイプ */
  type?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "report_post" */
export enum Report_Post_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  Type = "type",
}

export type Report_Post_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Report_Post_Set_Input>;
  /** filter the rows which have to be updated */
  where: Report_Post_Bool_Exp;
};

export type Search_Neighbors_Args = {
  pdistance?: InputMaybe<Scalars["Int"]["input"]>;
  plat?: InputMaybe<Scalars["numeric"]["input"]>;
  plng?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["smallint"]["input"]>;
  _gt?: InputMaybe<Scalars["smallint"]["input"]>;
  _gte?: InputMaybe<Scalars["smallint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["smallint"]["input"]>;
  _lte?: InputMaybe<Scalars["smallint"]["input"]>;
  _neq?: InputMaybe<Scalars["smallint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["smallint"]["input"]>>;
};

export type St_D_Within_Geography_Input = {
  distance: Scalars["Float"]["input"];
  from: Scalars["geography"]["input"];
  use_spheroid?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type St_D_Within_Input = {
  distance: Scalars["Float"]["input"];
  from: Scalars["geometry"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "block_user" */
  block_user: Array<Block_User>;
  /** fetch aggregated fields from the table: "block_user" */
  block_user_aggregate: Block_User_Aggregate;
  /** fetch data from the table: "block_user" using primary key columns */
  block_user_by_pk?: Maybe<Block_User>;
  /** fetch data from the table in a streaming manner: "block_user" */
  block_user_stream: Array<Block_User>;
  /** fetch data from the table: "bookmark" */
  bookmark: Array<Bookmark>;
  /** fetch aggregated fields from the table: "bookmark" */
  bookmark_aggregate: Bookmark_Aggregate;
  /** fetch data from the table: "bookmark" using primary key columns */
  bookmark_by_pk?: Maybe<Bookmark>;
  /** fetch data from the table in a streaming manner: "bookmark" */
  bookmark_stream: Array<Bookmark>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table in a streaming manner: "contact" */
  contact_stream: Array<Contact>;
  /** fetch data from the table: "draft_user" */
  draft_user: Array<Draft_User>;
  /** fetch aggregated fields from the table: "draft_user" */
  draft_user_aggregate: Draft_User_Aggregate;
  /** fetch data from the table: "draft_user" using primary key columns */
  draft_user_by_pk?: Maybe<Draft_User>;
  /** fetch data from the table in a streaming manner: "draft_user" */
  draft_user_stream: Array<Draft_User>;
  /** fetch data from the table: "feedback" */
  feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "feedback" */
  feedback_aggregate: Feedback_Aggregate;
  /** fetch data from the table: "feedback" using primary key columns */
  feedback_by_pk?: Maybe<Feedback>;
  /** fetch data from the table in a streaming manner: "feedback" */
  feedback_stream: Array<Feedback>;
  /** fetch data from the table: "japan_polygon" */
  japan_polygon: Array<Japan_Polygon>;
  /** fetch aggregated fields from the table: "japan_polygon" */
  japan_polygon_aggregate: Japan_Polygon_Aggregate;
  /** fetch data from the table: "japan_polygon" using primary key columns */
  japan_polygon_by_pk?: Maybe<Japan_Polygon>;
  /** fetch data from the table in a streaming manner: "japan_polygon" */
  japan_polygon_stream: Array<Japan_Polygon>;
  /** fetch data from the table: "notification" */
  notification: Array<Notification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: Notification_Aggregate;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<Notification>;
  /** fetch data from the table in a streaming manner: "notification" */
  notification_stream: Array<Notification>;
  /** fetch data from the table: "poi" */
  poi: Array<Poi>;
  /** fetch aggregated fields from the table: "poi" */
  poi_aggregate: Poi_Aggregate;
  /** fetch data from the table: "poi" using primary key columns */
  poi_by_pk?: Maybe<Poi>;
  /** fetch data from the table: "poi_draft" */
  poi_draft: Array<Poi_Draft>;
  /** fetch aggregated fields from the table: "poi_draft" */
  poi_draft_aggregate: Poi_Draft_Aggregate;
  /** fetch data from the table: "poi_draft" using primary key columns */
  poi_draft_by_pk?: Maybe<Poi_Draft>;
  /** fetch data from the table: "poi_draft_photo" */
  poi_draft_photo: Array<Poi_Draft_Photo>;
  /** fetch aggregated fields from the table: "poi_draft_photo" */
  poi_draft_photo_aggregate: Poi_Draft_Photo_Aggregate;
  /** fetch data from the table in a streaming manner: "poi_draft_photo" */
  poi_draft_photo_stream: Array<Poi_Draft_Photo>;
  /** fetch data from the table in a streaming manner: "poi_draft" */
  poi_draft_stream: Array<Poi_Draft>;
  /** fetch data from the table: "poi_photo" */
  poi_photo: Array<Poi_Photo>;
  /** fetch aggregated fields from the table: "poi_photo" */
  poi_photo_aggregate: Poi_Photo_Aggregate;
  /** fetch data from the table: "poi_photo" using primary key columns */
  poi_photo_by_pk?: Maybe<Poi_Photo>;
  /** fetch data from the table in a streaming manner: "poi_photo" */
  poi_photo_stream: Array<Poi_Photo>;
  /** fetch data from the table: "poi_rate" */
  poi_rate: Array<Poi_Rate>;
  /** fetch aggregated fields from the table: "poi_rate" */
  poi_rate_aggregate: Poi_Rate_Aggregate;
  /** fetch data from the table: "poi_rate" using primary key columns */
  poi_rate_by_pk?: Maybe<Poi_Rate>;
  /** fetch data from the table: "poi_rate_draft" */
  poi_rate_draft: Array<Poi_Rate_Draft>;
  /** fetch aggregated fields from the table: "poi_rate_draft" */
  poi_rate_draft_aggregate: Poi_Rate_Draft_Aggregate;
  /** fetch data from the table: "poi_rate_draft" using primary key columns */
  poi_rate_draft_by_pk?: Maybe<Poi_Rate_Draft>;
  /** fetch data from the table in a streaming manner: "poi_rate_draft" */
  poi_rate_draft_stream: Array<Poi_Rate_Draft>;
  /** fetch data from the table in a streaming manner: "poi_rate" */
  poi_rate_stream: Array<Poi_Rate>;
  /** fetch data from the table in a streaming manner: "poi" */
  poi_stream: Array<Poi>;
  /** fetch data from the table: "post" */
  post: Array<Post>;
  /** fetch aggregated fields from the table: "post" */
  post_aggregate: Post_Aggregate;
  /** fetch data from the table: "post" using primary key columns */
  post_by_pk?: Maybe<Post>;
  /** fetch data from the table: "post_draft" */
  post_draft: Array<Post_Draft>;
  /** fetch aggregated fields from the table: "post_draft" */
  post_draft_aggregate: Post_Draft_Aggregate;
  /** fetch data from the table: "post_draft" using primary key columns */
  post_draft_by_pk?: Maybe<Post_Draft>;
  /** fetch data from the table in a streaming manner: "post_draft" */
  post_draft_stream: Array<Post_Draft>;
  /** fetch data from the table: "post_like" */
  post_like: Array<Post_Like>;
  /** fetch aggregated fields from the table: "post_like" */
  post_like_aggregate: Post_Like_Aggregate;
  /** fetch data from the table: "post_like" using primary key columns */
  post_like_by_pk?: Maybe<Post_Like>;
  /** fetch data from the table in a streaming manner: "post_like" */
  post_like_stream: Array<Post_Like>;
  /** fetch data from the table: "post_photo" */
  post_photo: Array<Post_Photo>;
  /** fetch aggregated fields from the table: "post_photo" */
  post_photo_aggregate: Post_Photo_Aggregate;
  /** fetch data from the table: "post_photo" using primary key columns */
  post_photo_by_pk?: Maybe<Post_Photo>;
  /** fetch data from the table in a streaming manner: "post_photo" */
  post_photo_stream: Array<Post_Photo>;
  /** fetch data from the table in a streaming manner: "post" */
  post_stream: Array<Post>;
  /** fetch data from the table: "report_post" */
  report_post: Array<Report_Post>;
  /** fetch aggregated fields from the table: "report_post" */
  report_post_aggregate: Report_Post_Aggregate;
  /** fetch data from the table: "report_post" using primary key columns */
  report_post_by_pk?: Maybe<Report_Post>;
  /** fetch data from the table in a streaming manner: "report_post" */
  report_post_stream: Array<Report_Post>;
  /** execute function "search_neighbors" which returns "poi" */
  search_neighbors: Array<Poi>;
  /** execute function "search_neighbors" and query aggregates on result of table type "poi" */
  search_neighbors_aggregate: Poi_Aggregate;
  /** fetch data from the table: "user_location" */
  user_location: Array<User_Location>;
  /** fetch aggregated fields from the table: "user_location" */
  user_location_aggregate: User_Location_Aggregate;
  /** fetch data from the table: "user_location" using primary key columns */
  user_location_by_pk?: Maybe<User_Location>;
  /** fetch data from the table in a streaming manner: "user_location" */
  user_location_stream: Array<User_Location>;
  /** fetch data from the table: "user_spot" */
  user_spot: Array<User_Spot>;
  /** fetch aggregated fields from the table: "user_spot" */
  user_spot_aggregate: User_Spot_Aggregate;
  /** fetch data from the table: "user_spot" using primary key columns */
  user_spot_by_pk?: Maybe<User_Spot>;
  /** fetch data from the table: "user_spot_photo" */
  user_spot_photo: Array<User_Spot_Photo>;
  /** fetch aggregated fields from the table: "user_spot_photo" */
  user_spot_photo_aggregate: User_Spot_Photo_Aggregate;
  /** fetch data from the table: "user_spot_photo" using primary key columns */
  user_spot_photo_by_pk?: Maybe<User_Spot_Photo>;
  /** fetch data from the table in a streaming manner: "user_spot_photo" */
  user_spot_photo_stream: Array<User_Spot_Photo>;
  /** fetch data from the table in a streaming manner: "user_spot" */
  user_spot_stream: Array<User_Spot>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};

export type Subscription_RootBlock_UserArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

export type Subscription_RootBlock_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

export type Subscription_RootBlock_User_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type Subscription_RootBlock_User_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Block_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

export type Subscription_RootBookmarkArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

export type Subscription_RootBookmark_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bookmark_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Bookmark_Order_By>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

export type Subscription_RootBookmark_By_PkArgs = {
  poi_id: Scalars["uuid"]["input"];
  user_id: Scalars["uuid"]["input"];
};

export type Subscription_RootBookmark_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Bookmark_Stream_Cursor_Input>>;
  where?: InputMaybe<Bookmark_Bool_Exp>;
};

export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

export type Subscription_RootContact_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootContact_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Contact_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

export type Subscription_RootDraft_UserArgs = {
  distinct_on?: InputMaybe<Array<Draft_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_User_Order_By>>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

export type Subscription_RootDraft_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_User_Order_By>>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

export type Subscription_RootDraft_User_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDraft_User_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Draft_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Draft_User_Bool_Exp>;
};

export type Subscription_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

export type Subscription_RootFeedback_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

export type Subscription_RootFeedback_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootFeedback_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Feedback_Stream_Cursor_Input>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

export type Subscription_RootJapan_PolygonArgs = {
  distinct_on?: InputMaybe<Array<Japan_Polygon_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Japan_Polygon_Order_By>>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

export type Subscription_RootJapan_Polygon_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Japan_Polygon_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Japan_Polygon_Order_By>>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

export type Subscription_RootJapan_Polygon_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootJapan_Polygon_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Japan_Polygon_Stream_Cursor_Input>>;
  where?: InputMaybe<Japan_Polygon_Bool_Exp>;
};

export type Subscription_RootNotificationArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Notification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Notification_Order_By>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootNotification_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootNotification_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Notification_Stream_Cursor_Input>>;
  where?: InputMaybe<Notification_Bool_Exp>;
};

export type Subscription_RootPoiArgs = {
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Subscription_RootPoi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Subscription_RootPoi_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPoi_DraftArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Order_By>>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Order_By>>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPoi_Draft_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_Draft_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Draft_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Draft_Photo_Order_By>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_Draft_Photo_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Draft_Photo_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Draft_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_Draft_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Draft_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Photo_Order_By>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

export type Subscription_RootPoi_Photo_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Photo_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Photo_Bool_Exp>;
};

export type Subscription_RootPoi_RateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

export type Subscription_RootPoi_Rate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Order_By>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

export type Subscription_RootPoi_Rate_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPoi_Rate_DraftArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Draft_Order_By>>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_Rate_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poi_Rate_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Rate_Draft_Order_By>>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_Rate_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPoi_Rate_Draft_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Rate_Draft_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Rate_Draft_Bool_Exp>;
};

export type Subscription_RootPoi_Rate_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Rate_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Rate_Bool_Exp>;
};

export type Subscription_RootPoi_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Poi_Stream_Cursor_Input>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Subscription_RootPostArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Order_By>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootPost_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPost_DraftArgs = {
  distinct_on?: InputMaybe<Array<Post_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Draft_Order_By>>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

export type Subscription_RootPost_Draft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Draft_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Draft_Order_By>>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

export type Subscription_RootPost_Draft_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPost_Draft_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Post_Draft_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Draft_Bool_Exp>;
};

export type Subscription_RootPost_LikeArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

export type Subscription_RootPost_Like_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Like_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Like_Order_By>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

export type Subscription_RootPost_Like_By_PkArgs = {
  created_by: Scalars["uuid"]["input"];
  post_id: Scalars["uuid"]["input"];
};

export type Subscription_RootPost_Like_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Post_Like_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Like_Bool_Exp>;
};

export type Subscription_RootPost_PhotoArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

export type Subscription_RootPost_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Post_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Post_Photo_Order_By>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

export type Subscription_RootPost_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  target_id: Scalars["uuid"]["input"];
};

export type Subscription_RootPost_Photo_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Post_Photo_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Photo_Bool_Exp>;
};

export type Subscription_RootPost_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Post_Bool_Exp>;
};

export type Subscription_RootReport_PostArgs = {
  distinct_on?: InputMaybe<Array<Report_Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Report_Post_Order_By>>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

export type Subscription_RootReport_Post_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Report_Post_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Report_Post_Order_By>>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

export type Subscription_RootReport_Post_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootReport_Post_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Report_Post_Stream_Cursor_Input>>;
  where?: InputMaybe<Report_Post_Bool_Exp>;
};

export type Subscription_RootSearch_NeighborsArgs = {
  args: Search_Neighbors_Args;
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Subscription_RootSearch_Neighbors_AggregateArgs = {
  args: Search_Neighbors_Args;
  distinct_on?: InputMaybe<Array<Poi_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Poi_Order_By>>;
  where?: InputMaybe<Poi_Bool_Exp>;
};

export type Subscription_RootUser_LocationArgs = {
  distinct_on?: InputMaybe<Array<User_Location_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Location_Order_By>>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

export type Subscription_RootUser_Location_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Location_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Location_Order_By>>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

export type Subscription_RootUser_Location_By_PkArgs = {
  user_id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_Location_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Location_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

export type Subscription_RootUser_SpotArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Order_By>>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

export type Subscription_RootUser_Spot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Order_By>>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

export type Subscription_RootUser_Spot_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_Spot_PhotoArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

export type Subscription_RootUser_Spot_Photo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

export type Subscription_RootUser_Spot_Photo_By_PkArgs = {
  order_no: Scalars["smallint"]["input"];
  parent_id: Scalars["uuid"]["input"];
};

export type Subscription_RootUser_Spot_Photo_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Spot_Photo_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

export type Subscription_RootUser_Spot_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<User_Spot_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>;
};

/** ユーザーのアプリ起動位置 */
export type User_Location = {
  __typename?: "user_location";
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 位置 */
  geom: Scalars["geometry"]["output"];
  /** ユーザーID */
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "user_location" */
export type User_Location_Aggregate = {
  __typename?: "user_location_aggregate";
  aggregate?: Maybe<User_Location_Aggregate_Fields>;
  nodes: Array<User_Location>;
};

/** aggregate fields of "user_location" */
export type User_Location_Aggregate_Fields = {
  __typename?: "user_location_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Location_Max_Fields>;
  min?: Maybe<User_Location_Min_Fields>;
};

/** aggregate fields of "user_location" */
export type User_Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Location_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "user_location". All fields are combined with a logical 'AND'. */
export type User_Location_Bool_Exp = {
  _and?: InputMaybe<Array<User_Location_Bool_Exp>>;
  _not?: InputMaybe<User_Location_Bool_Exp>;
  _or?: InputMaybe<Array<User_Location_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  geom?: InputMaybe<Geometry_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_location" */
export enum User_Location_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserLocationPk = "user_location_pk",
}

/** input type for inserting data into table "user_location" */
export type User_Location_Insert_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 位置 */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type User_Location_Max_Fields = {
  __typename?: "user_location_max_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** ユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type User_Location_Min_Fields = {
  __typename?: "user_location_min_fields";
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** ユーザーID */
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "user_location" */
export type User_Location_Mutation_Response = {
  __typename?: "user_location_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Location>;
};

/** on_conflict condition type for table "user_location" */
export type User_Location_On_Conflict = {
  constraint: User_Location_Constraint;
  update_columns?: Array<User_Location_Update_Column>;
  where?: InputMaybe<User_Location_Bool_Exp>;
};

/** Ordering options when selecting data from "user_location". */
export type User_Location_Order_By = {
  created_at?: InputMaybe<Order_By>;
  geom?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_location */
export type User_Location_Pk_Columns_Input = {
  /** ユーザーID */
  user_id: Scalars["uuid"]["input"];
};

/** select columns of table "user_location" */
export enum User_Location_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Geom = "geom",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "user_location" */
export type User_Location_Set_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 位置 */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "user_location" */
export type User_Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Location_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Location_Stream_Cursor_Value_Input = {
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 位置 */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** ユーザーID */
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "user_location" */
export enum User_Location_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Geom = "geom",
  /** column name */
  UserId = "user_id",
}

export type User_Location_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Location_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Location_Bool_Exp;
};

/** ユーザー専用のマイスポット */
export type User_Spot = {
  __typename?: "user_spot";
  /** 住所 */
  address?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** 作成者 */
  created_by: Scalars["uuid"]["output"];
  /** スポットの説明、メモなど */
  description?: Maybe<Scalars["String"]["output"]>;
  /** ジオメトリ */
  geom?: Maybe<Scalars["geometry"]["output"]>;
  /** アイコン色 */
  icon_color: Scalars["String"]["output"];
  /** アイコン名 */
  icon_name?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id: Scalars["uuid"]["output"];
  /** 緯度 */
  lat: Scalars["numeric"]["output"];
  /** 軽度 */
  lng: Scalars["numeric"]["output"];
  /** スポット名 */
  name: Scalars["String"]["output"];
  /** An array relationship */
  photos: Array<User_Spot_Photo>;
  /** An aggregate relationship */
  photos_aggregate: User_Spot_Photo_Aggregate;
};

/** ユーザー専用のマイスポット */
export type User_SpotPhotosArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

/** ユーザー専用のマイスポット */
export type User_SpotPhotos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<User_Spot_Photo_Order_By>>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

/** aggregated selection of "user_spot" */
export type User_Spot_Aggregate = {
  __typename?: "user_spot_aggregate";
  aggregate?: Maybe<User_Spot_Aggregate_Fields>;
  nodes: Array<User_Spot>;
};

/** aggregate fields of "user_spot" */
export type User_Spot_Aggregate_Fields = {
  __typename?: "user_spot_aggregate_fields";
  avg?: Maybe<User_Spot_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Spot_Max_Fields>;
  min?: Maybe<User_Spot_Min_Fields>;
  stddev?: Maybe<User_Spot_Stddev_Fields>;
  stddev_pop?: Maybe<User_Spot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Spot_Stddev_Samp_Fields>;
  sum?: Maybe<User_Spot_Sum_Fields>;
  var_pop?: Maybe<User_Spot_Var_Pop_Fields>;
  var_samp?: Maybe<User_Spot_Var_Samp_Fields>;
  variance?: Maybe<User_Spot_Variance_Fields>;
};

/** aggregate fields of "user_spot" */
export type User_Spot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Spot_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type User_Spot_Avg_Fields = {
  __typename?: "user_spot_avg_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "user_spot". All fields are combined with a logical 'AND'. */
export type User_Spot_Bool_Exp = {
  _and?: InputMaybe<Array<User_Spot_Bool_Exp>>;
  _not?: InputMaybe<User_Spot_Bool_Exp>;
  _or?: InputMaybe<Array<User_Spot_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  geom?: InputMaybe<Geometry_Comparison_Exp>;
  icon_color?: InputMaybe<String_Comparison_Exp>;
  icon_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lat?: InputMaybe<Numeric_Comparison_Exp>;
  lng?: InputMaybe<Numeric_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  photos?: InputMaybe<User_Spot_Photo_Bool_Exp>;
  photos_aggregate?: InputMaybe<User_Spot_Photo_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_spot" */
export enum User_Spot_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSpotPk = "user_spot_pk",
}

/** input type for incrementing numeric columns in table "user_spot" */
export type User_Spot_Inc_Input = {
  /** 緯度 */
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  /** 軽度 */
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
};

/** input type for inserting data into table "user_spot" */
export type User_Spot_Insert_Input = {
  /** 住所 */
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** スポットの説明、メモなど */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ジオメトリ */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** アイコン色 */
  icon_color?: InputMaybe<Scalars["String"]["input"]>;
  /** アイコン名 */
  icon_name?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 緯度 */
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  /** 軽度 */
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  /** スポット名 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  photos?: InputMaybe<User_Spot_Photo_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Spot_Max_Fields = {
  __typename?: "user_spot_max_fields";
  /** 住所 */
  address?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** スポットの説明、メモなど */
  description?: Maybe<Scalars["String"]["output"]>;
  /** アイコン色 */
  icon_color?: Maybe<Scalars["String"]["output"]>;
  /** アイコン名 */
  icon_name?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 緯度 */
  lat?: Maybe<Scalars["numeric"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["numeric"]["output"]>;
  /** スポット名 */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type User_Spot_Min_Fields = {
  __typename?: "user_spot_min_fields";
  /** 住所 */
  address?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 作成者 */
  created_by?: Maybe<Scalars["uuid"]["output"]>;
  /** スポットの説明、メモなど */
  description?: Maybe<Scalars["String"]["output"]>;
  /** アイコン色 */
  icon_color?: Maybe<Scalars["String"]["output"]>;
  /** アイコン名 */
  icon_name?: Maybe<Scalars["String"]["output"]>;
  /** ID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 緯度 */
  lat?: Maybe<Scalars["numeric"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["numeric"]["output"]>;
  /** スポット名 */
  name?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user_spot" */
export type User_Spot_Mutation_Response = {
  __typename?: "user_spot_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Spot>;
};

/** input type for inserting object relation for remote table "user_spot" */
export type User_Spot_Obj_Rel_Insert_Input = {
  data: User_Spot_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Spot_On_Conflict>;
};

/** on_conflict condition type for table "user_spot" */
export type User_Spot_On_Conflict = {
  constraint: User_Spot_Constraint;
  update_columns?: Array<User_Spot_Update_Column>;
  where?: InputMaybe<User_Spot_Bool_Exp>;
};

/** Ordering options when selecting data from "user_spot". */
export type User_Spot_Order_By = {
  address?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  geom?: InputMaybe<Order_By>;
  icon_color?: InputMaybe<Order_By>;
  icon_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lat?: InputMaybe<Order_By>;
  lng?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  photos_aggregate?: InputMaybe<User_Spot_Photo_Aggregate_Order_By>;
};

/** マイスポットの写真 */
export type User_Spot_Photo = {
  __typename?: "user_spot_photo";
  /** 写真URLまたはID */
  image: Scalars["String"]["output"];
  /** オーダー番号 */
  order_no: Scalars["smallint"]["output"];
  /** マイスポットID */
  parent_id: Scalars["uuid"]["output"];
  /** An object relationship */
  user_spot: User_Spot;
};

/** aggregated selection of "user_spot_photo" */
export type User_Spot_Photo_Aggregate = {
  __typename?: "user_spot_photo_aggregate";
  aggregate?: Maybe<User_Spot_Photo_Aggregate_Fields>;
  nodes: Array<User_Spot_Photo>;
};

export type User_Spot_Photo_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Spot_Photo_Aggregate_Bool_Exp_Count>;
};

export type User_Spot_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<User_Spot_Photo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_spot_photo" */
export type User_Spot_Photo_Aggregate_Fields = {
  __typename?: "user_spot_photo_aggregate_fields";
  avg?: Maybe<User_Spot_Photo_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<User_Spot_Photo_Max_Fields>;
  min?: Maybe<User_Spot_Photo_Min_Fields>;
  stddev?: Maybe<User_Spot_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<User_Spot_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Spot_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<User_Spot_Photo_Sum_Fields>;
  var_pop?: Maybe<User_Spot_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<User_Spot_Photo_Var_Samp_Fields>;
  variance?: Maybe<User_Spot_Photo_Variance_Fields>;
};

/** aggregate fields of "user_spot_photo" */
export type User_Spot_Photo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Spot_Photo_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_spot_photo" */
export type User_Spot_Photo_Aggregate_Order_By = {
  avg?: InputMaybe<User_Spot_Photo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Spot_Photo_Max_Order_By>;
  min?: InputMaybe<User_Spot_Photo_Min_Order_By>;
  stddev?: InputMaybe<User_Spot_Photo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Spot_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Spot_Photo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Spot_Photo_Sum_Order_By>;
  var_pop?: InputMaybe<User_Spot_Photo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Spot_Photo_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Spot_Photo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_spot_photo" */
export type User_Spot_Photo_Arr_Rel_Insert_Input = {
  data: Array<User_Spot_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Spot_Photo_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Spot_Photo_Avg_Fields = {
  __typename?: "user_spot_photo_avg_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Avg_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_spot_photo". All fields are combined with a logical 'AND'. */
export type User_Spot_Photo_Bool_Exp = {
  _and?: InputMaybe<Array<User_Spot_Photo_Bool_Exp>>;
  _not?: InputMaybe<User_Spot_Photo_Bool_Exp>;
  _or?: InputMaybe<Array<User_Spot_Photo_Bool_Exp>>;
  image?: InputMaybe<String_Comparison_Exp>;
  order_no?: InputMaybe<Smallint_Comparison_Exp>;
  parent_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_spot?: InputMaybe<User_Spot_Bool_Exp>;
};

/** unique or primary key constraints on table "user_spot_photo" */
export enum User_Spot_Photo_Constraint {
  /** unique or primary key constraint on columns "order_no", "parent_id" */
  UserSpotPhotoPk = "user_spot_photo_pk",
}

/** input type for incrementing numeric columns in table "user_spot_photo" */
export type User_Spot_Photo_Inc_Input = {
  /** オーダー番号 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
};

/** input type for inserting data into table "user_spot_photo" */
export type User_Spot_Photo_Insert_Input = {
  /** 写真URLまたはID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** オーダー番号 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** マイスポットID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
  user_spot?: InputMaybe<User_Spot_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Spot_Photo_Max_Fields = {
  __typename?: "user_spot_photo_max_fields";
  /** 写真URLまたはID */
  image?: Maybe<Scalars["String"]["output"]>;
  /** オーダー番号 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** マイスポットID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Max_Order_By = {
  /** 写真URLまたはID */
  image?: InputMaybe<Order_By>;
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
  /** マイスポットID */
  parent_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Spot_Photo_Min_Fields = {
  __typename?: "user_spot_photo_min_fields";
  /** 写真URLまたはID */
  image?: Maybe<Scalars["String"]["output"]>;
  /** オーダー番号 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
  /** マイスポットID */
  parent_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Min_Order_By = {
  /** 写真URLまたはID */
  image?: InputMaybe<Order_By>;
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
  /** マイスポットID */
  parent_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_spot_photo" */
export type User_Spot_Photo_Mutation_Response = {
  __typename?: "user_spot_photo_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<User_Spot_Photo>;
};

/** on_conflict condition type for table "user_spot_photo" */
export type User_Spot_Photo_On_Conflict = {
  constraint: User_Spot_Photo_Constraint;
  update_columns?: Array<User_Spot_Photo_Update_Column>;
  where?: InputMaybe<User_Spot_Photo_Bool_Exp>;
};

/** Ordering options when selecting data from "user_spot_photo". */
export type User_Spot_Photo_Order_By = {
  image?: InputMaybe<Order_By>;
  order_no?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  user_spot?: InputMaybe<User_Spot_Order_By>;
};

/** primary key columns input for table: user_spot_photo */
export type User_Spot_Photo_Pk_Columns_Input = {
  /** オーダー番号 */
  order_no: Scalars["smallint"]["input"];
  /** マイスポットID */
  parent_id: Scalars["uuid"]["input"];
};

/** select columns of table "user_spot_photo" */
export enum User_Spot_Photo_Select_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

/** input type for updating data in table "user_spot_photo" */
export type User_Spot_Photo_Set_Input = {
  /** 写真URLまたはID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** オーダー番号 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** マイスポットID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type User_Spot_Photo_Stddev_Fields = {
  __typename?: "user_spot_photo_stddev_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Stddev_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Spot_Photo_Stddev_Pop_Fields = {
  __typename?: "user_spot_photo_stddev_pop_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Stddev_Pop_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Spot_Photo_Stddev_Samp_Fields = {
  __typename?: "user_spot_photo_stddev_samp_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Stddev_Samp_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_spot_photo" */
export type User_Spot_Photo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Spot_Photo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Spot_Photo_Stream_Cursor_Value_Input = {
  /** 写真URLまたはID */
  image?: InputMaybe<Scalars["String"]["input"]>;
  /** オーダー番号 */
  order_no?: InputMaybe<Scalars["smallint"]["input"]>;
  /** マイスポットID */
  parent_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type User_Spot_Photo_Sum_Fields = {
  __typename?: "user_spot_photo_sum_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["smallint"]["output"]>;
};

/** order by sum() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Sum_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** update columns of table "user_spot_photo" */
export enum User_Spot_Photo_Update_Column {
  /** column name */
  Image = "image",
  /** column name */
  OrderNo = "order_no",
  /** column name */
  ParentId = "parent_id",
}

export type User_Spot_Photo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Spot_Photo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Spot_Photo_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Spot_Photo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Spot_Photo_Var_Pop_Fields = {
  __typename?: "user_spot_photo_var_pop_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Var_Pop_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Spot_Photo_Var_Samp_Fields = {
  __typename?: "user_spot_photo_var_samp_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Var_Samp_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Spot_Photo_Variance_Fields = {
  __typename?: "user_spot_photo_variance_fields";
  /** オーダー番号 */
  order_no?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "user_spot_photo" */
export type User_Spot_Photo_Variance_Order_By = {
  /** オーダー番号 */
  order_no?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_spot */
export type User_Spot_Pk_Columns_Input = {
  /** ID */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "user_spot" */
export enum User_Spot_Select_Column {
  /** column name */
  Address = "address",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Geom = "geom",
  /** column name */
  IconColor = "icon_color",
  /** column name */
  IconName = "icon_name",
  /** column name */
  Id = "id",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "user_spot" */
export type User_Spot_Set_Input = {
  /** 住所 */
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** スポットの説明、メモなど */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ジオメトリ */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** アイコン色 */
  icon_color?: InputMaybe<Scalars["String"]["input"]>;
  /** アイコン名 */
  icon_name?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 緯度 */
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  /** 軽度 */
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  /** スポット名 */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type User_Spot_Stddev_Fields = {
  __typename?: "user_spot_stddev_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type User_Spot_Stddev_Pop_Fields = {
  __typename?: "user_spot_stddev_pop_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type User_Spot_Stddev_Samp_Fields = {
  __typename?: "user_spot_stddev_samp_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "user_spot" */
export type User_Spot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Spot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Spot_Stream_Cursor_Value_Input = {
  /** 住所 */
  address?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 作成者 */
  created_by?: InputMaybe<Scalars["uuid"]["input"]>;
  /** スポットの説明、メモなど */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ジオメトリ */
  geom?: InputMaybe<Scalars["geometry"]["input"]>;
  /** アイコン色 */
  icon_color?: InputMaybe<Scalars["String"]["input"]>;
  /** アイコン名 */
  icon_name?: InputMaybe<Scalars["String"]["input"]>;
  /** ID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 緯度 */
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  /** 軽度 */
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  /** スポット名 */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type User_Spot_Sum_Fields = {
  __typename?: "user_spot_sum_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["numeric"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["numeric"]["output"]>;
};

/** update columns of table "user_spot" */
export enum User_Spot_Update_Column {
  /** column name */
  Address = "address",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Geom = "geom",
  /** column name */
  IconColor = "icon_color",
  /** column name */
  IconName = "icon_name",
  /** column name */
  Id = "id",
  /** column name */
  Lat = "lat",
  /** column name */
  Lng = "lng",
  /** column name */
  Name = "name",
}

export type User_Spot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Spot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Spot_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Spot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Spot_Var_Pop_Fields = {
  __typename?: "user_spot_var_pop_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type User_Spot_Var_Samp_Fields = {
  __typename?: "user_spot_var_samp_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type User_Spot_Variance_Fields = {
  __typename?: "user_spot_variance_fields";
  /** 緯度 */
  lat?: Maybe<Scalars["Float"]["output"]>;
  /** 軽度 */
  lng?: Maybe<Scalars["Float"]["output"]>;
};

/** ユーザー */
export type Users = {
  __typename?: "users";
  banner_image?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  block_users: Array<Block_User>;
  /** An aggregate relationship */
  block_users_aggregate: Block_User_Aggregate;
  /** 作成日時 */
  created_at: Scalars["timestamp"]["output"];
  /** メールアドレス */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: Maybe<Scalars["String"]["output"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid: Scalars["String"]["output"];
  /** ユーザーID */
  id: Scalars["uuid"]["output"];
  /** 管理者フラグ */
  is_admin: Scalars["Boolean"]["output"];
  is_deleted: Scalars["Boolean"]["output"];
  is_initialized: Scalars["Boolean"]["output"];
  /** 仮登録フラグ */
  is_provisional: Scalars["Boolean"]["output"];
  /** 更新日時 */
  modified_at: Scalars["timestamp"]["output"];
  /** 名前 */
  name?: Maybe<Scalars["String"]["output"]>;
  profile_image?: Maybe<Scalars["String"]["output"]>;
};

/** ユーザー */
export type UsersBlock_UsersArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

/** ユーザー */
export type UsersBlock_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Block_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Block_User_Order_By>>;
  where?: InputMaybe<Block_User_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  banner_image?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  block_users?: InputMaybe<Block_User_Bool_Exp>;
  block_users_aggregate?: InputMaybe<Block_User_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  fcm_token?: InputMaybe<String_Comparison_Exp>;
  firebase_uid?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_deleted?: InputMaybe<Boolean_Comparison_Exp>;
  is_initialized?: InputMaybe<Boolean_Comparison_Exp>;
  is_provisional?: InputMaybe<Boolean_Comparison_Exp>;
  modified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profile_image?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "firebase_uid" */
  UsersFirebaseUidUk = "users_firebase_uid_uk",
  /** unique or primary key constraint on columns "id" */
  UsersPk = "users_pk",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  block_users?: InputMaybe<Block_User_Arr_Rel_Insert_Input>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: InputMaybe<Scalars["String"]["input"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 管理者フラグ */
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_initialized?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 仮登録フラグ */
  is_provisional?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  profile_image?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  banner_image?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: Maybe<Scalars["String"]["output"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: Maybe<Scalars["String"]["output"]>;
  /** ユーザーID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 名前 */
  name?: Maybe<Scalars["String"]["output"]>;
  profile_image?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  banner_image?: Maybe<Scalars["String"]["output"]>;
  bio?: Maybe<Scalars["String"]["output"]>;
  /** 作成日時 */
  created_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** メールアドレス */
  email?: Maybe<Scalars["String"]["output"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: Maybe<Scalars["String"]["output"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: Maybe<Scalars["String"]["output"]>;
  /** ユーザーID */
  id?: Maybe<Scalars["uuid"]["output"]>;
  /** 更新日時 */
  modified_at?: Maybe<Scalars["timestamp"]["output"]>;
  /** 名前 */
  name?: Maybe<Scalars["String"]["output"]>;
  profile_image?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  banner_image?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  block_users_aggregate?: InputMaybe<Block_User_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  fcm_token?: InputMaybe<Order_By>;
  firebase_uid?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  is_deleted?: InputMaybe<Order_By>;
  is_initialized?: InputMaybe<Order_By>;
  is_provisional?: InputMaybe<Order_By>;
  modified_at?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profile_image?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  /** ユーザーID */
  id: Scalars["uuid"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  BannerImage = "banner_image",
  /** column name */
  Bio = "bio",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  FcmToken = "fcm_token",
  /** column name */
  FirebaseUid = "firebase_uid",
  /** column name */
  Id = "id",
  /** column name */
  IsAdmin = "is_admin",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  IsInitialized = "is_initialized",
  /** column name */
  IsProvisional = "is_provisional",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  Name = "name",
  /** column name */
  ProfileImage = "profile_image",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: InputMaybe<Scalars["String"]["input"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 管理者フラグ */
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_initialized?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 仮登録フラグ */
  is_provisional?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  profile_image?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>;
  bio?: InputMaybe<Scalars["String"]["input"]>;
  /** 作成日時 */
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** メールアドレス */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: InputMaybe<Scalars["String"]["input"]>;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: InputMaybe<Scalars["String"]["input"]>;
  /** ユーザーID */
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  /** 管理者フラグ */
  is_admin?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_deleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  is_initialized?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 仮登録フラグ */
  is_provisional?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** 更新日時 */
  modified_at?: InputMaybe<Scalars["timestamp"]["input"]>;
  /** 名前 */
  name?: InputMaybe<Scalars["String"]["input"]>;
  profile_image?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  BannerImage = "banner_image",
  /** column name */
  Bio = "bio",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  FcmToken = "fcm_token",
  /** column name */
  FirebaseUid = "firebase_uid",
  /** column name */
  Id = "id",
  /** column name */
  IsAdmin = "is_admin",
  /** column name */
  IsDeleted = "is_deleted",
  /** column name */
  IsInitialized = "is_initialized",
  /** column name */
  IsProvisional = "is_provisional",
  /** column name */
  ModifiedAt = "modified_at",
  /** column name */
  Name = "name",
  /** column name */
  ProfileImage = "profile_image",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

export type InsertAndUpdatePoiMutationVariables = Exact<{
  insertObjects: Array<Poi_Insert_Input> | Poi_Insert_Input;
  updates: Array<Poi_Updates> | Poi_Updates;
  deletePhotoParentIds:
    | Array<Scalars["uuid"]["input"]>
    | Scalars["uuid"]["input"];
  insertPhotos: Array<Poi_Photo_Insert_Input> | Poi_Photo_Insert_Input;
}>;

export type InsertAndUpdatePoiMutation = {
  __typename?: "mutation_root";
  delete_poi_photo?: {
    __typename?: "poi_photo_mutation_response";
    affected_rows: number;
  } | null;
  insert_poi?: {
    __typename?: "poi_mutation_response";
    affected_rows: number;
  } | null;
  update_poi_many?: Array<{
    __typename?: "poi_mutation_response";
    affected_rows: number;
  } | null> | null;
  insert_poi_photo?: {
    __typename?: "poi_photo_mutation_response";
    affected_rows: number;
  } | null;
};

export type CreatedPoiQueryVariables = Exact<{
  createdAt: Scalars["timestamp"]["input"];
  category: Scalars["String"]["input"];
}>;

export type CreatedPoiQuery = {
  __typename?: "query_root";
  newPoi: Array<{
    __typename?: "poi";
    id: string;
    name: string;
    address?: string | null;
    photos: Array<{ __typename?: "poi_photo"; image: string }>;
  }>;
  discontinuePoi: Array<{
    __typename?: "poi";
    id: string;
    name: string;
    address?: string | null;
    photos: Array<{ __typename?: "poi_photo"; image: string }>;
  }>;
};

export type PoiQueryVariables = Exact<{
  where: Poi_Bool_Exp;
}>;

export type PoiQuery = {
  __typename?: "query_root";
  poi: Array<{
    __typename?: "poi";
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    description?: string | null;
    tel?: string | null;
    url?: string | null;
    open_time?: string | null;
    holiday?: string | null;
    price?: string | null;
    toilet?: string | null;
    address?: string | null;
    is_deleted: boolean;
    is_warning: boolean;
    created_by: string;
    created_at: string;
    modified_by: string;
    modified_at: string;
    photos: Array<{
      __typename?: "poi_photo";
      image: string;
      order_no: number;
    }>;
  }>;
};

export type SearchNeighborsQueryVariables = Exact<{
  lat?: InputMaybe<Scalars["numeric"]["input"]>;
  lng?: InputMaybe<Scalars["numeric"]["input"]>;
  distance?: InputMaybe<Scalars["Int"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type SearchNeighborsQuery = {
  __typename?: "query_root";
  search_neighbors: Array<{
    __typename?: "poi";
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    description?: string | null;
    tel?: string | null;
    url?: string | null;
    open_time?: string | null;
    holiday?: string | null;
    price?: string | null;
    toilet?: string | null;
    address?: string | null;
    is_deleted: boolean;
    is_warning: boolean;
    created_by: string;
    created_at: string;
    modified_by: string;
    modified_at: string;
    photos: Array<{
      __typename?: "poi_photo";
      image: string;
      order_no: number;
    }>;
  }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const InsertAndUpdatePoiDocument = new TypedDocumentString(`
    mutation InsertAndUpdatePoi($insertObjects: [poi_insert_input!]!, $updates: [poi_updates!]!, $deletePhotoParentIds: [uuid!]!, $insertPhotos: [poi_photo_insert_input!]!) {
  delete_poi_photo(where: {parent_id: {_in: $deletePhotoParentIds}}) {
    affected_rows
  }
  insert_poi(objects: $insertObjects) {
    affected_rows
  }
  update_poi_many(updates: $updates) {
    affected_rows
  }
  insert_poi_photo(objects: $insertPhotos) {
    affected_rows
  }
}
    `) as unknown as TypedDocumentString<
  InsertAndUpdatePoiMutation,
  InsertAndUpdatePoiMutationVariables
>;
export const CreatedPoiDocument = new TypedDocumentString(`
    query CreatedPoi($createdAt: timestamp!, $category: String!) {
  newPoi: poi(where: {category: {_eq: $category}, created_at: {_eq: $createdAt}}) {
    id
    name
    address
    photos(order_by: {order_no: asc}) {
      image
    }
  }
  discontinuePoi: poi(
    where: {category: {_eq: $category}, modified_at: {_lt: $createdAt}}
  ) {
    id
    name
    address
    photos(order_by: {order_no: asc}) {
      image
    }
  }
}
    `) as unknown as TypedDocumentString<
  CreatedPoiQuery,
  CreatedPoiQueryVariables
>;
export const PoiDocument = new TypedDocumentString(`
    query Poi($where: poi_bool_exp!) {
  poi(where: $where) {
    id
    category
    lat
    lng
    name
    description
    tel
    url
    open_time
    holiday
    price
    toilet
    address
    is_deleted
    is_warning
    photos(order_by: {order_no: asc}) {
      image
      order_no
    }
    created_by
    created_at
    modified_by
    modified_at
  }
}
    `) as unknown as TypedDocumentString<PoiQuery, PoiQueryVariables>;
export const SearchNeighborsDocument = new TypedDocumentString(`
    query SearchNeighbors($lat: numeric, $lng: numeric, $distance: Int, $category: String) {
  search_neighbors(
    args: {pdistance: $distance, plat: $lat, plng: $lng}
    where: {_and: {is_deleted: {_eq: false}, category: {_eq: $category}}}
  ) {
    id
    category
    lat
    lng
    name
    description
    tel
    url
    open_time
    holiday
    price
    toilet
    address
    is_deleted
    is_warning
    photos(order_by: {order_no: asc}) {
      image
      order_no
    }
    created_by
    created_at
    modified_by
    modified_at
  }
}
    `) as unknown as TypedDocumentString<
  SearchNeighborsQuery,
  SearchNeighborsQueryVariables
>;
