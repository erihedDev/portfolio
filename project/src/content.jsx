import React from 'react'
import './index.css'

import Introduction from './content_components/introduction'
import Aboutme from './content_components/aboutme'
import Projects from './content_components/projects'
import Contact from './content_components/contact'

function Content() {
    return (
        <div className='flex justify-center w-full'>
            <div className='w-[32rem] h-full mt-20 text-neutral-50'>
                <Introduction/>
                <Aboutme/>
                <Projects/>
                <Contact/>
                <div>
                    <h2 className='text-4xl mt-12 underline underline-offset-6 decoration-neutral-400 font-bold'>Credits</h2>
                </div>
            </div>
        </div>
    )
}

export default Content