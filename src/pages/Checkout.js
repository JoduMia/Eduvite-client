import React, {useContext} from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthProvider';

const Checkout = () => {
    const {user} = useContext(AuthContext);
    const data = useLoaderData();
  return (
    <div className='dark:bg-gray-500 dark:text-white p-10'>
        <div className='w-2/3 mx-auto md:w-[400px]'>
            <img src={data.img_url} alt=""  />
        </div>
        <h1 className='text-center p-3'>It's amazing!!! Mr. <span className='font-bold'>{user.displayName}</span>, You have selected the course named <span className='font-bold'>"{data.name}"</span>under the <span className='font-bold'>{data.title}</span></h1>

        <h1 className='text-center font-bold text-2xl text-yellow-300'>Checkout procedure is ongoing. Please wait .....</h1>

    </div>
  )
}

export default Checkout