import React from 'react'
import { useParams } from 'react-router-dom'
// import Data from '../../Assets/Data/Dat.json'
import Form from '../Form/Form';
import './detaly.scss'

import Language from '../../Assets/Content';

function Detaly({lang, Data}) {
    let {code} = useParams();

    let num = parseInt(code);

    let obj = Data.find(d => d.id === num)
    console.log(obj);
  return (
    <div className='container'>
      <div className='detaly'>
          <div className="detaly__block">
            <h2 className="detaly__title">
              {obj.title}
            </h2>
            <ul className="detaly__list">
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Ziyorat qilinadigon shaxar
                </p>
                <p className="detaly__item-text">
                  {obj.citys}
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Ziyorat qilish vaqti
                </p>
                <p className="detaly__item-text">
                  {obj.days}
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Narx (UZB)
                </p>
                <p className="detaly__item-text">
                  {obj.price_uzs} sum
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Narx ($USD)
                </p>
                <p className="detaly__item-text">
                  {obj.price_usd} $
                </p>
              </li>
            </ul>
          </div>

          <div className="detaly__box">
            <h2 className="detaly__title">
              {Language[lang].order}
            </h2>
            <form className='detaly__form' action="#">
              <input type="text" placeholder={Language[lang].inputName} />
              <input type="tel" placeholder='Telifon nomer' />
              <button className='detaly__form-btn' type='submit'>
                <i className='bx bxl-paypal'></i>
                {Language[lang].pay}
              </button>
            </form>
          </div>
      </div>

      <div className="detaly__info">
        <h2 className="detaly__title">
          {obj.citys} haqida sizni qiziqtiruvchi ma`lumotlar
        </h2>
        <p className="detaly__text">
          {obj.description}
        </p>
      </div>

        {/* ==== aloqa ==== */}
        <section className="main__section container" id='contact'>
            <h1 className="title">
            {Language[lang].question}
            </h1>
            <Form lang={lang} />
        </section>

      
    </div>
  )
}

export default Detaly