import React, { useState } from 'react'
import './buscador.css'

const useAsignData = () => {
    const [params, setParams] = useState({ input: "", select: "autor" })

    function setInputValue(e) {
        setParams((valores) => ({
            ...valores,
            input: e.target.value
        }))
    }

    function setSelectValue(e) {
        setParams((valores) => ({
            ...valores,
            select: e.target.value
        }))
    }

    return {
        params,
        setInputValue,
        setSelectValue
    }
}

function Buscador({ onValueChange }) {

    const handleNewParams = useAsignData();

    const sendNewParams = (e) => {
        e.preventDefault();
        onValueChange(handleNewParams.params)
    };

    return (
        <form onSubmit={sendNewParams} className="main-content-search">
            <div className="format-select">
                <select className="form-select format-focus" value={handleNewParams.params.select} onChange={handleNewParams.setSelectValue} aria-label="Default select example">
                    <option value="autor">Autor</option>
                    <option value="isbn">ISBN</option>
                    <option value="genero">Género</option>
                </select>
            </div>
            <div className="format-input">
                <input type="text" className="form-control format-focus" id="" placeholder="" value={handleNewParams.params.input} onChange={handleNewParams.setInputValue}></input>
            </div>
            <button type="submit" className="btn btn-format">Buscar</button>
        </form>
    )
}

export default Buscador