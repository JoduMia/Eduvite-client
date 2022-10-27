import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('https://assignment10-server-seven.vercel.app/datas')
      .then(res => res.json())
      .then(data => {
        setDatas(data)
      })
  }, [])
  return (
    <div className='flex flex-col text-blue-600 dark:text-yellow-300 text-lg lg:text-xl font-bold text-center md:text-left sticky top-[120px]'>
      <div className='w-1/2 md:w-full lg:pr-12 mx-auto'>
        {
          datas.map(({ id, name }) => (
            <Link className='hover:text-white duration-300 hover:bg-[#1f1f1f9e] dark:hover:bg-[#29ba26b2] p-1 md:p-2 rounded block' to={`/detail/${id}`} key={id}>{name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav