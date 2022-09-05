<template>
    <div class="container">
        <div class="container_1">
            <h3 class="h3">Slider 滑块</h3>
            <div class="slider-demo-block">
                <span class="demonstration">Default value</span>
                <el-slider v-model="value1" />
            </div>
            <div class="slider-demo-block">
                <span class="demonstration">Customized initial value</span>
                <el-slider v-model="value2" />
            </div>
            <div class="slider-demo-block">
                <span class="demonstration">Hide Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false" />
            </div>
            <div class="slider-demo-block">
                <span class="demonstration">Format Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip" />
            </div>
            <div class="slider-demo-block">
                <span class="demonstration">Disabled</span>
                <el-slider v-model="value5" disabled />
            </div>
        </div>
        <div class="container_2">
            <h3 class="h3">Transfer 穿梭框</h3>
            <el-transfer v-model="value" :data="data" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from "vue"
    const value1 = ref(80)
    const value2 = ref(30)
    const value3 = ref(10)
    const value4 = ref(40)
    const value5 = ref(60)

    const formatTooltip = (val: number) => {
        return val / 100
    }

    interface Option {
        key: number
        label: string
        disabled: boolean
    }

    const generateData = () => {
        const data: Option[] = []
        for (let i = 1; i <= 15; i++) {
            data.push({
                key: i,
                label: `Option ${i}`,
                disabled: i % 4 === 0,
            })
        }
        return data
    }

    const data = ref < Option[] > (generateData())
    const value = ref([])
</script>

<style scoped lang="scss">
    @import './index.scss';
</style>