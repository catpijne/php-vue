<template>
    <div class="chart">
        <chartist
            :data="data"
            :type="type"
            :options="options"
            :ratio="ratio"
            :responsive-options="responsiveOptions"
            :event-handlers="eventHandlers"
        />

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component';
    import {ITestData} from "../ITestData";

    @Component({
        props: {
            data: {
                type: Object,
                require:true
            },
            eventHandlers: {
                type: Array,
                default: () => ([])
            },
            options: {
                type: Object,
                default: () => ({})
            },
            ratio: {
                type: String,
                default: ""
            },
            responsiveOptions: {
                type: Array,
                default: () => ([])
            },
            type: {
                type: String,
                required: true,
                validator: v => ['Bar', 'Line', 'Pie'].includes(v)
            }
        }
    })
    export default class chart extends Vue{
        data!: ITestData;
    }
</script>

<style>
    .chart{
        flex-grow: 1;
        background-color:white;
        height: 350px;
    }
    .ct-square{
        padding-top:16px;
        height:325px;
        width: 325px;
        padding-bottom:16px;
    }
    .ct-bar{
        stroke-width: 10px;
    }
    .ct-grid{
        stroke: rgba(0,0,0,.2);
        stroke-width: 1px;
        stroke-dasharray: 2px;
    }
    .ct-horizontal{
        padding-left:16px;
    }
    .ct-vertical{
        align-items: flex-end;
        text-align: right;
        text-anchor: end;
        font-size: 16px;
        text-anchor: end;
    }
    .ct-line{
        strok-width:4px;
        fill:none;
    }
    .ct-point{
        stroke-width: 10px;
        stroke-linecap: round;
    }
    .ct-series-a .ct-point,
    .ct-series-a .ct-line,
    .ct-series-a .ct-bar,
    .ct-series-a .ct-slice-donut {
        stroke: rgba(0,0,0,.8);
    }
    .ct-series-a .ct-slice-pie,
    .ct-series-a .ct-area {
        fill: rgba(0,0,0,.4);
    }
</style>
