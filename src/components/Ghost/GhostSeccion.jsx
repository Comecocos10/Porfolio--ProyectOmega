import React from 'react';
import './GhostSeccion.css';


export default function GhostSeccion(props) {

    /*userEffect(() => {
        const modelViewer = document.querySelector('#orbit-demo');
        const orbitCycle = [
            '45deg 55deg 4m',
            '-60deg 110deg 2m',
            modelViewer.cameraOrbit
        ];

        setInterval(() => {
            const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
            modelViewer.cameraOrbit =
                orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
        }, 3000);
    })();*/

    return <div className='threeDseccion '>
            <div className="model-seccion">
                <model-viewer 
                    cameraOrbit
                    id="orbit-demo" 
                    interpolation-decay="100" 
                    src={props.modelo} 
                    ar ar-modes="webxr scene-viewer quick-look" 
                    environment-image="neutral" 
                    exposure="1.12">
                </model-viewer>
            </div> 
        </div>
}