import { Vehicle } from "../../Vehicles.js"

test('It tests whether getStay is working correctly', () => {
    const vehicle = new Vehicle('car', 'hmh1918', '1992-01-01', '10:00', false)
    vehicle.exitDate = '1992-01-01'
    vehicle.exitHour = '13:25'
    console.log(vehicle)
    const stay = vehicle.getStay()
    expect(stay).toBe(205)
})

describe('It tests whether getPriceStay is working correctly', () => {
    const vehicle = new Vehicle('car', 'hmh1918', '1992-01-01', '10:00', false)
    const tableOfPrices = {
        untilFifteenMinutes: 1,
        untilThirtyMinutes: 2,
        untilOneHour: 3,
        additionalThirtyMinutes: 1
    }
    
    test('It tests whether getPriceStay is working correctly when the stay is over one hour', () => {
        const cost = vehicle.getStayPrice(91, tableOfPrices)
        expect(cost).toEqual(5)
    })
})