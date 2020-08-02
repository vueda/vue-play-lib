import { mount } from '@vue/test-utils';
import VpButton from '@/components/VpButton.vue';

describe('VpButton.vue', () => {
  test('increase counter on click and dispatch event', async () => {
    const wrapper = mount(VpButton);
    const button = wrapper.find('.v-btn');
    const text = wrapper.find('p');

    expect(text.text()).toContain('0');
    await button.trigger('click');
    expect(text.text()).toContain('3');
    expect(wrapper.emitted().click?.length).toBe(1);
  });
});
