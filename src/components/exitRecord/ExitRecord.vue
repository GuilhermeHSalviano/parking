<template>
    <div class="exit">
        <my-header></my-header>
        <list-of-records :vehicles='listOfVehicles' @emitSelectedPlate='setSelectedPlate'></list-of-records>
        <h3 v-if="selectedPlate != ''">Veículo selecionado:</h3>
        <h3>{{ selectedPlate }}</h3>
        <set-exit :selectedVehicle='selectedPlate' @emitExitData="setExitData"></set-exit>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import ListOfRecords from './ListOfRecords.vue'
import SetExit from "./SetExit.vue"
import { getVehicle, getStay, getStayPrice, getDailyRatePrice, getDailyRate } from "../../../functions.js"

export default {
    components:{
        MyHeader,
        ListOfRecords,
        SetExit
    },
    data(){
        return{
            listOfVehicles: '',
            selectedPlate: ''
        }
    },
    created(){
        if(localStorage.getItem('saveRecord')){
           const list = JSON.parse(localStorage.getItem('saveRecord'))
           const filteredList = list.filter((element) => {
               return !element.exitDate
           })
           this.listOfVehicles = filteredList
       }
    },
    methods:{
        setSelectedPlate(value){
            this.selectedPlate = value
        },
        /*It sets the exit of the vehicle and defines the cost of the stay.*/
        setExitData(date, time){
            const totalVehicles = JSON.parse(localStorage.getItem('saveRecord'))
            const tableOfPrices = JSON.parse(localStorage.getItem('prices'))
            const vehicle = getVehicle(totalVehicles, this.selectedPlate)  
            vehicle[0].exitDate = date
            vehicle[0].exitHour = time
            const stay = getStay(vehicle[0].entryDate, vehicle[0].entryHour, date, time)
            
            if(vehicle[0].car == true){
                /*When the vehicle is a car.*/
                if(vehicle[0].dailyRate == true){
                    const days = parseFloat(tableOfPrices[1].dailyRateCost)
                    vehicle[0].totalCost = days * (getDailyRate(vehicle[0].entryDate, vehicle[0].exitDate))
                } else{
                    vehicle[0].totalCost = getStayPrice(stay, tableOfPrices[1].stayCost)
                }
            } else{
                /*When the vehicle is a motocycle.*/
                if(vehicle[0].dailyRate == true){
                    const days = parseFloat(tableOfPrices[0].dailyRateCost)
                    vehicle[0].totalCost = days * (getDailyRate(vehicle[0].entryDate, vehicle[0].exitDate))
                } else{
                    vehicle[0].totalCost = getStayPrice(stay, tableOfPrices[0].stayCost)
                }
            }
            totalVehicles[vehicle[1]] = vehicle[0]
            localStorage.setItem('saveRecord', JSON.stringify(totalVehicles))
        }
    }
}
</script>
<style scoped>
    .exit{
        width: 100%;
    }
</style>