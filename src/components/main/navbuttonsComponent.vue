<script setup>
import { goto } from "@/assets/buttons";
</script>

<template>
    <nav class="nav-buttons">
        <button type="button" v-on:click="goto.agenda">temario</button>
        <button type="button" v-on:click="goto.justification">
            Justificación del programa
        </button>
        <button type="button" v-on:click="goto.skills">
            Competencias a desarrollar
        </button>
        <button type="button" v-on:click="goto.income">
            Perfil de ingreso
        </button>
        <button type="button" v-on:click="goto.graduate">
            Perfil de egreso
        </button>
        <button type="button" v-on:click="goto.methodology">
            Estrategia metodológica
        </button>
    </nav>
</template>

<style scoped></style>
