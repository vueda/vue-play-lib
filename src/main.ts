import { VueConstructor } from 'vue/types/umd';
export { VpPageBuilder } from './builder/VpPageBuilder';

const requireComponent = require.context('./components', false, /^.*\.vue$/);

const VuePlayLib = (vue: VueConstructor) => {
  requireComponent.keys().forEach(fileName => {
    const component = requireComponent(fileName).default;
    vue.component(component.name, component);
  });
};

export default VuePlayLib;