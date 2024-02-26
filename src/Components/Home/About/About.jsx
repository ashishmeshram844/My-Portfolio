import React from 'react'
import Myphoto from '../../../images/my_photo.jpeg'



export const About = () => {
  return (
    <>
        <div className="pt-4 grid grid-cols-12 ">
            <div className="grid col-span-8 place-items-center text-center md:col-span-8 sm:col-span-12 fade_from_left">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Know About Me . . . </h1>
                    {/* <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-300  relative inline-block px-3 py-2">
                        <span class="relative text-black">Python developer</span>
                    </span> */}
                    <span className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-25 dark:text-gray-400">
                        Experienced 
                    Python Developer
                        with 3+ years of hands-on expertise in designing and implementing scalable
                        and efficient software solutions. Expertise in Python, backend development, API integration, and database
                        management. Adept at collaborating with cross-functional team to deliver high-quality, efficient code. Strong
                        problem-solving skill and continuous learning to stay updated with industry trends.  
                    </span>
                    
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Ask Anything
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Learn more
                        </a>  
                    </div>
                
            </div>

            <div className='grid col-span-4 md:col-span-4 sm:col-span-12 '>  {/*fade_from_top */} 
                <img className="object-cover h-96 w-96  rounded-3xl shadow-lg  my-20 " src={Myphoto} alt="Ashish meshram"/>
            </div>
        </div>
    </>
  )
}
