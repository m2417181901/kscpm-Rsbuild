module.exports = {
    client: {
        service: {
            url: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview'
                ? 'https://localhost:<%=servicePort%>'
                : 'http://localhost:<%=servicePort%>',
        },
        includes: ['./src/**/*.gql'],
    },
};
