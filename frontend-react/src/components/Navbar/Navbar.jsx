import React from 'react'
import { images } from "../../constants"
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div /> 
                        {/* The above div is used to create that dot when hovered */}
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar