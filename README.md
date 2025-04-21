## Proyecto Final DevOps

Esta es una aplicación web simple desarrollada con Node.js, Express, y MongoDB. El frontend está hecho con HTML, CSS, y JavaScript, y la aplicación permite guardar un nombre en la base de datos.

### Requisitos
Debe tener lo siguiente instalado en tu PC:

- Node.js
- MongoDB Community

### Configuración del Proyecto

#### Clonar el repositorio
Primero, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/Proyecto_Final_Devops.git
cd Proyecto_Final_Devops
```

### Instalar dependencias
Una vez dentro del directorio del proyecto, instala las dependencias:

```bash
npm install
```

### Configurar MongoDB
Asegúrate de que MongoDB esté corriendo en tu máquina local. Ejecuta lo siguiente:

```bash
mongod
```

### Configurar archivo .env
Crea un archivo .env en la raíz del proyecto con la siguiente configuración:

PORT=4000
MONGO_URI=mongodb://localhost:27017/proyecto_final_devops

### Ejecutar el proyecto
Ejecuta lo siguiente en la terminal:

```bash
npm run dev
```

Esto debería iniciar el servidor en http://localhost:4000
