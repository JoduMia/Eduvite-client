import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  return (
    <div className='dark:bg-[#00052b] dark:text-white p-10 h-[90vh] flex items-center justify-center'>
      <div>
        <div className='w-2/3 mx-auto md:w-[400px]'>
          <img src={data.img_url} alt="" />
        </div>
        <h1 className='text-center p-3'>It's amazing!!! Mr. <span className='font-bold dark:text-[#61f34d]'>{user.displayName}</span>, You have selected the course named <span className='font-bold dark:text-[#6bf13e]'>"{data.name}"</span>under the <span className='font-bold dark:text-[#1af430]'>{data.title}</span></h1>

        <h1 className='text-center font-bold text-2xl text-yellow-300'>Checkout procedure is ongoing. Please wait .....</h1>
      </div>

    </div>
  )
}

export default Checkout