import React from 'react'
import Heading from './components/Heading'
import Hero from './components/Hero'
import Compass from './components/Compass'
import { Essentials } from './components/Essentials'
import { Explore } from './components/Explore'
import {Four} from './components/Four'
import { Stories } from './components/Stories'
import {Footer} from './components/Footer'

function App() {
 return (
  <div>
    <Heading />
    <Hero />
    <Compass />
    <Essentials />
    <Explore />
    <Four />
    <Stories />
    <Footer />
  </div>
 )
      
}

export default App
