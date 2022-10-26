import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/others/SideNav'
import Header from '../components/shared/Header'

const Secondary = () => {
  return (
    <div className='dark:bg-gray-500 dark:text-white'>
        <Header />
        <div className='grid grid-cols-4 container mx-auto mt-12'>
            <div className='col-span-1'>
                <SideNav />
            </div>
            <div className='col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>

    </div>
  )
}

export default Secondary