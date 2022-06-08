import React from 'react';
import './Finish.css';
import All from '../../recursos/ThreeD/finish.glb'

export default function Finish() {
   /* (() => {
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

    return <div className='finish'>
        <h3 className='titel-finish'>Finish</h3>           
        <model-viewer
            className="finish-model"
            id="orbit-demo"
            interpolation-decay="100" 
            bounds="tight" 
            enable-pan src={All} 
            ar ar-modes="webxr scene-viewer quick-look" 
            environment-image="neutral" 
            poster="poster.webp" 
            exposure="1.12" 
            style={{ width: '500px', height: '300px' }}>
            </model-viewer>
        <p className='congratulation'> Congratualtion!</p>
        <p className='captured'> You have captured them all</p>
        <a className='email' href="mailto:andrea.hernan.93@gmail.com">¡¡You win my email!!</a>
    </div>
}