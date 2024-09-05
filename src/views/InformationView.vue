<script setup>
import { printPage } from "@/assets/js/buttons";
import { ref, onMounted } from "vue";

import headerComponent from "@/components/header/headerComponent.vue";

import footerComponent from "@/components/footer/footerComponent.vue";

const data = ref([]);

onMounted(async () => {
    try {
        const response = await fetch(
            "http://localhost/projects/proyecto-SENA-v2/src/database/API/getData.php"
        );
        if (!response.ok) throw new Error("Error al obtener los datos");
        data.value = await response.json();
    } catch (error) {
        console.error("Error", error);
    }
});
</script>

<template>
    <header>
        <headerComponent />
        <h1>Página de información de registros</h1>
    </header>

    <main>
        <div id="reg-table-container">
            <table id="register-table-info" v-if="data.length">
                <thead>
                    <th>Fecha de inscripción</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo electrónico</th>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <td>{{ item.time }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.surname }}</td>
                        <td>{{ item.email }}</td>
                    </tr>
                </tbody>
            </table>
            <p v-else>Cargando datos...</p>
        </div>
        <div id="buttons-container">
            <button v-on:click="printPage">exportar como PDF</button>
        </div>
    </main>

    <footer>
        <footerComponent />
    </footer>
</template>
