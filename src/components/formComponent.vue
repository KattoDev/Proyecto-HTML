<script>
export default {
    data() {
        return {
            name: "",
            surname: "",
            email: "",
        };
    },

    methods: {
        async submitForm() {
            try {
                const response = await fetch(
                    "http://localhost/projects/proyecto-SENA-v2/src/database/API/upload.php",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: new URLSearchParams({
                            name: this.name,
                            surname: this.surname,
                            email: this.email,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error("Error en la solicitud");
                }

                this.name = "";
                this.surname = "";
                this.email = "";
                alert("¡Se ha enviado tu información para el registro!");
            } catch (error) {
                alert("error al enviar el formulario :c");
            }
        },
    },
};
</script>

<template>
    <div id="demo-video">
        <video autoplay loop="true">
            <source src="../assets/videos/demo.mp4" />
        </video>
        <div id="text">
            <p>¿Qué piensas? ¿Interesado en esta formación?</p>
            <p>¡Inscribete aqui!</p>
        </div>
    </div>
    <form @submit.prevent="submitForm">
        <label for="">Nombres</label>
        <input
            type="text"
            v-model="name"
            placeholder="Ingresa tus nombres"
            required="true"
        />

        <label for="">Apellidos</label>
        <input
            type="text"
            v-model="surname"
            placeholder="Ingresa tus apellidos"
            required="true"
        />

        <label for="">Correo electrónico</label>
        <input
            type="email"
            v-model="email"
            placeholder="Ingresa tu correo electrónico"
            required="true"
        />

        <button type="submit" name="upload">¡registrame!</button>
    </form>
</template>
