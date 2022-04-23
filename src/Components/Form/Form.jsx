import React from 'react'
import './form.scss'

function Form() {
  return (
      <form action="#" className='form'>
        <div className="form__group">
          <input type="email" placeholder='email' />
          <input type="text" placeholder='ismingiz' />
        </div>
        <div className="form__group">
          <textarea name="text" rows="10" placeholder='savol va takliflaringiz'></textarea>
          <button className='form__btn' type='submit'>Jo`natish</button>
        </div>
      </form>
  )
}

export default Form