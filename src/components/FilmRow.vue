<template>
    <tr>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }}</td>
        <td> {{movie.genre}}</td>
        <td> {{movie.length}}</td>
        <td> {{movie.watched}}</td>
        <td><button @click="$emit('deleteMovie', movie.id)" >Ta bort</button></td>
    </tr>
</template>

<script setup>
const props = defineProps({
    movie: Object
})

const emits = defineEmits(["deleteMovie"]);
</script>

<style scoped></style>