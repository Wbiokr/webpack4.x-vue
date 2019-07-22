// import Vue from 'vue';
// import Vuex from 'vuex';
// import App from './App.vue';
// // import router from '@/router/index';
// import '@/utils/config';

// import Store from '@/store/index';
// import '@/stylus/APP.styl';


// import '@/mixin/filter';
// import '@/mixin/directive';
// import '@/mixin/functions';
// import '@/mixin/mixins';

// import loading from '@/plugins/loading/index.js';
// import view from '@/plugins/view/index.js';

// //  查看图片，this.$view(src)调用，其中src为图片路径
// Vue.use(view); 

// //  loading开关，this.$loading.open(text)打开loading，text为内容，默认'loading';this.$loading.close(),关闭loading
// Vue.use(loading);


// router.beforeEach((to, from, next)=>{
//   next();
// });

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App />',
//   store: new Vuex.Store(Store)
// });
import Vue from 'vue';
import Vuex from 'vuex';
import App from '@/App.vue';
import router from '@/router/index';
import './utils/config';

import Store from './store/index.js'
import './stylus/APP.styl'

import './mixin/filter'
import './mixin/directive'
import './mixin/functions'
import './mixin/mixins'
import './mixin/validator'

new Vue({
  el: '#app',
  router,
  template:'<App />',
  components:{App},
  // render:(h):void=>h(App),
  store: new Vuex.Store(Store)
})