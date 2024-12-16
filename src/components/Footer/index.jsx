import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">jskrn1911</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="home__social-icon" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.github.com/" className="home__social-icon" target='_blank'>
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkdin.com/" className="home__social-icon" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
