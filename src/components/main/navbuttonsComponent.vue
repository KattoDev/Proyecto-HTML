<script setup>
import { goto } from "@/assets/js/buttons";
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
        <button type="button" v-on:click="goto.profiles">
            Perfil de ingreso
        </button>
        <button type="button" v-on:click="goto.profiles">
            Perfil de egreso
        </button>
        <button type="button" v-on:click="goto.methodology">
            Estrategia metodológica
        </button>
    </nav>
</template>
