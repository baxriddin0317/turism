import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './header.scss'

import Language from '../../Assets/Content';

function Header({lang, setLang}) {
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
    }, []);

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
                        <a href='#home'>
                            {Language[lang].menu.home}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#manzillar">
                            {Language[lang].menu.addresses}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#contact">
                            {Language[lang].menu.contact}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#info">
                            {Language[lang].menu.info}
                        </a>
                    </li>
                </ul>
                <div className="header__box"> 
                    {/* ==== select language ==== */}
                    <form action="#" method='post'>
                        <select 
                        defaultValue={lang ? lang : "uz"}
                        name="lenuage" 
                        id="select" 
                        className='header__item-select' 
                        onChange={(e) => {
                            setLang(e.target.value);
                            localStorage.setItem("Lang", e.target.value);
                        }}>
                            <option value="uz">
                                Uz
                            </option>
                            <option value="ru">Ru</option>
                            <option value="eng">Eng</option>
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