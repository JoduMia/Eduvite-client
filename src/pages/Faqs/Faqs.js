import React from 'react'
import Faq from './Faq'
const blogs = [
    {
        id: 1,
        que: 'Can anyone apply for the admission?',
        ans: 'No, Specially the students from science backgrounded can apply for the admission.'
    },
    {
        id: 2,
        que: 'Have any kind of discount in waver fee?',
        ans: 'Yeah, We have discount system for based on the merit position on tests.',
    },
    {
        id:3,
        que:'How long will be the course run? ',
        ans: 'Basically it\'s depend on the subject and department. Show the detail of courses.'
    },
    {
        id:4,
        que: 'Are all the courses is under professional course?',
        ans: 'Yes, all the courses we provide is professional.'
    },
    {
        id:5,
        que: 'Is there any opportunity of intern after finishing the course?',
        ans: 'Yes, Of course we provide intern opportunity for all the students in home and also in abroad.'
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