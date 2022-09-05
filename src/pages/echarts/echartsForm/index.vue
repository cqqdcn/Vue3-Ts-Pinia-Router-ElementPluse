<template>
    <div class="home">
        <div class="home_echarts">
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef1" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef2" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef3" class="chartSty"></div>
                </div>
            </div>
        </div>
        <div class="home_echarts">
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef4" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef5" class="chartSty"></div>
                </div>
            </div>
            <div class="home_echarts_1">
                <div class="home_text_title">
                    可视化图表
                </div>
                <div>
                    <div ref="echartsRef6" class="chartSty"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import * as echarts from 'echarts';
    type EChartsOption = echarts.EChartsOption

    // 可视化图1
    const echartsRef1 = ref < HTMLElement > ();
    const firstEchartsA = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef1.value as HTMLElement);
        const colors = ['#5470C6', '#91CC75', '#EE6666'];
        let option: EChartsOption = {
            color: colors,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            grid: {
                right: '20%'
            },
            toolbox: {
                feature: {
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            legend: {
                data: ['Evaporation', 'Precipitation', 'Temperature']
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                // prettier-ignore
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],
            yAxis: [{
                    type: 'value',
                    name: 'Evaporation',
                    position: 'right',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: 'Precipitation',
                    position: 'right',
                    alignTicks: true,
                    offset: 80,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} ml'
                    }
                },
                {
                    type: 'value',
                    name: '温度',
                    position: 'left',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[2]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [{
                    name: 'Evaporation',
                    type: 'bar',
                    data: [
                        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                    ]
                },
                {
                    name: 'Precipitation',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [
                        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                    ]
                },
                {
                    name: 'Temperature',
                    type: 'line',
                    yAxisIndex: 2,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        };
        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 可视化图2
    const echartsRef2 = ref < HTMLElement > ();
    const firstEchartsB = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef2.value as HTMLElement);
        let option: EChartsOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                    name: 'Direct',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Email',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Union Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Video Ads',
                    type: 'bar',
                    stack: 'Ad',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Search Engine',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    emphasis: {
                        focus: 'series'
                    },
                    markLine: {
                        lineStyle: {
                            type: 'dashed'
                        },
                        data: [
                            [{ type: 'min' }, { type: 'max' }]
                        ]
                    }
                },
                {
                    name: 'Baidu',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Google',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'Bing',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Others',
                    type: 'bar',
                    stack: 'Search Engine',
                    emphasis: {
                        focus: 'series'
                    },
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        };
        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 可视化图3
    const echartsRef3 = ref < HTMLElement > ();
    const firstEchartsC = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef3.value as HTMLElement);

        let option: EChartsOption = {
            angleAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            radiusAxis: {},
            polar: {},
            series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: 'A',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [2, 4, 6, 1, 3, 2, 1],
                    coordinateSystem: 'polar',
                    name: 'B',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                },
                {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: 'C',
                    stack: 'a',
                    emphasis: {
                        focus: 'series'
                    }
                }
            ],
            legend: {
                show: true,
                data: ['A', 'B', 'C']
            }
        };

        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 可视化图4
    const echartsRef4 = ref < HTMLElement > ();
    const firstEchartsD = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef4.value as HTMLElement);
        let option = {
            series: [{
                type: 'gauge',
                axisLine: {
                    lineStyle: {
                        width: 30,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                    }
                },
                pointer: {
                    itemStyle: {
                        color: 'auto'
                    }
                },
                axisTick: {
                    distance: -30,
                    length: 8,
                    lineStyle: {
                        color: '#fff',
                        width: 2
                    }
                },
                splitLine: {
                    distance: -30,
                    length: 30,
                    lineStyle: {
                        color: '#fff',
                        width: 4
                    }
                },
                axisLabel: {
                    color: 'auto',
                    distance: 40,
                    fontSize: 20
                },
                detail: {
                    valueAnimation: true,
                    formatter: '{value} km/h',
                    color: 'auto'
                },
                data: [{
                    value: 70
                }]
            }]
        };

        setInterval(function() {
            myChart.setOption < echarts.EChartsOption > ({
                series: [{
                    data: [{
                        value: +(Math.random() * 100).toFixed(2)
                    }]
                }]
            });
        }, 2000);

        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 可视化图5
    const echartsRef5 = ref < HTMLElement > ();
    const firstEchartsE = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef5.value as HTMLElement);

        let category = [];
        let dottedBase = +new Date();
        let lineData = [];
        let barData = [];

        for (let i = 0; i < 20; i++) {
            let date = new Date((dottedBase += 3600 * 24 * 1000));
            category.push(
                [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
            );
            let b = Math.random() * 200;
            let d = Math.random() * 200;
            barData.push(b);
            lineData.push(d + b);
        }

        // option
        let option = {
            backgroundColor: '#0f375f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['line', 'bar'],
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                    name: 'line',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 15,
                    data: lineData
                },
                {
                    name: 'bar',
                    type: 'bar',
                    barWidth: 10,
                    itemStyle: {
                        borderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#14c8d4' },
                            { offset: 1, color: '#43eec6' }
                        ])
                    },
                    data: barData
                },
                {
                    name: 'line',
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: 10,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(20,200,212,0.5)' },
                            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                            { offset: 1, color: 'rgba(20,200,212,0)' }
                        ])
                    },
                    z: -12,
                    data: lineData
                },
                {
                    name: 'dotted',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        color: '#0f375f'
                    },
                    symbolRepeat: true,
                    symbolSize: [12, 4],
                    symbolMargin: 1,
                    z: -10,
                    data: lineData
                }
            ]
        };


        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }

    // 可视化图6
    const echartsRef6 = ref < HTMLElement > ();
    const firstEchartsF = () => {
        const myChart: echarts.ECharts = echarts.init(echartsRef6.value as HTMLElement);
        let option = {
            title: {
                text: 'Proportion of Browsers',
                subtext: 'Fake Data',
                top: 10,
                left: 10
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                data: (function() {
                    var list = [];
                    for (var i = 1; i <= 28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            visualMap: {
                top: 'middle',
                right: 10,
                color: ['red', 'yellow'],
                calculable: true
            },
            radar: {
                indicator: [
                    { text: 'IE8-', max: 400 },
                    { text: 'IE9+', max: 400 },
                    { text: 'Safari', max: 400 },
                    { text: 'Firefox', max: 400 },
                    { text: 'Chrome', max: 400 }
                ]
            },
            series: (function() {
                var series = [];
                for (var i = 1; i <= 28; i++) {
                    series.push({
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: 'rgba(0,250,0,0.3)'
                            }
                        },
                        data: [{
                            value: [
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                (i * i) / 2
                            ],
                            name: i + 2000 + ''
                        }]
                    });
                }
                return series as echarts.RadarSeriesOption;
            })()
        };




        option && myChart.setOption(option);
        //图表自适应大小
        window.onresize = function() {
            myChart.resize();
        };
    }


    onMounted(() => {
        firstEchartsA()
        firstEchartsB()
        firstEchartsC()
        firstEchartsD()
        firstEchartsE()
        firstEchartsF()
    })
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>