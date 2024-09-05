# proyecto SENA
Proyecto de sobre una replica de una pagina de oferta de formación para <b>TECNOLOGO EN DESARROLLO DE VIDEOJUEGOS Y ENTORNOS INTERACTIVOS</b> 

# Detalles del proyecto

## Tecnologias usadas
- HTML 5
- JavaScript
- CSS
- PHP

## Frameworks
- Vue.js

## Empaquetadores
- Vite

<br>
<br>

## Instalación local del proyecto

1. posicionarse en el directorio del proyecto

```sh
cd proyecto SENA
```

2.  Instalación de dependencias con node js

```sh
npm install
```

3.  Instalación de la base de datos en PHPMyAdmin

-  dirigirse a la ruta: ```src\database\API\``` 

- iniciar PHPMyAdmin en modo local e importar el archivo llamado ```api_proj_sena.sql```

- crear un usuario con las siguientes caracteristicas:
```
user name: API
host name: %
Password: W9lMh-hTF2-eqRHh

global privilegies
- [X] Data
    → SELECT
    → INSERT
    → UPDATE
    → DELETE
    → FILE
- [ ] Structure
- [ ] Administration
- Resource limits
    → todos a 0

SSL
- [X] REQUIRE NONE
```

4. Ejecución via localhost 

```sh
npm run dev
```

** Asegurate que el puerto en el que esté ejecutandose el servidor de vite sea 
```
http://localhost:5173
```

en caso contrario modifica el archivo ```src\database\API\getData.php``` y ```src\database\API\upload.php```
para que contenga la siguiente directriz:

```php
// PUERTO se modifica con el puerto que inicio vite EJ: 7777
header("Access-Control-Allow-Origin: http://localhost:PUERTO");
```
