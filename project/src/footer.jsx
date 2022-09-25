import React from 'react'
import './index.css'

function Footer() {
    return (
        <footer className='flex justify-center items-center h-20'>
            <p className='text-neutral-400'>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Erik Hedlund. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer