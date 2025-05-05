import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import path from 'path';
import i18never from 'vite-plugin-i18never';
import basicSsl from '@vitejs/plugin-basic-ssl';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        i18never({
            include: [/versatile/, './src/**/*'],
        }),
        eslint(),
        checker({ vueTsc: true }),
        ...(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview' ? [basicSsl()] : []),
        splitVendorChunkPlugin(),
    ],
    server: {
        port: <%=port%>,
        host: '0.0.0.0',
    },
    resolve: {
        alias: [{ find: /^@\/(.*)/, replacement: path.resolve(__dirname, './src/$1') }],
    },
});
