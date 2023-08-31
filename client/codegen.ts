import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      plugins: ['typescript'],
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
  schema: 'http://localhost:4000/graphql',
};

export default config;
