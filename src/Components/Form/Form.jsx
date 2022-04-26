import React from 'react'
import './form.scss'

import Language from '../../Assets/Content'

function Form({lang}) {
  return (
      <form action="#" className='form'>
        <div className="form__group">
          <input type="email" placeholder={Language[lang].inputEmail} />
          <input type="text" placeholder={Language[lang].inputName} />
        </div>
        <div className="form__group">
          <textarea name="text" rows="10" placeholder={Language[lang].question}></textarea>
          <button className='form__btn' type='submit'>{Language[lang].fomrBtn}</button>
        </div>
      </form>
  )
}

export default Form