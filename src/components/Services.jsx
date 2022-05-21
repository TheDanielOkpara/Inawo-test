import React from "react"

import service from "../assets/images/service.png"
import receive from "../assets/images/receive.png"
import grid from "../assets/images/grid.png"

function Services() {
  return (
    <section className='services container'>
      <div className='invitation'>
        <div className='invitation-text'>
          <h2>Send invitations</h2>
          <p>
            Invite your family and friends to your wedding
            by sending them invitation notes that brings
            them to the mood of festivities
          </p>
        </div>
        <div className='invitation-image'>
          <img
            src={service}
            alt='invitation'
            className='service-images'
          />
          
        </div>
      </div>
      <div className='invitation alt'>
        <img
          src={receive}
          alt='church wedding'
          className='gift-image'
        />

        <div className='invitation-text'>
          <h2>Receive gifts</h2>
          <p>
            Experience the joy of receiving gifts from
            friends and family all over the world
          </p>
        </div>
      </div>
      <div className='invitation'>
        <div className='invitation-text '>
          <h2>Plan, step by step</h2>
          <p>
            A wedding plan that you can see and follow step
            by step
          </p>
        </div>
        <div className='flower-image'>
          <img
            src={grid}
            alt='church wedding'
            className='flower-image'
          />
        </div>
      </div>
    </section>
  )
}

export default Services
