import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Blog from './Blog'


const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='bg-[#fef8f8] dark:bg-[#00052b]'>
            <div className='grid md:grid-cols-2 gap-8 container mx-auto dark:text-white md:p-20'>
                {
                    blogs.map(blog => <Blog key={blog.id} {...blog} />)
                }
            </div>
        </div>
    )
}

export default Blogs