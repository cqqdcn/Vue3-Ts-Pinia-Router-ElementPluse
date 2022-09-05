<template>
    <!-- addUser -->
    <el-dialog v-model="props.statusShow" title="添加用户" width="30%">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
            <el-form-item label="用户姓名：" prop="username">
                <el-input v-model="ruleForm.username" placeholder="请输入用户姓名" maxlength="5"/>
            </el-form-item>
            <el-form-item label="性别：" prop="sex">
                <el-input v-model="ruleForm.sex" placeholder="请输入性别" />
            </el-form-item>
            <el-form-item label="身份证号：" prop="idCard">
                <el-input v-model="ruleForm.idCard" placeholder="请输入身份证号" />
            </el-form-item>
            <el-form-item label="邮箱：" prop="email">
                <el-input v-model="ruleForm.email" placeholder="请输入电子邮箱" />
            </el-form-item>
            <el-form-item label="居住地址：" prop="address" maxlength="40">
                <el-input v-model="ruleForm.address" placeholder="请输入居住地址" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="quxiao(ruleFormRef)">取消</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)">确定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
    import { ref, defineProps, defineEmits, reactive } from "vue"
    import type { FormInstance } from 'element-plus'
    import { userHooksTableApi } from '@/service/api/hooktable/hooktable'

    const ruleFormRef = ref < FormInstance > ()
    const props = defineProps({
        statusShow: {
            type: Boolean,
            default: true
        },
        whd: {

        }
    })
    const emits = defineEmits(['update:statusShow', 'updataReq'])
    // 取消
    const quxiao = (formEl: any) => {
        formEl.resetFields()
        emits('update:statusShow', !props.statusShow)
        emits('updataReq') //操作父组件的方法
    }
    // 表单验证
    const ruleForm = reactive({
        username: '',
        sex: '',
        idCard: '',
        email: '',
        address: '',
    })
    const rules = reactive({
        username: [
            { required: true, message: "请输入用户姓名", trigger: 'blur' }
        ],
        sex: [{ required: true, message: "请输入性别", trigger: 'blur' }],
        idCard: [
            { required: true, message: "请输入身份证号", trigger: 'blur' },
            {
                pattern: /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i,
                message: "请输入正确的证件号",
                trigger: "blur",
            }
        ],
        email: [
            { required: true, message: "请输入电子邮箱", trigger: 'blur' },
            {
                pattern: /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/,
                message: "请输入正确的邮箱",
                trigger: "blur",
            }
        ],
        address: [{ required: true, message: "请输入居住地址", trigger: 'blur' }],
    })
    // 表单提交并请求
    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate(async (valid) => {
            if (valid) {
                const res: any = await userHooksTableApi.addhookstable(ruleForm)
                if (res.status === 0) {
                    quxiao(formEl)
                    formEl.resetFields()
                    ElMessage({
                        message: '添加用户成功！',
                        grouping: true,
                        type: 'success',
                    })
                }
            } else {
                console.log('error submit!')
                return false
            }
        })
    }
</script>

<style scoped lang="scss">
    @import '../index.scss';
</style>