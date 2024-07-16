import React from 'react'
import './contactos.css'
import books from '../../img/books.png'

function contactos(props) {
    return (
        <div className="main-content">
            <div className="content-section">
                <h3>Nuestra Visión</h3>
                <p>{props.info.vision}</p>
            </div>
            <div className="content-section">
                <h2>Contacto</h2>
                <p>{props.info.contacto}</p>
                <div className="content-contact">
                    <div>
                        <div className="content-more-info">
                            <p className="text-subtitle">Ubicación: </p>
                            <p>{props.info.ubicacion}</p>
                        </div>
                        <div className="content-more-info">
                            <p className="text-subtitle">Teléfono: </p>
                            <p>{props.info.telefono}</p>
                        </div>
                        <div className="content-more-info">
                            <p className="text-subtitle">Email: </p>
                            <p>{props.info.email}</p>
                        </div>
                    </div>
                    <div>
                        <img className="img-books-size" src={books} alt="seccion contacto"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default contactos