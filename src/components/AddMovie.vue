<template>
    <h2>Lägg till film:</h2>
    <form @submit.prevent="addMovie">
        <label for="title">Filmtitel</label>
        <input type="text" name="title" id="title" v-model="newMovie.title">
        
        <label for="year">År</label>
        <input type="text" name="year" id="year" v-model="newMovie.year">
        
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" v-model="newMovie.genre">
        
        <label for="length">Längd (minuter)</label>
        <input type="text" name="length" id="length" v-model="newMovie.length">
        
        <label for="watched">Sett</label>
        <input type="checkbox" name="watched" id="watched" v-model="newMovie.watched">
        
        <input type="submit" value="Lägg till">
    </form>
    <p class="user-feedback" v-if="error">{{ error }}</p>
</template>

<script setup>
import { ref } from 'vue';

const newMovie = ref({
    title: "",
    year: "",
    genre: "",
    length: "",
    watched: false
});

const error = ref("");

const emit = defineEmits(["refreshTable"]);

const addMovie = async () => {
    // Input validation
    if (!newMovie.value.title || !newMovie.value.year || !newMovie.value.genre || !newMovie.value.length) {
        error.value = "Fälten får inte vara tomma";
        return;
    }

    error.value = "";

    try {
        const res = await fetch("https://laboration2-2-dt193g.onrender.com/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie.value)
        })

        if (res.ok) {
            console.log("OK yay!");
            emit("refreshTable");

            newMovie.value = { title: "", year: "", genre: "", length: "", watched: false };
        }
    }
    catch (error) {
        console.log("Error: " + error)
    }
}


</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

input {
    padding: 0.5em;
    width: 70%;
}
</style>