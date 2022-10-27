import { Button } from 'flowbite-react';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SingleBlog = () => {
    const { img, que, ans } = useLoaderData();
    return (
        <div className='flex items-center justify-center h-[90vh] bg-[#f2ebeb] dark:bg-[#00052b] dark:text-white'>
            <div className='container  space-y-2 md:w-1/2 mx-auto'>
                <div className='space-y-3 border border-gray-400 p-3 rounded'>
                    <img src={img}  alt="" />
                    <h3 className='font-semibold text-lg capitalize mb-3'>{que}</h3>
                    <p>{ans}</p>
                </div>
            <Button><Link to={'/blogs'}>Back</Link></Button>
            </div>
        </div>
    )
}

export default SingleBlog