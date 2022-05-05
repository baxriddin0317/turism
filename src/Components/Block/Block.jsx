import React from 'react'
import './block.scss'
import { Link } from "react-router-dom";

import Language from '../../Assets/Content';
import Dat from "../../Assets/Data/Dat.json";

function Block({lang, Data}) {
    // let arr = Data.slice(0,2);
    let arr = Dat.slice(0,2);
    
    // const funLang = (d) => {
    //     if(lang === "uz"){
    //         return d.description
    //     }else if(lang === "en"){
    //         return d.description_en
    //     }else{
    //         return d.description_ru
    //     }
    // }
  return (
    <div className='block'>
        {
            arr.map(d => (
                <div className="block__item" key={d.id}>
                    <img src={d.img} alt="umra" />
                    <div className="block__box">
                        <h2 className="block__title">
                            {d.title}
                        </h2>
                        <p className="block__text">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <Link to={`/detaly/${d.id}`} className="block__btn">
                            {Language[lang].read}
                        </Link>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Block