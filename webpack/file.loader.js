const resolve = require('./resolve')

const isPro = process.env.NODE_ENV === 'production';


module.exports = (type,version) => {
  return {
    test:type==="img"?/\.(png|jpe?g|gif|svg)(\?.*)?$/:type==="media"?/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader:'url-loader',
    exclude:/node_modules/,
    include:resolve('src'),
    options:{
      limit:1000,
      publicPath:isPro ? '/dist/' :'/' ,
      name:`${type}/[folder]/[name].${version}.[ext]`
    }
  }
}