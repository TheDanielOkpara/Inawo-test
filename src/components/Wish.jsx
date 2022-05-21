import React from "react"

import bulb from "../assets/images/bulb.png"
import grid from "../assets/images/grid.png"

function Wish() {
  return (
    <section className='wish '>
      <div className='wish-content container'>
        <div className='image-wish'>
          <img
            className='backstory-image'
            src={grid}
            alt=' backstoryimage'
          />
          <img
            src={bulb}
            alt='bulb'
            className='bulb-image'
          />
        </div>
        <div className='text-wish'>
          <h2>MAKE your wish</h2>

          <p>
            Create a wishlist of your needs for your guests
          </p>
        </div>
      </div>
    </section>
  )
}

export default Wish
