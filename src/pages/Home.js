import React from 'react'
import bg from '../assets/images/bg.jpg'


const Home = () => {

  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-fixed bg-cover bg-center h-[92vh] w-full bg-[#13131388] bg-blend-overlay overflow-hidden'>
        <h1 className='text-center text-5xl font-bold'>THis is the HOmepage</h1>
    </div>
  )
}

export default Home