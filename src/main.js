import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import 'firebase/firestore'
Vue.config.productionTip = false

const firebase =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
db.settings({
  timestampsInSnapshots: true
});

Vue.$db = db
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    let vm = this
    firebase.auth().onAuthStateChanged(function(user) {
     vm.$store.dispatch('STAGE_CHANGED', user)
    });
    
  }
}).$mount('#app')
