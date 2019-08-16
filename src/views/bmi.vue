<template>


    <div class="bmi">

        <div id="bb">
        <el-divider><i class="el-icon-hot-water">BMI值计算</i></el-divider>
        身高：<input id="Bheight" name="height" type="text" v-model="S"><br/>
        体重：<input id="Bweight" name="weight" type="text" v-model="Z"><br/>
        <button v-on:click="handleSubmit">计算</button><br/>

        BMI值：<input id="Bres" name="num" type="text" v-model="J">
    </div></div>
</template>


<script>
    export default {
        name: 'BMI',
        data: function () {
            return {
                S: '',
                Z: '',
                J: '',
            }
        },
        methods:{
            handleSubmit:function () {
                var this_part = this;
                this.axios.get('/api/BMI/vue_BMI/',{params: {'user_input3': this_part.S,'user_input4': this_part.Z}}).then(
                    (resp) => {
                        console.log(resp.data['msg']);
                        this_part.J = resp.data['msg']

                 }, )



            }
        }
    }
</script>

<style>
    .bmi{
        width: 100%;
        height: 800px;

        padding: auto;
        border: solid 2px red;
        background-image: url("../assets/bb.jpg");

    }
    #bb{
        position: relative;
        left: 800px;
        top:150px;
        width: 400px;
        height: 200px;
        background-color: yellow;
    }

</style>