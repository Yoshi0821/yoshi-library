import React from 'react'
import './informacion.css'

export default function informacion(props) {
    return (
        <div className="main-content">
            <div className="content-section">
                <h2>Quiénes Somos</h2>
                <p>{props.info.quienesSomos}</p>
            </div>

            <div className="content-section">
                <h3>Nuestra Misión</h3>
                <p>{props.info.mision}</p>
            </div>

            <div className="content-section">
                <h3>Nuestro Equipo</h3>
                <p>{props.info.equipo}</p>
            </div>
        </div>
    )
}
