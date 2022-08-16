import { getDate, getVehicle, getStayPrice, getDailyRatePrice, getDailyRate, 
isDateBetween} from "../../../functions.js"

describe('It tests if getVehicle function is working correctly', () => {
    test('It tests if getVehicle function is returning the right vehicle', () => {
        const listOfVehicle = [
            {
                "car": true,
                "licensePlate": "hmh1720",
                "entryDate": "1992-01-01",
                "entryHour": "01:00",
                "dailyRate": false
            },
            {
                "car": true,
                "licensePlate": "hmg3549",
                "entryDate": "1992-01-01",
                "entryHour": "01:00",
                "dailyRate": false
            },
            {
              "car": true,
              "licensePlate": "hmg8795",
              "entryDate": "1992-01-01",
              "entryHour": "01:00",
              "dailyRate": false
            }
          ]
        const result = getVehicle(listOfVehicle, 'hmg8795')
        expect(result).toEqual([listOfVehicle[2], 2])
    })
    
    test('It tests if getVehicle function is returning false', () => {
        const listOfVehicle = [
            {
              "car": true,
              "licensePlate": "hmg8793",
              "entryDate": "1992-01-01",
              "entryHour": "01:00",
              "dailyRate": false
            }
          ]
        const result = getVehicle(listOfVehicle, 'hmg8795')
        expect(result).toBe(false)
    })

    
})

test('It tests if getStayPrice is returning the right value', () => {
      const stay = 70
      const tableOfPrices = {
        "untilFifteenMinutes": 2,
        "untilThirtyMinutes": 4,
        "untilOneHour": 6,
        "additionalThirtyMinutes": 3
    }

    const price = getStayPrice(stay, tableOfPrices)
    expect(price).toEqual(9)
})

test('It tests if getDailyRate function is returning the right number', () => {
  const days = getDailyRate("2022-04-01", '2022-04-05')
  expect(days).toEqual(4)
})

test('It checks whether isDateBetween() is returning the right boolean', () => {
  const date = isDateBetween('1992-01-01', '2022-04-08', '2023-01-01')
  expect(date).toEqual(false)
})


