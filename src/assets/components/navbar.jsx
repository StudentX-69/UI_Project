import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <h1 className='  uppercase text-[#cccccce4] hover:text-white'>{props.title}</h1>
    </div>
  )
}

export default Navbar
