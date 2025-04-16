**Prioridades mínimas**
👉 [Commit Guidelines](./commits-guideline.md)

**ENTIDADES**
1. Usuarios
2. Clubs de Lectura
3. Reseñas

**FUNCIONALIDADES**
- Autenticacion
[] Registro
[] Login
[] Acceso según rol (User, Admin, SuperAdmin)

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


-- FRONTEND --

**Pantallas mínimas necesarias:**

* Login
* Registro
* Home con listado de clubs
* Detalle de un club con sus reseñas
* Panel de usuario (perfil simple y clubs)
* Dashboard Admin (crear/modificar/eliminar clubs)
* Dashboard Superadmin (gestión de usuarios y roles)


**-- Otras cosas del Enunciado:**
* SPA con react-router
* Validacion de form
* Context  ->  Manejo de usuario logueado, su rol y token
* Custom Hook  ->  useAuth() o useFetch() por ejemplo
* Diseño cuidado  ->  	Que sea claro, sin errores ni cosas rotas