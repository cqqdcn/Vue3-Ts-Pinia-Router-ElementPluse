<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="common-aside" :width="isCollapse?'65px':'220px'">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>
                    2022 © Vue3-Admin By Geeker wanghaodong.
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import { ref,computed } from "vue"
    import Menu from "./Menu/index.vue"
    import Header from "./Header/index.vue"
    import { useMenuIcon } from "@/store/main"
    const menuIcon = useMenuIcon()
    const isCollapse = computed(():boolean => menuIcon.isCollapse)
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>