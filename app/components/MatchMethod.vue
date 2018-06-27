<template>
  <div class='home-page'>
    <h2 class='page-title' >选择竞彩方式</h2>
    <ul class='match-list'  v-if="method === ''" >
      <li v-for="(item, index) in match_method" @click="clickMatchMethod(item)" v-bind:key="index" class='match-item'>
        <div class='match-item-body' >
           <p>{{item}}</p>
        </div>
       
      </li>

    </ul>


    <div class="match-stack" v-if="method === '进球数'" >
      <p class="match-team-title" >{{team.join(" + ")}}</p>
      <input class="match-input score-input"  type="number" v-model="goal" />
    </div>
    <div class="match-stack" v-if="method === '胜平负'" >
      <p class="match-team-title">{{team.join(" VS ")}}</p>
      <label class="match-radio-label" for="match-radio-win" >胜</label>
      <input id="match-radio-win" class="match-radio"  v-model="win" value="胜"  type="radio" />

      <label class="match-radio-label"  for="match-radio-draw"  style="color: green" >平</label>
      <input id="match-radio-draw" class="match-radio" v-model="win" value="平"  type="radio" />

      <label class="match-radio-label"  for="match-radio-loss"  style="color: red" >负</label>
      <input id="match-radio-loss" class="match-radio" v-model="win" value="负"  type="radio" />
    </div>
    <div class="match-stack" v-if="method === '总比分'" >
      <p class="match-team-title" >{{team.join(" :  ")}}</p>
      <input type='number' class="match-input score-input" v-model="score[0]" /> : <input type='number' class="match-input score-input" v-model="score[1]" />
    </div>

    <div class="match-confirm" v-if="method !== ''" >
      <button class="match-btn" @click.prevent="clickConfirm" >确定</button>
    </div>
  </div>
</template>

<script>
import matchs from '@components/matchs'
export default {
  name: 'MatchMethod',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      goal: '',
      score: ['', ''],
      method: '',
      result: '',
      win: '',
      match_method: [
        '进球数',
        '胜平负',
        '总比分'
      ]
    };
  },
  watch: {
    win: function (newValue, oldValue) {
      console.log(arguments)
      this.clickConfirm()
    }
  },
  mounted: function () {
    if (!this.$store.state.team.toString()) {
      return this.$router.push('/');
    }
  },
  computed: {
    team: function () {
      console.log(this.$store.state.team)
      return this.$store.state.team;
    }
  },
  methods: {
    clickWin() {
      console.log(this.win)
    },
    clickMatchMethod(method) {
      this.method = method;
      this.$store.commit('setMatchMethod', {
        method
      })
      // this.$router.push("match-ratio")
    },
    clickConfirm() {
      console.log(this.win, this.goal, this.method, this.score)
      if (this.method === '进球数') {
        if (isNaN(parseInt(this.goal))) {
          return alert("请填写进球数");
        }
        this.result = this.goal
      } else if (this.method === '胜平负') {
        this.result = this.win
      } else if (this.method === '总比分') {
        if (isNaN(parseInt(this.score[0])) || isNaN(parseInt(this.score[1]))) {
          return alert('请填写比分');
        }
        this.result = this.score.join(":")
      } else {
        return alert("类型错误")
      }
      this.$store.commit('setMatchResult', {
        result: this.result
      })

      this.$router.push('match-ratio')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.match-team-title {
  margin: 20px auto;
}
.match-btn {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  width: 100px;
  color: #333;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
  box-shadow: 0px 2px 2px #000;
}
.match-stack {
  margin: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 20px;
}
.match-radio-label {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
}
.match-input {
  background: transparent;
  text-align: center;
  color: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 0;
}
.score-input {
  width: 80px;
  font-size: 30px;
}
</style>
