import { ApolloClient, createHttpLink, InMemoryCache, ApolloLink, concat } from '@apollo/client/core';

const { protocol, hostname } = location;
const uri =
    process.env.NODE_ENV === 'production'
        ? '//overlord-api.ksyun.com/console-v2'
        : process.env.NODE_ENV === 'preview'
        ? '//overlord-preview-api.ksyun.com/console-v2'
        : `${protocol}//${hostname}:8090`;

/**
 * 在请求头中添加traceId，并且在请求URL中GraphQL的操作名称
 * 方便调试
 */
const httpLink = createHttpLink({
    credentials: 'include',
});

function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}

const link = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
        uri: `${uri}?operationName=${operation.operationName}`,
        headers: {
            ...headers,
            'x-trace-id': guid(),
        },
    }));
    return forward(operation);
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    name: '<%=name%>',
    link: concat(link, httpLink),
    cache,
});
