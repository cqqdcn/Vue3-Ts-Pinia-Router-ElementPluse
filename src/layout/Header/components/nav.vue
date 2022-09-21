<template>
    <div>
        <!-- <el-tabs type="card" editable class="demo-tabs">
            <el-tab-pane v-for="item in editableTabs" :key="item.title" :label="item.title">
            </el-tab-pane>
        </el-tabs> -->
    </div>

</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    console.log(route.matched);
    
    const editableTabs = ref([{
            title: 'Tab 1',
        },
        {
            title: 'Tab 2',
        },
    ])
</script>

<style scoped lang="scss">
</style>