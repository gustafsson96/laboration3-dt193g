<template>
    <button @click="$emit('click')">
        <!-- Slot element to add text from parent -->
        <slot></slot>
    </button>
</template>

<script setup>

// Define emit for click event
const emit = defineEmits(['click'])

</script>

<style scoped>
button {
    padding: 0.2em 0.7em;
    margin-left: 2em;
    background: #b00020;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 0.9em;
    transition: background 0.2s ease;
}

button:hover {
    background: #900018;
}

@media screen and (max-width: 900px) {
    button {
        padding: 0.3em 1.5em;
        margin-left: 1em;
        font-size: 0.8em;
    }
}
</style>