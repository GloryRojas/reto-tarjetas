import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Usuario.css';

const Usuario = (props) => {
    const persona = props.location.state.info;

        axios('http://3.92.189.98/tpp_apps/api/get_prueba',
        {
            method: 'POST',
            params: {
            } 
        })
            .then(resp => console.log(resp))

    return (
        <>
            <div key={persona.id} className="persona">
                <p>Nombre: {persona.name}</p>
                <p>Apellido: {persona.surname}</p>
                <p>Nacimiento: {persona.birth_date}</p>
                <p>Sueldo: {persona.salary}</p>
            </div>
            <Link to={'/'}>Volver</Link>
        </>
    )
}

export default Usuario;