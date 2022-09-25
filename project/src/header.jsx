import React from 'react'
import './index.css'

function Header() {

  return (
    <nav className='w-full h-12 flex justify-center'>
      <div className='h-16 w-[48rem] flex justify-between items-center text-neutral-50'>
        <div className='flex text-lg'>
          <h1 className='font-bold'><a href={'#'}>Erik Hedlund</a></h1>
          <div className='text-neutral-200'>
            <a href={'#'} className='ml-10 hover:underline'>Work</a>
            <a href={'#'} className='ml-10 hover:underline'>Contact</a>
            <a href={'#'} className='ml-10 hover:underline'>Source</a>
          </div>
        </div>
        <div className='bg-orange-200 text-black p-4'>
          <p>Some feature</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
