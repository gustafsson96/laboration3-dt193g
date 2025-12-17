<template>
    <header>
        <nav>
            <button class="hamburger-icon" @click="toggleMenu" :class="{ open: menuOpen }" aria-label="toggle menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <ul :class="{ open: menuOpen }">
                <li>
                    <RouterLink to="/" @click="closeMenu" active-class="active-link">Hem</RouterLink>
                </li>
                <li>
                    <RouterLink to="/film" @click="closeMenu" active-class="active-link">Film</RouterLink>
                </li>
                <li>
                    <RouterLink to="/info" @click="closeMenu" active-class="active-link">Info</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuOpen = ref(false)

// Toggle menu (true/false)
function toggleMenu() {
    menuOpen.value = !menuOpen.value
}

// Close menu when linked is clicked
function closeMenu() {
    menuOpen.value = false
}

</script>

<style scoped>
nav {
    position: relative;
    z-index: 10;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: #223a6d;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 1em;
    margin: 0;
}


ul {
    list-style-type: none;
    display: flex;
    gap: 2em;
    padding: 0 0 0 1em;
    margin: 0;
}

a {
    text-decoration: none;
    color: #fff;
    padding: 0.3em 0.5em;
    transition: background-color 0.3s ease;
}

a:hover {
    background-color: rgba(255, 255, 255, 0.15);

}

.active-link {
    border-bottom: 2px solid #fff;
}

.hamburger-icon {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    background: none;
    height: 15px;
    width: 30px;
    cursor: pointer;
    margin: 0 0 0 1em;
}

.bar {
    display: block;
    height: 2px;
    background-color: #fff;
    border-radius: 2px;
}

@media screen and (max-width: 768px) {

    .hamburger-icon {
        display: flex;
        margin: 0.2em;
        z-index: 10;
    }

    .bar {
        transition: transform 0.3s ease, opacity 0.2s ease;
    }

    ul {
        display: none;
    }

    /* Styling for when navbar is open */
    ul.open {
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #223a6d;
        width: 200px;
        height: 100vh;
        margin: 0;
        padding: 1.5em;
    }

    ul.open li {
        display: flex;
        margin-bottom: 1em;
        flex-direction: column;
        text-align: center;
    }

    /* Rotate hamburger bars into cross when navbar is opened */
    .hamburger-icon.open span:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
    }

    .hamburger-icon.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger-icon.open span:nth-child(3) {
        transform: rotate(-45deg) translate(4px, -4px);
    }
}
</style>