<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/home/index' }" key="/home">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in matched" :key="item.path" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
    import { ref,computed } from "vue"
    import { ArrowRight } from '@element-plus/icons-vue'
    import { useRoute } from "vue-router"

    const route = useRoute()
    const matched = computed(()=>route.matched.filter(item => item.meta && item.meta.title && item.meta.title !== "首页"))
    
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>