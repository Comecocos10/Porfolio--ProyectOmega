import React from 'react';
import './ProjectsProduct.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Blnky from '../../recursos/ThreeD/blinky.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';


function ProjectsProduct() {
    return (
        <div className="ProjectsProduct">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion 
                modelo={Blnky} />
            <SeccionSign
                seccion="Name Proyect"
                colorlight="#E78E8E"
                colordark="#D43A3A" />

        </div>
    );
}

export default ProjectsProduct;