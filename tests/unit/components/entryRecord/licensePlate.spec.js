import LisencePlate from "@/components/entryRecord/LicensePlate.vue"
import { mount } from "@vue/test-utils"

test('It tests whether the emit is working', async ()=>{
    const wrapper = mount(LisencePlate)
    const input = wrapper.find('.number')
    input.element.value = '12345'
    await input.trigger('input')
    console.log(wrapper.emitted('emitLicensePlateNumber'))
    expect(wrapper.emitted('emitLicensePlateNumber')).toEqual([['12345', 'licensePlate']])
})