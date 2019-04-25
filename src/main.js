import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs2-27f10.firebaseio.com/'; //May need /data.json if not added in created method on App.vue
Vue.http.interceptors.push((request, next) => {
    
    console.log(request);
    
    if(request.method == 'POST') {
        
        request.method = 'PUT';
        
    }
    
    next(response =>{
        
        response.json = () => { return {messages: response.body} }
        
    });
    
});

new Vue({
  el: '#app',
  render: h => h(App)
})