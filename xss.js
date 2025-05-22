alert('XSS 成功！');
// 檢查是否已經跳出過，避免重複
if (!window._already_alerted) {
  window._already_alerted = true;
  alert('✅ 這是從我自己的 GitHub JS 載入的 XSS alert！');
}
