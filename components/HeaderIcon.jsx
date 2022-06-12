import React from 'react'

export default function HeaderIcon({Icon,title}) {
  return (
    <div className='flex flex-col mx-2 hover:text-white cursor-pointer lg:mx-6'>
        <Icon className='h-8'/>
        <p className='my-2'>{title}</p>
    </div>
  )
}
