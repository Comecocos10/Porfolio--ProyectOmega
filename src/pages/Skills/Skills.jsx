import React from 'react';
import './Skills.css';
import ButtomBack from '../../components/Buttom/ButtomBack';
import GhostSeccion from '../../components/Ghost/GhostSeccion';
import Pinky from '../../recursos/ThreeD/pinky.glb';
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';


function Skills() {
    return (
        <div className="Skills">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion
                modelo={Pinky}/>
            <SeccionSign
                seccion="Skills"
                colorlight="#F1BCE5"
                colordark="#E893D5"/>

        </div>
    );
}

export default Skills;