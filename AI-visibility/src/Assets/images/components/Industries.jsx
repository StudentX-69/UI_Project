import React from 'react'

const Industries = (props) => {
  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between gap-4'>
        <div className='flex min-w-0 flex-row items-center gap-3'>
          <span>{props.index}</span>
          <img className='h-5 w-5 rounded-sm object-cover' src={props.logo} alt="" />
          <h1 className='truncate px-2'>{props.Brand}</h1>
        </div>
        <div className='flex shrink-0 items-center gap-3'>
          <h1 style={{ color: props.color }} className='text-green-600'>{props.trend}</h1>
          <h1>{props.rate}</h1>
        </div>
      </div>
      <div className='mt-3 h-0.5 w-full bg-gray-100'></div>
    </div>
  )
}

export default Industries
