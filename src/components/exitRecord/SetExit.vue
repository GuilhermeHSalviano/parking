<template>
    <div class="exit">
        <div v-if="selectedVehicle.length >= 1">
            <label for="date">Selecionar data:</label>
            <input type="date" id="date" v-model="date">
            <label for="time">Selecionar horário:</label>
            <input type="time" id="time" v-model="time">
            <button type="button" class="save btn btn-primary" @click="recordExit">Registrar</button>
            <span class="text-danger" v-if="alert">Preencha todos os campos!</span>
            <span class="text-success" v-if="successMessage">Saída registrada com sucesso!</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        selectedVehicle: String
    },
    data(){
        return{
            date: '',
            time: '',
            alert: false,
            successMessage: false
        }
    },
    methods:{
        recordExit(){
            if(this.date != '' && this.time != ''){
                this.$emit('emitExitData', this.date, this.time)
                this.date = this.time = ''
                this.alert = false
                this.successMessage = true
            } else{
                this.alert = true
            }
        }
    }
}
</script>
<style scoped>

</style>