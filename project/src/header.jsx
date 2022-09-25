import React from 'react'
import './index.css'

function Header() {

  return (
    <nav className='w-full flex justify-center fixed backdrop-blur'>
      <div className='h-16 w-[48rem] flex justify-between items-center text-neutral-50'>
        <div className='flex text-lg'>
          <h1 className='font-bold'><a href={'/'}>Erik Hedlund</a></h1>
          <div className='text-neutral-100'>
            <a href={'#aboutme'} className='ml-10 hover:underline'>About me</a>
            <a href={'#projects'} className='ml-10 hover:underline'>Projects</a>
            <a href={'#contact'} className='ml-10 hover:underline'>Contact</a>
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
