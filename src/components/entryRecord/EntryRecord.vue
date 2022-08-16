<template>
    <div class="content">
        <my-header></my-header>
        <div class="content__record">
            <vehicle-record @emitTypeOfVehicle='setVehicle'></vehicle-record>
            <license-plate @emitLicensePlateNumber='setVehicle' :clear='clear'></license-plate>
            <set-time @emitTime="setTime" :clear=clear></set-time>
            <daily-rate @emitDailyRateInput='setVehicle'></daily-rate>
            <button type="button" class="save btn btn-primary" @click="saveRecord">Concluir cadastro</button>
            <span class="text-danger" v-if="alert">Preencha todos os campos!</span>
            <span class='text-success' v-if="successMessage">Entrada registrada com sucesso!</span>
        </div>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import { Vehicle } from '../../../Vehicles.js'
import VehicleRecord from './VehicleRecord.vue'
import LicensePlate from "./LicensePlate.vue"
import SetTime from "./SetTime.vue"
import DailyRate from './DailyRate.vue'
export default {
   components:{
       MyHeader,
       VehicleRecord,
       LicensePlate,
       SetTime,
       DailyRate
       
   },
   data(){
       return{
           listOfVehicles: [],
           car: true,
           licensePlate: '',
           date: '',
           time: '',
           dailyRate: false,
           clear: false,
           alert: false,
           successMessage: false
       }
   },
   methods:{
       setVehicle(value, property){
           this[property] = value
       },
       setTime(time, date){
           this.date = date
           this.time = time
       },
       saveRecord(){
           if(this.licensePlate == '' || this.date == '' || this.time == ''){
               this.alert = true
               return
           }
           const record = new Vehicle(this.car, this.licensePlate, this.date, this.time, this.dailyRate)
           this.listOfVehicles.push(record)
           localStorage.setItem('saveRecord', JSON.stringify(this.listOfVehicles))
           this.clear = (!this.clear)
           this.alert = false
           this.successMessage = true
       }
   },
   created(){
       if(localStorage.getItem('saveRecord')){
           this.listOfVehicles = JSON.parse(localStorage.getItem('saveRecord'))
       }
   }
}
</script>
<style scoped>
    .content{
        width: 100%;
    }
    .content__record{
        margin-left: 5px;
    }
</style>