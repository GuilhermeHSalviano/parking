<template>
    <div class="filter">
        <h2>Escolha o período do relatório</h2>
        <label for="">Data inicial:</label>
        <input type="date" id="beginning" v-model = "beginning">
        <label for="">Data final:</label>
        <input type="date" id="end" v-model = "end">
        <button @click="showReport" type="button" class="save btn btn-primary">Buscar</button>
    </div>
</template>
<script>
import {isDateBetween} from "../../../functions.js"
export default {
    data(){
        return{
            beginning: '',
            end: '',
            filteredList: Array,
        }
    },
    methods:{
        showReport(){
            const tableOfContent = JSON.parse(localStorage.getItem('saveRecord'))
            const filtered = tableOfContent.filter((element) => {
                return isDateBetween(this.beginning, this.end, element.entryDate)
            })
            this.$emit('emitFilteredList', filtered)
            this.filteredList = filtered
        }
    }
}
</script>
<style scoped>
    .filter{
        margin-left: 5px;
    }
</style>