const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../src/App').default; // クライアントサイドのAppコンポーネントをインポート

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
  // サーバーサイドでReactアプリをレンダリングしてHTMLを生成する
  const html = ReactDOMServer.renderToString(
    React.createElement(App)
  );

  // HTMLを返す
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/client.js"></script>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
