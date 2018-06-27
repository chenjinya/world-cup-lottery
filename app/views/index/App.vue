<template lang="pug">
  
  <div id="app">
  <div id="app-background" v-bind:style="style" >
  </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      style: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0
      }
    }
  },
  created: function () {
    console.log('created');
    this.style.height = window.innerHeight + 'px';
  }
};
</script>

<style lang="postcss">
#app-background {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: #333 url(../../assets/img/bg.jpg) no-repeat;
  background-size: cover;
  padding-top: 1px;
  z-index: -1;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  position: relative;
  z-index: 1;
}
</style>
