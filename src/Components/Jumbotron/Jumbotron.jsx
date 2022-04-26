import React from 'react'
import './jumbotron.scss'

import Language from '../../Assets/Content'

function Jumbotron({lang}) {
  return (
    <section className='jumbotron' id='home'>
        <div className="jumbotron__block">
            <h1 className="jumbotron__title">
                {Language[lang].jTitle}
            </h1>
            <p className="jumbotron__text">
            {Language[lang].jText}
            </p>
            <a href='#info' className='jumbotron__btn'>
            {Language[lang].about}
            </a>
        </div>
    </section>
  )
}

export default Jumbotron