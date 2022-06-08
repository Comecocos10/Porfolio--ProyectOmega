import React from 'react';
import './Footer.css';
import RRSS from "./RRSS"
import image from '../../recursos/Logo-little.png'
import ghostInsta from '../../recursos/ghostInsta.png'
import ghostBehance from '../../recursos/ghostBehance.png'
import ghostLinkedi from '../../recursos/ghostLinkedi.png'
import ghostGIT from '../../recursos/ghostGIT.png'


export default function Footer(props) {

    return <footer className="footer">
        <p className='text-rrss'>Conctact me in:</p>
        <div className='footer-icons'>
            <img className="mini-Logo" src={image} />
            <section className='section-rrss'>
                <RRSS
                    ghostrrss={ghostInsta}
                />
                <RRSS
                    ghostrrss={ghostBehance}
                />
                <RRSS
                    ghostrrss={ghostLinkedi}
                />
                <RRSS
                    ghostrrss={ghostGIT}
                />
            </section>

        </div>
        
    
    </footer>;
}
