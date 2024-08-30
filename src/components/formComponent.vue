<script setup>
</script>

<template>
    <video id="demo-video" autoplay loop="true">
        <source src="../assets/videos/demo.mp4">
    </video>
    <p>¿Qué piensas? ¿Interesado en esta formación?</p>
    <p>¡Inscribete aqui!</p>
    <form action="" method="post">
        <label for="">Nombres</label>
        <input type="text" name="" id="" placeholder="Ingresa tus nombres" required/>
        <label for="">Apellidos</label>
        <input type="text" name="" id="" placeholder="Ingresa tus apellidos" required/>
        <label for="">Correo electrónico</label>
        <input type="email" name="" id="" placeholder="Ingresa tu correo electrónico" required/>
        <label for="">Número telefónico</label>
        <input type="number" name="" id="" placeholder="Ingresa tu número telefónico" required/>
        <button type="submit">¡registrame!</button>
    </form>
</template>

<style scoped></style>
