import React, { Component } from 'react';

import './Header.css';
import Logo from '../../assets/Logo.svg'

class Header extends Component {
    render() {
        return <div className="containerHeader">
            <div className="logo">
                <img className="app-logo" src={Logo} alt="Logotipo" />
            </div>
            <div className="nav">
                <nav className="menu">
                    <ul>
                        <li><a href="#Overview">Overview</a></li>
                        <li><a href="#Contagion">Contagion</a></li>
                        <li><a href="#Symptoms">Symptoms</a></li>
                        <li><a href="#Prevention">Prevention</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    }
}
export default Header;  