import React from 'react'
import './home.css'
import welcome from '../../img/welcome.jpeg'

export default function home() {
  return (
    <div className="content-welcome">
        <p className="text-welcome">Bienvenidos a Yoshi's Library</p>
        <img alt="welcome-home" className="size-welcome" src={welcome}/>
    </div>
  )
}
