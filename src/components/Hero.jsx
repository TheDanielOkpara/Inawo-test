import React from "react"

import HeroImages from "../assets/images/HeroImages.png"
import { motion } from "framer-motion"

function Hero() {
  return (
    <section className='hero container'>
      <div className='hero-left'>
        <div className='within'>
          <motion.div
            initial='hidden'
            animate='visible'
            d
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.8,
                },
              },
            }}
          >
            <h1 className='hero-bold'>
              Make your big day <span> special</span>
            </h1>
          </motion.div>
          <motion.div
            initial='hidden'
            animate='visible'
            d
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                  duration: 1,
                },
              },
            }}
          >
            <p className='hero-text'>
              Inawo gives the necessary support to make your{" "}
              wedding the dream you always imagined
            </p>
          </motion.div>
          <motion.div
            className='buttons'
            initial='hidden'
            animate='visible'
            d
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 1.2,
                },
              },
            }}
          >
            <button className='hero-button'>
              START YOUR WEDDING
            </button>
            <button className='watch'>
              <svg
                width='14'
                height='15'
                viewBox='0 0 15 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.0072 9.30385L2.87249 15.4563C1.92753 15.9779 0.714844 15.3463 0.714844 14.2948V1.98988C0.714844 0.940027 1.92578 0.306783 2.87249 0.830043L14.0072 6.98251C14.2221 7.09937 14.4008 7.26828 14.5251 7.47212C14.6494 7.67596 14.7148 7.90748 14.7148 8.14318C14.7148 8.37889 14.6494 8.6104 14.5251 8.81424C14.4008 9.01808 14.2221 9.187 14.0072 9.30385Z'
                  fill='#141414'
                />
              </svg>
              Watch video
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className='hero-right'
        initial='hidden'
        animate='visible'
        d
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 1.2,
            },
          },
        }}
      >
        <img
          src={HeroImages}
          className='img-left'
          alt='Bride'
        />
      </motion.div>
    </section>
  )
}

export default Hero
