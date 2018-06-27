var track = {
  hasTrack: true,
  hash: '99822553b09453a1ffa87781441afd60'
};


function WebpackBaiduTongjiPlugin(options) {
  this.options = options;
}

WebpackBaiduTongjiPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', function (compilation, options) {
    compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {

      if (track.hasTrack) {
        var script = `
                      <script>
                          var _hmt = _hmt || [];
                          (function() {
                            var hm = document.createElement("script");
                            hm.src = "https://hm.baidu.com/hm.js?` + track.hash + `";
                            var s = document.getElementsByTagName("script")[0]; 
                            s.parentNode.insertBefore(hm, s);
                          })();
                      </script>
                  `;
        htmlPluginData.html = htmlPluginData.html.replace('</body>', script + '</body>');
      }



      callback(null, htmlPluginData);
    });
  });
};

module.exports = WebpackBaiduTongjiPlugin;