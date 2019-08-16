<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary" >主要按钮</el-button>
  </div>
</template>

<style scoped lang="less" >

  @nice-blue: pink;
  .about{
    color:@nice-blue;
  }
</style>


使用命令
npm install -D less less-loader
cnpm install vuex save