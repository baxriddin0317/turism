import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './header.scss'

function Header() {
    //header scroll bolgandegi events
    const headerRef = useRef();

    const [hum, setHum] = useState(false);

    // ==== scroll =====
    useEffect(() => {
    window.addEventListener("scroll", () => {
        if(document.documentElement.scrollTop > 0){
        headerRef.current.className = "header scroll";
        }else {
        headerRef.current.className = "header";
        }

        return () => {
        window.removeEventListener("scroll");
        }
    })
    }, [])

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <nav className="header__nav" >
                <h1 className="header__brend">
                   <Link to={"/"}>
                       Brend
                   </Link>
                </h1>
                <ul className={hum ? 'header__list list-active' : 'header__list'} onClick={() => setHum(false)} >
                    <li className="header__item">
                        <a href='#home'>Home</a>
                    </li>
                    <li className="header__item">
                        <a href="#manzillar">Manzil</a>
                    </li>
                    <li className="header__item">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="header__item">
                        <a href="#info">Info</a>
                    </li>
                    <li className='header__item'>
                    </li>
                </ul>
                <div className="header__box">
                    {/* ==== select language ==== */}
                    <form action="#">
                        <select name="lenuage" id="select" className='header__item-select'>
                            <option value="Uz">
                                Uz
                            </option>
                            <option value="Ru">Ru</option>
                            <option value="Eng">Eng</option>
                        </select>
                    </form>
                    <button className='header__humburger' onClick={() => setHum(true)}>
                    <i className='bx bx-menu'></i>
                    </button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header