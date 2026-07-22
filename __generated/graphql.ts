/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
import { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: boolean | null | undefined;
  _gt?: boolean | null | undefined;
  _gte?: boolean | null | undefined;
  _in?: Array<boolean> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: boolean | null | undefined;
  _lte?: boolean | null | undefined;
  _neq?: boolean | null | undefined;
  _nin?: Array<boolean> | null | undefined;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  /** does the column match the given case-insensitive pattern */
  _ilike?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: string | null | undefined;
  _is_null?: boolean | null | undefined;
  /** does the column match the given pattern */
  _like?: string | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: string | null | undefined;
  /** does the column NOT match the given pattern */
  _nlike?: string | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: string | null | undefined;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: string | null | undefined;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: string | null | undefined;
  /** does the column match the given SQL regular expression */
  _similar?: string | null | undefined;
};

export type Block_User_Aggregate_Bool_Exp = {
  count?: Block_User_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Block_User_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Block_User_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Block_User_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "block_user" */
export type Block_User_Arr_Rel_Insert_Input = {
  data: Array<Block_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: Block_User_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "block_user". All fields are combined with a logical 'AND'. */
export type Block_User_Bool_Exp = {
  _and?: Array<Block_User_Bool_Exp> | null | undefined;
  _not?: Block_User_Bool_Exp | null | undefined;
  _or?: Array<Block_User_Bool_Exp> | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "block_user" */
export type Block_User_Constraint =
  /** unique or primary key constraint on columns "user_id", "created_by" */
  "block_user_pk";

/** input type for inserting data into table "block_user" */
export type Block_User_Insert_Input = {
  /** 作成ユーザーID */
  created_by?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  /** ブロック対象のユーザーID */
  user_id?: string | null | undefined;
};

/** on_conflict condition type for table "block_user" */
export type Block_User_On_Conflict = {
  constraint: Block_User_Constraint;
  update_columns?: Array<Block_User_Update_Column>;
  where?: Block_User_Bool_Exp | null | undefined;
};

/** select columns of table "block_user" */
export type Block_User_Select_Column =
  /** column name */
  | "created_by"
  /** column name */
  | "user_id";

/** update columns of table "block_user" */
export type Block_User_Update_Column =
  /** column name */
  | "created_by"
  /** column name */
  | "user_id";

export type Bookmark_Aggregate_Bool_Exp = {
  count?: Bookmark_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Bookmark_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Bookmark_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Bookmark_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "bookmark" */
export type Bookmark_Arr_Rel_Insert_Input = {
  data: Array<Bookmark_Insert_Input>;
  /** upsert condition */
  on_conflict?: Bookmark_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "bookmark". All fields are combined with a logical 'AND'. */
export type Bookmark_Bool_Exp = {
  _and?: Array<Bookmark_Bool_Exp> | null | undefined;
  _not?: Bookmark_Bool_Exp | null | undefined;
  _or?: Array<Bookmark_Bool_Exp> | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  poi?: Poi_Bool_Exp | null | undefined;
  poi_id?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "bookmark" */
export type Bookmark_Constraint =
  /** unique or primary key constraint on columns "user_id", "poi_id" */
  "bookmark_pk";

/** input type for inserting data into table "bookmark" */
export type Bookmark_Insert_Input = {
  created_at?: string | null | undefined;
  poi?: Poi_Obj_Rel_Insert_Input | null | undefined;
  poi_id?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
  user_id?: string | null | undefined;
};

/** on_conflict condition type for table "bookmark" */
export type Bookmark_On_Conflict = {
  constraint: Bookmark_Constraint;
  update_columns?: Array<Bookmark_Update_Column>;
  where?: Bookmark_Bool_Exp | null | undefined;
};

/** select columns of table "bookmark" */
export type Bookmark_Select_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "poi_id"
  /** column name */
  | "user_id";

/** update columns of table "bookmark" */
export type Bookmark_Update_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "poi_id"
  /** column name */
  | "user_id";

export type Geography_Cast_Exp = {
  geometry?: Geometry_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Geography_Cast_Exp | null | undefined;
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  _in?: Array<unknown> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  _nin?: Array<unknown> | null | undefined;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: St_D_Within_Geography_Input | null | undefined;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: unknown;
};

export type Geometry_Cast_Exp = {
  geography?: Geography_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Geometry_Cast_Exp | null | undefined;
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  _in?: Array<unknown> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  _nin?: Array<unknown> | null | undefined;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: St_D_Within_Input | null | undefined;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: unknown;
  /** does the column contain the given geometry value */
  _st_contains?: unknown;
  /** does the column cross the given geometry value */
  _st_crosses?: unknown;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: St_D_Within_Input | null | undefined;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: unknown;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: unknown;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: unknown;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: unknown;
  /** is the column contained in the given geometry value */
  _st_within?: unknown;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** Boolean expression to filter rows from the table "poi". All fields are combined with a logical 'AND'. */
export type Poi_Bool_Exp = {
  _and?: Array<Poi_Bool_Exp> | null | undefined;
  _not?: Poi_Bool_Exp | null | undefined;
  _or?: Array<Poi_Bool_Exp> | null | undefined;
  address?: String_Comparison_Exp | null | undefined;
  bookmarks?: Bookmark_Bool_Exp | null | undefined;
  bookmarks_aggregate?: Bookmark_Aggregate_Bool_Exp | null | undefined;
  category?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  geom?: Geometry_Comparison_Exp | null | undefined;
  holiday?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_deleted?: Boolean_Comparison_Exp | null | undefined;
  is_warning?: Boolean_Comparison_Exp | null | undefined;
  lat?: Numeric_Comparison_Exp | null | undefined;
  lng?: Numeric_Comparison_Exp | null | undefined;
  modified_at?: Timestamp_Comparison_Exp | null | undefined;
  modified_by?: Uuid_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  open_time?: String_Comparison_Exp | null | undefined;
  photos?: Poi_Photo_Bool_Exp | null | undefined;
  photos_aggregate?: Poi_Photo_Aggregate_Bool_Exp | null | undefined;
  place_id?: String_Comparison_Exp | null | undefined;
  poi_rates?: Poi_Rate_Bool_Exp | null | undefined;
  poi_rates_aggregate?: Poi_Rate_Aggregate_Bool_Exp | null | undefined;
  price?: String_Comparison_Exp | null | undefined;
  tel?: String_Comparison_Exp | null | undefined;
  toilet?: String_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "poi" */
export type Poi_Constraint =
  /** unique or primary key constraint on columns "id" */
  "poi_pk";

/** input type for incrementing numeric columns in table "poi" */
export type Poi_Inc_Input = {
  lat?: number | null | undefined;
  lng?: number | null | undefined;
};

/** input type for inserting data into table "poi" */
export type Poi_Insert_Input = {
  address?: string | null | undefined;
  bookmarks?: Bookmark_Arr_Rel_Insert_Input | null | undefined;
  category?: string | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  description?: string | null | undefined;
  geom?: unknown;
  /** 休日 */
  holiday?: string | null | undefined;
  id?: string | null | undefined;
  /** 削除フラグ */
  is_deleted?: boolean | null | undefined;
  /** 警告あり */
  is_warning?: boolean | null | undefined;
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  modified_at?: string | null | undefined;
  modified_by?: string | null | undefined;
  name?: string | null | undefined;
  /** 営業時間 */
  open_time?: string | null | undefined;
  photos?: Poi_Photo_Arr_Rel_Insert_Input | null | undefined;
  /** GooglePlaceId */
  place_id?: string | null | undefined;
  poi_rates?: Poi_Rate_Arr_Rel_Insert_Input | null | undefined;
  /** 料金 */
  price?: string | null | undefined;
  /** 電話番号 */
  tel?: string | null | undefined;
  /** トイレ有無 */
  toilet?: string | null | undefined;
  /** ホームページ */
  url?: string | null | undefined;
};

/** input type for inserting object relation for remote table "poi" */
export type Poi_Obj_Rel_Insert_Input = {
  data: Poi_Insert_Input;
  /** upsert condition */
  on_conflict?: Poi_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "poi" */
export type Poi_On_Conflict = {
  constraint: Poi_Constraint;
  update_columns?: Array<Poi_Update_Column>;
  where?: Poi_Bool_Exp | null | undefined;
};

export type Poi_Photo_Aggregate_Bool_Exp = {
  count?: Poi_Photo_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Poi_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Poi_Photo_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Poi_Photo_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "poi_photo" */
export type Poi_Photo_Arr_Rel_Insert_Input = {
  data: Array<Poi_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: Poi_Photo_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "poi_photo". All fields are combined with a logical 'AND'. */
export type Poi_Photo_Bool_Exp = {
  _and?: Array<Poi_Photo_Bool_Exp> | null | undefined;
  _not?: Poi_Photo_Bool_Exp | null | undefined;
  _or?: Array<Poi_Photo_Bool_Exp> | null | undefined;
  blurhash?: String_Comparison_Exp | null | undefined;
  image?: String_Comparison_Exp | null | undefined;
  order_no?: Smallint_Comparison_Exp | null | undefined;
  parent_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "poi_photo" */
export type Poi_Photo_Constraint =
  /** unique or primary key constraint on columns "order_no", "parent_id" */
  "poi_photo_pk";

/** input type for inserting data into table "poi_photo" */
export type Poi_Photo_Insert_Input = {
  /** ブラーハッシュ値 */
  blurhash?: string | null | undefined;
  /** 写真URL */
  image?: string | null | undefined;
  /** 表示順序 */
  order_no?: number | null | undefined;
  /** 写真所有レコードのID */
  parent_id?: string | null | undefined;
};

/** on_conflict condition type for table "poi_photo" */
export type Poi_Photo_On_Conflict = {
  constraint: Poi_Photo_Constraint;
  update_columns?: Array<Poi_Photo_Update_Column>;
  where?: Poi_Photo_Bool_Exp | null | undefined;
};

/** select columns of table "poi_photo" */
export type Poi_Photo_Select_Column =
  /** column name */
  | "blurhash"
  /** column name */
  | "image"
  /** column name */
  | "order_no"
  /** column name */
  | "parent_id";

/** update columns of table "poi_photo" */
export type Poi_Photo_Update_Column =
  /** column name */
  | "blurhash"
  /** column name */
  | "image"
  /** column name */
  | "order_no"
  /** column name */
  | "parent_id";

export type Poi_Rate_Aggregate_Bool_Exp = {
  bool_and?: Poi_Rate_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Poi_Rate_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Poi_Rate_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Poi_Rate_Aggregate_Bool_Exp_Bool_And = {
  arguments: Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Poi_Rate_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Poi_Rate_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Poi_Rate_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Poi_Rate_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Poi_Rate_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Poi_Rate_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "poi_rate" */
export type Poi_Rate_Arr_Rel_Insert_Input = {
  data: Array<Poi_Rate_Insert_Input>;
  /** upsert condition */
  on_conflict?: Poi_Rate_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "poi_rate". All fields are combined with a logical 'AND'. */
export type Poi_Rate_Bool_Exp = {
  _and?: Array<Poi_Rate_Bool_Exp> | null | undefined;
  _not?: Poi_Rate_Bool_Exp | null | undefined;
  _or?: Array<Poi_Rate_Bool_Exp> | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_deleted?: Boolean_Comparison_Exp | null | undefined;
  modified_at?: Timestamp_Comparison_Exp | null | undefined;
  poi_id?: Uuid_Comparison_Exp | null | undefined;
  post?: Post_Bool_Exp | null | undefined;
  rate?: Smallint_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "poi_rate" */
export type Poi_Rate_Constraint =
  /** unique or primary key constraint on columns "id" */
  "poi_rate_pk";

/** input type for inserting data into table "poi_rate" */
export type Poi_Rate_Insert_Input = {
  /** 作成日時 */
  created_at?: string | null | undefined;
  /** 作成者 */
  created_by?: string | null | undefined;
  /** ID */
  id?: string | null | undefined;
  /** 削除フラグ */
  is_deleted?: boolean | null | undefined;
  /** 更新日時 */
  modified_at?: string | null | undefined;
  /** POIID */
  poi_id?: string | null | undefined;
  post?: Post_Obj_Rel_Insert_Input | null | undefined;
  /** 評価 */
  rate?: number | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
};

/** input type for inserting object relation for remote table "poi_rate" */
export type Poi_Rate_Obj_Rel_Insert_Input = {
  data: Poi_Rate_Insert_Input;
  /** upsert condition */
  on_conflict?: Poi_Rate_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "poi_rate" */
export type Poi_Rate_On_Conflict = {
  constraint: Poi_Rate_Constraint;
  update_columns?: Array<Poi_Rate_Update_Column>;
  where?: Poi_Rate_Bool_Exp | null | undefined;
};

/** select columns of table "poi_rate" */
export type Poi_Rate_Select_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "id"
  /** column name */
  | "is_deleted"
  /** column name */
  | "modified_at"
  /** column name */
  | "poi_id"
  /** column name */
  | "rate";

/** select "poi_rate_aggregate_bool_exp_bool_and_arguments_columns" columns of table "poi_rate" */
export type Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  "is_deleted";

/** select "poi_rate_aggregate_bool_exp_bool_or_arguments_columns" columns of table "poi_rate" */
export type Poi_Rate_Select_Column_Poi_Rate_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  "is_deleted";

/** update columns of table "poi_rate" */
export type Poi_Rate_Update_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "id"
  /** column name */
  | "is_deleted"
  /** column name */
  | "modified_at"
  /** column name */
  | "poi_id"
  /** column name */
  | "rate";

/** input type for updating data in table "poi" */
export type Poi_Set_Input = {
  address?: string | null | undefined;
  category?: string | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  description?: string | null | undefined;
  geom?: unknown;
  /** 休日 */
  holiday?: string | null | undefined;
  id?: string | null | undefined;
  /** 削除フラグ */
  is_deleted?: boolean | null | undefined;
  /** 警告あり */
  is_warning?: boolean | null | undefined;
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  modified_at?: string | null | undefined;
  modified_by?: string | null | undefined;
  name?: string | null | undefined;
  /** 営業時間 */
  open_time?: string | null | undefined;
  /** GooglePlaceId */
  place_id?: string | null | undefined;
  /** 料金 */
  price?: string | null | undefined;
  /** 電話番号 */
  tel?: string | null | undefined;
  /** トイレ有無 */
  toilet?: string | null | undefined;
  /** ホームページ */
  url?: string | null | undefined;
};

/** update columns of table "poi" */
export type Poi_Update_Column =
  /** column name */
  | "address"
  /** column name */
  | "category"
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "description"
  /** column name */
  | "geom"
  /** column name */
  | "holiday"
  /** column name */
  | "id"
  /** column name */
  | "is_deleted"
  /** column name */
  | "is_warning"
  /** column name */
  | "lat"
  /** column name */
  | "lng"
  /** column name */
  | "modified_at"
  /** column name */
  | "modified_by"
  /** column name */
  | "name"
  /** column name */
  | "open_time"
  /** column name */
  | "place_id"
  /** column name */
  | "price"
  /** column name */
  | "tel"
  /** column name */
  | "toilet"
  /** column name */
  | "url";

export type Poi_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Poi_Inc_Input | null | undefined;
  /** sets the columns of the filtered rows to the given values */
  _set?: Poi_Set_Input | null | undefined;
  /** filter the rows which have to be updated */
  where: Poi_Bool_Exp;
};

export type Post_Aggregate_Bool_Exp = {
  bool_and?: Post_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Post_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Post_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Post_Aggregate_Bool_Exp_Bool_And = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Post_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Post_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Post_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Post_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Post_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "post" */
export type Post_Arr_Rel_Insert_Input = {
  data: Array<Post_Insert_Input>;
  /** upsert condition */
  on_conflict?: Post_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "post". All fields are combined with a logical 'AND'. */
export type Post_Bool_Exp = {
  _and?: Array<Post_Bool_Exp> | null | undefined;
  _not?: Post_Bool_Exp | null | undefined;
  _or?: Array<Post_Bool_Exp> | null | undefined;
  comment?: String_Comparison_Exp | null | undefined;
  comments?: Post_Bool_Exp | null | undefined;
  comments_aggregate?: Post_Aggregate_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  has_mylike?: Boolean_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_deleted?: Boolean_Comparison_Exp | null | undefined;
  likes?: Post_Like_Bool_Exp | null | undefined;
  likes_aggregate?: Post_Like_Aggregate_Bool_Exp | null | undefined;
  modified_at?: Timestamp_Comparison_Exp | null | undefined;
  parent?: Post_Bool_Exp | null | undefined;
  parent_id?: Uuid_Comparison_Exp | null | undefined;
  photos?: Post_Photo_Bool_Exp | null | undefined;
  photos_aggregate?: Post_Photo_Aggregate_Bool_Exp | null | undefined;
  poi?: Poi_Bool_Exp | null | undefined;
  poi_id?: Uuid_Comparison_Exp | null | undefined;
  poi_rate?: Poi_Rate_Bool_Exp | null | undefined;
  poi_rate_id?: Uuid_Comparison_Exp | null | undefined;
  reply_to?: Post_Bool_Exp | null | undefined;
  reply_to_id?: Uuid_Comparison_Exp | null | undefined;
  root?: Post_Bool_Exp | null | undefined;
  root_post_id?: Uuid_Comparison_Exp | null | undefined;
  stay_at?: Timestamp_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "post" */
export type Post_Constraint =
  /** unique or primary key constraint on columns "id" */
  | "post_pk"
  /** unique or primary key constraint on columns "poi_rate_id" */
  | "post_poi_rate_id_uk";

/** input type for inserting data into table "post" */
export type Post_Insert_Input = {
  comment?: string | null | undefined;
  comments?: Post_Arr_Rel_Insert_Input | null | undefined;
  created_at?: string | null | undefined;
  created_by?: string | null | undefined;
  id?: string | null | undefined;
  /** 削除フラグ */
  is_deleted?: boolean | null | undefined;
  likes?: Post_Like_Arr_Rel_Insert_Input | null | undefined;
  modified_at?: string | null | undefined;
  parent?: Post_Obj_Rel_Insert_Input | null | undefined;
  /** 親投稿、コメントID */
  parent_id?: string | null | undefined;
  photos?: Post_Photo_Arr_Rel_Insert_Input | null | undefined;
  poi?: Poi_Obj_Rel_Insert_Input | null | undefined;
  poi_id?: string | null | undefined;
  poi_rate?: Poi_Rate_Obj_Rel_Insert_Input | null | undefined;
  /** レートID */
  poi_rate_id?: string | null | undefined;
  reply_to?: Post_Obj_Rel_Insert_Input | null | undefined;
  /** 返信先投稿ID */
  reply_to_id?: string | null | undefined;
  root?: Post_Obj_Rel_Insert_Input | null | undefined;
  root_post_id?: string | null | undefined;
  /** 滞在日 */
  stay_at?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
};

export type Post_Like_Aggregate_Bool_Exp = {
  count?: Post_Like_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Post_Like_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Post_Like_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Post_Like_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "post_like" */
export type Post_Like_Arr_Rel_Insert_Input = {
  data: Array<Post_Like_Insert_Input>;
  /** upsert condition */
  on_conflict?: Post_Like_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "post_like". All fields are combined with a logical 'AND'. */
export type Post_Like_Bool_Exp = {
  _and?: Array<Post_Like_Bool_Exp> | null | undefined;
  _not?: Post_Like_Bool_Exp | null | undefined;
  _or?: Array<Post_Like_Bool_Exp> | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by?: Uuid_Comparison_Exp | null | undefined;
  post?: Post_Bool_Exp | null | undefined;
  post_id?: Uuid_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
};

/** unique or primary key constraints on table "post_like" */
export type Post_Like_Constraint =
  /** unique or primary key constraint on columns "post_id", "created_by" */
  "post_like_pk";

/** input type for inserting data into table "post_like" */
export type Post_Like_Insert_Input = {
  /** 作成日時 */
  created_at?: string | null | undefined;
  /** 作成者 */
  created_by?: string | null | undefined;
  post?: Post_Obj_Rel_Insert_Input | null | undefined;
  /** いいね対象のレビュー投稿またはコメントのID */
  post_id?: string | null | undefined;
  user?: Users_Obj_Rel_Insert_Input | null | undefined;
};

/** on_conflict condition type for table "post_like" */
export type Post_Like_On_Conflict = {
  constraint: Post_Like_Constraint;
  update_columns?: Array<Post_Like_Update_Column>;
  where?: Post_Like_Bool_Exp | null | undefined;
};

/** select columns of table "post_like" */
export type Post_Like_Select_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "post_id";

/** update columns of table "post_like" */
export type Post_Like_Update_Column =
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "post_id";

/** input type for inserting object relation for remote table "post" */
export type Post_Obj_Rel_Insert_Input = {
  data: Post_Insert_Input;
  /** upsert condition */
  on_conflict?: Post_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "post" */
export type Post_On_Conflict = {
  constraint: Post_Constraint;
  update_columns?: Array<Post_Update_Column>;
  where?: Post_Bool_Exp | null | undefined;
};

export type Post_Photo_Aggregate_Bool_Exp = {
  count?: Post_Photo_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Post_Photo_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Post_Photo_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Post_Photo_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** input type for inserting array relation for remote table "post_photo" */
export type Post_Photo_Arr_Rel_Insert_Input = {
  data: Array<Post_Photo_Insert_Input>;
  /** upsert condition */
  on_conflict?: Post_Photo_On_Conflict | null | undefined;
};

/** Boolean expression to filter rows from the table "post_photo". All fields are combined with a logical 'AND'. */
export type Post_Photo_Bool_Exp = {
  _and?: Array<Post_Photo_Bool_Exp> | null | undefined;
  _not?: Post_Photo_Bool_Exp | null | undefined;
  _or?: Array<Post_Photo_Bool_Exp> | null | undefined;
  blurhash?: String_Comparison_Exp | null | undefined;
  image?: String_Comparison_Exp | null | undefined;
  order_no?: Smallint_Comparison_Exp | null | undefined;
  target_id?: Uuid_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "post_photo" */
export type Post_Photo_Constraint =
  /** unique or primary key constraint on columns "target_id", "order_no" */
  "post_photo_pk";

/** input type for inserting data into table "post_photo" */
export type Post_Photo_Insert_Input = {
  /** ブラーハッシュ値 */
  blurhash?: string | null | undefined;
  /** 写真ID */
  image?: string | null | undefined;
  /** 表示順序 */
  order_no?: number | null | undefined;
  /** レビューレコードのID */
  target_id?: string | null | undefined;
};

/** on_conflict condition type for table "post_photo" */
export type Post_Photo_On_Conflict = {
  constraint: Post_Photo_Constraint;
  update_columns?: Array<Post_Photo_Update_Column>;
  where?: Post_Photo_Bool_Exp | null | undefined;
};

/** select columns of table "post_photo" */
export type Post_Photo_Select_Column =
  /** column name */
  | "blurhash"
  /** column name */
  | "image"
  /** column name */
  | "order_no"
  /** column name */
  | "target_id";

/** update columns of table "post_photo" */
export type Post_Photo_Update_Column =
  /** column name */
  | "blurhash"
  /** column name */
  | "image"
  /** column name */
  | "order_no"
  /** column name */
  | "target_id";

/** select columns of table "post" */
export type Post_Select_Column =
  /** column name */
  | "comment"
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "id"
  /** column name */
  | "is_deleted"
  /** column name */
  | "modified_at"
  /** column name */
  | "parent_id"
  /** column name */
  | "poi_id"
  /** column name */
  | "poi_rate_id"
  /** column name */
  | "reply_to_id"
  /** column name */
  | "root_post_id"
  /** column name */
  | "stay_at";

/** select "post_aggregate_bool_exp_bool_and_arguments_columns" columns of table "post" */
export type Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  "is_deleted";

/** select "post_aggregate_bool_exp_bool_or_arguments_columns" columns of table "post" */
export type Post_Select_Column_Post_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  "is_deleted";

/** update columns of table "post" */
export type Post_Update_Column =
  /** column name */
  | "comment"
  /** column name */
  | "created_at"
  /** column name */
  | "created_by"
  /** column name */
  | "id"
  /** column name */
  | "is_deleted"
  /** column name */
  | "modified_at"
  /** column name */
  | "parent_id"
  /** column name */
  | "poi_id"
  /** column name */
  | "poi_rate_id"
  /** column name */
  | "reply_to_id"
  /** column name */
  | "root_post_id"
  /** column name */
  | "stay_at";

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

export type St_D_Within_Geography_Input = {
  distance: number;
  from: unknown;
  use_spheroid?: boolean | null | undefined;
};

export type St_D_Within_Input = {
  distance: number;
  from: unknown;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Array<Users_Bool_Exp> | null | undefined;
  _not?: Users_Bool_Exp | null | undefined;
  _or?: Array<Users_Bool_Exp> | null | undefined;
  banner_image?: String_Comparison_Exp | null | undefined;
  bio?: String_Comparison_Exp | null | undefined;
  block_users?: Block_User_Bool_Exp | null | undefined;
  block_users_aggregate?: Block_User_Aggregate_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  email?: String_Comparison_Exp | null | undefined;
  fcm_token?: String_Comparison_Exp | null | undefined;
  firebase_uid?: String_Comparison_Exp | null | undefined;
  id?: Uuid_Comparison_Exp | null | undefined;
  is_admin?: Boolean_Comparison_Exp | null | undefined;
  is_deleted?: Boolean_Comparison_Exp | null | undefined;
  is_initialized?: Boolean_Comparison_Exp | null | undefined;
  is_provisional?: Boolean_Comparison_Exp | null | undefined;
  modified_at?: Timestamp_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  profile_image?: String_Comparison_Exp | null | undefined;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "firebase_uid" */
  | "users_firebase_uid_uk"
  /** unique or primary key constraint on columns "id" */
  | "users_pk";

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  banner_image?: string | null | undefined;
  bio?: string | null | undefined;
  block_users?: Block_User_Arr_Rel_Insert_Input | null | undefined;
  /** 作成日時 */
  created_at?: string | null | undefined;
  /** メールアドレス */
  email?: string | null | undefined;
  /** Firebase Cloud Messaging トークン */
  fcm_token?: string | null | undefined;
  /** ユニークID(Firebase Authentication User Id) */
  firebase_uid?: string | null | undefined;
  /** ユーザーID */
  id?: string | null | undefined;
  /** 管理者フラグ */
  is_admin?: boolean | null | undefined;
  is_deleted?: boolean | null | undefined;
  is_initialized?: boolean | null | undefined;
  /** 仮登録フラグ */
  is_provisional?: boolean | null | undefined;
  /** 更新日時 */
  modified_at?: string | null | undefined;
  /** 名前 */
  name?: string | null | undefined;
  profile_image?: string | null | undefined;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: Users_On_Conflict | null | undefined;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Users_Bool_Exp | null | undefined;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | "banner_image"
  /** column name */
  | "bio"
  /** column name */
  | "created_at"
  /** column name */
  | "email"
  /** column name */
  | "fcm_token"
  /** column name */
  | "firebase_uid"
  /** column name */
  | "id"
  /** column name */
  | "is_admin"
  /** column name */
  | "is_deleted"
  /** column name */
  | "is_initialized"
  /** column name */
  | "is_provisional"
  /** column name */
  | "modified_at"
  /** column name */
  | "name"
  /** column name */
  | "profile_image";

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

export type InsertAndUpdatePoiMutationVariables = Exact<{
  insertObjects: Array<Poi_Insert_Input> | Poi_Insert_Input;
  updates: Array<Poi_Updates> | Poi_Updates;
  deletePhotoParentIds: Array<string> | string;
  insertPhotos: Array<Poi_Photo_Insert_Input> | Poi_Photo_Insert_Input;
}>;

export type InsertAndUpdatePoiMutation = {
  delete_poi_photo: { affected_rows: number } | null;
  insert_poi: { affected_rows: number } | null;
  update_poi_many: Array<{ affected_rows: number } | null> | null;
  insert_poi_photo: { affected_rows: number } | null;
};

export type InsertSinglePoiMutationVariables = Exact<{
  object: Poi_Insert_Input;
}>;

export type InsertSinglePoiMutation = { insert_poi_one: { id: string } | null };

export type UpdateSinglePoiLatLngMutationVariables = Exact<{
  id: string;
  lat: number;
  lng: number;
  modified_at: string;
}>;

export type UpdateSinglePoiLatLngMutation = {
  update_poi_by_pk: { id: string } | null;
};

export type CreatedPoiQueryVariables = Exact<{
  createdAt: string;
  category: string;
}>;

export type CreatedPoiQuery = {
  newPoi: Array<{
    id: string;
    name: string;
    address: string | null;
    photos: Array<{ image: string }>;
  }>;
  discontinuePoi: Array<{
    id: string;
    name: string;
    address: string | null;
    photos: Array<{ image: string }>;
  }>;
};

export type PoiQueryVariables = Exact<{
  where: Poi_Bool_Exp;
}>;

export type PoiQuery = {
  poi: Array<{
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    description: string | null;
    tel: string | null;
    url: string | null;
    open_time: string | null;
    holiday: string | null;
    price: string | null;
    toilet: string | null;
    address: string | null;
    is_deleted: boolean;
    is_warning: boolean;
    created_by: string;
    created_at: string;
    modified_by: string;
    modified_at: string;
    photos: Array<{ image: string; order_no: number }>;
  }>;
};

export type CategoryPoiQueryVariables = Exact<{
  category: string;
}>;

export type CategoryPoiQuery = {
  poi: Array<{
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    description: string | null;
    tel: string | null;
    url: string | null;
    open_time: string | null;
    holiday: string | null;
    price: string | null;
    toilet: string | null;
    address: string | null;
    is_deleted: boolean;
    is_warning: boolean;
    created_by: string;
    created_at: string;
    modified_by: string;
    modified_at: string;
    photos: Array<{ image: string; order_no: number }>;
  }>;
};

export type SearchNeighborsQueryVariables = Exact<{
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  distance?: number | null | undefined;
  category?: string | null | undefined;
}>;

export type SearchNeighborsQuery = {
  search_neighbors: Array<{
    id: string;
    category: string;
    lat: number;
    lng: number;
    name: string;
    description: string | null;
    tel: string | null;
    url: string | null;
    open_time: string | null;
    holiday: string | null;
    price: string | null;
    toilet: string | null;
    address: string | null;
    is_deleted: boolean;
    is_warning: boolean;
    created_by: string;
    created_at: string;
    modified_by: string;
    modified_at: string;
    photos: Array<{ image: string; order_no: number }>;
  }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<
    DocumentTypeDecoration<TResult, TVariables>["__apiType"]
  >;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
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
export const InsertSinglePoiDocument = new TypedDocumentString(`
    mutation InsertSinglePoi($object: poi_insert_input!) {
  insert_poi_one(object: $object) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  InsertSinglePoiMutation,
  InsertSinglePoiMutationVariables
>;
export const UpdateSinglePoiLatLngDocument = new TypedDocumentString(`
    mutation UpdateSinglePoiLatLng($id: uuid!, $lat: numeric!, $lng: numeric!, $modified_at: timestamp!) {
  update_poi_by_pk(
    pk_columns: {id: $id}
    _set: {lat: $lat, lng: $lng, modified_at: $modified_at}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  UpdateSinglePoiLatLngMutation,
  UpdateSinglePoiLatLngMutationVariables
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
export const CategoryPoiDocument = new TypedDocumentString(`
    query CategoryPoi($category: String!) {
  poi(where: {category: {_eq: $category}, is_deleted: {_eq: false}}) {
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
  CategoryPoiQuery,
  CategoryPoiQueryVariables
>;
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
