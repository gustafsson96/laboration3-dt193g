<template>
    <tr>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }}</td>
        <td> {{ movie.genre }}</td>
        <td> {{ movie.length }}</td>
        <td> {{ movie.watched ? 'Ja' : 'Nej' }}</td>
        <td>
            <DeleteButton @click="$emit('deleteMovie', movie.id)">Ta bort</DeleteButton>
        </td>
    </tr>
</template>

<script setup>
import DeleteButton from '@/components/DeleteButton.vue'

const props = defineProps({
    movie: Object
})

const emits = defineEmits(["deleteMovie"]);
</script>

<style scoped></style>