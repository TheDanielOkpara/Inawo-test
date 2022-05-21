import React from "react"

function Hambugger() {
  const [clicked, setClicked] = React.useState(false)

  return (
    <>
      {clicked ? (
        <div className='cancel'>
          <svg
            onClick={() => setClicked(false)}
            xmlns='http://www.w3.org/2000/svg'
            className='svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      ) : (
        <div className='hambugger'>
          <svg
            onClick={() => setClicked(true)}
            xmlns='http://www.w3.org/2000/svg'
            className='svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      )}
    </>
  )
}

export default Hambugger
