<template>
    <!-- Single row for a movie in the table -->
    <tr>
        <td> {{ movie.title }}</td>
        <td> {{ movie.year }}</td>
        <td> {{ movie.genre }}</td>
        <td> {{ movie.length }} min</td>
        <td> {{ movie.watched ? 'Ja' : 'Nej' }}</td>
        <td>
            <DeleteButton @click="$emit('deleteMovie', movie.id)">Ta bort</DeleteButton>
        </td>
    </tr>
</template>

<script setup>
// Import delete button
import DeleteButton from '@/components/DeleteButton.vue'

// Define props to recieve the movie object from parent FilmView
const props = defineProps({
    movie: Object
})

// Define emit to send delete movie event to parent
const emits = defineEmits(["deleteMovie"]);

</script>

<style scoped>
    td {
        padding: 1em;
    }

    @media screen and (max-width: 900px) {
    td {
        padding: 0.8em;
        font-size: 0.9em;
    }
}
</style>