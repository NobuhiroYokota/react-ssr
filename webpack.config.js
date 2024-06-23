const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    client: './src/index.tsx',  // client.jsのエントリーポイント
    server: './server/index.js' // server.jsのエントリーポイント
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // 出力先ディレクトリ
    filename: '[name].js', // 出力されるファイル名
    libraryTarget: 'commonjs2', // CommonJS形式で出力
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // テンプレートとして使用するHTMLファイル
      filename: 'index.html',   // 出力されるHTMLファイルの名前
      chunks: ['client']        // バンドルされたクライアントサイドのスクリプトを含める
    })
  ],
  target: 'node', // サーバーサイド向けのバンドル
  mode: 'development'
};
