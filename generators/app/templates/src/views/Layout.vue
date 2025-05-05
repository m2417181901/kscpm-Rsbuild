<script lang="ts" setup>
import { Layout, Aside, Header, Body } from '@king-design/vue';
const region = import.meta.env.VITE_REGION;
</script>
<template lang="pug">
Layout
    Header(theme="light")
        h1 Region: {{ region }} (extract from .env)
    Layout
        Aside(theme="light")
        Body
            router-view
</template>
