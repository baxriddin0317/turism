import React from 'react'
import './about.scss'

// ==== About lang ====
import AboutLang from '../../Assets/About'

function About({lang}) {
  return (
    <div className='about'>
        <div className="about__information">
            <p className="about__text">
                {AboutLang[lang].text1}
            </p>
            <ul className="about__list">
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    {AboutLang[lang].imkon1}
                </li>
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    {AboutLang[lang].imkon2}
                </li>
                <li className="about__item">
                    <i className='bx bxs-square'></i>
                    {AboutLang[lang].imkon3}
                </li>
            </ul>
            <p className="about__text">
                {AboutLang[lang].text2}
            </p>
        </div>
        <div className="about__img">
            <img src="https://xabar.uz/static/crop/2/0/920__95_2000066746.jpg" alt="kompaniya rasmi" />
        </div>
    </div>
  )
}

export default About