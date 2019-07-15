const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = require('./resolve');

const isPro = process.env.NODE_ENV === 'production';


module.exports = (type,loader) => {
  let use = [
    // 'cache-loader',
    isPro ? {
      loader:MiniCssExtractPlugin.loader,
      options:{
        publicPath:resolve('dist/css')
      }
    } : 'vue-style-loader',
    {
      loader:'css-loader',
    },
    {
      loader:"postcss-loader",
      options:{
        plugins: [
          require('autoprefixer')  
        ],
      },
    }
  ];

  type !== 'css' && use.push(loader || `${type}-loader`) ;

  const config = {
    test: type === 'css' ? /\.css$/ : type === 'less' ? /\.less$/ : type === 'scss' ? /\.(scss|sass)$/ : /\.styl(us)?$/ ,
    // exclude: file=>(
    //   /node_modules/.test(file) && !/\.*ant\.*/.test()
    // ),
    include:[resolve('src'),/node_modules/],
    use,
    
  };

  return config ;
}