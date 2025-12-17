<template>
    <main>
        <h1>Filmsidan!</h1>
        <AddMovie @refresh-table="getMovies" />
        <table>
            <thead>
                <tr>
                    <th>Titel</th>
                    <th>År</th>
                    <th>Genre</th>
                    <th>Längd</th>
                    <th>Tittad på</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <FilmRow v-for="movie in movies" :key="movie.id" :movie="movie" @delete-movie="deleteMovie" />
            </tbody>
        </table>

        <!--
     Undersida som konsumerar extern webbtjänst skapad i tidigare labb, förslagsvis till en tabell. 
     Här ska det gå att radera data och finnas forumlär för att lägga till data. -->
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FilmRow from '@/components/FilmRow.vue';
import AddMovie from '@/components/AddMovie.vue';

const movies = ref([])

onMounted(() => {
    getMovies();
});

const getMovies = async () => {
    try {
        const res = await fetch("https://laboration2-2-dt193g.onrender.com/movies");

        if (res.ok) {
            const data = await res.json();

            movies.value = data;
        }
    }
    catch (error) {
        console.log("Error: " + error);
    }
}

const deleteMovie = async (id) => {
    try {
        const res = await fetch("https://laboration2-2-dt193g.onrender.com/movies/" + id, {
            method: "DELETE"
        });

        if (res.ok) {
            getMovies();
        }
    }
    catch (error) {
        console.log("Error: " + error);
    }
}

</script>

<style scoped>

img {
    width: 60%;
    height: auto;
}

@media screen and (max-width: 768px) {
    img {
        width: 80%;
    }
}

</style>