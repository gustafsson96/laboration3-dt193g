<template>
    <h2>Lägg till film:</h2>
    <!-- Form to add new movie -->
    <form @submit.prevent="addMovie">
        <label for="title">Filmtitel</label>
        <input type="text" name="title" id="title" v-model="newMovie.title">

        <label for="year">År</label>
        <input type="text" name="year" id="year" v-model="newMovie.year">

        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" v-model="newMovie.genre">

        <label for="length">Längd (minuter)</label>
        <input type="text" name="length" id="length" v-model="newMovie.length">

        <div class="checkbox-row">
            <input type="checkbox" name="watched" id="watched" v-model="newMovie.watched">
            <label for="watched">Sedd</label>
        </div>

        <input type="submit" value="Lägg till">
    </form>
    <!-- User feedback -->
    <div class="user-feedback-container">
        <p class="user-feedback" v-if="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Reactive object for movie form 
const newMovie = ref({
    title: "",
    year: "",
    genre: "",
    length: "",
    watched: false
});

const error = ref("");

// Define emit to refresh movie table
const emit = defineEmits(["refreshTable"]);

// Send movie to API
const addMovie = async () => {
    // Input validation
    if (!newMovie.value.title || !newMovie.value.year || !newMovie.value.genre || !newMovie.value.length) {
        error.value = "Fälten får inte vara tomma";
        return;
    }

    // Clear error message
    error.value = "";

    try {
        // POST request to the API
        const res = await fetch("https://laboration2-2-dt193g.onrender.com/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie.value)
        })

        // Reset form fields
        if (res.ok) {
            emit("refreshTable");

            newMovie.value = { title: "", year: "", genre: "", length: "", watched: false };
        }
    }
    // Catch errors
    catch (error) {
        console.log("Error: " + error)
    }
}


</script>

<style scoped>
/* Form styling */

form {
    max-width: 420px;
    margin: 2em auto 0;
    padding: 1.5em 2em;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 0.8em;
}

label {
    font-weight: 500;
    margin-top: 0.5em;
}

input[type="text"] {
    padding: 0.6em 0.7em;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1em;
}

input[type="text"]:focus {
    outline: none;
    border-color: #223a6d;
}

.checkbox-row {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-top: 0.5em;
}

.checkbox-row label {
    margin: 0;
    font-weight: 500;
}

.checkbox-row input[type="checkbox"] {
    margin: 0;
}

input[type="submit"] {
    margin-top: 1em;
    padding: 0.7em;
    border: none;
    border-radius: 8px;
    background: #223a6d;
    color: white;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s ease;
}

input[type="submit"]:hover {
    background: #1a2f58;
}

.user-feedback-container {
    margin: 0;
    padding: 1em;
}

.user-feedback {
    margin: 0;
    padding: 0;
    color: #b00020;
    font-weight: 500;
    text-align: center;
}

@media screen and (max-width: 768px) {

    form {
        border-radius: 0;
        box-shadow: none;
        margin: 0 auto 3em;
        padding: 0.5em 1.5em;
    }

    label:first-of-type {
        margin-top: 0;
    }
}
</style>