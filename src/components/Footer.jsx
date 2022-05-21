import React from "react"
import logo from "../assets/images/asset.png"

function Footer() {
  return (
    <footer>
      <div className='top-footer container'>
        <div className='left-top'>
          <ul>
            <li>
              <h3>COMPANY</h3>
              <li>
                <a href='www.xyz.com'>About Us</a>
              </li>
              <li>
                <a href='www.xyz.com'>Blog</a>
              </li>
              <li>
                <a href='www.xyz.com'>Hiring</a>
              </li>
              <li>
                <a href='www.xyz.com'>Products</a>
              </li>
            </li>
          </ul>
        </div>
        <div className='middle-top'>
          <img src={logo} alt='logo' />
        </div>
        <div className='right-top'>
          <ul>
            <li>
              <h3>EXPERIENCES</h3>
              <li>
                <a href='www.xyz.com'>Wedding website</a>
              </li>
              <li>
                <a href='www.xyz.com'>Invitations</a>
              </li>
              <li>
                <a href='www.xyz.com'>Gifts</a>
              </li>
              <li>
                <a href='www.xyz.com'>Digital Cards</a>
              </li>
            </li>
          </ul>
        </div>
      </div>

      <div className='bottom-footer container'>
        <div className='logo-section'>
          <p>
            <a href='www.about.com'>Terms & Conditions</a>
          </p>
          <p>
            <a href='www.about.com'>Privacy</a>
          </p>
        </div>
        <div className='text-section'>
          <a href='www.instagram.com'>Facebook</a>
          <a href='www.insta.com'>Instagram</a>
          <a href='www.insta.com'>Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
