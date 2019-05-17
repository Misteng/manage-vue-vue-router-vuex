import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI);

// router.beforeEach((to,from, next) => {
// 	console.log("to",to)
// 	console.log("from",from)
// 	next();
// })
// router.afterEach((to, from) => {
// 	console.log("to",to)
// 	console.log("from",from)
// })

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
