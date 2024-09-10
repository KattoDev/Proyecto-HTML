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
        setTimeout(async () => {
            data.value = await response.json();
        }, 3000);
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
            <table id="register-table-info" v-if="data.length > 1">
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
            <div v-else>
                <img src="../assets/images/loading-thinking.gif" alt="" />
            </div>
        </div>
        <div id="buttons-container">
            <button v-on:click="printPage">exportar como PDF</button>
        </div>
    </main>

    <footer>
        <footerComponent />
    </footer>
</template>
