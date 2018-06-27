<template>
  <div class="page" >
    <h2 class="page-title" style="margin-top: 100px">足彩生成器</h2>
    <img class="world-cup-logo" src="../assets/img/worldcup2018.png" />
    <div class="btn-section">

      <a class="btn"  href="#/match-list" >点击开始</a>

    </div>
   
    <div class="page-bottom">
     <a class="anchor" href="http://t.cn/RrVgH1y" >
       <img class="ifaceparty-logo" src="../assets/img/qrcode.png"  />
       </a>
     <a class="anchor" href="http://t.cn/RrVgH1y" > 
     <p class="dotted-wrap" >
       您有 {{ parseInt((Math.random() * 50).toFixed(0)) + 50 }} 好友在玩脸趴 <br>
       扫码上脸趴一起围观世界杯哦<br>
       【脸趴】面对面聊天预测世界杯神器
       </p>
     </a>
   </div>
    <p class="tip" style="font-size: 14px; font-weight: normal;" >脸趴实验室出品 仅供娱乐</p>
  </div>
</template>


<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.world-cup-logo {
  width: 200px;
  height: 200px;
  margin: 10px auto;
}
.btn-section {
  margin: 50px auto;
}
.btn-section .btn {
  box-shadow: 0px 1px 4px #fff;
}
</style>
