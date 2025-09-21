import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero1 } from '../components/Hero1/Hero1'
import { Hero2 } from '../components/Hero2/Hero2'
import { Hero3 } from '../components/Hero3/Hero3'
import { Hero4 } from '../components/Hero4/Hero4'
import { Hero5 } from '../components/Hero5/Hero5'
import { Hero6 } from '../components/Hero6/Hero6'

export const Home = () => {
  return (
    <div className='h-auto'>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5/>
      <Hero6/>


    </div>
  )
}
