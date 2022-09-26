import React from 'react'
import '../index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div id='contact'>
            <h2 className='text-4xl mt-12 underline underline-offset-6 decoration-neutral-400 font-medium'>Contact</h2>
            <div className='flex flex-col items-start mt-6'>
                <a href={'https://github.com/erihedDev'} className='mt-3 text-xl'><FontAwesomeIcon icon={faGithub}/> <span className='hover:underline underline-offset-2'>erihedDev</span></a>
                <a href={'https://www.linkedin.com/in/erik-hedlund-a5921624a/'} className='mt-3 text-xl'><FontAwesomeIcon icon={faLinkedin}/> <span className='hover:underline underline-offset-2'>erik-hedlund</span></a>
                <a href={'tel:0703838783'} className='mt-3 text-xl'><FontAwesomeIcon icon={faPhone}/> <span className='hover:underline underline-offset-2'>070-383 87 83</span></a>
                <a href={'mailto:erik.hedlund@elev.ga.ntig.se'} className='mt-3 text-xl'><FontAwesomeIcon icon={faEnvelope}/> <span className='hover:underline underline-offset-2'>erik.hedlund6@gmail.com</span></a>
            </div>
        </div>
    )
}

export default Contact