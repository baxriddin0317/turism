import React from 'react'
import About from '../About/About'
import Block from '../Block/Block'
import Conveniences from '../Conveniences/Conveniences'
import Form from '../Form/Form'
import Galaleriya from '../Galaleriya/Galaleriya'
import Jumbotron from '../Jumbotron/Jumbotron'
import Takliflar from '../Takliflar/Takliflar'

import Language from '../../Assets/Content'

function Main({lang, Data}) {
  return (
    <>
      {/* ==== Jumbotron sart ==== */}
      <Jumbotron lang={lang} />
      {/* ==== Jumbotron end ==== */}
      
      <main className="main">

        <section className="main__section container" id='manzillar'>
          <h1 className='title'>
            {Language[lang].addresses}
          </h1>
          <Block lang={lang} Data={Data} />
        </section>

        {/* ==== corousel ==== */}
        <section className="main__section container">
          <h1 className="title">
            {Language[lang].yana}
          </h1>
          <Takliflar lang={lang} Data={Data} />
        </section>

        {/* ==== ustunliklarimiz ==== */}
        <section className='main__section container' id='info'>
          <h1 className="title">
          {Language[lang].advantages}
          </h1>
          <Conveniences lang={lang} />
        </section>

        {/* ==== biz haqimizda ==== */}
        <section className='main__section container' id='info'>
          <h1 className="title">
            {Language[lang].about}
          </h1>
          <About />
        </section>

        {/* ==== galareyia ===== */}
        <section className='main__section container'>
          <h1 className="title">
          {Language[lang].galaleriya}
          </h1>
          <Galaleriya />
        </section>

        {/* ==== aloqa ==== */}
        <section className="main__section container" id='contact'>
            <h1 className="title">
            {Language[lang].question}
            </h1>
            <Form lang={lang} />
        </section>
      </main>

    </>
  )
}

export default Main