const env=(()=>{
  return 'pro'
  if(location.hostname.includes('credit100.com')){
    return 'pro';
  }else{
    return 'dev';
  }

})()

window.config = {
  env,

  hostBR:env == 'pro' ? 'http://br.qaz.credit100.com' : 'http://xinhuaxinyongbr.iol8.com/index.html',
  hostGJH:env == 'pro' ? 'http://gjh.qaz.credit100.com' : 'http://gjh.qaz.credit100.com',
  hostPC:env == 'pro' ? 'http://e.qaz.credit100.com' : 'http://e.qaz.credit100.com',
  hostM:env == 'pro' ? 'http://em.qaz.credit100.com' : 'http://xinhuaxinyongm.iol8.com',  
  
  api:env == 'pro' ? 'http://zuul.qaz.credit100.com/api-other' : 'http://xinhuaxinyong.iol8.com/api-other',//默認接口
  apiUc:env == 'pro' ? 'http://zuul.qaz.credit100.com/api-uc' : 'http://xinhuaxinyong.iol8.com/api-uc', //Uc接口
  apiSearch:env == 'pro' ? 'http://zuul.qaz.credit100.com/api-search' : 'http://xinhuaxinyong.iol8.com/api-search',//查詢接口
  apiFile:env == 'pro' ? 'http://zuul.qaz.credit100.com/api-fileService' : 'http://xinhuaxinyong.iol8.com/api-fileService',//文件相关接口

}

window.config.download = window.config.apiFile + '/file/localDownload?fileId='

