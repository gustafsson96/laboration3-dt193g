<template>
    <main>
        <h1>Information</h1>
        <div class="info-container">
            <img src="../assets/images/thinking.webp" alt="Animerad man som tänker">
            <div class="info-text">
                <h2>Mina tankar om Vue.js</h2>
                <p>För att komma igång installerade jag Vue via CLI-alternativet med kommandot npm create vue@latest.
                    Jag
                    skapade lite olika projekt för att kunna testa de olika alternativen som finns att
                    inkludera via CLI:en. 
                    Ett projekt där samtlig exempel-kod inkluderas gav inledningsvis en bra överblick över hur strukturen ser ut och fungerar, men när man skulle komma igång själv blev lite väl mycket att radera tycker jag. Jag testade därför att skapa ett annat projekt där jag inkluderade
                    routing (eftersom jag insåg att det skulle behövas) men valde alternativet utan all exempel-kod, och det tyckte jag gav en bra grund till att smidigt kunna komma igång med sitt
                    eget kodande.</p>

                <p>Jag upplever fortfarande att vissa koncept så som props och emits är lite svåra att greppa i sin
                    helhet,
                    men tack vare bra kursmaterial gick det ändå bra att implementera för detta uppgift, vilket också
                    gjorde
                    att det klarnade en aning. Det är dock något jag kommer arbeta vidare med, och jag har suttit en del med de tutorials som finns tillgänglia via Vues dokumentation.</p>

                <p>Vue är definitivt något jag vill arbeta med mer! Innan jag kom igång med själva kodandet tittade jag
                    på
                    mini-dokumentären som rekommenderades i kursmaterialet, och redan då kände jag mig väldigt
                    inspirerad
                    till att komma igång. Nu när jag skapat lösningen för den här laborationen känner jag mig fortsatt
                    väldigt motiverad till att lära mig mer.</p>
            </div>
        </div>
    </main>
</template>

<script setup></script>

<style scoped>
.info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

img {
    width: 50%;
    height: auto;
}

.info-text {
    max-width: 600px;
    padding: 1.5em 2em;
    margin: 1em auto;
    border-radius: 10px;
}

h2 {
    text-align: left;
}

@media screen and (max-width: 768px) {
    .info-container {
        flex-direction: column;
    }

    img {
        width: 70%;
    }
}
</style>