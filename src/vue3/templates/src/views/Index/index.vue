<script setup lang="ts">
import { ref, watch } from 'vue';
import { Button } from '@king-design/vue';
import { useDemo } from './useDemo';

const output = useDemo();

function openLink() {
    window.open('https://www.apollographql.com/docs/apollo-server/');
}
</script>

<template>
    <div style="width: 400px; margin: 20px auto">
        <Button type="primary">Graphql 请求示例</Button>
        <div>
            <p>请求结果：</p>
            <pre>{{ output }}</pre>
        </div>
        <Button type="link" @click="openLink">更多使用 >> </Button>
    </div>
</template>
