import React from 'react'
import "./Header.css"


function Header() {
  return (
    <div className='header'>
        <h1>Header</h1>
        <div className='header-left'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'></img>
        </div>
        <div className='header-middle'></div>
        <div className='header-right'></div>
    </div>
  )
}

export default Header