import React from 'react';
import './Trajectory.css';
import ButtomBack from '../../components/Buttom/ButtomBack'
import GhostSeccion from '../../components/Ghost/GhostSeccion'
import Clyde from '../../recursos/ThreeD/clyde.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import SeccionTraject from '../../components/SeccionTraject/SeccionTraject';
import Cronology from '../../components/SeccionTraject/Cronology';



function Trajectory() {
    return (
        <div className="Trajectory">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <GhostSeccion
                modelo={Clyde}/>
            <SeccionSign
                seccion="Trajectory"
                colorlight="#EFC594"
                colordark="#E2963B"/>
            <Cronology/>
            <SeccionTraject
                imagen=""/>
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
            <SeccionTraject 
                imagen="" />
        </div>
    );
}

export default Trajectory;