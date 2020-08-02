import { VueConstructor } from 'vue/types/umd';
import loadComponents from './components-loader';
import Vuetify from 'vuetify/lib';
import Vue from 'vue';

Vue.use(Vuetify);

const VuePlayLib = (vue: VueConstructor) => {
  loadComponents(vue);
};

export default VuePlayLib;
export { VpPageBuilder } from './builder/VpPageBuilder';
