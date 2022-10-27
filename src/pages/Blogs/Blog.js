import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';


const Blog = ({ id, img, que, ans }) => {
    return (
       <div className='border border-gray-400 p-3 rounded space-y-2'>
            <img src={img} className='h-[300px]' alt="" />
            <h3 className='font-semibold text-lg capitalize'>{que}</h3>
            {
                ans.length>50? <p>{ans.slice(0,100)}...<Link className='text-blue-700 hover:text-blue-500 duration-300' to={`/blogs/${id}`}>Read more</Link></p> : <p>{ans}</p>
            }
       </div>
    )
}

export default Blog

