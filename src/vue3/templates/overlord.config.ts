import 'reflect-metadata';
import { typeDefs, resolvers } from './server';

export default {
    schema: [{ typeDefs, resolvers }],
    serviceName: '<%=name%>',
    port: '<%=servicePort%>',
};
