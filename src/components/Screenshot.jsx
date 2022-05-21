import React from "react"
import site from "../assets/images/site.jpg"
import bulb from "../assets/images/bulb.png"

function Screenshot() {
  return (
    <section className='screenshot container'>
      <h2 className='create-text'>
        CREATE <span> a wedding website</span>
        <p className='create-p'>
        We give you a beautiful wedding website for your
        guests to engage with your wedding
      </p>
      </h2>
      <div>
        <img
          className='site'
          src={site}
          alt='screenshot of wedding website'
        />
        <img src={bulb} alt='bulb' className='bulb-image' />
      </div>
      
    </section>
  )
}

export default Screenshot
