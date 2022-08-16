<template>
    <div>
        <label for="dailyRate">A permanência é por diária?</label>
        <input type="checkbox" name="dailyRate" @click="changeDailyRateInput(input)" data-input>
    </div>
</template>
<script>
export default {
    methods:{
        changeDailyRateInput(){
            this.$emit('emitDailyRateInput', true, 'dailyRate')
        }
    }
}
</script>
<style scoped>

</style>