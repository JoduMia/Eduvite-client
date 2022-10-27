import React from 'react'
import bg from '../assets/images/bg.jpg';
import wing from '../assets/images/wing.png';



const Home = () => {

  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-fixed bg-cover bg-center w-full h-[100vh] bg-[#13131388] bg-blend-overlay overflow-hidden'>
        <div className='grid md:grid-cols-2 py-10 gap-5'>
          <div className='flex items-center justify-center '>
              <h1 className='text-3xl md:text-5xl lg:text-6xl leading-20 italic font-extrabold text-white uppercase '>A New different<br/> Way to improve <br/> Your skills</h1>
          </div>
          <div>
            <img src={wing} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Home