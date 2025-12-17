<template>
    <footer>
        <div>
            <p>Laboration 3 - Fullstackutveckling med ramverk</p>
            <p>Julia Gustafsson - HT25</p>
        </div>
    </footer>
</template>

<script setup></script>

<style scoped>

footer {
    width: 100%;
    min-height: 100px;
    margin: 0;
}

div {
    display: flex;
    flex-direction: column;
    text-align: center;
    background: #223a6d;
    color: #fff;
    padding: 1em 0;
}

p {
    margin: 0.8em 0;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
}

@media screen and (max-width: 768px) {
    p {
        font-size: 0.9em;
    }
}

</style>