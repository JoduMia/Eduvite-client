import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SideNav = () => {
    const datas = useLoaderData();
  return (
    <div className='flex flex-col text-white'>
        {
            datas.map(({id,name}) => <Link to={`/detail/${id}`} key={id}>{name}</Link>)
        }
    </div>
  )
}

export default SideNav