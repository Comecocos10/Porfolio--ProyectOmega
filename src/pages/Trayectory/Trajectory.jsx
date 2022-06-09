import React from 'react';
import './Trajectory.css';
import ButtomBack from '../../components/Buttom/ButtomBack'
import GhostSeccion from '../../components/Ghost/GhostSeccion'
import Clyde from '../../recursos/ThreeD/clyde.glb'
import { Link } from 'react-router-dom';
import SeccionSign from '../../components/SeccionSign/SeccionSign';
import SeccionTraject from '../../components/SeccionTraject/SeccionTraject';
import Cronology from '../../components/SeccionTraject/Cronology';
import lineTraject from '../../recursos/traject.png'
import lineTraject2 from '../../recursos/traject-little.png'



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
            <section className='crono-back'>
                <Cronology />
            </section>
            <section className='seccion-up'>    
                <SeccionTraject
                    imagen=""
                    line={lineTraject2}
                    nametraject="Bach: Arts and Humanities"
                    year="2009-2013"
                    local="IES. Tirant lo blanc (Torrent)"/>
                <SeccionTraject 
                    imagen="" 
                    line={lineTraject}
                    nametraject="Graduate in Product Design"
                    year="2013-2019"
                    local="ESAD Valencia"/>
                <SeccionTraject 
                    imagen=""
                    line={lineTraject2}
                    nametraject="Workshop: 3D-Printing"
                    year="2015"
                    local="Imparted: Ggarchitect"/>
                <SeccionTraject 
                    imagen=""
                    line={lineTraject}
                    nametraject="Factory Assistant"
                    year="2016"
                    local="ADDO Impresoras"/>
                <SeccionTraject 
                    imagen=""
                    line={lineTraject2}
                    nametraject="Preparation Manager"
                    year="2016-2017"
                    local="Mercadona" />
                <SeccionTraject 
                    imagen="" 
                    line={lineTraject}
                    nametraject="Erasmus Product Design"
                    year="2016"
                    local="Accademia di Belle Artes.(Milano)"/>
                <SeccionTraject 
                    imagen=""
                    line={lineTraject2}
                    nametraject="Intern Product Designer"
                    year="2017"
                    local="Alfred Mas Project"/>
                <SeccionTraject 
                    imagen="" 
                    line={lineTraject}
                    nametraject="Ux Researcher Junior"
                    year="2018-2020"
                    local="Mercadona Tech"/>
                <SeccionTraject 
                    imagen=""
                    line={lineTraject2}
                    nametraject="Module: Usability and CRO"
                    year="2018-2019"
                    local="EDEM" />
                <SeccionTraject 
                    imagen="" 
                    line={lineTraject}
                    nametraject="Preparation Manager"
                    year="2020-Now"
                    local="Mercadona"/>
                <SeccionTraject 
                    imagen="" 
                    line={lineTraject2}
                    nametraject="Master's Degree ID3"
                    year="2021-2022"
                    local="ESAT"/>
            </section>
            
        </div>
    );
}

export default Trajectory;