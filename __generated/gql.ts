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
  "mutation InsertPoi($object: poi_insert_input!) {\n  insert_poi_one(object: $object) {\n    id\n  }\n}\n\nmutation UpdatePoi($id: uuid!, $objects: [poi_photo_insert_input!]!, $_set: poi_set_input!) {\n  delete_poi_photo(where: {parent_id: {_eq: $id}}) {\n    affected_rows\n  }\n  insert_poi_photo(objects: $objects) {\n    affected_rows\n  }\n  update_poi_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    id\n  }\n}\n\nquery CreatedPoi($createdAt: timestamp!) {\n  newPoi: poi(where: {created_at: {_eq: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n  discontinuePoi: poi(where: {modified_at: {_lt: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n}":
    types.InsertPoiDocument,
  'query SearchNeighbors($lat: numeric, $lng: numeric, $distance: Int) {\n  search_neighbors(\n    args: {pdistance: $distance, plat: $lat, plng: $lng}\n    where: {_and: {is_deleted: {_eq: false}, category: {_eq: "rss"}}}\n  ) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n  }\n}':
    types.SearchNeighborsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation InsertPoi($object: poi_insert_input!) {\n  insert_poi_one(object: $object) {\n    id\n  }\n}\n\nmutation UpdatePoi($id: uuid!, $objects: [poi_photo_insert_input!]!, $_set: poi_set_input!) {\n  delete_poi_photo(where: {parent_id: {_eq: $id}}) {\n    affected_rows\n  }\n  insert_poi_photo(objects: $objects) {\n    affected_rows\n  }\n  update_poi_by_pk(pk_columns: {id: $id}, _set: $_set) {\n    id\n  }\n}\n\nquery CreatedPoi($createdAt: timestamp!) {\n  newPoi: poi(where: {created_at: {_eq: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n  discontinuePoi: poi(where: {modified_at: {_lt: $createdAt}}) {\n    id\n    name\n    address\n    photos(order_by: {order_no: asc}) {\n      image\n    }\n  }\n}",
): typeof import("./graphql").InsertPoiDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query SearchNeighbors($lat: numeric, $lng: numeric, $distance: Int) {\n  search_neighbors(\n    args: {pdistance: $distance, plat: $lat, plng: $lng}\n    where: {_and: {is_deleted: {_eq: false}, category: {_eq: "rss"}}}\n  ) {\n    id\n    category\n    lat\n    lng\n    name\n    description\n    tel\n    url\n    open_time\n    holiday\n    price\n    toilet\n    address\n    is_deleted\n    is_warning\n    photos(order_by: {order_no: asc}) {\n      image\n      order_no\n    }\n  }\n}',
): typeof import("./graphql").SearchNeighborsDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
