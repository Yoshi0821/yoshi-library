import React, { useState, useEffect, useRef } from 'react'
import './lista-alquiler.css'
import rentsData from '../../data/alquiler.json'
import { Modal } from 'bootstrap';
import ModalExtendDate from '../extender-fecha-modal/extender-fecha'
import { useLocation } from 'react-router-dom';

function ListaAlquiler() {

    const [rents, setRents] = useState([]);

    const [selectedRent, setSelectedRent] = useState({});

    const modalRef = useRef();

    const location = useLocation();
    const rentObject = location.state || {};

    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    };

    const getRentals = async () => {
        try {
            const response = rentsData;
            if (!response) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            setRents(response);
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    };

    useEffect(() => {
        getRentals();
        if (rentObject.paramRent) {
            handleShowAlert();
            setRents(prevRents => [...prevRents, rentObject.paramRent]);
        }
    }, []);

    const openModalExtendDate = (rent) => {
        setSelectedRent(rent)
        const modal = new Modal(modalRef.current);
        modal.show();
    };

    const closeModal = (dataFromModal) => {
        if (dataFromModal) {
            setRents(prevRents =>
                prevRents.map(rent =>
                    rent.nombreLibro === dataFromModal.nombreLibro ? { ...rent, fechaDevolucion: dataFromModal.fechaDevolucion } : rent
                )
            );
        }
    };

    return (
        <div className="content-main">
            {showAlert && (
                <div className="alert alert-success mt-3" role="alert">
                    ¡El alquiler del libro se registró correctamente!
                </div>
            )}
            <div className="content-info">
                <h3>Lista de libros alquilados</h3>
                <span className="more-info">Aquí puedes revisar y gestionar los libros que están actualmente alquilados por los usuarios. Esta lista te proporciona una visión detallada de los préstamos en curso, permitiéndote realizar seguimientos y gestionar el inventario de la biblioteca de manera eficiente.</span>
            </div>
            <div className="mt-3">
                <table className="table custom-table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="text-format">Nombre</th>
                            <th scope="col" className="text-format">Apellidos</th>
                            <th scope="col" className="text-format">Email</th>
                            <th scope="col" className="text-format">Nombre del libro</th>
                            <th scope="col" className="text-format">Devolución</th>
                            <th scope="col" className="text-format">Fecha de devolución</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rents.map((rent, index) => (
                            <tr key={index}>
                                <td className="text-format">{rent.nombre}</td>
                                <td className="text-format">{rent.apellido}</td>
                                <td className="text-format">{rent.email}</td>
                                <td className="text-format">{rent.nombreLibro}</td>
                                <td className="text-format ps-3">
                                    <div className="form-check">
                                        <input className="form-check-input" readOnly type="checkbox" checked={rent.estadoDevolucion} />
                                    </div>
                                </td>
                                <td className="text-format"> {rent.fechaDevolucion}
                                    {rent.estadoDevolucion ? (
                                        ""
                                    ) : (<button type="button" onClick={() => openModalExtendDate(rent)} className="ms-3 btn btn-sm btn-format-extender">Extender fecha</button>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalExtendDate ref={modalRef} rent={selectedRent} onClose={closeModal} />
        </div>
    )
}

export default ListaAlquiler