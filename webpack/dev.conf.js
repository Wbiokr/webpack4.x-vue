'use strict'

const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const chalk = require('chalk');
const portfinder = require('portfinder');
const notifier = require('node-notifier');
const ora = require('ora');


const resolve = require('./resolve')

const baseConfig = require('./base.conf')

delete baseConfig.version;

let port = 10000

const devConfig = merge(baseConfig,{
  mode:'development',
  devServer:{
    clientLogLevel:'warning',
    compress:true,
    contentBase:'dist',
    publicPath:'/',
    // host:require('ipv4'),
    host:'0.0.0.0',
    hot:true,
    open:false,
    port:port,
    quiet:true,
    overlay: { warnings: false, errors: true },

  },
  
  plugins:[
    new CopyWebpackPlugin([
      {
        from:resolve('static'),
        to:'static/',
      }
    ]),
    new webpack.HotModuleReplacementPlugin()

  ]
})

module.exports = new Promise((res,rej)=>{
  portfinder.basePort = port ;
  portfinder.getPort((err,newPort)=>{
    if(err){
      rej(err);
    }else{
      port = newPort ;
      devConfig.devServer.port = port ;
      
      devConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo:{
          messages:[
            chalk.cyanBright(` 构建完成，可以通过localhost:${port},获取IP进行访问！`)
          ]
        },
        onErrors:(severity, errors) => {
          if (severity !== 'error') return
      
          const error = errors[0]
          const filename = error.file && error.file.split('!').pop()
      
          notifier.notify({
            message: severity + ': ' + error.name,
            subtitle: filename || '',
          })
        }
      }))


      console.log(chalk.black.bgGreen(' 正在启动开发环境... '));
      console.log('\n')




      res(devConfig)

    }
  })
})
