import Vue from 'vue'
import App from './App.vue'
import router from '../../router'
import store from '../../store'
import '@/assets/css/common.css'
const wx = require('weixin-js-sdk');
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.path) {
    if (window._hmt) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
  }
  next();
});
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

fetch("http://wx/signature", {
  method: 'get',
}).then(response => response.text()).then((json) => {
  json = JSON.parse(json);
  let signData = json.data;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: signData.appid, // 必填，公众号的唯一标识
    timestamp: +signData.timestamp, // 必填，生成签名的时间戳
    nonceStr: signData.noncestr, // 必填，生成签名的随机串
    signature: signData.signature,// 必填，签名
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ] // 必填，需要使用的JS接口列表
  });
  wx.error(function (res) {

    console.warn(res)
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  });
  wx.ready(() => {
    wx.onMenuShareTimeline({
      title: '脸趴世界杯-赌球反向买，别墅靠大海！', // 分享标题
      link: 'http://static.ifaceparty.com/public/web/world-cup/#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://statica.ifaceparty.com/image/world-cup-web-logo.png', // 分享图标
      success: function () {
        // 用户点击了分享后执行的回调函数

      },
    });
    wx.onMenuShareAppMessage({
      title: '脸趴世界杯', // 分享标题
      desc: '竞彩神器，赌球反向买，别墅靠大海！', // 分享描述
      link: 'http://static.ifaceparty.com/public/web/world-cup/#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'http://statica.ifaceparty.com/image/world-cup-web-logo.png', // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户点击了分享后执行的回调函数
      }
    });
  })



})