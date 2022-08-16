<template>
    <div class="report">
        <my-header></my-header>
        <to-filter @emitFilteredList = "setFilter"></to-filter>
        <div class="d-flex flex-wrap">
            <li class="filtered__list" v-for="vehicle in filteredList">
                <p>Veículo: {{ vehicle.car == true? "Carro": "Moto" }}</p>
                <p>Placa: {{ vehicle.licensePlate }}</p>
                <p>Data de Entrada: {{ vehicle.entryDate }}</p>
                <p>Horário de Entrada: {{ vehicle.entryHour }}</p>
                <p>Data de Saída: {{ vehicle.exitDate }}</p>
                <p>Horário de Saída: {{ vehicle.exitHour }}</p>
                <p>Preço cobrado: {{ vehicle.totalCost }}</p>
            </li>
        </div>
    </div>
</template>
<script>
import MyHeader from "../shared/MyHeader.vue"
import Filter from '../report/Filter.vue'
export default {
    components:{
        MyHeader,
        'to-filter': Filter,
    },
    data(){
        return{
            filteredList: ''
        }
    },
    methods:{
        setFilter(filter){
            this.filteredList = filter
        }    
        
    }
}
</script>
<style scoped>
    .report{
        width: 100%;
    }
    .filtered__list{
        list-style: none;
        margin: 2rem;
    }
</style>