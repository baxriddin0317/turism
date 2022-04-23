import React from 'react'
import About from '../About/About'
import Block from '../Block/Block'
import Conveniences from '../Conveniences/Conveniences'
import Form from '../Form/Form'
import Jumbotron from '../Jumbotron/Jumbotron'
import Takliflar from '../Takliflar/Takliflar'

function Main() {
  return (
    <>
      {/* ==== Jumbotron sart ==== */}
      <Jumbotron />
      {/* ==== Jumbotron end ==== */}
      
      <main className="main">

        <section className="main__section container" id='manzillar'>
          <h1 className='title'>Asosiy manzillar</h1>
          <Block />
        </section>

        {/* ==== corousel ==== */}
        <section className="main__section container">
          <h1 className="title">Yana</h1>
          <Takliflar />
        </section>

        {/* ==== ustunliklarimiz ==== */}
        <section className='main__section container' id='info'>
          <h1 className="title">Ustunliklarimiz</h1>
          <Conveniences />
        </section>

        {/* ==== biz haqimizda ==== */}
        <section className='main__section container' id='info'>
          <h1 className="title">Biz haqimizda</h1>
          <About />
        </section>

        {/* ==== aloqa ==== */}
        <section className="main__section container" id='contact'>
            <h1 className="title">Savol va takliflar uchun</h1>
            <Form />
        </section>
      </main>

    </>
  )
}

export default Main