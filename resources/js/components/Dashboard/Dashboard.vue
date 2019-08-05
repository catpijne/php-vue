<template>
    <div class="flex-container">
        <chart :data="testData"
            :type="type">
        </chart>
        <!--chart
            :data="testData"
            :options="chartOptions"
            :responsive-options="responsiveOptions"
            :event-handlers="eventHandlers"
            color="orange"
            type="Bar"
        /-->
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import axios from "axios";
    import Component from "vue-class-component";
    import chart from "./DashboardComponents/chart.vue";
    import {ITestData} from "./ITestData";

    @Component({
        components:{
            chart
        },
        props:{
            chartOptions:{
                type:Object,
            },
        }
    })
    export default class Dashboard extends Vue {
        dataReady=false;
        testData!: ITestData;
        type!: string;

        mounted(){
            this.getData();
        }

        getData(){
            axios.get("http://localhost:8000/api/testdata")
                .then(response => {
                    this.type = response.data.type;
                    this.testData = {
                        labels : response.data.label,
                        series : response.data.series
                    }
                    this.dataReady=true;
                })
                .catch(error => console.log(error) );
        }

    }

</script>

<style scoped>
    .flex-container {
        display: flex;
        flex-wrap: nowrap;
    }
    .flex-container > div {
        margin:10px;
    }
</style>
