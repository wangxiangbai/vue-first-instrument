<template>
    <div class="base">
        <textarea name="" id="big" v-model="inputValue" cols="30" rows="10"></textarea>

        <button v-on:click="handleSubmit">加密</button>
        <button v-on:click="deleteSubmit">解密</button>

        <textarea name="" id="small" v-model="deleteValue" cols="30" rows="10"></textarea>


    </div>
</template>


<script>
    export default {

        data: function () {
            return {
                inputValue: '',
                deleteValue: '',
                content: this.content,

            }
        },
        methods: {
            handleSubmit: function () {
                //加密
                var _this = this;
                this.axios.get('/api/BMI/vue_jiami/', {params: {'user_input': _this.inputValue}}).then(
                    (resp) => {
                        _this.deleteValue = resp.data['msg'];
                        _this.inputValue = '';

                    },
                )
            }, deleteSubmit: function () {
                var _this = this;
                console.log(this.deleteValue);
                this.axios.get('/api/BMI/vue_jiema/', {params: {'user_input2': _this.deleteValue}}).then(
                    (resp) => {
                        _this.inputValue = resp.data['msg'];
                        _this.deleteValue = '';
                    },
                )
            }
        }
    }
</script>
<style>
    .base {
        width: 100%;
        height: 800px;
        background-image: url("../assets/天气.jpg");
    }
</style>
