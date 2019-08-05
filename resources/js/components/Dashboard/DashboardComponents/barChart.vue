<template>
    <div>
        <chartjs-bar :labels="labels" :data="dataset" :bind="true"></chartjs-bar>
    </div>
</template>

<script>
    export default {
        name: "barChart.vue",
        data: function data() {
            return {
                dataentry: null,
                datalabel: null,
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'            , 'October', 'November', 'December'],
                dataset: [5, 10, 15, 25, 45, 70, 115, 185, 70, 75, 70, 60]
            };
        },
        methods: {
            addData: function addData() {
                this.dataset.push(this.dataentry);
                this.labels.push(this.datalabel);
                this.datalabel = '';
                this.dataentry = '';
            }
        }
    }
</script>

<style scoped>

</style>
