import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';

import Language from '../../Assets/Content';

function Card({data, lang}) {

  return (
    <div className='card'>
        <img src={data.image_url} alt="" />
        <div className="card__block">
          <h2 className="card__title">
              {data.title}
          </h2>
          <div className="card__flex">
              <div>
                <h3 className="card__flex-title">
                  {data.days}
                </h3>
                <span className='card__flex-span'>
                  {data.go_date}
                </span>
              </div>
              <div>
                <h3 className="card__flex-title">
                  {data.price_uzs} sum
                </h3>
                <span className="card__flex-span">
                  {data.price_usd} $
                </span>
              </div>
          </div>

          <Link to={`/detaly/${data.id}`} className="card__btn">
            {Language[lang].read}
          </Link>
        </div>
    </div>
  )
}

export default Card