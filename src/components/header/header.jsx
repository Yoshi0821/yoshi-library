import React from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom';
import './header.css'
import icon from '../../img/biblioteca.png'
import Home from '../home/home'
import QuinesSomos from '../quienes-somos/quienes-somos'
import Catalogo from '../catalogo/catalogo'
import Alquiler from '../lista-alquiler/lista-alquiler'

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg content-menu">
        <div className="container-fluid">
          <img alt="biblioteca" className="icon-menu" src={icon} />
          <span className="text-white title-app me-3">Yoshi's Library</span>
          <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-white">
              <a className="nav-link text-white option-menu" href="/home">Home</a>
              <a className="nav-link text-white option-menu" href="/catalogo">Catalogo de Libros</a>
              <a className="nav-link text-white option-menu" href="/alquiler">Alquiler</a>
              <a className="nav-link text-white option-menu" href="/quienes-somos">Quiénes somos</a>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quienes-somos" element={<QuinesSomos />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/alquiler" element={<Alquiler />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}
