import React from "react"
import Primary from "../assets/images/Primary.png"

import Hambugger from "./Hambugger"

function Navbar() {
  return (
    <nav className='nav'>
      <div className='navbar '>
        <img
          src={Primary}
          alt='inawo logo'
          className='logo-design'
        />
        <Hambugger className='hambugger' />
        <div className='nav-right'>
          <p>Blog</p>
          <p>Login</p>
          <button className='wedding-button'>
            Start Your Wedding
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
