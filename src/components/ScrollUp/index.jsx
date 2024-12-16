import React from 'react'
import "./scrollup.css"

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");

        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    })

    return (
        <a href="#" className="scrollup scrollup__icon">
            <i className="uil uil-arrow-up"></i>
        </a>
    )
}

export default ScrollUp
