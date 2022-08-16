<template>
    <header class="header bg-secondary bg-gradient">
        <h1 class="title">Pit-stop estacionamento</h1>
        <nav class="nav d-flex justify-content-around">
           <li v-for="route in routes" class="nav-item nav__element"><router-link :to="route.path ? route.path : '/'" class="link text-dark ">{{ route.title }}</router-link></li>
        </nav>
    </header>
</template>
<script>
import {routes} from "../../../routes.js"
export default {
    data(){
        return{
            routes
        }
    }
}
</script>
<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        height: 7rem;
        width: 100%;
    }
    .title{
        text-align: center;
        width: 100%;
    }
    .nav__element{
        text-decoration-line: none;
    }
    .link{
        text-decoration: none;
    }
    
</style>