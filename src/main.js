import Vue from 'vue'
import App from './App.vue'
import './assets/css/bootstrap.css'
import vueRouter from 'vue-router';
import home from './components/main.vue';
import projects from './components/projects.vue';
import VueGtag from "vue-gtag";

Vue.use(vueRouter);

Vue.config.productionTip = false

// Vue gtag for google analytics
Vue.use(VueGtag, {
  config: { id: "UA-59149788-1" }
});

const routes = [{ path: '/', component: home }, { path: '/projects', name: 'Projects', component: projects }];

const router = new vueRouter({ routes, mode: 'history' });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
