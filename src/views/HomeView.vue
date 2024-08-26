<script setup>
import headerComponent from "../components/header/headerComponent.vue";
import bannerComponent from "@/components/main/bannerComponent.vue";
import navbuttonsComponent from "@/components/main/navbuttonsComponent.vue";
import justificationComponent from "@/components/main/justificationComponent.vue";
import tableComponent from "@/components/tableComponent.vue";
import detailsComponent from "@/components/detailsComponent.vue";

import {
    formationInfoData,
    productsData,
    agendaData,
    incomeProfileData,
    methodologiesData,
} from "@/assets/info";

</script>

<template>
    <header>
        <headerComponent />
    </header>

    <main>
        <bannerComponent />

        <h1 class="welcome">
            ¡Te damos la bienvenida a Desarrollo de videojuegos y entornos
            interactivos!
        </h1>

        <div class="info">
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
            </div>
            <tableComponent :data="formationInfoData" />
        </div>

        <navbuttonsComponent/>

        <section id="justification">
            <h1>justificación del programa</h1>
            <justificationComponent />
        </section>

        <section id="agenda">
            <h1>Temario de la formación</h1>
            <detailsComponent :data="agendaData" />
        </section>

        <section id="profiles">
            <div id="income-profile">
                <h1>Perfil de ingreso</h1>
                <tableComponent :data="incomeProfileData" />
            </div>
            <div id="graduation-profile">
                <h1>Perfil de egreso</h1>
                <p>
                    El tecnólogo en desarrollo de videojuegos y entornos
                    interactivos está capacitado para generar el código que
                    definirá el comportamiento de cada elemento del videojuego
                    (personajes, objetos, interfaces gráficas de usuario etc.) y
                    la interacción del videojuego con el jugador. También
                    comprende de manera clara las fases de su diseño y todos sus
                    componentes, como la experiencia de usuario, la usabilidad,
                    la narrativa, etc. Incorpora los recursos audiovisuales, que
                    le brindarán un orden lógico al proceso de producción,
                    asegurando de manera efectiva el proyecto en toda su
                    extensión. Igualmente está en capacidad de realizar pruebas
                    para que los productos cumplan con todos los estándares y
                    necesidades del mercado, promoviendo el trabajo en equipo y
                    el respeto en el ámbito laboral y profesional.
                </p>
                <h1>Principales productos del trabajo del egresado</h1>
                <ul>
                    <li v-for="product in productsData">{{ product }}</li>
                </ul>
            </div>
        </section>

        <section id="methodology">
            <h1>Estrategia metodológica</h1>
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

    <footer></footer>
</template>
