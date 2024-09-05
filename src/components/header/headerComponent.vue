<script setup>
import { catDoStuff } from "@/assets/js/buttons";

let catdostuff = new catDoStuff();
</script>

<template>
    <div class="gov">
        <img
            id="gov-logo"
            src="../../assets/images/icons/gov-logo.svg"
            alt="gov logo"
        />
    </div>
    <div id="banner-sena">
        <img
            id="zajuna-logo"
            src="../../assets/images/icons/zajuna-logo.svg"
            alt="zajuna-logo"
        />
        <img
            id="sena-logo"
            src="../../assets/images/icons/sena-logo.svg"
            alt="sena-logo"
        />
    </div>
    <nav class="navbar">
        <div class="nav-links">
            <ul>
                <li>
                    <a href="/"> Inicio </a>
                </li>
                <hr />
                <li>
                    <a
                        href="https://comunidades.netlab-sena.net/cursos-cortos"
                        target="_blank"
                        >Cursos cortos</a
                    >
                </li>
                <hr />
                <li>
                    <a href="https://zajuna.sena.edu.co/bilinguismo.php">
                        Bilingüismo
                    </a>
                </li>
                <hr />
                <li>
                    <a href="https://zajuna.sena.edu.co/titulada.php"
                        >Titulada</a
                    >
                </li>
                <hr />
                <li>
                    <a
                        href="https://comunidades.netlab-sena.net/comunidad-aprendices"
                        >Comunidad aprendices</a
                    >
                </li>
                <hr />
                <li>
                    <a
                        href="https://comunidades.netlab-sena.net/comunidad-instructores"
                        >Comunidad instructores</a
                    >
                </li>
                <hr />
                <li>
                    <a href="https://zajuna.sena.edu.co/campesena.php"
                        >Comunidad campesina</a
                    >
                </li>
                <hr />
                <li><button v-on:click="catdostuff.mew">😺</button></li>
            </ul>
        </div>
    </nav>
</template>
