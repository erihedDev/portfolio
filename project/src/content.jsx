import React from 'react'
import './index.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

function Content() {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[32rem] h-screen mt-20 text-neutral-50'>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-4xl'>Erik Hedlund</h2>
                        <p className='text-lg'>Software development student</p>
                    </div>
                    <div>
                        <p>some image</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400'>About me</h2>
                    <p className='text-neutral-100 text-justify mt-6'>&nbsp; I am Erik Hedlund, a software development student from Sweden. I am currently studying a fourth year of high school where I get to work in projects in groups with other students while using common working practices. <br/> <br/> I have been programming for over three years and I have primarly worked with python and web development using html, css and javascript. </p>
                </div>
                <div>
                    <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400'>Projects</h2>
                    <div className='flex items-center w-full h-32 mt-6'>
                        <div className='w-1/2'>
                            <p className='text-2xl'>Frisör Saxé</p>
                            <p>Website for a hairdresser saloon.</p>
                        </div>
                        <img src='/images/frisorsaxe.png' alt='image of project for Frisör Saxé' className='w-1/2 h-32 object-cover rounded-[1rem]'></img>
                    </div>
                    <a href={'https://ntig-uppsala.github.io/Frisor-Saxe/personal.html'} className='text-2xl w-full flex justify-center mt-4 hover:underline underline-offset-2 mb-12'>Preview project</a>
                    <div className='flex items-center w-full h-32 mt-6'>
                        <div className='w-1/2'>
                            <p className='text-2xl'>Florist Blåklint</p>
                            <p>Website for a flower shop.</p>
                        </div>
                        <img src='/images/floristblaklint.png' alt='image of project for Florist Blåklint' className='w-1/2 h-32 object-cover rounded-[1rem]'></img>
                    </div>
                    <a href={'https://ntig-uppsala.github.io/florist-blaklinten/'} className='text-2xl w-full flex justify-center mt-4 hover:underline underline-offset-2 mb-12'>Preview project</a>
                </div>
                <div>
                    <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400'>Contact</h2>
                    <div className='flex flex-col items-start'>
                        <a href={'https://www.linkedin.com/in/erik-hedlund-a5921624a/'} className='mt-3 text-xl'><FontAwesomeIcon icon={faLinkedin}/> <span className='hover:underline underline-offset-2'>erik-hedlund</span></a>
                        <a href={'https://github.com/erihedDev'} className='mt-3 text-xl'><FontAwesomeIcon icon={faGithub}/> <span className='hover:underline underline-offset-2'>erihedDev</span></a>
                        <a href={'tel:0703838783'} className='mt-3 text-xl'><FontAwesomeIcon icon={faPhone}/> <span className='hover:underline underline-offset-2'>070-383 87 83</span></a>
                        <a href={'mailto:erik.hedlund6@gmail.com'} className='mt-3 text-xl'><FontAwesomeIcon icon={faEnvelope}/> <span className='hover:underline underline-offset-2'>erik.hedlund6@gmail.com</span></a>
                        <a href={'mailto:erik.hedlund@elev.ga.ntig.se'} className='mt-3 text-xl'><FontAwesomeIcon icon={faEnvelope}/> <span className='hover:underline underline-offset-2'>erik.hedlund@elev.ga.ntig.se</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content