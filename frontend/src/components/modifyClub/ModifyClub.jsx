import React from 'react'
import LeftNav from '../nav/LeftNav';
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import FooterSmall from '../footer/FooterSmall';

const ModifyClub = () => {
  return (
    <div>
      <LeftNav />

      <div className="background-animated">
        <div className="light-orb"></div>
      </div>

      <div className="form-container margin">
        <div className="logo-form">
          <img src={logo} alt="Logo Inklink" />
        </div>

        <h2 id="crearNuevoClub" className="text-align">
          ACTUALIZAR CLUB
        </h2>
        <br />
        <form>
          <label>Modifique el Nombre del Club:</label>
          <input type="text" id="name" placeholder="Ej: Modifique el Nombre Club" />

          <label>Ingrese la Descripción:</label>
          <input type="textarea" id="description" placeholder='Modifique la descripcion' max={200}/>

          <label>Cambie el Sistema de Progreso:</label>
          <select name="progress" id="progress">
            <option value="">Seleccione una opción</option>
            <option value="sincronica">Forma Sincrónica</option>
            <option value="asincronica">Forma Asincrónica</option>
          </select>

          <label>Modifique el Género:</label>
          <select name="gender" id="gender">
            <option value="">Seleccione una opción</option>
            <option value="fantasia">Fantasía</option>
            <option value="romance">Romance</option>
            <option value="ficcion">Ficción</option>
            <option value="cienciaficcion">Ciencia Ficcion</option>
            <option value="misterio">Misterio</option>
            <option value="terror">Terror</option>
            <option value="noficcion">No Ficción</option>
            <option value="litjuvenil">Literatura Juvenil</option>
            <option value="policial">Policial</option>
            <option value="otro">Otro</option>
          </select>

          <label>Modifique el Interés:</label>
          <input type="textarea" id="interest" placeholder="Autor / Vampiros / etc" />

          <label>Modifique la Privacidad del Club:</label>
          <input type="checkbox" id="privacy" name='privacy'/>

          <label>Modifique la Restricción de Edad:</label>
          <input type="checkbox" id="restriction" name='restriction'/>

          <button type="submit">Actualizar Club</button>

          
        </form>
      </div>
      <FooterSmall />
    </div>
  )
}

export default ModifyClub
