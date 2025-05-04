module.exports = {
    overwrite: true,
    schema: process.env.NODE_ENV === 'production' ? 'https://localhost:<%=servicePort%>' : 'http://localhost:<%=servicePort%>',
    documents: './src/**/*.gql',
    generates: {
        './src/graphql/index.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
            config: {
                vueCompositionApiImportFrom: 'vue',
            },
        },
    },
};
