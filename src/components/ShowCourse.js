import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


const ShowCourse = () => {
  const [datas,setDatas] = useState([]);


    useEffect(() =>{
        fetch('https://assignment10-server-seven.vercel.app/datas')
        .then(res => res.json())
        .then(data => {
          setDatas(data)
        })
      },[])
  return (
    <div className='grid md:grid-cols-3 gap-5'>
        {datas.map(({id,img_url,name}) => (
            <Link key={id} to={`/detail/${id}`}>
                <div className='p-2 border rounded shadow '>
                    <img src={img_url} alt=""/>
                    <p className='text-xl dark:text-yellow-300 font-semibold'>{name}</p>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default ShowCourse