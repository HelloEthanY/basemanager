<template>
    <div class="login-wrapper">
        <div class="login-content">
            <el-form class="form-content" ref="form" label-width="80px" :model="form">
                <div class="demo-input-suffix">
                    <span style="color: #50C6E8;">用户名：</span>
                    <el-input id="input-name" class="layui-input" v-model="form.username"
                              placeholder="请输入用户名"></el-input>
                </div>
                <div class="demo-input-suffix" style="margin-top: 10px;margin-left: 15px">
                    <span style="color: #50C6E8;">密码：</span>
                    <el-input id="input-password" class="layui-input" v-model="form.password" show-password
                              placeholder="请输入密码"></el-input>
                </div>
                <div class="demo-input-suffix" style="margin-top: 10px">
                    <el-row :gutter="20">
                        <el-col :span="6" :offset="6">
                            <div class="grid-content bg-purple">
                                <el-input type="text" id="input-code" style="width: 135px;margin-left: 6px"
                                          placeholder="请输入验证码" v-model="inputCode" @keyup.enter.native="onLoginClick"
                                          class="layui-input"/>
                            </div>
                        </el-col>
                        <el-col :span="6" :offset="6">
                            <div class="grid-content bg-purple-light">
                                <canvas id="canvas" @click="onClickCanvas()"></canvas>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <el-row :gutter="20" style="margin-top: 10px">
                    <el-col :span="12">
                        <el-button type="primary" @click.native.prevent="onLoginClick()"
                                   v-loading.fullscreen.lock="fullscreenLoading" class="btn-login">登陆
                        </el-button>
                    </el-col>
                    <el-col :span="12">
                        <el-button type="reset" class="btn-register">
                            <router-link to="/registered">注册</router-link>
                        </el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<style lang="scss">
    /* 结束 */
    .login-wrapper {
        text-decoration: none;
        width: 100%;
        height: 100%;
        background: url("../../assets/ic_login_bg.png") no-repeat;
        background-size: 100% 100%;

        .login-content {
            width: 440px;
            border-radius: 10px;
            position: absolute;
            height: 260px;
            bottom: 20px;
            background-color: rgba(0, 0, 0, 0.4);
            display: table;
            vertical-align: middle;
            text-align: center;
            right: 20px;
            border: 1px solid #50C6E8;

            .form-content {
                position: relative;
                top: 35px;
                width: 400px;
                display: inline-block;
                margin: 0 auto;

                .bg-purple-light {
                    width: 94px;
                    height: 38px;
                    background-color: transparent;
                    border-radius: 5px;
                    margin-left: -60px;
                    border: 1px solid #50C6E8;
                }

                .btn-register, .btn-login {
                    width: 88px;
                    color: #50C6E8;
                    background-color: transparent;
                    border: 1px solid #50C6E8;
                }

                .btn-register a {
                    text-decoration: none;
                    color: #50C6E8;
                }

                .layui-input {
                    width: 240px;
                    background-color: transparent;

                    .el-input__inner {
                        color: #50C6E8;
                        border: 1px solid #072639;
                        background-color: transparent;
                    }
                    .el-input__inner:focus {
                        border: 1px solid #50C6E8;
                    }
                }

                #canvas {
                    float: right;
                    display: inline-block;
                    background-color: transparent;
                    cursor: pointer;
                    width: 100px;
                    height: 38px;
                }
            }
        }
    }
</style>

<script>
    // 验证码展示内容
    var show_num = [];

    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                },
                inputCode: '',
                fullscreenLoading: false
            }
        },
        mounted: function () {
            let _this = this;
            _this.loadLoginView();
        },
        methods: {
            onLoginClick() {
                let _this = this;
                _this.fullscreenLoading = true;
                // 获取输入的验证码
                let code = _this.inputCode;
                // 获取用户名
                let userName = _this.form.username;
                // 获取密码
                let userPassword = _this.form.password;
                // 获取绘制的验证码
                let num = show_num.join("");
                if (code === '') {
                    _this.fullscreenLoading = false;
                    _this.$message({
                        showClose: true,
                        message: '验证码为空！',
                        type: 'error'
                    });
                    _this.form.username = '';
                    _this.form.password = '';
                    // 显示弹出框
                } else if (code === num) {
                    if (userName === '') {
                        // 用户名为空
                        _this.fullscreenLoading = false;
                        _this.$message({
                            showClose: true,
                            message: '用户名为空！',
                            type: 'error'
                        });
                        _this.inputCode = '';
                        _this.draw(show_num);
                        return;
                    } else if (userPassword === '') {
                        // 密码为空
                        _this.fullscreenLoading = false;
                        _this.$message({
                            showClose: true,
                            message: '密码为空！',
                            type: 'error'
                        });
                        _this.inputCode = '';
                        _this.draw(show_num);
                        return;
                    } else {
                        // 用户名和密码都不为空 进行网络请求
                        _this.$axios({
                            data: _this.form,
                            url: 'http://47.105.71.81:3306/user/login',
                            //url: 'https://www.wanandroid.com/user/login',
                            method: 'post',
                            timeout: 3000,
                            header: {
                                "Access-Control-Allow-Origin": "*"
                            }
                        }).then(response => {
                            if (response.data.code === 1) {
                                _this.fullscreenLoading = false;
                                _this.$store.commit('LOGIN_IN', response.data.data.token);
                                _this.$router.replace({
                                    path: '/'
                                });
                            }
                        }).catch(error => {
                            _this.inputCode = '';
                            _this.fullscreenLoading = false;
                            _this.$message({
                                showClose: true,
                                message: error,
                                type: 'error',
                            });
                        });
                    }
                } else {
                    // 验证码错误
                    _this.fullscreenLoading = false;
                    _this.$message({
                        showClose: true,
                        message: '验证码错误！',
                        type: 'error',
                    });
                    _this.form.username = '';
                    _this.form.password = '';
                    _this.inputCode = '';
                    _this.draw(show_num);
                }
            },
            onClickCanvas() {
                // 绘制验证码
                this.draw(show_num);
            },
            loadLoginView() {
                let _this = this;
                // 绘制验证码
                _this.draw(show_num);
                // 登陆按钮的点击事件
            },
            // 绘制验证码
            draw(show_num) {
                let _this = this;
                let canvas_width = 90;
                let canvas_height = 38;
                let canvas = document.getElementById("canvas"); //获取到canvas的对象，演员
                let context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
                canvas.width = canvas_width;
                canvas.height = canvas_height;
                let sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
                let aCode = sCode.split(",");
                let aLength = aCode.length; //获取到数组的长度

                for (let i = 0; i <= 3; i++) {
                    let j = Math.floor(Math.random() * aLength); //获取到随机的索引值
                    let deg = Math.random() * 30 * Math.PI / 180; //产生0~30之间的随机弧度
                    let txt = aCode[j]; //得到随机的一个内容
                    show_num[i] = txt.toLowerCase();
                    let x = 10 + i * 20; //文字在canvas上的x坐标
                    let y = 20 + Math.random() * 8; //文字在canvas上的y坐标
                    context.font = "bold 23px 微软雅黑";
                    context.translate(x, y);
                    context.rotate(deg);
                    context.fillStyle = _this.randomColor();
                    context.fillText(txt, 0, 0);
                    context.rotate(-deg);
                    context.translate(-x, -y);
                }
                for (let i = 0; i <= 5; i++) { //验证码上显示线条
                    context.strokeStyle = _this.randomColor();
                    context.beginPath();
                    context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                    context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                    context.stroke();
                }
                for (let i = 0; i <= 30; i++) { //验证码上显示小点
                    context.strokeStyle = _this.randomColor();
                    context.beginPath();
                    let x = Math.random() * canvas_width;
                    let y = Math.random() * canvas_height;
                    context.moveTo(x, y);
                    context.lineTo(x + 1, y + 1);
                    context.stroke();
                }
            },
            // 得到验证码颜色
            randomColor() { //得到随机的颜色值
                let r = Math.floor(Math.random() * 256);
                let g = Math.floor(Math.random() * 256);
                let b = Math.floor(Math.random() * 256);
                return "rgb(" + r + "," + g + "," + b + ")";
            }
        }
    }
</script>

