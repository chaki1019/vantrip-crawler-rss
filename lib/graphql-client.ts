import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient('https://api.vantrip.fun/v1/graphql', {
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': 'Mmp@arkbld1019',
  }
})
