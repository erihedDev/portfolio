import React from 'react'
import './index.css'

import Introduction from './content_components/introduction'
import Aboutme from './content_components/aboutme'
import Projects from './content_components/projects'
import Contact from './content_components/contact'
import Epitome from './content_components/epitome'

import Model from './model'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Content() {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[32rem] h-full mt-20 text-neutral-50'>
                <div className='h-96'>
                    <Canvas className='z-0'>
                        <OrbitControls enableZoom={false}/>
                        <ambientLight intensity={0.5}></ambientLight>
                        <directionalLight position={[-2, 5, 2]} intensity={1}></directionalLight>
                        <Model/>
                    </Canvas>
                </div>
                <Introduction/>
                <Aboutme/>
                <Projects/>
                <Contact/>
                <Epitome/>
            </div>
        </div>
    )
}

export default Content