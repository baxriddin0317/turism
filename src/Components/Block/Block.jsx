import React from 'react'
import './block.scss'
import { Link } from "react-router-dom";

import Language from '../../Assets/Content';

function Block({lang, Data}) {
    let arr = Data.slice(0,2);
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
                            {
                                d.description
                            }
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