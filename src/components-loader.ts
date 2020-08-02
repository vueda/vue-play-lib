import { VueConstructor } from 'vue/types/umd';

const requireComponent = require.context('./components', false, /^.*\.vue$/);

export default (vue: VueConstructor) => {
  requireComponent.keys().forEach(fileName => {
    const component = requireComponent(fileName).default;
    vue.component(component.name, component);
  });
};
