import React from 'react';
import './Likes.css';


function Likes(props) {
    return (
        <div className="Likes">
            <img className='video-like' src={props.videolike} alt="" />
            <h3 className='titulo-like'>{props.titulolike} Titulo </h3>
            <div className='navegacion'>
                <svg className='arrow izqui' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 25L4 13L22 1V25Z" fill="black" />
                </svg>
                <p className='text-like'>{props.nombrelike} Nombre</p>
                <svg className='arrow drcha' width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 25L4 13L22 1V25Z" fill="black" />
                </svg>
            </div>
            <img className='img-like' src={props.imagenlike} alt="" />
        </div>
    );
}

export default Likes;