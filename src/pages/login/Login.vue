<template>
    <div className="loginMain">
        <div className="loginMain_1">
            <div className="loginLeft">
                <img src="@/assets/images/login_left-1b40bd1b.png" alt="pic" />
            </div>
            <div className="loginRIght">
                <div className="loginRIght_top">
                    <img src="@/assets/logo.png" alt="" />
                    <p>Hooks-Admin</p>
                </div>
                <LoginFrom />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import LoginFrom from '@/pages/login/components/LoginFrom.vue'

</script>

<style lang="scss" scoped>
    .loginMain {
        width: 100%;
        height: 100%;
        background: #f5f5f5 url(@/assets/images/login_bg-05f3b32a.svg);
        overflow: hidden;
        background-size: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .loginMain_1 {
            width: 94%;
            height: 94%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
        }

        .loginLeft {
            width: 40%;

            img {
                width: 100%;
            }
        }

        .loginRIght {
            padding: 30px 30px 0 30px;
            border-radius: 15px;
            box-shadow: 2px 3px 7px #0003;
            width: 500px;
            background: #fff;
            .loginRIght_top {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 40px;

                p {
                    font-size: 48px;
                    font-weight: bold;
                    color: #475768;
                    margin-bottom: 0;
                    margin-left: 4%;
                }

                img {
                    width: 60px;
                }
            }

            .site-form-item-icon {
                color: #666;
            }

            button {
                width: 40%;
            }
        }
    }

    .ant-input-affix-wrapper {
        padding: 10px 11px;
    }

    .loginButton {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 20px;
    }
</style>