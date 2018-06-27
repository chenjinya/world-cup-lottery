// sync
export default {
  setMatchInfo(state, data) {
    state.date = data.date;
    state.time = data.time;
    state.team = data.team;
    state.score = data.score;
  },
  setMatchMethod(state, data) {
    state.method = data.method
  },
  setMatchResult(state, data) {
    state.result = data.result
  },
  setMatchRatio(state, data) {
    state.ratio = data.ratio
  }
}