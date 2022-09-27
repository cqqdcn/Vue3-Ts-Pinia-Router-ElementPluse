<template>
    <div class="dataScreen">
        <div class="dataScreen_mian" ref="dataScreenRef">
            <div class="dataScreen_mian_top">
                <div class="dataScreen_mian_top_l">
                    <dv-decoration-11 style="width:140px;height:50px;">
                        <div class="top_l_1" @click="returnHome">
                            首页
                        </div>
                    </dv-decoration-11>
                </div>
                <div class="dataScreen_mian_top_c">
                    <dv-decoration5 :dur="2" />
                    <p>智慧旅游可视化大数据展示平台</p>
                </div>
                <div class="dataScreen_mian_top_r">
                    <dv-decoration-11 style="width:140px;height:50px;">
                        <div class="top_l_1">
                            统计报道
                        </div>
                    </dv-decoration-11>
                    <div class="Time">
                        当前时间：{{ time }}
                    </div>
                </div>
            </div>
            <div class="dataScreen_mian_bottom">
                <div class="mian_bottom_left">
                    <div class="bottom_left_1">
                        <div class="bg">
                            <dv-border-box11 title="实时游客统计">
                                <div class="echarText">
                                    <Echart1 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                    <div class="bottom_left_2">
                        <div class="bg">
                            <dv-border-box11 title="男女比例">
                                <div class="echarText">
                                    <Echart2 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                    <div class="bottom_left_3">
                        <div class="bg">
                            <dv-border-box11 title="年龄比例">
                                <div class="echarText">
                                    <Echart3 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                </div>
                <div class="mian_bottom_center">
                    <div class="mian_center_1">
                        <div class="dataScreen-map-title">景区实时客流量</div>
                        <Echart4 />
                    </div>
                    <div class="mian_center_2">
                        <Echart5 />
                    </div>
                </div>
                <div class="mian_bottom_right">
                    <div class="bottom_left_1">
                        <div class="bg">
                            <dv-border-box11 title="实时游客统计">
                                <div class="echarText">
                                    <Echart1 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                    <div class="bottom_left_2">
                        <div class="bg">
                            <dv-border-box11 title="男女比例">
                                <div class="echarText">
                                    <Echart2 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                    <div class="bottom_left_3">
                        <div class="bg">
                            <dv-border-box11 title="年龄比例">
                                <div class="echarText">
                                    <Echart3 />
                                </div>
                            </dv-border-box11>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
// 时间hooks
import { useTime } from "@/hooks/useTime"
import { useRouter } from "vue-router"
import Echart1 from "./components/youketongji.vue"
import Echart2 from "./components/sexbili.vue"
import Echart3 from "./components/oldbili.vue"
import Echart4 from "./components/chinaMap.vue"
import Echart5 from "./components/touristsTj.vue"
/* 获取最外层盒子 */
const dataScreenRef = ref<HTMLElement | null>(null)
onMounted(() => {
    // 初始化时为外层盒子加上缩放属性，防止刷新界面时就已经缩放
    if (dataScreenRef.value) {
        dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
        dataScreenRef.value.style.width = `1920px`;
        dataScreenRef.value.style.height = `1080px`;

    }
    // 为浏览器绑定事件
    window.addEventListener("resize", resize);
});

const router = useRouter()
// 返回首页
const returnHome = () => {
    router.push("/home/index")
}

/* 根据浏览器大小推断缩放比例 */
const getScale = (width = 1920, height = 1080) => {
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    return ww < wh ? ww : wh;
};
/* 浏览器监听 resize 事件 */
const resize = () => {
    if (dataScreenRef.value) {
        dataScreenRef.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`;
    }
};
/* 获取当前时间 */
const { nowTime } = useTime();
let timer: any = null;
let time: any = ref(nowTime.value);
timer = setInterval(() => {
    time.value = useTime().nowTime.value;
}, 1000);

/* 销毁时触发 */
onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
    clearInterval(timer);
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>