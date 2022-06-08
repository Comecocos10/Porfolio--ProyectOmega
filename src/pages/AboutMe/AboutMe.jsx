import React from 'react';
import './AboutMe.css';
import ButtomBack from '../../components/Buttom/ButtomBack'
import { Link } from 'react-router-dom';
import Description from '../../components/Description/Description';
import Likes from '../../components/Likes/Likes';


function AboutMe() {
    return (
        <div className="AboutMe">
            <Link className='text-decoration' to='/'>
                <ButtomBack />
            </Link>
            <Description/>
            <h1 className='titel-like'>... and I liked...</h1>
            <Likes
                videolike=""
                titulolike=""
                nombrelike=""
                imagenlike=""/>
            <Likes/>
            <Likes/>
            <Likes/>
        </div>
    );
}

export default AboutMe;