const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const fs = require('fs');

// const { exec } = require('child_process');
// class HtmlGenerationPlugin {
//     apply(compiler) {
//       compiler.hooks.afterEmit.tapAsync('HtmlGenerationPlugin', (compilation, callback) => {
//         exec('node dist/server.js', (err, stdout, stderr) => {
//           if (err) { console.error(`Error executing server.js: ${stderr}`); callback(err);
//         }
//           else { fs.writeFileSync(path.resolve(__dirname, 'dist', 'index.html'), stdout);
//             console.log('index.html has been generated.'); callback();
//           }
//         }
//       );
//     });
//   }
// }

module.exports = {
  entry: {
    client: './src/index.tsx',
    server: './server/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: './'
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
  plugins: [ new HtmlWebpackPlugin({
    template:"./index.html",
    filename:'inedx.html',
    chunks:['client']
  })
],
  target: 'node',
  mode: 'development'
};
