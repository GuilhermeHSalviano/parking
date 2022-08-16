import VehicleRecord from "@/components/entryRecord/VehicleRecord.vue"
import { shallowMount } from "@vue/test-utils"

test('It tests whether the input checkbox is emitting the event correctly', () => {
    const wrapper = shallowMount(VehicleRecord)
    const input = wrapper.find(`[data-input]`)
    input.trigger('click')
    console.log(wrapper.emitted('emitTypeOfVehicle'))
    expect(wrapper.emitted('emitTypeOfVehicle')).toEqual([[false, 'car']])
})