## README

### API Users — Node.js + Express +  PostgreSQL

API REST para gestión de usuarios construida con:
- Node.js
- Express
- PostgreSQL
- dotenv
- CORS

###  Requisitos

Antes de ejecutar el proyecto debes tener instalado:

- Node.js 18 o superior
- PostgreSQL
- npm

Verificar versiones:

```bash
node -v
npm -v
psql --version

```
### Instalación y Ejecución
1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```
2. Instalar dependencias
```bash
npm install

```
3. Crear base de datos y tabla
Antes de ejecutar la aplicación, asegúrate de tener PostgreSQL 

```sql
Crear la base de datos
CREATE DATABASE usersdb;

Conectarse a la base de datos
\c usersdb

Crear la tabla de usuarios
CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
```
4. Configurar conexión a PostgreSQL

Crea un archivo .env en la raíz del proyecto con tu conexión a PostgreSQL
```bash
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_de_tu_db"
```
5. Ejecutar la aplicación en desarrollo
```bash
npm run dev
```
6. Ejecutar la aplicación en producción
```bash
npm start
```