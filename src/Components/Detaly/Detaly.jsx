import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../Assets/Data/Dat.json'
import Form from '../Form/Form';
import './detaly.scss'

function Detaly() {
    let {code} = useParams();

    let num = parseInt(code);

    let obj = Data.find(d => d.id === num)

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
              Buyurtma berish
            </h2>
            <form className='detaly__form' action="#">
              <input type="text" placeholder='Ismingiz' />
              <input type="tel" placeholder='Telifon nomer' />
              <button className='detaly__form-btn' type='submit'>
                <i className='bx bxl-paypal'></i>
                PayPal orqali tolov
              </button>
            </form>
          </div>
      </div>

      <div className="detaly__info">
        <h2 className="detaly__title">
          {obj.title} haqida sizni qiziqtiruvchi ma`lumotlar
        </h2>
        <p className="detaly__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam optio nobis accusamus qui laudantium totam, architecto iure consectetur quo ipsam quisquam! Inventore sed at quod neque doloribus, repellendus blanditiis repudiandae unde libero consequuntur vero recusandae eius cum non quis laboriosam ratione sequi in nam tenetur. Sed neque iure quisquam cum voluptatum pariatur ipsum mollitia nisi alias perspiciatis porro corporis, nesciunt corrupti fugit, dicta sapiente repellendus vero tenetur fuga magnam repellat unde? Non adipisci in perferendis sapiente alias culpa minus tempora?
        </p>
      </div>

      <h1 className="title">Savol va takliflar uchun</h1>
      <Form />

      
    </div>
  )
}

export default Detaly