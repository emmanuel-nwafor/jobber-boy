import React from 'react'
import "./index.css"
import Home from './Homepages&comp/Landing'
import NavBar from './Homepages&comp/NavBar'
import About from './Homepages&comp/About'
import Company from './Homepages&comp/Company'

export default function App() {
  return (
    <>
     <NavBar/>
     <Home/>
     <About/>
     <Company/>
    </>
  )
}
