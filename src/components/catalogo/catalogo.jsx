import React, { useState, useEffect } from 'react'
import './catalogo.css'
import CardLibro from '../card-libro/card-libro'
import librosData from '../../data/libros.json'
import Buscador from '../buscador/buscador'

function Catalogo() {

    const _ = require('lodash');

    const [libros, setBooks] = useState([]);

    const [librosWithoutParams, setAllBooks] = useState([]);

    const [paramsSearch, setValueParamsSearch] = useState({});

    const paramsFromSearch = async (value) => {
        setValueParamsSearch(value);
    };

    const getBooks = async () => {
        try {
            const response = librosData;
            if (!response) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            setBooks(response);
            setAllBooks(response)
        } catch (error) {
            console.error('Error al cargar los datos:', error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    async function applyFilter(filters) {
        var temp = [];
        if (filters.input) {
            librosWithoutParams.forEach(libro => {
                Object.keys(libro).forEach(key => {
                    if (key.includes(filters.select)) {
                        if (Array.isArray(libro[key])) {
                            var find = libro[key].find(item => item.toLowerCase().includes(filters.input.toLowerCase()))
                            if (find !== undefined) {
                                temp.push(libro)
                            }
                        } else {
                            var valueFormt = libro[key].toLowerCase()
                            if (valueFormt.includes(filters.input.toLowerCase())) {
                                temp.push(libro)
                            }
                        }
                    }
                });
            });
            temp = _.uniqBy(temp, 'id');
            setBooks(temp);
        }else{
          getBooks()  
        }
    }

    useEffect(() => {
        applyFilter(paramsSearch)
    }, [paramsSearch]);

    return (
        <div className="content-main">
            <div className="content-info">
                <h3>Catálogo de Libros</h3>
                <span className="more-info">A continuación, presentamos nuestro catálogo de libros, una selección cuidadosamente curada que abarca una amplia variedad de géneros y autores. Explore nuestras recomendaciones y descubra su próxima gran lectura entre nuestras opciones destacadas.</span>
            </div>
            <div>
                <Buscador onValueChange={paramsFromSearch} />
            </div>
            <div>
                <CardLibro libros={libros} />
            </div>
        </div>
    )
};

export default Catalogo