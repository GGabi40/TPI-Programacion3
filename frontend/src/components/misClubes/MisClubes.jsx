import React from 'react'
import LeftNav from '../nav/LeftNav';
import FooterSmall from '../footer/FooterSmall';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const MisClubes = () => {
    return (
        <div>
            <LeftNav />
            <div className="hero-club"> {/*probando aca decia hero-container */}
                <h1>Mis clubes</h1>
                <hr />
                {/* Seguirian los Cards */}

                {/* Cardd de ejemplo */}
                <div className="club-cards-parent2">
                    <div className="club-card-child violet">
                        <FontAwesomeIcon icon={faBook} size="3x" />
                        <p>Club de Lectura</p>
                        <button type='submit' className='btn-cards'>Moficar</button>
                        <button type='submit' className='btn-cards'>Eliminar</button>
                    </div>
                    

                    <div className="club-card-child violet">
                        <FontAwesomeIcon icon={faBook} size="3x" />
                        <p>Club de Misterio</p>
                        <button type='submit'>Moficar</button>
                        <button type='submit'>Eliminar</button>
                    </div>

                    <div className="club-card-child red">
                        <FontAwesomeIcon icon={faBook} size="3x" />
                        <p>Club de Romance</p>
                        <button type='submit'>Moficar</button>
                        <button type='submit'>Eliminar</button>
                    </div>
                </div>


                <div className="break"></div>



            </div>
            <FooterSmall />
        </div>
    )
}

export default MisClubes
