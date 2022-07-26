import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from "react-icons/hi"
import { motion } from "framer-motion";
import "./Navbar.scss"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        {/* The above div is used to create that dot when hovered */}
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt3 onClick={() => setToggle(true)} />

                {/* if toggle is true  */}
                {toggle &&
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                }
            </div>
        </nav>
    )
}

export default Navbar