<template>
    <div >
        <label for="">Placa:</label>
        <input type="text" v-model="licensePlate" class="number">
    </div>
</template>
<script>
export default {
    data(){
        return{
            licensePlate: ''
        }
    },
    watch:{
        licensePlate(value){
            this.$emit('emitLicensePlateNumber', value, 'licensePlate')
        },
        clear(value){
           this.licensePlate = ''
        }
    },
    props:{
        clear: Boolean
    }
}
</script>
<style scoped>

</style>