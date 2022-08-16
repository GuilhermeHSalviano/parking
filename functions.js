export function getVehicle(list, licensePlate){
    /**This function gets a vehicle object and its index based in the array of vehicles.*/
    for(let a = 0; list.length > a; a++){
        if(list[a].licensePlate == licensePlate){
            return [list[a], a]
        }
    }
    return false
}

export function getDate (date, time){
    /*This function creates a date object based in an especifc date and time. It's used in getStay method of the Vehicle class.*/
    const dateSplit = date.split('-')
    const timeSplit = time.split(':')

    const day = dateSplit[2]
    const month = dateSplit[1]
    const year = dateSplit[0]
    const hour = timeSplit[0]
    const minutes = timeSplit[1]
    
    const dateObject = new Date(year, month -1, day, hour, minutes)

    return dateObject
}

 /*This function gets the stay in minutes of a given Vehicle object.*/
export function getStay (entryDate, entryHour, exitDate, exitHour){
    const entry = getDate(entryDate, entryHour)
    const exit = getDate(exitDate, exitHour)
    const diff = Math.abs(entry.getTime() - exit.getTime())
    
    const minutes = Math.ceil(diff / (1000 * 60))
    return minutes
}

/*It sets the price that the costumer should pay after a given stay.*/
export function getStayPrice(stay, tableOfPrices ){
    if(stay <= 15){
        return tableOfPrices.untilFifteenMinutes 
    } else if(stay > 15 && stay <= 30){
        return tableOfPrices.untilThirtyMinutes
    } else if(stay > 30 && stay <= 60){
        return tableOfPrices.untilOneHour
    } else if(stay > 60){
        let overThirtyMinutes = stay - 60
        let integers = parseInt(overThirtyMinutes / 30)
        let total = (integers * tableOfPrices.additionalThirtyMinutes) + ((overThirtyMinutes % 30) > 0 ? tableOfPrices.additionalThirtyMinutes : 0)
        return parseFloat(total) + parseFloat(tableOfPrices.untilOneHour)
    }
    
}

/*It gets the amount of days between two dates.*/
export function getDailyRate(entryDate, exitDate){
    const entry = getDate(entryDate, '00:00')
    const exit = getDate(exitDate, '00:00')
    const diff = Math.abs(entry.getTime() - exit.getTime())
    
    const days = diff / (1000 * 60 * 60 * 24)
    return days
}

/* It returns true if the "date" is between "to" and "from" or false if it isn't.*/
export function isDateBetween(to, from, date){
    const beginning = Date.parse(to)
    const end = Date.parse(from)
    const givenDate = Date.parse(date)
    if(beginning <= givenDate && end >= givenDate){
        return true
    } else {return false}
}
