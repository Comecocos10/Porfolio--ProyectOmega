import React from 'react';
import './Header.css';
import Menu from "../Menu/Menu"
import image from '../../recursos/Logo-little.png'


export default function Header(props) {

    return <header className="header">
        <img className="miniLogo" src={image} />
        <Menu
        />
    </header>;
}