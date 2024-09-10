<script>
export default {
    data() {
        return {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            gender: "",
            commentary: "",
        };
    },

    methods: {
        async submitForm() {
            if (
                this.commentary.toLowerCase().includes("¿dónde está el gato?")
            ) {
                alert("buscando el gato...");
                window.open("/the-forbiden", "_self");
            } else {
                try {
                    const response = await fetch(
                        "http://localhost/projects/proyecto-SENA-v2/src/database/API/upload.php",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded",
                            },
                            body: new URLSearchParams({
                                name: this.name,
                                surname: this.surname,
                                email: this.email,
                                phoneNumber: this.phoneNumber,
                                gender: this.gender,
                                commentary: this.commentary,
                            }),
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Error en la solicitud");
                    }

                    this.name = "";
                    this.surname = "";
                    this.email = "";
                    this.phoneNumber = "";
                    this.gender = "";
                    this.commentary = "";
                    alert("¡Se ha enviado tu información para el registro!");
                } catch (error) {
                    alert("error al enviar el formulario :c");
                }
            }
        },
    },
};
</script>

<template>
    <div id="demo-video">
        <video autoplay loop="true">
            <source src="../../assets/videos/demo.mp4" />
        </video>
    </div>

    <form @submit.prevent="submitForm">
        <label for="names">Nombres</label>
        <input
            type="text"
            v-model="name"
            placeholder="Ingresa tus nombres"
            required="true"
        />

        <label for="surnames">Apellidos</label>
        <input
            type="text"
            v-model="surname"
            placeholder="Ingresa tus apellidos"
            required="true"
        />

        <label for="email">Correo electrónico</label>
        <input
            type="email"
            v-model="email"
            placeholder="Ingresa tu correo electrónico"
            required="true"
        />

        <label for="phoneNumber">Número telefónico</label>
        <input
            type="number"
            v-model="phoneNumber"
            placeholder="Ingresa tu Número de teléfono"
            required="true"
        />

        <label for="genre">Genero:</label>
        <select v-model="genre" required="true">
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
        </select>

        <label for="commentary">¿Algún comentario o duda?</label>
        <textarea
            v-model="commentary"
            placeholder="Escribe aquí la duda que quieras resolver o comentario a realizar"
        ></textarea>

        <button type="submit" name="upload">¡registrame!</button>
    </form>
</template>
