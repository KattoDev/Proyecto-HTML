<script setup>
import headerComponent from "@/components/header/headerComponent.vue";

import { printPage } from "@/assets/js/buttons";
import formComponent from "@/components/formComponent.vue";

import footerComponent from "@/components/footer/footerComponent.vue";
</script>

<template>
    <header>
        <headerComponent />
        <h1>Página de información de registros</h1>
    </header>

    <main>
        <div id="table-container">
            <table id="register-table-info">
                <thead>
                    <th>Fecha de inscripción</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Correo electrónico</th>
                    <th>Número telefónico</th>
                </thead>
                <tbody>
                    <tr>
                        <td>0001-01-01 | 01:01:01</td>
                        <td>nombrenombrenombrenombrenombre 1</td>
                        <td>apellidoapellidoapellidoapellido 1</td>
                        <td>correocorreocorreocorreocorreo 1</td>
                        <td>0000000001</td>
                    </tr>
                    <tr>
                        <td>0002-02-02 | 02:02:02</td>
                        <td>nombre 2</td>
                        <td>apellido 2</td>
                        <td>correo 2</td>
                        <td>0000000002</td>
                    </tr>
                    <tr>
                        <td>0003-03-03 | 03:03:03</td>
                        <td>nombre 3</td>
                        <td>apellido 3</td>
                        <td>correo 3</td>
                        <td>0000000003</td>
                    </tr>
                    <tr>
                        <td>0004-04-04 | 04:04:04</td>
                        <td>nombre 4</td>
                        <td>apellido 4</td>
                        <td>correo 4</td>
                        <td>0000000004</td>
                    </tr>
                    <tr>
                        <td>0005-05-05 | 05:05:05</td>
                        <td>nombre 5</td>
                        <td>apellido 5</td>
                        <td>correo 5</td>
                        <td>0000000005</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="buttons-container">
            <button v-on:click="printPage">exportar como PDF</button>
        </div>
    </main>

    <footer>
        <footerComponent/>
    </footer>
</template>
