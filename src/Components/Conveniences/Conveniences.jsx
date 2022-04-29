import React from 'react'
import './conveniences.scss'

import Data from "../../Assets/Content"

function Conveniences({lang}) {
  return (
    <ul className='convenlist'>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                {Data[lang].conven.title1}
            </h3>
            <p className="convenlist__text">
                {Data[lang].conven.text1}
            </p>
        </li>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                {Data[lang].conven.title2}
            </h3>
            <p className="convenlist__text">
                {Data[lang].conven.text2}
            </p>
        </li>
        <li className="convenlist__item">
            <h3 className="convenlist__title">
                {Data[lang].conven.title3}
            </h3>
            <p className="convenlist__text">
                {Data[lang].conven.text3}
            </p>
        </li>
    </ul>
  )
}

export default Conveniences