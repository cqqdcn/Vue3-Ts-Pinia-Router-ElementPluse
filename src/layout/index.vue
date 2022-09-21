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
                    <router-view v-slot="{Component,route}">
                        <Transition appear name="fade" mode="out-in">
                            <!-- mode="out-in" 使用这个属性需要组件内容被外层div包裹住 -->
                            <!--include 只缓存组件名为Home的页面-->
                            <KeepAlive include="Home">
                                <component :is="Component" :key="route.path"></component>
                            </KeepAlive>
                        </Transition>
                    </router-view>
                </el-main>
                <el-footer>
                    2022 © Vue3-Admin By Geeker wanghaodong.
                </el-footer>
            </el-container>
        </el-container>
    </div>
</template>  

<script setup lang="ts">
    import { ref, computed } from "vue"
    import Menu from "./Menu/index.vue"
    import Header from "./Header/index.vue"
    import { useMenuIcon } from "@/store/main"
    const menuIcon = useMenuIcon()
    const isCollapse = computed((): boolean => menuIcon.isCollapse)
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>