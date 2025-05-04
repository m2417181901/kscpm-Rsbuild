import { createApp, provide, h } from 'vue';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './apollo';
import router from './router/index';
import App from './App.vue';

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },
    render: () => h(App),
});
app.use(router);
app.mount('#app');
