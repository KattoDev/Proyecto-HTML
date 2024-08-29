<script setup>
import headerComponent from '@/components/header/headerComponent.vue';
import { skillsData } from '@/assets/js/info';

import footerComponent from '@/components/footer/footerComponent.vue';
</script>
<template>

<header>
    <headerComponent/>
</header>
<main>
    <h1>Competencias</h1>
    <blockquote v-for="skill in skillsData" :key="skill">
        <h3>{{ skill.code }}</h3>
        <p>{{ skill.content }}</p>
    </blockquote>
</main>
<footer>
    <footerComponent/>
</footer>

</template>

<style scoped></style>