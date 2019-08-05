<template>
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./Layout/images/clean.jpg" alt="First slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./Layout/images/clean.jpg" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Lego police station</h5>
                        <p>How to build</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="./Layout/images/Cover-Art.jpg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Home extends Vue {

    }
</script>

<style scoped>
    .carousel-item{
        height:400px;
    }
</style>
