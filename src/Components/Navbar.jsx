import React from 'react'
import './Navbar.css';
import home from '../img/home.svg';
import ficha from '../img/ficha.svg';
import perfil from '../img/perfil.svg';
import calendario from '../img/calendario.svg';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to="/map" style={{ textDecoration: "none"}}>
                <div className='divIcon'>
                <img alt="" src={home}></img>
                 </div>
            </Link>
            <Link to="/MedicalRecord">
            <div className='divIcon'>
            <img alt="" src={ficha}></img>
            </div>
            </Link>
            <Link to="/Home" style={{ textDecoration: "none"}}>
                <div className='divIcon'>
                <img alt="" src={perfil}></img>
                </div>
            </Link>
            <Link to="/Programming" style={{ textDecoration: "none"}}>
                <div className='divIcon'>
                <img alt="" src={calendario}></img>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
