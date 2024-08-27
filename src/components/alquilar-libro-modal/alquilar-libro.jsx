import React, { forwardRef, useState } from 'react'
import { Modal } from 'bootstrap';
import './alquilar-libro.css';
import { useNavigate } from 'react-router-dom';

const useAsignDataAlquiler = () => {
    const [rent, setRent] = useState({ name: "", lastName: "", email: "", date: "" })

    function setName(e) {
        setRent((valores) => ({
            ...valores,
            name: e.target.value
        }))
    }

    function setLastName(e) {
        setRent((valores) => ({
            ...valores,
            lastName: e.target.value
        }))
    }

    function setEmail(e) {
        setRent((valores) => ({
            ...valores,
            email: e.target.value
        }))
    }

    function setDate(e) {
        setRent((valores) => ({
            ...valores,
            date: e.target.value
        }))
    }

    return {
        rent,
        setName,
        setLastName,
        setEmail,
        setDate
    }
}

const AlquilarLibro = forwardRef((props, ref) => {

    const libro = props.libro;

    const handleRent = useAsignDataAlquiler();

    const navigateObject = useNavigate();

    const closeModal = () => {
        const modal = Modal.getInstance(ref.current);
        modal.hide();
    };

    function saveRent() {
        var paramRent = {
            name: handleRent.rent.name,
            lastname: handleRent.rent.lastName,
            email: handleRent.rent.email,
            deliver_date: handleRent.rent.date,
            titulo: libro.titulo,
            deliver: 0
        };
        fetch('https://gateway-production-c8a1.up.railway.app/ms-alquiler/alquileres', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paramRent)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            closeModal()
            navigateObject("/alquiler", { state: { paramRent } });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="modal" ref={ref} >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Formulario de alquiler</h5>
                        <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="">
                            <div className="mb-3">
                                <h4>{libro.nombre}</h4>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control format-focus" value={handleRent.rent.name} onChange={handleRent.setName} placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Apellidos</label>
                                <input type="text" className="form-control format-focus" value={handleRent.rent.lastName} onChange={handleRent.setLastName} placeholder="" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input type="email" className="form-control format-focus" value={handleRent.rent.email} onChange={handleRent.setEmail} placeholder="" />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Fecha de devolución</label>
                                <input type="date" className="form-control format-focus" value={handleRent.rent.date} onChange={handleRent.setDate} min={new Date().toISOString().split('T')[0]} placeholder="" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-format-alquilar" onClick={saveRent}>Alquilar</button>
                        <button type="button" className="btn btn-secondary btn-close-format" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default AlquilarLibro