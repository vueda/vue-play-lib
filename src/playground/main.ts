import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import Playground from './Playground.vue';
import PlaygroundArea from './PlaygroundArea.vue';
import loadComponents from '../components-loader';

Vue.component('playground-area', PlaygroundArea);

Vue.use(Vuetify);
const vuetify = new Vuetify();

loadComponents(Vue);

new Vue({
  components: { Playground },
  vuetify,
  render: h => h(Playground)
}).$mount('#app');
