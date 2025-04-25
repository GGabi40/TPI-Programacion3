import React from 'react'

const Register = () => {
    return (
        <div>
            <div className='form-container'>
            <h2 id='crearCuenta'>CREE SU CUENTA</h2>
            <br />
                <form>
                    <label>Nombre de Usuario:</label>
                    <input type="text" />
                    
                    <label>Ingrese su email:</label>
                    <input type="email" />
                    
                    <label>Ingrese su clave:</label>
                    <input type="password" />
                   
                    <label>Confirmar clave:</label>
                    <input type="password" />
                    
                    <label>Fecha de nacimiento</label>
                    <input type="date" />
                    
                    <p>¿Ya tiene una cuenta? <a href="" id='redireccion'>Iniciar sesion</a></p>
                    <button type="submit">Crear Cuenta</button>
                </form>
                </div>
        </div>
    )
}

export default Register