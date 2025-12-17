<template>
    <main>
        <div class="hero-container">
            <div class="hero-text">
                <h1>Julias Filmresa</h1>
            </div>
            <picture>
                <source srcset="../assets/images/hero-image-sm.webp" media="(max-width: 768px)">
                <img src="../assets/images/hero-image.webp" alt="Blond kvinna i en biosalong" id="hero-img">
            </picture>
        </div>
        <div class="welcome-container">
            <div class="welcome-text">
            <h2>Välkommen hit!</h2>
            <p>Med ett relativt nyfunnet intresse för film är jag nu i processen att hitta mina favoriter, samtidigt som
                jag jobbar på att bocka av en del klassiker. När det kommer till genre föredrar jag romantiska
                komendier, gärna från 90-talet eller tidigt 2000-tal. Jag tycker även om drama och action, och har även
                sett en hel del julfilmer sim jag tidigare missat nu i december. Det enda jag har noll intresse av är
                skräckfilmer... Är alldelens för lättskrämd.</p>
            <p>Under sidan <RouterLink to="/film">Film</RouterLink> finns en lista med filmer som jag nyligen sett,
                eller som jag vill se inom en snar framtid. Den fylls på kontinuerligt.</p>
            <p>Har du ett förslag på en film
                jag borde se? Lägg till den i listan!</p>
                            </div>
                            <img src="../assets/images/welcome.webp" alt="animerad man med öppna armar" id="welcome-img">
        </div>
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>

.hero-container {
    position: relative;
}

#hero-img {
    width: 100%;
    height: auto;
}

.hero-text {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6em;
    color: #fff;
}

.welcome-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2em;
}

#welcome-img {
    width: 40%;
    height: auto;
}

.welcome-text {
    max-width: 600px;
    padding: 1.5em 2em;
    border-radius: 10px;
}

h2 {
    text-align: left;
}

@media screen and (max-width: 1000px) {
    .hero-text {
        font-size: 1.3em;
    }

    .welcome-container {
        margin: 1em;
    }
}

@media screen and (max-width: 768px) {
    .hero-text {
        font-size: 1.2em;
    }

    .welcome-container {
        flex-direction: column;
        margin: 0.5em;
    }

    .welcome-text {
        padding: 0.5em;
    }

    #welcome-img {
        width: 70%;
    }
}
</style>