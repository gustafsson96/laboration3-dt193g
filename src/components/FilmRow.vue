<template>
    <tr>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }}</td>
        <td> {{movie.genre}}</td>
        <td> {{movie.length}}</td>
        <td> {{movie.watched}}</td>
    </tr>
</template>

<script setup>
const props = defineProps({
    movie: Object
})
</script>

<style scoped></style>