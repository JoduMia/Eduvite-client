import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/shared/Header';
import bg from '../../assets/images/bg.jpg'

const Main = () => {
  return (
    <div style={{backgroundImage: `url(${bg})`}} className='bg-fixed bg-cover bg-center h-screen w-full bg-[#13131388] bg-blend-overlay overflow-hidden'>
        <Header />
        <Outlet />
    </div>
  )
}

export default Main