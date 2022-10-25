import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Details = () => {
    const data = useLoaderData();
  return (
    <div>
        <img src={data.img_url} alt="" />
        <p>{data.details}</p>
    </div>
  )
}

export default Details