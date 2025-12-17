<template>
    <main>
        <div class="hero-container">
            <div class="hero-text">
                <h1>Julias Filmresa</h1>
            </div>
            <picture>
                <source srcset="../assets/images/hero-image-sm.webp" media="(max-width: 768px)">
                <img src="../assets/images/hero-image.webp" alt="Blond kvinna i en biosalong">
            </picture>
        </div>
        <div class="info-box">
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
    </main>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>
main {
    background-color: rgba(204, 230, 255, 0.7);
}

.hero-container {
    position: relative;
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

img {
    width: 100%;
    height: auto;
}

.info-box {
    max-width: 600px;
    background: rgba(255, 255, 255, 0.9);
    padding: 1.5em 2em;
    margin: 3em auto;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 1000px) {
    .hero-text {
        font-size: 1.3em;
    }
}

@media screen and (max-width: 768px) {
    .hero-text {
        font-size: 1.2em;
    }

    .info-box {
        padding: 1.5em;
        margin: 3em auto;
        border-radius: 0;
    }
}
</style>