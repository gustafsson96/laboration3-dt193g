<template>
    <main>
        <h1>Filmsidan</h1>
        <div class="image-container">
            <img src="../assets/images/characters.webp" alt="animerade filmkaraktärer">
        </div>
        <AddMovie @refresh-table="getMovies" />
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Titel</th>
                        <th>År</th>
                        <th>Genre</th>
                        <th>Längd</th>
                        <th>Sedd</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <FilmRow v-for="movie in movies" :key="movie.id" :movie="movie" @delete-movie="deleteMovie" />
                </tbody>
            </table>
        </div>
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
.image-container {
    display: flex;
    justify-content: center;
    margin: 2em 0;
}

img {
    width: 60%;
    height: auto;
}

.table-container {
    width: 100%;
    overflow-x: auto;
}

table {
    width: 90%;
    margin: 2em auto;
    border-collapse: collapse;
    font-family: 'Montserrat', sans-serif;
    border: 1px solid #d3d3d3;
    overflow: scroll;
}

th {
    background: #223a6d;
    color: white;
    padding: 1em;
    text-align: left;
}

tr:nth-child(even) {
    background: #f2f2f2;
}

@media screen and (max-width: 768px) {
    img {
        width: 80%;
    }

    th {
        padding: 0.8em;
        font-size: 0.9em;
    }
}
</style>