<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm">
        <el-form-item prop="username">
            <el-input v-model.number="ruleForm.username" size="large" placeholder="用户名：admin">
                <template #prefix>
                    <el-icon class="el-input__icon">
                        <user />
                    </el-icon>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="ruleForm.password" type="password" size="large" autocomplete="off" :prefix-icon="Lock" placeholder="密码：123456" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)" :icon="Avatar" size="large">登录</el-button>
            <el-button @click="resetForm(ruleFormRef)" size="large" :icon="CircleClose">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from "vue"
    import { Avatar, Lock, CircleClose } from '@element-plus/icons-vue'
    import { useRouter } from "vue-router"
    import { useMainStore } from "@/store/main"
    import type { FormInstance } from 'element-plus'
    import { loginApi } from '@/service/api/login/login'
    import md5 from "js-md5"

    const ruleFormRef = ref < FormInstance > ()
    const router = useRouter()
    const useMain = useMainStore()

    const ruleForm = reactive({
        username: '',
        password: '',
    })

    const rules = reactive({
        username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
        password: [{ required: true, message: "请输入密码", trigger: 'blur' }],
    })

    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate(async (valid) => {
            if (!valid) return
            const fromText = {
                username: ruleForm.username,
                password: md5(ruleForm.password)
            }
            const res = await loginApi.login(fromText)
            if (res.status === 0) {
                localStorage.setItem("token", res.token)
                useMain.updateName(res.username)
                ElMessage.success("登录成功！")
                router.push({
                    path: '/home/index',
                    query: {
                        username: res.username
                    }
                })
            } else {
                ElMessage.error("账号或者密码输入错误！")
            }
        })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
    }

    onMounted(() => {
        // 监听enter事件（调用登录）
        document.onkeydown = (e: any) => {
            e = window.event || e;
            if (e.code === "Enter" || e.code === "enter" || e.code === "NumpadEnter") {
                submitForm(ruleFormRef.value);
            }
        };
    })
</script>

<style scoped lang="scss">
    :deep(.el-input--large .el-input__wrapper) {
        padding: 3px 15px;
    }

    .el-form-item {
        margin-bottom: 40px;
    }

    .el-form-item__content {
        display: flex;
        flex-direction: row;
        justify-content: space-between !important;

        button {
            width: 48%;
        }

    }
</style>