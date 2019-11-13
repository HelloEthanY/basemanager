<template>
    <div class="homepage-right-bottom-wrapper">
        <el-container direction="vertical">
            <div class="title">伪基站</div>
            <div class="pseudo-number">
                <div class="pseudo-number-left">
                    <div style="float:left;width: 40%;height: 50px;background-color: #768EFA"></div>
                    <div style="float:left;width: 60%;height: 50px;background-color: #566FD6">
                        <div style="text-align: right;">
                            <span style="font-size: 26px;color: white;">5</span>
                            <span style="margin-right: 5px;font-size: 10px">个</span>
                        </div>
                        <div style="font-size: 12px;text-align: center">
                            残念 按揭
                        </div>
                    </div>
                </div>
                <div class="pseudo-number-right">
                    <div style="float:left;width: 40%;height: 50px;background-color: #0EE0FF;border-left: 2px;border-bottom: 2px">

                    </div>
                    <div style="float:left;width: 60%;height: 50px;background-color: #03BCD1">
                        <div style="text-align: right;">
                            <span style="font-size: 26px;color: white;">9</span>
                            <span style="margin-right: 5px;font-size: 10px">个</span>
                        </div>
                        <div style="font-size: 12px;text-align: center">
                            残念 按揭
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 140px;margin-left: 15px;
            margin-right: 15px;margin-top: 10px">
                <!-- <el-table
                         :height="140"
                         :data="tableData"
                         style="width: 100%">
                     <el-table-column
                             prop="date"
                             label=""
                             width="80">
                     </el-table-column>
                     <el-table-column
                             prop="name"
                             label="姓名"
                             width="80">
                     </el-table-column>
                     <el-table-column
                             prop="address"
                             label="地址">
                     </el-table-column>
                 </el-table>-->
                <table style="color: #fff;width: 100%;height: 100%;text-align: center;font-size: 13px
;" cellspacing="0">
                    <thead>
                    <tr>
                        <td></td>
                        <td>当年</td>
                        <td>当月</td>
                        <td>当日</td>
                    </tr>

                    </thead>
                    <tbody>
                    <tr>
                        <td>查看就啊狂</td>
                        <td>27</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>查看就啊狂</td>
                        <td>27</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>查看就啊狂</td>
                        <td>27</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>查看就啊狂</td>
                        <td>27</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "RightBottomContent",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        }
    }
</script>

<style lang="scss">
    .homepage-right-bottom-wrapper {
        height: 37%;
        width: 92%;
        //  background-color: rgba(20, 60, 98, 0.6);
        background-color: rgba(0, 0, 0, 0.4);
        margin: 2% 2%;
        padding: 0 2%;
        border-radius: 3px;
        border: 1px solid #006B9D;

        .title {
            color: white;
            font-size: 16px;
            margin-top: 10px;
            margin-left: 5px;
        }

        .pseudo-number {
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 20px;
            height: 50px;
            .pseudo-number-left {
                float: left;
                height: 50px;
                width: 49%;
                //background: -moz-linear-gradient(left, #748EFD 0%, #3391CE 50%, #14AAC3 100%);
                border-radius: 2px;

            }
            .pseudo-number-right {
                float: left;
                height: 50px;
                width: 49%;
                // background: -moz-linear-gradient(left, #748EFD 0%, #3391CE 50%, #14AAC3 100%);
                margin-left: 2%;
            }
        }

        table td {
            border-bottom: 1px solid #006B9D
        }
    }
</style>
