import React from 'react'
import '../index.css'

function Epitome() {
    return (
        <div>
            <h2 className='text-4xl mt-12 underline underline-offset-4 decoration-neutral-400 font-bold'>Epitome</h2>
            <div className='flex flex-col items-start mt-6'>
                <p className='text-justify'>This portfolio was a project to learn about new methods beyond standard html, css and javascript that are used in creating web applications. <br/><br/> The main tools and libraries used to create this website are react, vite, tailwind css and three js. <br/><br/></p>
                <p>Credits to <a href='https://www.youtube.com/c/devaslife' className='font-medium text-orange-200 hover:text-orange-300'>Takuya Matsuyama</a> for the design inspration. <br/><br/></p>
                <p>Credits to <a href='https://sketchfab.com/ln3d' className='font-medium text-orange-200 hover:text-orange-300'>LN3D</a> for the GLTF model.</p>
            </div>
        </div>
    )
}

export default Epitome