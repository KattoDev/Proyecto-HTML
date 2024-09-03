<script setup>
import headerComponent from "../components/header/headerComponent.vue";

import bannerComponent from "@/components/main/bannerComponent.vue";
import navbuttonsComponent from "@/components/main/navbuttonsComponent.vue";
import justificationComponent from "@/components/main/justificationComponent.vue";
import tableComponent from "@/components/tableComponent.vue";
import detailsComponent from "@/components/detailsComponent.vue";
import formComponent from "@/components/formComponent.vue";

import footerComponent from "@/components/footer/footerComponent.vue";

import {
    formationInfoData,
    productsData,
    agendaData,
    incomeProfileData,
    methodologiesData,
} from "@/assets/js/info";
</script>

<template>
    <header>
        <headerComponent />
    </header>

    <div class="header-info">
        <p class="title">DESARROLLO DE VIDEOJUEGOS Y ENTORNOS INTERACTIVOS</p>
        <div class="subtitle">
            <p>Nivel de formación: Tecnólogo</p>
        </div>
        <nav class="buttons">
            <navbuttonsComponent />
        </nav>
    </div>

    <main>
        <bannerComponent />

        <h1 class="welcome">
            ¡Te damos la bienvenida a Desarrollo de videojuegos y entornos
            interactivos!
        </h1>

        <div class="info">
            <div class="video">
                <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/5lPd98N0lOg"
                    title="Información del programa: Tecnología Desarrollo de Videojuegos y Entornos Interactivos"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
            <div class="info-text">
                <p id="info">
                    En este programa se aprenderá a desarrollar videojuegos y
                    entornos interactivos, partiendo desde cero, pasando por las
                    fases de preproducción, producción y posproducción.
                    Comenzando por la historia y tipos de videojuegos, para
                    poder desarrollar la idea base, elaborar el guion narrativo,
                    guion técnico, storyboard y definir las mecánicas y niveles
                    del juego
                </p>

                <tableComponent :data="formationInfoData" />
            </div>
        </div>

        <section id="justification">
            <div class="topic">
                <h1>justificación del programa</h1>
            </div>
            <justificationComponent />
        </section>

        <section id="agenda">
            <div class="topic">
                <h1>Temario de la formación</h1>
            </div>
            <detailsComponent :data="agendaData" />
        </section>

        <section id="profiles">
            <div class="topic">
                <h1>Perfiles</h1>
            </div>
            <div class="profiles-container">
                <div id="income-profile">
                    <h1>Perfil de ingreso</h1>
                    <tableComponent :data="incomeProfileData" />
                </div>
                <div id="graduation-profile">
                    <h1>Perfil de egreso</h1>
                    <p>
                        El tecnólogo en desarrollo de videojuegos y entornos
                        interactivos está capacitado para generar el código que
                        definirá el comportamiento de cada elemento del
                        videojuego (personajes, objetos, interfaces gráficas de
                        usuario etc.) y la interacción del videojuego con el
                        jugador. También comprende de manera clara las fases de
                        su diseño y todos sus componentes, como la experiencia
                        de usuario, la usabilidad, la narrativa, etc. Incorpora
                        los recursos audiovisuales, que le brindarán un orden
                        lógico al proceso de producción, asegurando de manera
                        efectiva el proyecto en toda su extensión. Igualmente
                        está en capacidad de realizar pruebas para que los
                        productos cumplan con todos los estándares y necesidades
                        del mercado, promoviendo el trabajo en equipo y el
                        respeto en el ámbito laboral y profesional.
                    </p>
                    <h1>Principales productos del trabajo del egresado</h1>
                    <ul>
                        <li v-for="product in productsData">{{ product }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="methodology">
            <div class="topic">
                <h1>Estrategia metodológica</h1>
            </div>
            <p>
                Centrada en la construcción de autonomía para garantizar la
                calidad de la formación en el marco de la formación por
                competencias, el aprendizaje por proyectos y el uso de técnicas
                didácticas activas que estimulan el pensamiento para la
                resolución de problemas simulados y reales; soportadas en el
                utilización de las tecnologías de la información y la
                comunicación, integradas, en ambientes virtuales de aprendizaje,
                que en todo caso recrean el contexto productivo y vinculan al
                aprendiz con la realidad cotidiana y el desarrollo de las
                competencias. Igualmente, debe estimular de manera permanente la
                autocrítica y la reflexión del aprendiz sobre el quehacer y los
                resultados de aprendizaje que logra a través de la vinculación
                activa de las cuatro fuentes de información para la construcción
                de conocimiento
            </p>
            <ul>
                <li v-for="methodology in methodologiesData">
                    {{ methodology }}
                </li>
            </ul>
        </section>
    </main>

    <footer>
        <div id="inscription">
            <formComponent />
        </div>

        <footerComponent />
    </footer>
</template>
