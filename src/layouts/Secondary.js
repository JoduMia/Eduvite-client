import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../components/others/SideNav'

const Secondary = () => {
  return (
    <div className='dark:bg-gray-500 dark:text-white'>
        <div className='grid md:grid-cols-4 container mx-auto mt-12'>
            <div className='md:col-span-1'>
                <SideNav />
            </div>
            <div className='md:col-span-3'>
                <Outlet></Outlet>
            </div>
        </div>

    </div>
  )
}

export default Secondary