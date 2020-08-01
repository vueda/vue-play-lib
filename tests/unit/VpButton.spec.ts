import { shallowMount } from '@vue/test-utils'
import VpButton from '@/components/VpButton.vue'

describe('VpButton.vue', () => {

    test('increase counter on click and dispatch event', async () => {
        const wrapper = shallowMount(VpButton);
        const button = wrapper.find('button')
        const text = wrapper.find('p')

        expect(text.text()).toContain("0")
        await button.trigger('click')
        expect(text.text()).toContain("1")
        expect(wrapper.emitted().click?.length).toBe(1)
    });
});