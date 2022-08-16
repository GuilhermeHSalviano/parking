<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "../routes.js"
export default {
  data(){
    return{
      routes
    }
  }
}
</script>

<style>
    #app{
        display: flex;
    }
</style>
