import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  const [datas,setDatas] = useState([]);

  useEffect(() =>{
    fetch('https://assignment10-server-seven.vercel.app/datas')
    .then(res => res.json())
    .then(data => {
      setDatas(data)
    })
  },[])
  return (
    <div className='flex flex-col text-blue-600 dark:text-yellow-300 text-xl font-bold text-center'>
        {
            datas.map(({id,name}) => <Link to={`/detail/${id}`} key={id}>{name}</Link>)
        }
    </div>
  )
}

export default SideNav