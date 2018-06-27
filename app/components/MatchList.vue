<template>
  <div class='home-page'>
    <h2 class='page-title' >选择比赛场次</h2>
    <p class='section-title'>已结束</p>
    <ul class='match-list'>
      <li v-for="(item, index) in match_last" :class="item.class" :key="index"  :data-id="index"  v-on:click="handelSelectMatch(item)" class='match-item'>
        <div class='match-item-date' >
           <p>{{item['date']}}</p>
        </div>
        <div class='match-item-time' >
          <p>{{item['time']}}</p>
        </div>
        <!-- <div class='match-item-race' >{{item['team']}}</div> -->
        <div class='match-item-team' >
          <p>{{item['team'] .join(" VS ")}}</p>
         
        </div>
        <div class='match-item-score' >
          <p>{{item['score'] .join(" : ")}}</p>
        </div>
      </li>
    </ul>

    <p  class='section-title'>未开始</p>
    <ul class='match-list'>
      <li v-for="(item, index) in match_all" :class="item.class" :key="index"  :data-id="index"  v-on:click="handelSelectMatch(item)" class='match-item'>
        <div class='match-item-date' >
           <p>{{item['date']}}</p>
        </div>
        <div class='match-item-time' >
          <p>{{item['time']}}</p>
        </div>
        <!-- <div class='match-item-race' >{{item['team']}}</div> -->
        <div class='match-item-team' >
          <p>{{item['team'] .join(" VS ")}}</p>
         
        </div>
        <div class='match-item-score' >
          <p>{{item['score'] .join(" : ")}}</p>
        </div>
      </li>
    </ul>

    <p class='section-title'>很久以前</p>
    <ul class='match-list'>
      <li v-for="(item, index) in match_pass" :class="item.class" :key="index"  :data-id="index"  v-on:click="handelSelectMatch(item)" class='match-item'>
        <div class='match-item-date' >
           <p>{{item['date']}}</p>
        </div>
        <div class='match-item-time' >
          <p>{{item['time']}}</p>
        </div>
        <!-- <div class='match-item-race' >{{item['team']}}</div> -->
        <div class='match-item-team' >
          <p>{{item['team'] .join(" VS ")}}</p>
         
        </div>
        <div class='match-item-score' >
          <p>{{item['score'] .join(" : ")}}</p>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import matchs from '@components/matchs'

export default {
  name: 'Main',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      match_all: matchs.all,
      match_last: matchs.last,
      match_pass: matchs.pass
    };
  },
  methods: {
    handelSelectMatch: function (data) {
      // console.log(data);

      // data.class = "match-item-active"
      this.$store.commit("setMatchInfo", {
        ...data
      })
      console.log(data.score.length, data)
      if (data.score.length !== 2) {
        this.$router.push("match-method")
      } else {
        this.$store.commit("setMatchMethod", {
          method: '总比分'
        })
        this.$store.commit("setMatchResult", {
          result: data.score.join(":")
        })
        this.$router.push('match-ratio')
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.match-item {
  &-date {
    flex: 2;
  }
  &-time {
    flex: 1;
  }
  &-race {
    flex: 2;
  }
  &-team {
    flex: 4;
  }
  &-score {
    flex: 1;
  }
  &-body {
    flex: 1;
    text-align: center;
  }
}
</style>
