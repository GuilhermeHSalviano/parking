import DailyRate from "@/components/entryRecord/DailyRate.vue"
import { shallowMount } from "@vue/test-utils"

test('It tests whether the stay is daily rate or not', () => {
    const wrapper = shallowMount(DailyRate)
    const input = wrapper.find('[data-input]')
    input.setChecked()
    input.trigger('click')
    console.log(wrapper.emitted('emitDailyRateInput'))
    expect(wrapper.emitted('emitDailyRateInput')).toEqual([[true, 'dailyRate']])
})