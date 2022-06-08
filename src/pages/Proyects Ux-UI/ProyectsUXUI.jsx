import React from 'react';
import './ProyectsUXUI.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Inky from '../../recursos/ThreeD/inky.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';


function ProyectsUXUI() {
    return (
        <div className="ProyectsUXUI">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion 
                modelo={Inky} />
            <SeccionSign
                seccion="Name Proyect"
                colorlight="#8DD2E8"
                colordark="#38B1D7"/>

        </div>
    );
}

export default ProyectsUXUI;