import React from 'react'
import "./index.css"
import Home from './Homepages&comp/Landing'
import NavBar from './Homepages&comp/NavBar'
import About from './Homepages&comp/About'
import Company from './Homepages&comp/Company'
import Spotlight from './Homepages&comp/Spotlight'
import Team from './Homepages&comp/Team'

export default function App() {
  return (
    <>
     <div className='bg-zinc-900'>
      <NavBar/>
      <Home/>
      <About/>
      <Company/>
      <Spotlight/>
      <Team/>
     </div>
    </>
  )
}
