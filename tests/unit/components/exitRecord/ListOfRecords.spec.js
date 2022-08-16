import { mount } from '@vue/test-utils'
import ListOfRecords from "../../../../src/components/exitRecord/ListOfRecords.vue"

test('It tests whether select tag is working correctly', async () => {
    const wrapper = mount(ListOfRecords)
    await wrapper.setProps({vehicles: [{licensePlate: 'HMG8795'}]})
    const options = wrapper.find('.records__select').findAll('option')
    await options.at(1).setSelected()
    expect(wrapper.find('option:checked').text()).toEqual('HMG8795')
    
})

test('It tests whether emit is working correctly', async () => {
    const wrapper = mount(ListOfRecords)
    await wrapper.setData({selectedPlate: 'HMG8795'})
    expect(wrapper.emitted('emitSelectedPlate')).toEqual([['HMG8795']])
})


