import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layaout({lang, setLang}) {
  return (
    <>
        <Header lang={lang} setLang={setLang} />

        <Outlet />

        <Footer />
    </>
  )
}

export default Layaout