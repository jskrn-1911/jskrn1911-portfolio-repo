import React, { useState } from 'react'
import "./header.css"

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");

        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("show-scroll");
    })

    const [toggle, setToggle] = useState(false);
    const [activeTab, setActiveTab] =useState("#home")
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="/" className='nav__logo'>Jskrn S.</a>
                <div className={toggle ? "nav__menu  show-menu" : "nav__menu"}>
                    <ul className='nav__list '>

                        <li className='nav__item'>
                            <a href="#home" onClick={() => setActiveTab("#home")} className={activeTab === "#home" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-estate nav__icon'></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#about" onClick={() => setActiveTab("#about")} className={activeTab === "#about" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-user nav__icon'></i> About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#skills" onClick={() => setActiveTab("#skills")} className={activeTab === "#skills" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-file-alt nav__icon'></i> Skills
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#services" onClick={() => setActiveTab("#services")} className={activeTab === "#services" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-briefcase-alt nav__icon'></i> Services
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#portfolio" onClick={() => setActiveTab("#portfolio")} className={activeTab === "#portfolio" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-scenery nav__icon'></i> Portfolio
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#contact" onClick={() => setActiveTab("#contact")} className={activeTab === "#contact" ? "nav__link active-link": "nav__link"}>
                                <i className='uil  uil-message nav__icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times  nav__close' onClick={() => setToggle(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={()=> setToggle(!toggle)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
