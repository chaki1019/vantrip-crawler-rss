/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "mutation InsertAndUpdatePoi($insertObjects: [poi_insert_input!]!, $updates: [poi_updates!]!, $deletePhotoParentIds: [uuid!]!, $insertPhotos: [poi_photo_insert_input!]!) {\n  delete_poi_photo(where: {parent_id: {_in: $deletePhotoParentIds}}) {\n    affected_rows\n  }\n  insert_poi(objects: $insertObjects) {\n    affected_rows\n  }\n  update_poi_many(updates: $updates) {\n    affected_rows\n  }\n  insert_poi_photo(objects: $insertPhotos) {\n    affected_rows\n  }\n}\n\nquery CreatedPoi($createdAt: timestamp!, $category: String!) {\n  newPoi: poi(where: {category: {_eq: $category}, created_at: {_eq: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n  discontinuePoi: poi(\n    where: {category: {_eq: $category}, modified_at: {_lt: $createdAt}}\n  ) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n}\n\nquery CategoryPoi($category: String!) {\n  poi(where: {category: {_eq: $category}, url: {_is_null: false}}) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n    created_by\n    created_at\n    modified_by\n    modified_at\n  }\n}":
    types.InsertAndUpdatePoiDocument,
  "query SearchNeighbors($lat: numeric, $lng: numeric, $distance: Int, $category: String) {\n  search_neighbors(\n    args: {pdistance: $distance, plat: $lat, plng: $lng}\n    where: {_and: {is_deleted: {_eq: false}, category: {_eq: $category}}}\n  ) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n    created_by\n    created_at\n    modified_by\n    modified_at\n  }\n}":
    types.SearchNeighborsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation InsertAndUpdatePoi($insertObjects: [poi_insert_input!]!, $updates: [poi_updates!]!, $deletePhotoParentIds: [uuid!]!, $insertPhotos: [poi_photo_insert_input!]!) {\n  delete_poi_photo(where: {parent_id: {_in: $deletePhotoParentIds}}) {\n    affected_rows\n  }\n  insert_poi(objects: $insertObjects) {\n    affected_rows\n  }\n  update_poi_many(updates: $updates) {\n    affected_rows\n  }\n  insert_poi_photo(objects: $insertPhotos) {\n    affected_rows\n  }\n}\n\nquery CreatedPoi($createdAt: timestamp!, $category: String!) {\n  newPoi: poi(where: {category: {_eq: $category}, created_at: {_eq: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n  discontinuePoi: poi(\n    where: {category: {_eq: $category}, modified_at: {_lt: $createdAt}}\n  ) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n}\n\nquery CategoryPoi($category: String!) {\n  poi(where: {category: {_eq: $category}, url: {_is_null: false}}) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n    created_by\n    created_at\n    modified_by\n    modified_at\n  }\n}",
): typeof import("./graphql").InsertAndUpdatePoiDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query SearchNeighbors($lat: numeric, $lng: numeric, $distance: Int, $category: String) {\n  search_neighbors(\n    args: {pdistance: $distance, plat: $lat, plng: $lng}\n    where: {_and: {is_deleted: {_eq: false}, category: {_eq: $category}}}\n  ) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n    created_by\n    created_at\n    modified_by\n    modified_at\n  }\n}",
): typeof import("./graphql").SearchNeighborsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
