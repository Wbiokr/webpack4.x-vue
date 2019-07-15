import App from './App';
import router from './router.config';
import 'babel-polyfill';
import './utils/config'

// import Store from './store/'
import './stylus/APP.styl'

import './mixin/filter'
import './mixin/directive'
import './mixin/functions'
import './mixin/mixins'
import './mixin/validator'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />',
  // store: new Vuex.Store(Store)
})