import React from 'react'
import { createRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import SideNav from '../components/others/SideNav';

const ref = createRef();

const Details = () => {
  const data = useLoaderData();
  return (
    <div className='grid md:grid-cols-4'>
      <div className='md:col-span-1 md:py-20 md:fixed'>
        <SideNav />
      </div>
      <div className='md:col-span-3'>
        <div className='md:p-20'>
          <div ref={(ref)} className='w-[70%] md:w-[50%] container mx-auto dark:bg-gray-500 dark:text-white p-3 shadow-md mt-4'>
            <div>
              <img src={data.img_url} alt="" />
            </div>
            <p className='text-xl font-bold mb-3'>{data.title}</p>
            <p className=' text-justify'>{data.details}</p>
          </div>
          <Pdf targetRef={ref} x={60} y={10} unit={'in'} filename={'detail.pdf'} scale={.5}>
            {({ toPdf }) => <div className='text-black dark:text-white text-center'><button onClick={toPdf} className='p-2 bg-blue-600 rounded shadow font-bold'>Download Detail</button></div>}
          </Pdf>
        </div>
      </div>
    </div>
  )
}

export default Details