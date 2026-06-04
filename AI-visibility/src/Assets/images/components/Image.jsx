import React from 'react'

const Image = (props) => {

  return (
    <div className={`flex bg-white ${props.positionImage}`}>
      <img className='h-16 w-16 rounded-xl object-cover' src={props.img} alt="" />
    </div>
  )
}

export default Image
