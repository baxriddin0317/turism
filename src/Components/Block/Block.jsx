import React from 'react'
import './block.scss'
import { Link } from "react-router-dom";

import Language from '../../Assets/Content';

function Block({lang, Data}) {
    let arr = Data.slice(0,2);
    
    const funLang = (d) => {
        if(lang === "uz"){
            return d.description
        }else if(lang === "en"){
            return d.description_en
        }else{
            return d.description_ru
        }
    }
  return (
    <div className='block'>
        {
            arr.map(d => (
                <div className="block__item" key={d.id}>
                    <img src={d.image_url} alt="umra" />
                    <div className="block__box">
                        <h2 className="block__title">
                            {d.title}
                        </h2>
                        <p className="block__text">
                            {funLang(d)}
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