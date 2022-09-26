import React from 'react'
import { Link } from 'react-scroll'
import './index.css'

function Header() {

  return (
    <nav className='w-full flex justify-center fixed backdrop-blur z-1'>
      <div className='h-16 w-[48rem] flex justify-between items-center text-neutral-50'>
        <div className='flex text-lg'>
          <h1 className='font-bold'><a href={'/'}>Erik Hedlund</a></h1>
          <div className='text-neutral-100'>
            <Link to='aboutme' spy={true} smooth={true} offset={-80} duration={500} className='ml-10 hover:underline cursor-pointer'>About me</Link>
            <Link to='projects' spy={true} smooth={true} offset={-80} duration={500} className='ml-10 hover:underline cursor-pointer'>Projects</Link>
            <Link to='contact' spy={true} smooth={true} offset={-80} duration={500} className='ml-10 hover:underline cursor-pointer'>Contact</Link>
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
