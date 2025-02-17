import React from 'react'
import Home from './Landing';
import NavBar from './NavBar';
import About from './About';
import Company from './Company';
import Spotlight from './Spotlight';
import Team from './Team';

export default function AllRendering() {
  return (

<>
    <NavBar/>
    <Home />
    <About />
    <Company />
    <Spotlight />
    <Team />
</>

  )
}
