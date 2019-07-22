import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
  routes: []
    .concat([{
          path: '/',
          component: {
            render(){
              return <h1>DEMO</h1>
            }
          }
        },
      ]  
    ),
  
})
