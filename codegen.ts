/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: {
    'https://api.vantrip.fun/v1/graphql': {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': 'Mmp@arkbld1019',
        'x-hasura-user-role': 'admin',
      }
    }
  },
  // documents: ['src/**/*.ts'],
  documents: ["./graphql/**/*.graphql"],
  generates: {
    './__generated/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        scalars: {
          uuid: 'string',
          bigint: 'number',
          numeric: 'number',
          smallint: 'number',
          date: 'string',
          timestamp: 'string',
        },
        defaultScalarType: 'unknown'
      },
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;