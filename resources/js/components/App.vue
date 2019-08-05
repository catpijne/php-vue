<template>
    <div>
        <div class="top-header">
            <h1 class="h1-top">Website</h1>
        </div>
        <div class="side-menu-container">
            <router-link class="btn" active-class="active-btn" to="/index">Home</router-link>
            <router-link class="btn" active-class="active-btn" to="/dashboard">Dashboard</router-link>
            <router-link class="btn" active-class="active-btn" to="/about">About</router-link>
        </div>
        <div class="container">
            <router-view></router-view>
            <Footer class="main-footer">
            </Footer>
        </div>

    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Footer from "./Layout/Footer.vue";

    @Component({
        components:{
            Footer,
        }
    })
    export default class Template extends Vue {
    }
</script>

<style scoped>

    .h1-top{
        margin:0px;
        color:inherit;
    }
    .top-header{
        padding-top:16px;
        padding-bottom:16px;
        margin-top:0px;
        text-align:center;
        color:black;

    }
    .side-menu-container{
        float: left;
        width:20%;
    }
    .side-menu-container::before {
        content: "";
        top:0px;
        bottom:0px;
        left:0px;
        height:100%;
        width:100%;
        background-size:cover;
        background-repeat: no-repeat;
        background-image: url("Layout/images/clean.jpg");
        opacity: 0.6;
        position: fixed;
        z-index: -1;
    }
    .icon{
        width:48px;
        height:24px;
    }
    .btn{
        padding:16px;
        border-radius: 8px;
        border:2px solid #ccc;
        font-weight: bold;
        display: block;
        color:black;
        text-decoration: none;
        margin:16px 48px 16px 16px;
    }
    .btn:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .active-btn{
         background-color: #ccc;
     }
    .container{
        background-color: #f8fafc;
        z-index: 1;
        margin-left: 20%;
        height: 90vh;
        padding-top: 15px;
    }
</style>
