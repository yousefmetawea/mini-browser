function render() {
  const html = document.getElementById('html-input').value;
  const css  = document.getElementById('css-input').value;
  const frame = document.getElementById('preview');

  const doc = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${css}</style>
</head>
<body>${html}</body>
</html>`;

  frame.srcdoc = doc;
}

// Auto-render on page load
window.onload = render;
