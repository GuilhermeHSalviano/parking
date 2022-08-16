<template>
    <div>
        <p>Horário de entrada:</p>
        <label for="">Data</label>
        <input type="date" v-model="date" class="input">
        <label for="">Horário</label>
        <input class="input" type="time" v-model="time">
    </div>
</template>
<script>
export default {
    data(){
        return{
            date: '',
            time: '',
        }
    },
    watch:{
        time(time){
            if(this.date && time != ''){
                this.$emit('emitTime', time, this.date)
            }
        },
        clear(value){
            this.date = this.time = ''
        }
    },
    props:{
        clear: Boolean,
    }
}
</script>
<style scoped>
    .input{
        width: 10%;
    }
</style>