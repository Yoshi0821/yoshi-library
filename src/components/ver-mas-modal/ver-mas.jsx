import React, { forwardRef } from 'react'
import './ver-mas.css'
import { Modal } from 'bootstrap';

const VerMas = forwardRef((props, ref) => {

    const libro = props.libro;

    const closeModal = () => {
        const modal = Modal.getInstance(ref.current);
        modal.hide();
    };

    return (
        <div className="modal" ref={ref} >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{libro.nombre}</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="content-body">
                            <span className="fw-bold">Autor: </span>{libro.autor}
                        </div>
                        <div className="content-body">
                            <span className="fw-bold">Año de publicación: </span>{libro.añoDePublicacion}
                        </div>
                        <div className="content-body">
                            <span className="fw-bold">Sinopsis: </span>{libro.sinopsis}
                        </div>
                        <div className="content-body">
                            <span className="fw-bold">ISBN: </span>{libro.isbn10}
                        </div>
                        <div className="content-body">
                            <span className="fw-bold">ISBN-13: </span>{libro.isbn13}
                        </div>
                        <div className="">
                            <span className="fw-bold">Críticas: </span>
                            {libro.criticas?.map((item,index) =>
                                <div className="ps-2" key={index}>
                                    <span>- {item}</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-close-format" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default VerMas