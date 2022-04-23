import React from 'react'
import './conveniences.scss'

function Conveniences() {
  return (
    <ul className='convenlist'>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                Visa hizmati
            </h3>
            <p className="convenlist__text">
                Mijozlarimiz Umra safari uchun vizadan havotir olmasaham bo'ladi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum voluptate non repudiandae ea. Non cupiditate rem repellendus tempora ea!
            </p>
        </li>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                5 yulduzli mehmonhona
            </h3>
            <p className="convenlist__text">
                Mijozlarimiz uchun Madina shaxridagi eng nufuzli mehmonhodalar.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum voluptate non repudiandae ea. Non cupiditate rem repellendus tempora ea!
            </p>
        </li>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                Transpor hizmati
            </h3>
            <p className="convenlist__text">
                Ziyoratgohlarga borish uchun doyimiy transport xizmati.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi harum voluptate non repudiandae ea. Non cupiditate rem repellendus tempora ea!
            </p>
        </li>
    </ul>
  )
}

export default Conveniences