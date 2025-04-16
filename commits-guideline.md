# 🧾 Guía para Mensajes de Commit

## 🚀 Funcionalidades nuevas
feat: add <feature name>
feat: implement <feature or module> logic
feat: create page for <section>

## 🛠️ Cambios en estructura o backend
chore: setup project structure for <backend/frontend>
chore: configure <tool or setting>

## 🔐 Autenticación y seguridad
feat: add authentication system
feat: implement user role validation
feat: protect routes based on user roles

## 🧱 Modelos y base de datos
feat: add <model name> model and migration
feat: create relationships between <model1> and <model2>

## 🔄 ABM
feat: add CRUD for <entity>
fix: fix update logic for <entity>
refactor: improve controller logic for <entity>

## 🎨 Frontend
feat: build UI for <page or component>
style: update styles for <component or page>
fix: fix layout issue on <page>

## ⚙️ Context y hooks
feat: add context for <context name>
feat: create custom hook <hook name>

## 🧪 Validaciones y errores
feat: add form validation for <form name>
fix: handle 404 and server errors
feat: show error/success messages in forms

## 🧹 Otros
docs: update README with <info>
chore: cleanup unused files and code


---
## ✏️ Convención de prefijos:
 **feat** → *feature* → cuando se agrega una nueva funcionalidad  

- **fix** → *fix* → cuando se corrige un error o bug  

- **docs** → *documentation* → cambios en documentación (README, guías, etc.)  

- **style** → *styling* → cambios de estilo o formato (sin afectar lógica)  

- **refactor** → *refactor* → reestructuración del código sin cambiar su comportamiento  

- **test** → *test* → cuando se agregan o modifican tests  

- **chore** → *chore* → tareas de mantenimiento o configuración  

- **perf** → *performance* → mejoras de rendimiento  

- **build** → *build config* → cambios en configuración de build (Vite, Webpack, etc.)  

- **ci** → *continuous integration* → configuración o ajustes en CI/CD (GitHub Actions, etc.) 


### ✅ Buenas prácticas
- Usá verbos en infinitivo en inglés: `add`, `fix`, `update`, `remove`.
- Que cada commit represente una sola acción.
- En inglés, cortito y claro.
- Usá presente simple (no uses "added", "fixed", etc.).