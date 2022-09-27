<template>
    <div class="logo">
        <img src="@/assets/logo.png" alt="">
        <p v-show="isCollapse?false:true">Vue3 Admin</p>
    </div>
    <el-menu :default-active="routeMenu" class="el-menu-vertical-demo" :collapse="isCollapse"
    background-color="#191a20" text-color="rgb(189, 189, 192)" active-text-color="#fff" unique-opened="true" :collapse-transition="false"
    :router="true">
        <el-menu-item index="/home/index">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="/dataScreen">
            <el-icon>
                <Monitor />
            </el-icon>
            <template #title>数据大屏</template>
        </el-menu-item>
        <el-sub-menu index="/form">
            <template #title>
                <el-icon>
                    <MessageBox />
                </el-icon>
                <span>超级表格</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/form/hooksform">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>使用 Hooks</template>
                </el-menu-item>
                <el-menu-item index="/form/componentform">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>使用 Component</template>
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/echarts">
            <template #title>
                <el-icon>
                    <Histogram />
                </el-icon>
                <span>数据可视化</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/echarts/echartsForm">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>可视化表</template>
                </el-menu-item>
                <el-menu-item index="/echarts/newpage">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>内嵌页面</template>
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="/text">
            <template #title>
                <el-icon>
                    <Tickets />
                </el-icon>
                <span>表单 Form</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/text/textFrom1">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>超级 Form</template>
                </el-menu-item>
                <el-menu-item index="/text/textFrom2">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>基础 Form</template>
                </el-menu-item>
                <el-menu-item index="/text/textFrom3">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>基础 Editor</template>
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
    import { ref, computed } from "vue"
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
        Monitor
    } from '@element-plus/icons-vue'
    import { useMenuIcon } from "@/store/main"
    import { useRoute } from "vue-router";

    const route = useRoute()
    // Menu当前路径高亮
    const routeMenu = computed(():string =>route.path)
    
    const menuIcon = useMenuIcon()
    const isCollapse = computed(():boolean => menuIcon.isCollapse)
    // const handleOpen = (key:string, keyPath:string[]) => {
    //     console.log(key, keyPath)
    // }
    // const handleClose = (key:string, keyPath:string[]) => {
    //     console.log(key, keyPath)
    // }
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>