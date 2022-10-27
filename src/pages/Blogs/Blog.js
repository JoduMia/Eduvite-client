import { Button } from 'flowbite-react';
import React from 'react';
// import { useState } from 'react';


const Blog = ({ id, que, ans }) => {
    // const [open, setOpen] = useState(false);
    return (
       <div className='border border-gray-400 p-3 rounded space-y-2'>
            <img src="" alt="" />
            <h3 className='font-semibold text-lg capitalize'>{que}</h3>
            {
                ans.length>50? <p>{ans.slice(0,100)}...<Button>Read more</Button></p> : <p>{ans}</p>
            }
       </div>
    )
}

export default Blog

