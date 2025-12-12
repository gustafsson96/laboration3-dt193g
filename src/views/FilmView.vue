<template>
    <h1>Filmsidan!</h1>
    <table>
        <thead>
            <tr>
                <th>Titel</th>
                <th>År</th>
                <th>Genre</th>
                <th>Längd</th>
                <th>Tittad på</th>
            </tr>
        </thead>
        <tbody>
            <FilmRow v-for="movie in movies" :key="movie.id" :movie="movie" />
        </tbody>
    </table>

    <!--
     Undersida som konsumerar extern webbtjänst skapad i tidigare labb, förslagsvis till en tabell. 
     Här ska det gå att radera data och finnas forumlär för att lägga till data. -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FilmRow from '@/components/FilmRow.vue';

const movies = ref([])

onMounted(() => {
    getMovies();
})

const getMovies = async () => {
    try {
        const res = await fetch("https://laboration2-2-dt193g.onrender.com/movies");

        if (res.ok) {
            const data = await res.json();

            movies.value = data;
        }
    }
    catch (error) {

    }
}

</script>

<style></style>