<template>
  <div id="demo" class="demo">
    <h1>示例</h1>
    <p> 修改的地方有main.js、router.js、 App.vue、 views/Demo.vue 。<br>
      过程：用UI库引入了一个别人写好的按钮，触发事件，请求接口，获取数据，渲染数据到子组件。
    </p>
    <el-button v-on:click="handleClick" type="primary">点击向后端发起请求</el-button>
    <h5>接口返回结果：{{ respText }}</h5>
  </div>
</template>

<script>
  export default {
    name: "Demo",
    data: function(){
      return {
        respText: ''
      }
    },
    methods: {
      handleClick: function(){
        console.log(11111);
        // http://127.0.0.1:5000/index
        // /api/index
        let _this = this
        this.axios.get('/api/index', {
          params: {
            kw: 'ip'
          }
        }).then(function(resp){
          console.log(resp);
          console.log(resp.data, typeof resp);
          console.log(resp.data.msg);
          console.log(this); // undefined
          // axios中this指向问题  https://www.cnblogs.com/lalalagq/p/9961762.html  新声明一个变量或用es6函数写法
          console.log(_this)
          _this.respText = resp.data;
        })
          // .then((resp)=> {console.log(this)})
      }
    }
  }
</script>

<style type="css" scoped>
.demo {
  background-color: lightblue;
}
</style>