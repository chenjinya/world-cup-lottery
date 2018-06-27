<template>
  <div class='page'>
     <div class="tip" >
       <p >{{date}} {{time}}</p>
       <p >{{team.join(" VS ")}}</p>
       <p >{{result}}</p>
   </div>
    <img id="canvas-img-section" class="canvas-img-section" src="../assets/img/tc.jpg" />
     <div class="tip">
     <p>长按上图保存到相册</p>
      <a class="btn" href="#/match-list" >🔄再猜一次</a>
   </div>
   <canvas id="canvas" width='400' height='533' class="canvas-section" ></canvas>
   <div class="page-bottom">
      <a   class="anchor" href="http://t.cn/RrVgH1y" >
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
  </div>
</template>

<script>

export default {
  name: 'MatchRatio',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',

    };
  },
  computed: {
    score: function () {
      return this.$store.state.score;
    },
    date: function () {
      return this.$store.state.date;
    },
    time: function () {
      return this.$store.state.time;
    },
    team: function () {
      return this.$store.state.team;
    },
    result: function () {
      return this.$store.state.result;
    },
    method: function () {
      return this.$store.state.method;
    },
    ratio: function () {
      return this.$store.state.ratio;
    },
  },
  mounted: function () {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    const windowWidth = 360;
    c.width = windowWidth * 2;
    c.height = windowWidth / 1000 * 1300 * 2;
    var img = document.getElementById("canvas-img-section");

    if (window._hmt) {
      window._hmt.push(['_trackEvent', '世界杯H5', '生成图片', this.team, this.result]);
    }
    let loaded = false;

    if (!this.$store.state.team.toString()) {
      return this.$router.push('/');
    }
    // console.log(this.team, this.result, this.ratio, this.date, this.time)
    img.onload = () => {
      if (loaded === true) {
        return;
      }
      // console.log('onload', ctx)
      ctx.drawImage(img, 0, 0, c.width, c.height);
      // ctx.font = "italic 35px 黑体";
      // ctx = c.getContext("2d");
      ctx.rotate(1 * Math.PI / 180);
      ctx.font = "24px Song";
      ctx.textBaseline = "top";
      ctx.fillStyle = "#333";
      ctx.strokeStyle = '#333';
      let earnPrice = 2 + (Math.random() * 13).toFixed(2);
      // console.log(this.team);

      let d = new Date();
      let month = d.getMonth() + 1;
      let date = d.getDate();
      let hour = d.getHours();
      let min = d.getMinutes();
      if (this.score.length === 2) {
        let _date = this.date.split('月')
        month = _date[0];
        date = _date[1].split('日')[0] - 1;
        hour = this.time.split(':')[0] - 1;
      }
      let datetime = d.getFullYear() + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + d.getSeconds()
      ctx.fillText(this.method, 400, 240, 400);
      ctx.fillText(this.ratio + '倍', 400, 320, 400);
      ctx.fillText('合计' + (this.ratio * 2).toFixed(0) + '元', 530, 318, 400);
      ctx.fillText(this.date, 115, 349, 400);
      ctx.fillText(['主队:' + this.team[0], '客队:' + this.team[1]].join(" VS "), 115, 375, 400);
      ctx.fillText(`(${this.result})@` + earnPrice, 115, 405, 400);

      // 奖金
      ctx.fillText((this.ratio * earnPrice * 2).toFixed(2) + '元', 379, 472, 400);

      ctx.fillText((this.ratio * 0.36 * 2).toFixed(2) + '元', 470, 520, 400);

      ctx.fillText(datetime, 375, 690, 400);

      img.src = c.toDataURL("image/jpg");
      loaded = true;
    }
  },
  methods: {
    clickMatchMethod(method) {
      this.$store.commit('setMatchMethod', {
        method
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.canvas-img-section {
  width: 300px;
  height: 390px;
  background: #333;
}
.tip {
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  background: rgba(3, 3, 3, 0.4);
  padding: 10px;
}
.canvas-section {
  width: 300px;
  height: 390px;
  display: none;
}
</style>
