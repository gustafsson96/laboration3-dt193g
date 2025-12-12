<template>
    <header>
        <nav>
            <ul>
                <li>
                    <RouterLink to="/">Hem</RouterLink>
                </li>
                <li>
                    <RouterLink to="/film">Film</RouterLink>
                </li>
                <li>
                    <RouterLink to="/info">Info</RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>