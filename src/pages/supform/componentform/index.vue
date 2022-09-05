<template>
    <div class="hooksforom">
        <div class="hooksforom_3">
            <el-input v-model="searchText" placeholder="请输入搜索的内容" clearable size="large" />
            <el-button type="primary" :icon="Search" size="large" @click="search">搜索</el-button>
        </div>
        <div class="hooksforom_2">
            <el-table :data="table.tableData" style="width: 100%" height="590" border id="exportForm">
                <el-table-column prop="user_id" type="selection" width="55" />
                <el-table-column prop="username" label="用户姓名" width="120" />
                <el-table-column prop="sex" label="性别" width="120" />
                <el-table-column prop="idCard" label="身份证" width="350" />
                <el-table-column prop="email" label="邮箱" width="320" />
                <el-table-column prop="address" label="居住地址" width="390" />
                <el-table-column prop="createTime" label="创建时间" width="120" />
                <el-table-column prop="status" label="用户状态" width="150" v-slot="scope">
                    <el-switch :value="scope.row.status === 0?true:false" class="mt-2" inline-prompt :active-icon="Check" :inactive-icon="Close" @change="changeSwitch($event)" />
                </el-table-column>
            </el-table>
            <el-pagination v-model:currentPage="pageNum" v-model:page-size="pageSize" :page-sizes="[5, 10, 15, 20]" background layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, reactive, watch } from 'vue'
    import {
        Check,
        Close,
        Search
    } from "@element-plus/icons-vue";
    import { userHooksTableApi } from '@/service/api/hooktable/hooktable'

    const searchText = ref()
    const pageNum = ref(1)
    const pageSize = ref(11)
    const total = ref()
    const handleSizeChange = (val: number) => {
        pageSize.value = val
        console.log(val)
    }
    const handleCurrentChange = (val: number) => {
        pageNum.value = val
        gethookTableList()
    }
    // 切换用户状态
    // const userStatus = ref()
    const changeSwitch = (value: any) => {
        // userStatus.value = value
        console.log(value);
    }
    // 获取hookstable的列表
    const table = reactive({
        tableData: []
    })
    const gethookTableList = async () => {
        const hookTable = {
            pageNum: pageNum.value,
            pageSize: pageSize.value
        }
        const res: any = await userHooksTableApi.hookstable(hookTable)
        // res.data.filter((item:any) => {
        //     delete item.user_id
        // })
        table.tableData = res.data
        total.value = Number(Object.values(res.total[0]).join())
    }

    // 模糊搜索
    const search = async () => {
        if ((searchText.value ?? '') === '') return ElMessage.error('请先输入内容！')
        const res: any = await userHooksTableApi.searchookstable({ searchText: searchText.value })
        if (res.data.length === 0 ) return ElMessage.error('没有查询到相关内容')
        table.tableData = res.data
    }

    watch(
        () => searchText.value,
        (newVal) => {
            if((newVal??'') === ''){
                gethookTableList()
            }
        }, {
            deep: true
        }
    )

    onMounted(() => {
        gethookTableList()
    })
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>