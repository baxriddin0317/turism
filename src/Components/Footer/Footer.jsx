import React from 'react'
import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__box">
            <p className="footer__text">
                Copyright © 2022 All rights reserved | This template is made with
            </p>
            <div className="footer__links">
                <Link to="#">
                <i className='bx bxl-facebook-circle'></i>
                </Link>
                <Link to="#">
                <i className='bx bxl-instagram-alt' ></i>
                </Link>
                <Link to="#">
                <i className='bx bxl-telegram' ></i>
                </Link>
                <Link to="#">
                <i className='bx bxl-behance'></i>
                </Link>
            </div>
        </div>        
    </footer>
  )
}

export default Footer