<template>
  <div class="page">
      <div class="bg">
        <div v-for="item in lattice" class="lattice" :class="{ 'security' : item.isTrue , 'danger': item.isFalse }" :key="item.id" @click="toclick(item)"></div>
      </div>
      <div class="surplus">剩余{{surPlus}}个安全格子</div>
  </div>
</template>





<script>
export default{
  data () {
    return {
      lattice: null, // 100个格子
      surPlus: 90 // 安全区。。因为是10个雷。所以就是100-10 = 90
    }
  },
  methods: {
    toclick (e) {
      console.log(e.isTrue)
      if (e.isLei === true) {
        e.isFalse = true
          alert('高能预警！！！')
      } else {
        e.isTrue = true
        this.surPlus = this.surPlus - 1
      }
    },
    random () {
      let arr = []
      for (var i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 100))
      }
      let arrs = []
      for (var j = 0; j < 100; j++) {
        let obj = {}
        if (arr.indexOf(j) > -1) {
          obj.isLei = true // 是否是地雷

        } else {
          obj.isLei = false // 是否是地雷
        }
        obj.id = j
        obj.isTrue = false // 安全区样式
        obj.isFalse = false // 雷区样式
        arrs.push(obj)
      }
      this.lattice = arrs
      console.log(arrs)
    }
  },
  mounted () {
    this.random()
  },
  // created(){}
}
</script>

<style scoped>
.page{
    overflow: hidden;
}
.bg{
    border:1px solid #000;
    width:600px;
    height:600px;
    margin:20px auto;
}
.lattice{
    border: 1px solid #ccc;
    box-sizing: border-box;
    float:left;
    width:60px;
    height:60px;
}
.surplus{
    line-height: 38px;
    height:38px;
    width:150px;
    margin:0 auto;
}
.security{
    background-color: black;
}
.danger{
    background-color: red;
}
</style>