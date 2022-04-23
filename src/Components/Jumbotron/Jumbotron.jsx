import React from 'react'
import './jumbotron.scss'

function Jumbotron() {
  return (
    <section className='jumbotron' id='home'>
        <div className="jumbotron__block">
            <h1 className="jumbotron__title">
                biz bilan sayoxat qiling
            </h1>
            <p className="jumbotron__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit temporibus commodi?
            </p>
            <a href='#info' className='jumbotron__btn'>Biz haqimizda</a>
        </div>
    </section>
  )
}

export default Jumbotron