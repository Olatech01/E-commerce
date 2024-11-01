import React from 'react'
import Hero from './Hero'
import Data from './Data'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-[2rem]'>
        <Hero />
        <Data />
    </div>
  )
}

export default Dashboard