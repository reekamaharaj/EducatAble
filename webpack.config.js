import { resolve as _resolve, join } from 'path';

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: _resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: join(__dirname, './public'),
    publicPath: '/dist/',
    compress: true,
    port: 5000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
      '/auth': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(t|j)s(x)?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

export default config;
