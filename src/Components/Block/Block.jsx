import React from 'react'
import './block.scss'
import { Link } from "react-router-dom";
import Umra from '../../Assets/Img/umra.jpg';
import Haj from '../../Assets/Img/xaj.jpg';

import Language from '../../Assets/Content';

function Block({lang}) {
  return (
    <div className='block'>
        <div className="block__item">
            <img src={Umra} alt="umra" />
            <div className="block__box">
                <h2 className="block__title">
                    umra safari
                </h2>
                <p className="block__text">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <Link to={"/detaly/1"} className="block__btn">
                    {Language[lang].read}
                </Link>
            </div>
        </div>
        <div className="block__item">
            <img src={Haj} alt="haj" />
            <div className="block__box">
                <h2 className="block__title">
                    haj safari
                </h2>
                <p className="block__text">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <Link to={"/detaly/2"} className="block__btn">
                    {Language[lang].read}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Block