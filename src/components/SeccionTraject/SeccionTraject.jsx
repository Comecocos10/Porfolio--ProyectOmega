import React, { useState } from 'react';
import './SeccionTraject.css';
import fondo from '../../recursos/cabecera-gray.png'

export default function SeccionTraject(props) {    
        
    const [isOpened2, setIsOpened] = useState(false);

    function showTrajectory() {
        setIsOpened(!isOpened2);
    }
    
    return  <div className='total-trajectory'>
        <button className='trajectory' onClick={showTrajectory}>
            <img src="" alt="" />
        </button>
        <p className='text-trajectory'> {props.nametraject} Titulacion/Puesto </p>
        {isOpened === true ? <section className='trajectory-open'>
            <img className='img-info' src={fondo} alt="" />
            <div className='info-trajectory'>
                <p className='text-info one'> {props.name} Titulacion/Puesto </p>
                <p className='text-info two'> {props.year} 0000 - 0000 </p>
                <p className='text-info three'> {props.local} I.E.S Tirant lo blanc </p>
            </div>
        </section> : ''}
    </div>
}