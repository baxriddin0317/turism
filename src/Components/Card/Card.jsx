import React from 'react'
import { Link } from 'react-router-dom';
import './card.scss';

function Card({data}) {

  return (
    <div className='card'>
        <img src={data.img} alt="" />
        <div className="card__block">
          <h2 className="card__title">
              {data.title}
          </h2>
          <div className="card__flex">
              <div>
                <h3 className="card__flex-title">
                  {data.day}
                </h3>
                <span className='card__flex-span'>
                  {data.sana}
                </span>
              </div>
              <div>
                <h3 className="card__flex-title">
                  {data.sum}
                </h3>
                <span className="card__flex-span">
                  {data.dollor}
                </span>
              </div>
          </div>

          <Link to={`/detaly/${data.id}`} className="card__btn">Batafsil</Link>
        </div>
    </div>
  )
}

export default Card