import { defineConfig, loadEnv, RsbuildPlugin } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginEslint } from '@rsbuild/plugin-eslint';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import { pluginBasicSsl } from '@rsbuild/plugin-basic-ssl';
import { pluginPug } from '@rsbuild/plugin-pug';
import { rspackPlugin } from 'i18never-unplugin';
import path from 'path';
const { publicVars } = loadEnv({ prefixes: ['VITE_'] });

interface Options {
    [key: string]: any;
}

const pluginRspack = (options: Options = {}): RsbuildPlugin => ({
    name: 'plugin-rspack-add',
    setup(api) {
        api.modifyRspackConfig((config) => {
            config.plugins
                ? config.plugins.push(rspackPlugin({ include: [/versatile/, 'src/**'] }))
                : (config.plugins = [rspackPlugin({ include: [/versatile/, 'src/**'] })]);
        });
    },
});

export default defineConfig({
    plugins: [
        pluginVue(),
        pluginEslint(),
        pluginTypeCheck(),
        pluginPug(),
        pluginRspack(),
        ...(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'preview' ? [pluginBasicSsl()] : []),
    ],
    html: {
        template: './index.html',
    },
    source: {
        entry: {
            index: './src/main.ts',
        },
        define: {
            ...publicVars,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
    },
    server: {
        port: 6060,
        host: '0.0.0.0',
        base: '/<%=projectPath%>/',
    },
});
