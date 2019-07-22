const merge = require('webpack-merge');
const webpack = require('webpack');
const del = require('del');
const ora = require('ora');
const resolve = require('./resolve')
// const path = require('path');
const chalk = require('chalk');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');

const baseConfig = require('./base.conf');
const packer = ora(chalk.yellow("正在删除老版本...\n"));
packer.color = 'yellow';
packer.start();

if(!!!process.env.name){
  throw new Error('请输入主题名称')
}

console.log(process.env.theme)


del(['theme/**'])
  .then(res=>{
    packer.color = 'cyanBright';
    packer.text = chalk.cyanBright('新版本打包中...\n')
  })


delete baseConfig.version;

const config = merge(baseConfig,{
  mode:'production',
  stats:{
    warnings:false,
    assets:false,
    chunks:false,
    errors:false,
  },
  entry:{
    App:resolve(`src/theme.ts`)
  },
  output:{
    path:resolve('theme'),
    publicPath:'/theme/' ,
    filename:`js/[name].js`,
  },
  optimization: {
    splitChunks: {
        minSize:10000,
        minChunks:2,
        name:false,
        cacheGroups: {
            commons: {
                name: 'commons',    
                chunks: 'initial',  
                minChunks: 4,       
                minSize: 0          
            },
            vendor:{
              name:false,
              chunks:'initial',
              minSize:0,
              minChunks:2,
              priority:10,
              enforce:true,
            }
      }
  }
  },
  plugins:[
    new OptimizeCssPlugin(),
    new MiniCssExtractPlugin({
    　  　filename: `../static/theme/antd.${process.env.name}.min.css`,
　　 }),
  ]
})


webpack(config,(err,stats)=>{
  
  packer.stop();
  
  if(err) throw err;
  process.stdout.write('\n');

  
  process.stdout.write(chalk.cyanBright(stats.toString({
    colors:true,
    modules:false,
    chunks:false,
    children:false,
    chunks:false,
    chunkModules:false,
    performance:false,
    warnings:false,
  }) + '\n\n'));
  
  if(stats.hasErrors()){
    packer.color='yellow'
    packer.warn(chalk.red(' 打包抛出异常：\n '));
    process.exit();
  }

  packer.color = 'cyan';
  packer.succeed(chalk.cyan(' 老铁，打包成功！ \n'));

})






