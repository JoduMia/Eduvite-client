import React from 'react'
import Faq from './Faq'
const blogs = [
    {
        id: 1,
        que: 'what is cors?',
        ans: 'Normally CORS is a machanism of filtering a request from client side to serverside in if it should give a good response or bad response. Cors means "cross origin resource sharing". It is just a header based HTTP machanism which help the server to decide to provide data to the client side. Its functionality depends on domain, scheme and port'
    },
    {
        id: 2,
        que: 'What is firebase? What\'s are the alternatives of firebase?',
        ans: 'Firebase is a modern real time communication server. It working policy is based on NoSQL. Firebase provides hosting, authentication, notification services. It\'s cross platform SDK helps to butid build android, web, ios apps there are many alternatives of firebase in this modern era. Parse, Back4App, AWSamplify, kuzzle, kuchbatch, mongoDb are the competitors.',
    },
    {
        id:3,
        que:'How does the private route work?',
        ans: 'Private route means authenticate route. It is just a process to authorize a user to visit the content or do something where he has access. Private route mostly like as publice route but difference in redirection and the authentication.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated'
    },
    {
        id:4,
        que: 'What is Node? How does it works?',
        ans: 'Node is a javascript runtime. It helps to execute javascript code to run outside the browser. It helps to build scalable modern application. it works in a non-blocking approach. it is highly performanceable.'
    }

]

const Faqs = () => {
    return (
        <div className='bg-[#fef8f8] w-full dark:bg-[#00052b] '>
            <div className='container flex items-center justify-center h-[89vh]'>
                <div className='md:w-1/2 p-5 bg-white dark:bg-[#00000083] shadow mx-auto rounded'>
                    {
                        blogs.map(blog => <Faq key={blog.id} {...blog} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Faqs;