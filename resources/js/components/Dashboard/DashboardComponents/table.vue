<template>
    <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
    >
        <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.campaign }}</td>
            <td class="text-xs-right">{{ props.item.gift_airmiles }}</td>
            <td class="text-xs-right">{{ props.item.gift_1 }}</td>
            <td class="text-xs-right">{{ props.item.gift_2 }}</td>
        </template>
    </v-data-table>

</template>

<script>
    export default {
        name: "table",

    }
</script>

<style scoped>

</style>
