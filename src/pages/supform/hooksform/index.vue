<template>
    <div class="hooksforom">
        <div class="hooksforom_1">
            <el-button type="primary" :icon="CirclePlus" color="#009688" @click="addUser('AddUser','')">新增用户</el-button>
            <!-- <el-button type="primary" :icon="Upload" plain color="#009688">批量添加用户</el-button> -->
            <el-button type="primary" :icon="Download" plain color="#009688" @click="deriveExcel">导出用户数据</el-button>
            <el-button type="danger" :icon="DeleteFilled" plain @click="removeDataMore">批量删除用户</el-button>
        </div>
        <div class="hooksforom_2">
            <el-table :data="table.tableData" style="width: 100%" height="590" border id="exportForm" @selection-change="handleSelectionChange">
                <el-table-column prop="user_id" type="selection" width="55" />
                <el-table-column prop="username" label="用户姓名" width="120" />
                <el-table-column prop="sex" label="性别" width="120" />
                <el-table-column prop="idCard" label="身份证" width="250" />
                <el-table-column prop="email" label="邮箱" width="250" />
                <el-table-column prop="address" label="居住地址" width="240" />
                <el-table-column prop="createTime" label="创建时间" width="120" />
                <el-table-column prop="status" label="用户状态" width="150" v-slot="scope">
                    <el-switch :value="scope.row.status === 0?true:false" class="mt-2" inline-prompt :active-icon="Check" :inactive-icon="Close" @change="changeSwitch($event)" />
                </el-table-column>
                <el-table-column label="操作" width="305" v-slot="scope">
                    <el-button type="primary" link :icon="EditPen" @click="addUser('EditorUser',scope.row)">编辑</el-button>
                    <el-button type="primary" link :icon="Refresh">重置密码</el-button>
                    <el-button type="primary" link :icon="Delete" @click="removeData(scope.row.user_id)">删除</el-button>
                </el-table-column>
            </el-table>
            <el-pagination v-model:currentPage="pageNum" v-model:page-size="pageSize" :page-sizes="[5, 10, 15, 20]" background layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
    </div>
    <!-- 添加用户 -->
    <AddUser v-model:statusShow="statusShow" @updataReq="repeatReq" v-if="showHide=='AddUser'?true:false"></AddUser>
    <!-- 编辑用户 -->
    <EditorUser v-model:statusShow="statusShow" @updataReq="repeatReq" v-if="showHide=='EditorUser'?true:false" v-model:obj="obj"></EditorUser>
</template>

<script setup lang="ts">
    import { ref, onMounted, reactive } from 'vue'
    import {
        Refresh,
        Delete,
        Search,
        EditPen,
        View,
        CirclePlus,
        Upload,
        Download,
        DeleteFilled,
        Check,
        Close
    } from "@element-plus/icons-vue";
    import { userHooksTableApi } from '@/service/api/hooktable/hooktable'
    import AddUser from "./component/addUser.vue"
    import EditorUser from "./component/editorUser.vue"
    // 导出表单
    import * as XLSX from 'xlsx'
import { refDebounced } from '@vueuse/core';
    interface User {
        user_id: number
        username: string
        sex: string
        idCard: string
        email: string
        address: string
        createTime: string
        status: number
    }
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
    // 新增用户
    const statusShow = ref(false)
    const showHide = ref()
    const obj = ref({})
    const addUser = (component: string, value: any) => {
        showHide.value = component
        statusShow.value = !statusShow.value
        obj.value = value
    }
    // 子组件调用方法
    const repeatReq = () => {
        gethookTableList()
    }
    // 根据ID删除某条数据
    const removeData = (value: number) => {
        ElMessageBox.confirm(
                '确定要删除当前这条数据?',
                '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
            .then(async () => {
                const res = await userHooksTableApi.removehookstable({ user_id: value })
                if (res.status !== 0) return ElMessage.error('操作失败！')
                gethookTableList()
                ElMessage({
                    type: 'success',
                    message: '删除用户数据成功！',
                })
            })
            .catch(() => {
                return false
            })
    }
    // 多选
    const multipleSelection = ref()
    const handleSelectionChange = (val: User[]) => {
        const arr = val.map(item => {
            return item.user_id
        })
        multipleSelection.value = arr.join(',')
    }
    // 批量删除
    const removeDataMore = () => {
        if((multipleSelection.value??'') === '') return ElMessage.error('请先选择删除项！')
        ElMessageBox.confirm(
                '确定要删除数据?',
                '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
            .then(async () => {
                const res = await userHooksTableApi.removehookstableMore({ user_id: multipleSelection.value })
                console.log(res)
                if (res.status !== 0) return ElMessage.error('操作失败！')
                gethookTableList()
                ElMessage({
                    type: 'success',
                    message: '删除用户数据成功！',
                })
                multipleSelection.value = ''
            })
            .catch(() => {
                return false
            })
    }
    // 导出表单
    const deriveExcel = () => {
        let workbook = XLSX.utils.table_to_book(document.getElementById('exportForm')); //需要在table上定义一个id
        try {
            XLSX.writeFile(workbook, '用户信息列表.xlsx');
            ElMessage({
                type: 'success',
                message: '导出成功!'
            });
        } catch (e) {
            ElMessage.error('导出失败,失败信息!')
        }
    }
    onMounted(() => {
        gethookTableList()
    })
</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>