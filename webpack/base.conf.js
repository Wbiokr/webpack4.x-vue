const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HappyPack = require('happypack');
const resolve = require('./resolve');
const newStyleLoader = require('./style.loader')
const newFileLoader = require('./file.loader')

const version = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getMilliseconds()}`;

const isPro = process.env.NODE_ENV === 'production';

module.exports = {
  version,
  context:path.resolve(__dirname,'..'),
  bail:true,
  performance:{
    maxAssetSize:2000000,
  },
  entry:{
    App:resolve(`src/main.js`)
  },
  output:{
    path:resolve('dist'),
    publicPath:isPro ? '/dist/' : '/',
    filename:`js/[name].${version}.js`,
  },
  resolve:{
    extensions:['.js','.vue','json'],
    // alias:{
    //   '@':resolve('src'),
    //   '$':resolve('src/components'),
    //   '*':resolve('src/utils'),
    // },
    alias:{
      '@@':resolve('src'),
      '@':resolve('src/components'),
      '*':resolve('src'),
    },
    modules:[
      resolve('src'),
      resolve('node_modules'),
    ],
  },
  externals:{
    'vue': 'Vue',
    'Vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex':'Vuex',
  },
  cache:true,
  module:{
    noParse:content => {
      return /jquery|loadash|echarts/.test(content)
    },
    rules:[
      {
        test:/\.vue/,
        include:resolve('src'),
        // use:'happypack/loader?id=vue',
        use:['cache-loader',{
          loader:'vue-loader',
        }]
      },
      newStyleLoader('styl',"stylus-loader"),
      newStyleLoader('less'),
      newStyleLoader('scss','sass-loader'),
      newStyleLoader('css'),
      {
        test:/\.(js|jsx)?$/,
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        include:resolve('src'),
        // use:'happypack/loader?id=js'
        loader:'babel-loader',
      },
      {
        test: /\.(pug|jade)$/,
        include: resolve('src'),
        exclude:/node_modules/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader']
            // use: 'happypack/loader?id=plain'
          },
          {
            use: ['raw-loader', 'pug-plain-loader']
            // use: 'happypack/loader?id=pug'
          }
        ]
      },
      newFileLoader('img',version),
      newFileLoader('media',version),
      newFileLoader('fonts',version),
    ]
    
  },
  plugins:[
    // new HappyPack({
    //   id:'vue',
    //   threads:4,
    //   loaders:['cache-loader',{
    //     loader:'vue-loader',
    //   }]
    // }),
    // new HappyPack({
    //   id:'js',
    //   threads:4,
    //   loaders:['babel-loader?cacheDirectory=true'],
    // }),
    // new HappyPack({
    //   id:'pug',
    //   threads: 4,
    //   loaders: ['raw-loader', 'pug-plain-loader']
    // }),
    // new HappyPack({
    //   id:'plain',
    //   threads:4,
    //   use: ['pug-plain-loader']
    // }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: isPro ? resolve('index.html') : 'index.html',
      template: path.resolve('static/index.html'),
      inject: false,
      style:`${isPro?"/dist":""}/css/app.${version}.css`,
      config:'/static/config.js?version='+version,
      moment:'/static/lib/moment.js',
      vue:'/static/lib/vue.min.js',
      vuex:'/static/lib/vuex.min.js',
      router:'/static/lib/vue-router.min.js',
      config:'/static/config.js',
      script:`${isPro?"/dist":""}/js/App.${version}.js`,
      ico:'/static/favicon.ico',
      minify: {
        removeComments: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ],
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
