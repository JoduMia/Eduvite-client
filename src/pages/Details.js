import { Button } from 'flowbite-react';
import React from 'react'
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';
import SideNav from '../components/others/SideNav';

const ref = createRef();

const Details = () => {
  const data = useLoaderData();
  return (
    <div className='dark:bg-gray-600'>

    <div className='grid md:grid-cols-4'>
      <div className='md:col-span-1 md:py-10 w-full border-r-2 dark:border-yellow-300 border-black'>
        <SideNav />
      </div>
      <div className='md:col-span-3'>
        <div className='md:px-20 py-10'>
        <h1 className='text-center text-black dark:text-yellow-300 font-bold text-3xl mb-4 dark:bg-gray-600'>Details About {data.name}</h1>
        <Pdf targetRef={ref} x={60} y={10} unit={'in'} filename={'detail.pdf'} scale={.5}>
            {({ toPdf }) => <div className='text-black dark:text-white text-center mt-3'><button onClick={toPdf} className='p-2 bg-blue-600 hover:bg-blue-500 duration-300 rounded shadow font-bold'>Download Detail as Pdf</button></div>}
          </Pdf>
          <div className='w-[70%] container mx-auto dark:text-white p-3 shadow-md mt-4'>
            <div ref={(ref)}>
              <img src={data.img_url} alt="" />
              <p className='text-xl font-bold mb-3 p-3'>{data.title}</p>
              <p className=' text-justify p-3'>{data.details}</p>
            </div>
            <Button className='p-3'><Link to={`/checkout/${data.id}`}>Premium Access</Link></Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Details