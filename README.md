# Ecommerce_Carnival_Masks

Este proyecto es una aplicación basada en el patrón Modelo-Vista-Controlador (MVC) que utiliza Node.js y Express para crear una API REST que gestiona las peticiones a una base de datos MySQL. La aplicación está desarrollada en JavaScript y hace uso de las dependencias npm como dotenv, mysql2 y nodemon. Es una version Beta y necesita algunas actualizaciones para ser usada en su totalidad en el entorno de producción.

## Descripción

Esta aplicación se utiliza para la gestión de productos, categorías, roles y usuarios.

## Tecnologías Utilizadas

- Visual Studio Code
- Node.js
- Express
- MySQL
- JavaScript

## Dependencias

- dotenv: Para cargar variables de entorno desde un archivo .env.
- mysql2: Cliente MySQL para Node.js.
- nodemon: Herramienta de desarrollo que reinicia automáticamente el servidor cuando se detectan cambios en el código.

## Funcionalidades

- Productos: Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los productos.
- Categorías: Permite administrar las categorías a las que pertenecen los productos.
- Roles: Gestiona los roles de los usuarios en el sistema.
- Usuarios: Permite administrar los usuarios del sistema.

## Instalación

1. Forkea este repositorio de GitHub.
   - [https://github.com/isaac-lucerito/mask](https://github.com/isaac-lucerito/mask)
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura las variables de entorno en un archivo .env (Consulta el archivo .env.example para saber qué variables necesitas).
4. Inicia la aplicación ejecutando `npm start`.
   - Si estás en un entorno de desarrollo, puedes ejecutar `npm run dev` para utilizar nodemon y reiniciar automáticamente el servidor ante cambios.

## Uso

- Accede a la API REST para realizar operaciones relacionadas con productos, categorías, roles y usuarios.
- Utiliza las rutas y métodos HTTP definidos en la API que se encuentran en el archivo api.http acá te facilitará la gestión la extension para Visual Studio Code Rest client para ver los resultados de las peticiones con la base de datos o tambien puedes hacer uso de Postman.

## Contacto

Si tienes preguntas o sugerencias relacionadas con este proyecto, no dudes en ponerte en contacto conmigo en [isaac.lucerito@gmail.com].

## AVISOS

Haciendo el ultimo check de las peticione he perdido funcinalidades que estaban y que fueron agregadas, nose que paso, pero a dejado de funcionar lo siguiente:

- Login: error de camos obligatorios.
- update user role: el usuario no fue encontrado.
- Delete user: el usuario no fue encontrado pero se actualiza en la base de datos.
- Delete role: el rol no fue encontrado pero se actualiza en la base de datos.
- Update stock: se actualizaba pero ya no.
- Update category idem: se actualizaba pero ya no.
- Create user idem: se creaba pero ya no.
