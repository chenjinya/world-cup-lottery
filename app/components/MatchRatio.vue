<template>
  <div class='home-page'>
    <h2 class='page-title' >选择倍率</h2>
    <ul class='match-list'>
      <li v-for="(item, index) in match_method" @click="clickMatchRatio(item)" v-bind:key="index" class='match-item'>
        <div class='match-item-body' >
           <p>{{item}} 倍</p>
        </div>
       
      </li>

      <!-- <li  @click="clickMatchMethod(manuleRatio)" class='match-item'>
        <div class='match-item-body' >
           <label>自定义</label><input class='match-ratio-input' placeholder="自定义" :value="manuleRatio" />
        </div>
      
      </li> -->

    </ul>
  </div>
</template>

<script>
import matchs from '@components/matchs'
export default {
  name: 'MatchRatio',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      manuleRatio: 99,
      match_method: [
        '5',
        '10',
        '50',
        '99',
      ]
    };
  },
  mounted: function () {
    if (!this.$store.state.team.toString()) {
      return this.$router.push('/');
    }
  },
  methods: {
    clickMatchRatio(ratio) {
      this.$store.commit('setMatchRatio', {
        ratio
      })
      this.$router.push('match-result')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.match-ratio-input {
  background: transparent;
  text-align: center;
  color: #fff;
  border-bottom: 1px solid #eee;
}
</style>
