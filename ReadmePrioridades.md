**Prioridades mínimas**
👉 [Commit Guidelines](./commits-guideline.md)

**ENTIDADES**
1. Usuarios
2. Clubs de Lectura
3. Reseñas
4. Actividad

**FUNCIONALIDADES**
- Autenticacion
[] Registro
[] Login
[] Acceso según rol (User, Admin, SuperAdmin)
[] Relaciones entre tablas

- SuperAdmin (Usuarios)
GET /users
PUT /users/:id (cambiar rol)
DELETE /users/:id (opcional)

- Admin (Usuarios)
POST /clubs
GET /clubs
PUT /clubs/:id
DELETE /clubs/:id

- User Comun (Reseñas)
POST /reviews
GET /reviews
PUT /reviews/:id
DELETE /reviews/:id

- Activity (Actividades)
POST /activity
GET /activity
PUT /activity/:id
DELETE /activity/:id


-- FRONTEND --

**Pantallas mínimas necesarias:**

* Login  [OK]
* Registro  [OK]
* Home con listado de clubs  [OK]
* Descubre
* Detalle de un club con sus reseñas  [falta-poco]
* Panel de usuario (perfil simple y clubs)
* Dashboard Admin (crear/modificar/eliminar clubs) [falta-poco]
* Dashboard Superadmin (gestión de usuarios y roles) [OK]


**-- Otras cosas del Enunciado:**
* SPA con react-router
    * Not Found - Error 404 [OK]
    * Manejo de errores - Error 500 - pagina [OK]
* Validacion de form - back [OK] y front
* Context  ->  Manejo de usuario logueado, su rol y token (useAuth())
* Custom Hook  -> useFetch() || darkMode() - si hay tiempo

* Diseño cuidado -> Que sea claro, sin errores ni cosas rotas ** VERIFICAR TODOS LOS BOTONES POSIBLES - anotar cuales no andan y no tocar más