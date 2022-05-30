import React from 'react'
import Search from '../../../assets/svg/Search'

const Input = () => {
  return (
    <div className='input'>
        <input className='input_searcher' type="text" />
        <Search className='input__searchIcon' />
    </div>
  )
}

export default Input