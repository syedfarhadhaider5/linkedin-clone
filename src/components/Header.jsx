import React from 'react'
import "./Header.css";

function Header() {
  return (
    <div className='header'>
        <div className='header_logo'>
            <a href="/">
                <img src="/images/login-logo.svg" alt="" />
            </a>    
        </div>
        <div className='header_buton'>
            <a href="/">
                <button  className='header_join_button'>Join now</button>
            </a>
            <a>
                <button  className='header_signin_button'>Sign In</button>
            </a>
        </div>
    </div>
  )
}

export default Header