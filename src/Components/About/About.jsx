import React from 'react'
import './about.scss'

function About() {
  return (
    <div className='about'>
        <div className="about__information">
            <p className="about__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ipsam, iste id quia harum quod exercitationem tempore consequatur! Saepe iure, odit officiis reprehenderit incidunt omnis ipsa consectetur quod rerum atque?
            </p>
            <ul className="about__list">
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    Lorem ipsum dolor sit.
                </li>
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    Lorem ipsum dolor sit.
                </li>
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    Lorem ipsum dolor sit.
                </li>
            </ul>
            <p className="about__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, distinctio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate dolores accusamus aliquid officia consequatur, repudiandae reprehenderit numquam, praesentium aspernatur similique at iure voluptatum impedit a, quia dolore rem fugit?
            </p>
        </div>
        <div className="about__img">
            <img src="https://xabar.uz/static/crop/2/0/920__95_2000066746.jpg" alt="kompaniya rasmi" />
        </div>
    </div>
  )
}

export default About