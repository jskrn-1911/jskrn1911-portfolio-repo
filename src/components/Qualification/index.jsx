import React, { useState } from 'react'
import "./qualification.css"


const Qualification = () => {
    const [toggleState, setToggleState] = useState(2)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className='qualification  section' id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designing</h3>
                                <span className='qualification__subtitle'>Omninos Technologies Pvt. Lmt. - Mohali</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>2023 - 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">B.Sc. AI. & DS.</h3>
                                <span className='qualification__subtitle'>Mata Gujri College - Fatehgarh Sahib</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>2020 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Senior Secondary</h3>
                                <span className='qualification__subtitle'>Uma Rana Public School - Sanghol</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className='qualification__subtitle'>Fuvay Technologies Pvt. Lmt. - Mohali</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>May 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">Full Stack Training</h3>
                                <span className='qualification__subtitle'>Fuvay Technologies. Pvt. Lmt. - Mohali</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>Feb 2024 - May 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Web Design Internship</h3>
                                <span className='qualification__subtitle'>Omninos Technologies Pvt. Lmt. - Mohali</span>
                                <div className='qualification__calender'>
                                    <i className="uil uil-calender-alt"></i>2023 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification
