import React, { useRef, useState } from 'react'
import './card-libro.css'
import { Modal } from 'bootstrap';
import ModalVerMas from '../ver-mas-modal/ver-mas';
import ModalAlquilar from '../alquilar-libro-modal/alquilar-libro'

function CardLibro({ libros = [] }) {

    const [selectedLibro, setSelectedLibro] = useState({});

    const modalRef = useRef();
    const modalRefAlquiler = useRef();

    const openModalVerMas = (libro) => {
        setSelectedLibro(libro)
        const modal = new Modal(modalRef.current);
        modal.show();
    };

    const openModalFormulario = (libro) => {
        setSelectedLibro(libro)
        const modal = new Modal(modalRefAlquiler.current);
        modal.show();
    };

    return (
        <div className="content-cards">
            {libros.map((libro) =>
                <div className="card-main-content" key={libro.cve_id}>
                    <div className="card">
                        <img src={libro.imagenPortada} className="card-img-top size-image" alt="book-image" />
                        <div className="card-body">
                            <h5 className="card-title">{libro.nombre}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><span className="fw-bold">Autor: </span>{libro.autor}</li>
                            <li className="list-group-item">
                                <span className="fw-bold">Géneros: {libro.generos}</span>
                            </li>
                        </ul>
                        <div className="card-body content-btn">
                            <button type="button" className="btn btn-format-ver-mas me-2" onClick={() => openModalVerMas(libro)}>Ver más</button>
                            <button type="button" className="btn btn-format-alquilar" onClick={() => openModalFormulario(libro)}>Alquilar</button>
                        </div>
                    </div>
                </div>
            )}
            <ModalVerMas ref={modalRef} libro={selectedLibro}/>
            <ModalAlquilar ref={modalRefAlquiler} libro={selectedLibro}/>
        </div>
    )
}

export default CardLibro    