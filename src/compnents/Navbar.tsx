import React from 'react'

const Navbar = () => {
  return (
    <div  className='self-start mb-5' >
        <img className='cursor-pointer' onClick={
          () => {
            window.location.href = '/'
          }
        } src="/resources/CatwikiLogo-black.svg" alt="Logo" />
    </div>
    
  )
}

export default Navbar