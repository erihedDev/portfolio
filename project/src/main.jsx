import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import Content from './content'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-zinc-900 h-full font-mono'>
    <Header/>
    <Content/>
  </div>
)
