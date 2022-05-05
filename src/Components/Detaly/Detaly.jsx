import React from 'react'
import { useParams } from 'react-router-dom'
// import Data from '../../Assets/Data/Dat.json'
import Form from '../Form/Form';
import './detaly.scss'
import Dat from "../../Assets/Data/Dat.json"

import Language from '../../Assets/Content';

function Detaly({lang, Data}) {
    let {code} = useParams();

    // const funLang = (d) => {
    //   if(lang === "uz"){
    //       return d.description
    //   }else if(lang === "en"){
    //       return d.description_en
    //   }else{
    //       return d.description_ru
    //   }
    // }

    // const funCitys = (d) => {
    //   if(lang === "uz"){
    //       return d.citys
    //   }else if(lang === "en"){
    //       return d.citys_en
    //   }else{
    //       return d.citys_ru
    //   }
    // }

    let num = parseInt(code);

    let obj = Dat.find(d => d.id === num)

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
                  {obj.title}
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Ziyorat qilish vaqti
                </p>
                <p className="detaly__item-text">
                  {obj.day}
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Narx (UZB)
                </p>
                <p className="detaly__item-text">
                  {obj.sum}
                </p>
              </li>
              <li className="detaly__item">
                <p className="detaly__item-text">
                  Narx ($USD)
                </p>
                <p className="detaly__item-text">
                  {obj.dollor}
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
          {obj.title} haqida sizni qiziqtiruvchi ma`lumotlar
        </h2>
        <p className="detaly__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptatum tempora sit inventore nemo rem et rerum dicta unde cumque nulla esse fuga distinctio atque, voluptates error consequuntur consectetur vitae.
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