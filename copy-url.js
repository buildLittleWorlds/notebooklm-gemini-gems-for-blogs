// Copy URL to clipboard functionality
function copyUrl(button) {
  const urlBox = button.closest('.url-box');
  const urlText = urlBox.querySelector('.url-text').textContent;

  navigator.clipboard.writeText(urlText).then(function() {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(function() {
      button.textContent = originalText;
    }, 2000);
  }).catch(function() {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = urlText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(function() {
      button.textContent = originalText;
    }, 2000);
  });
}
