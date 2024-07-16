import React, {forwardRef, useState, useEffect} from 'react'
import './extender-fecha.jsx'
import { Modal } from 'bootstrap';

const extenderFecha = forwardRef((props, ref) => {

  const [date, setDate] = useState(""); 

  const rent = props.rent || {};

  function handleDate(e) {
    setDate(e.target.value)
  }

  function saveNewDate() {
    var changeDate = {
      fechaDevolucion: date,
      nombreLibro: rent.nombreLibro
    }
    closeModal(changeDate);
  }

  useEffect(() => {
    if (rent.fechaDevolucion) {
      setDate(rent.fechaDevolucion);
    }
  }, [rent.fechaDevolucion]);

  const closeModal = (value) => {
    const modal = Modal.getInstance(ref.current);
    modal.hide();
    props.onClose(value);
  };

  return (
    <div className="modal" ref={ref} >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Extender Fecha</h5>
            <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="">
              <div className="mb-2">
                <label className="form-label">Fecha de devolución</label>
                <input type="date" className="form-control format-focus" value={date} onChange={handleDate} min={rent.fechaDevolucion} placeholder="" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-format-alquilar" onClick={saveNewDate}>Extender fecha</button>
            <button type="button" className="btn btn-secondary btn-close-format" onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
});

export default extenderFecha