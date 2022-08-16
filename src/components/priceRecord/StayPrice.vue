<template>
    <div class="stay">
        <h5>Preço da permanência</h5>
        <div class="d-flex justify-content-around" v-if="showInput">
            <label for="">Até 15 minutos:</label>
            <input class="input" type="number" v-model="tableOfPrices.untilFifteenMinutes">
            <label for="">Até 30 minutos:</label>
            <input class="input" type="number" v-model="tableOfPrices.untilThirtyMinutes">
            <label for="">Até uma hora:</label>
            <input class="input" type="number" v-model="tableOfPrices.untilOneHour">
            <label for="">30 minutos adicionais:</label>
            <input class="input" type="number" v-model="tableOfPrices.additionalThirtyMinutes">
            <button @click="setStay" type="button" class="save btn btn-primary">Definir</button>
        </div>
        <div class="stay__input-edit" v-else>
            <p>Até 15 minutos: {{ tableOfPrices.untilFifteenMinutes }}</p>
            <p>Até 30 minutos: {{ tableOfPrices.untilThirtyMinutes }}</p>
            <p>Até uma hora: {{ tableOfPrices.untilOneHour }}</p>
            <p>Meia hora adicional: {{ tableOfPrices.additionalThirtyMinutes }}</p>
            <button @click="editStay" type="button" class="save btn btn-primary">Editar</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            showInput: true,
            tableOfPrices:{
                untilFifteenMinutes: 0,
                untilThirtyMinutes: 0,
                untilOneHour: 0,
                additionalThirtyMinutes: 0
            }
            
        }
    },
    methods:{
        setStay(){
            this.$emit('emitStay', this.tableOfPrices, 'stayCost')
            this.showInput = false
        },
        editStay(){
            this.showInput = true
        }
    }
}
</script>
<style scoped>
    .input{
        width: 3%;
    }
</style>