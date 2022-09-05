<template>
    <div class="header_hide">
        <div class="header_left">
            <el-icon @click="menuIcon.setCollapse()" size="23px" class="header_icon">
                <component :is="isCollapse ? 'Expand': 'Fold'"></component>
            </el-icon>
            <Mianbaoxie></Mianbaoxie>
        </div>
        <div class="header_right">
            <div class="header_right_tc">
                <el-button type="danger" round size="small" @click="layout">退出</el-button>
            </div>
            <div class="header_right_p">你好，{{headernackname}}！</div>
            <div class="header_right_img">
                <img src="@/assets/images/txpic.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed ,onMounted} from "vue"
    import { useMenuIcon } from "@/store/main"
    import { useRouter } from "vue-router";
    import Mianbaoxie from "./components/mianbaoxie.vue"
    const menuIcon = useMenuIcon()
    const isCollapse = computed((): boolean => menuIcon.isCollapse)
    const router = useRouter()
    const headernackname  = localStorage.getItem("nackname")
    const layout = ()=>{
        localStorage.removeItem('token')
        router.push('/Login')
    }
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>