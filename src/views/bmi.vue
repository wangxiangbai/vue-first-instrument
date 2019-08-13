<template>


    <div class="bmi">
        <el-divider><i class="el-icon-hot-water">BMI值计算</i></el-divider>
        身高：<input type="text" id="Bheight" name="height" v-model="S"><br/>
        体重：<input type="text" id="Bweight" name="weight" v-model="Z"><br/>
        <button v-on:click="handleSubmit">计算</button>
        <br/>
        <input type="text" id="Bres" name="num" v-model="J">
    </div>
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
                this.J = this.S;
                console.log(this.S)
            }
        }
    }
</script>