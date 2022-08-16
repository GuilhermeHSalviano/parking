<template>
    <div class="price">
        <my-header></my-header>
        <h2 class="price__title">Tabela de preços</h2>
        <div class="d-flex flex-column price__div" v-if="!showEdit">
            <h2>Carros:</h2>
                <p>Diária: R$ {{prices[1].dailyRateCost}}</p>
                <p>Até quinze minutos: R$ {{ prices[1].stayCost.untilFifteenMinutes }}</p>
                <p>Até trinta minutos: R$ {{ prices[1].stayCost.untilThirtyMinutes }}</p>
                <p>Até uma hora: R$ {{ prices[1].stayCost.untilOneHour }}</p>
                <p>Trinta minutos adicionais: R$ {{ prices[1].stayCost.additionalThirtyMinutes }}</p>
            <h2>Motos:</h2>
                <p>Diária: R$ {{prices[0].dailyRateCost}}</p>
                <p>Até quinze minutos: R$ {{ prices[0].stayCost.untilFifteenMinutes }}</p>
                <p>Até trinta minutos: R$ {{ prices[0].stayCost.untilThirtyMinutes }}</p>
                <p>Até uma hora: R$ {{ prices[0].stayCost.untilOneHour }}</p>
                <p>Trinta minutos adicionais: R$ {{ prices[0].stayCost.additionalThirtyMinutes }}</p>
        </div>
        <div class="price__edit" v-if="showEdit">
            <h2>Carros:</h2>
            <daily-rate-cost @emitDailyRateCost = 'defineCarPrice' ></daily-rate-cost>
            <stay-price @emitStay = 'defineCarPrice' ></stay-price>
            <h2>Motos:</h2>
            <daily-rate-cost @emitDailyRateCost = 'defineMotoPrice' ></daily-rate-cost>
            <stay-price @emitStay = 'defineMotoPrice' ></stay-price>
            <button @click = "savePrices" type="button" class="save btn btn-primary">Salvar</button>
        </div>
        <button @click = "showEditPanel" v-if = "!showEdit" type="button" class="save btn btn-primary" id="button" >Editar preços</button>
    </div>
</template>
<script>
import MyHeader from '../shared/MyHeader.vue'
import DailyRateCost from '../priceRecord/DailyRateCost.vue'
import StayPrice from '../priceRecord/StayPrice.vue'
export default {
    components:{
        MyHeader,
        DailyRateCost,
        StayPrice
    },
    data(){
        return{
            moto:{
                dailyRateCost:'',
                stayCost: ''
            },
            car:{
                dailyRateCost: '',
                stayCost: ''

            },
            showInput: '',
            showEdit: true,
            prices: Array
        }
    },
    methods:{
        defineCarPrice(price, time){
            this.car[time] = price
        },
        defineMotoPrice(price, time){
            this.moto[time] = price
        },
        savePrices(){
            localStorage.setItem('prices', JSON.stringify([this.moto, this.car]))
            location.reload()
        },
        showEditPanel(){
            this.showEdit = true
        }
    },
    created(){
        if(localStorage.getItem('prices')){
            this.showEdit = false
            this.prices = JSON.parse(localStorage.getItem('prices'))
        }
    }
}
</script>
<style scoped>
    .price{
        width: 100%;
    }
    .price__title{
        margin-left: 5px;
    }
    .price__div{
        margin-left: 10px;
    }
    #button{
        margin-left: 5px;
    }
</style>