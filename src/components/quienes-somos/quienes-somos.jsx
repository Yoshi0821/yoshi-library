import React, {useState, useEffect} from 'react'
import './quienes-somos.css'
import Informacion from '../informacion/informacion'
import Contacto from '../contactos/contactos'
import dataInfo from '../../data/informacion.json'

export default function QuienesSomos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = dataInfo;
        if (!response) {
          throw new Error('No se pudo cargar el archivo JSON');
        }
        setData(response);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="content-quienes-somos">
      <Informacion info={data}/>
      <Contacto info={data}/>
    </div>
  )

};