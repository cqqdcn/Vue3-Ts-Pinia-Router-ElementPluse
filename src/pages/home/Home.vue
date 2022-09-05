<template>
    <div class="home">
        <div class="home_text">
            <div class="home_text_left">
                <div class="home_text_title">
                    基本信息
                </div>
                <div class="home_text_table">
                    <el-descriptions direction="vertical" :column="3" :size="size" border>
                        <el-descriptions-item label="用户名">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <user />
                                    </el-icon>
                                    用户名
                                </div>
                            </template>
                            {{userInfo.nackname}}
                        </el-descriptions-item>
                        <el-descriptions-item label="手机号">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <Iphone />
                                    </el-icon>
                                    手机号
                                </div>
                            </template>
                            {{userInfo.phone}}
                        </el-descriptions-item>
                        <el-descriptions-item label="居住地" :span="2">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <LocationInformation />
                                    </el-icon>
                                    居住地
                                </div>
                            </template>
                            {{userInfo.address}}
                        </el-descriptions-item>
                        <el-descriptions-item label="兴趣">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <Headset />
                                    </el-icon>
                                    兴趣爱好
                                </div>
                            </template>
                            <el-tag size="small">兴趣爱好</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="兴趣爱好">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <Headset />
                                    </el-icon>
                                    兴趣爱好
                                </div>
                            </template>
                            <el-tag v-for="(item,index) in userInfo.hobby" :key="item" :class="'sty_p'+ index">{{item}}</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="职业">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <School />
                                    </el-icon>
                                    职业
                                </div>
                            </template>
                            {{userInfo.professional}}
                        </el-descriptions-item>
                        <el-descriptions-item label="兴趣">
                            <template #label>
                                <div class="cell-item">
                                    <el-icon>
                                        <LocationInformation />
                                    </el-icon>
                                    座右铭
                                </div>
                            </template>
                            {{userInfo.motto}}
                        </el-descriptions-item>
                    </el-descriptions>
                </div>
            </div>
            <div class="home_text_left">
                <div class="home_text_info">
                    <el-calendar v-model="value" />
                </div>
            </div>
        </div>
        <div class="home_echarts">
            <div class="home_echarts_1">
                <div class="home_text_title">
                    饼图信息
                </div>
                <div>
                    <div ref="echartsRef" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    折线图信息
                </div>
                <div>
                    <div ref="echartsRefA" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    柱状图信息
                </div>
                <div>
                    <div ref="echartsRefB" class="chartSty"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { onMounted, ref, reactive } from 'vue';
    import { useRoute } from 'vue-router';
    import { userInfoApi, echartApi } from '@/service/api/userInfo/userInfo'
    import * as echarts from 'echarts';
    type EChartsOption = echarts.EChartsOption

    const route = useRoute()
    // const username = route.query.username
    const size = ref('')
    const value = ref(new Date())
    const userInfo = reactive({
        nackname: '',
        phone: '',
        address: '',
        hobby: '',
        professional: '',
        motto: ''
    })
    // 获取基本信息
    const username = localStorage.getItem("username")
    const getUserInfo = async () => {
        const res: any = await userInfoApi.userInfo({ username: username })
        localStorage.setItem("nackname", res.data[0].nackname)
        userInfo.nackname = res.data[0].nackname
        userInfo.phone = res.data[0].phone
        userInfo.address = res.data[0].address
        userInfo.hobby = res.data[0].hobby.split('/')
        userInfo.professional = res.data[0].professional
        userInfo.motto = res.data[0].motto
    }
    // 获取可视化图标信息
    const echartsData = reactive({
        chart: []
    })
    // 扇形图
    const getEchartsdata = async () => {
        const res: any = await echartApi.getecharts()
        console.log(res);
        
        res.data.filter((item: any) => {
            delete item.id //过滤删除id属性
        })
        echartsData.chart = res.data
        firstEchartsA()
    }
    // 扇形图信息
    const echartsRef = ref<HTMLElement>();
    const firstEchartsA = () => {
        let myChart: echarts.ECharts = echarts.init(echartsRef.value as HTMLElement);
        const option: EChartsOption = {
            title: {
                right: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: 'right'
            },
            series: [{
                name: '扇形图信息',
                type: 'pie',
                radius: '50%',
                data: echartsData.chart,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 获取折线图图标信息
    const echartsData2 = reactive({
        xAxisdata: [],
        seriesdata: []
    })
    // 折线图图
    const getEchartsdata2 = async () => {
        const res: any = await echartApi.getecharts()
        const chartName = res.data.map((item: any) => {
            return item.name
        })
        const chartdata = res.data.map((item: any) => {
            return item.value
        })
        echartsData2.xAxisdata = chartName
        echartsData2.seriesdata = chartdata
        firstEchartsB()
        firstEchartsC()
    }
    // 折线图信息
    const echartsRefA = ref<HTMLElement>();
    const firstEchartsB = () => {
        let myChart: echarts.ECharts = echarts.init(echartsRefA.value as HTMLElement);
        const option: EChartsOption = {
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: echartsData2.xAxisdata
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: echartsData2.seriesdata,
                type: 'line',
                areaStyle: {}
            }]
        };
        myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }
    // 柱状图信息
    const echartsRefB = ref<HTMLElement>();
    const firstEchartsC = () => {
        let myChart: echarts.ECharts = echarts.init(echartsRefB.value as HTMLElement);
        const option: EChartsOption = {
            tooltip: {
                trigger: 'item'
            },
            xAxis: {
                type: 'category',
                data: echartsData2.xAxisdata,
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: echartsData2.seriesdata,
                type: 'bar'
            }]
        };
        myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    onMounted(() => {
        getUserInfo()
        getEchartsdata()
        getEchartsdata2()
    })
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>