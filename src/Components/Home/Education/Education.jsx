import React from 'react'

export const Education = () => {
  const EDUCATIONS = [
    {
      name : "Bachelor Of Engineering (CSE)",
      college: "G.H Raisoni institute of engineering and technology Nagpur-23",
      percentage : "54.60",
      passing_year : 2020,
    },
    {
      name : "HSC (General Science)",
      college: "C.P & Bearar Junior college ravinagar nagpur",
      percentage : "54.60",
      passing_year : 2016,
    },
    {
      name : "Bachelor Of Engineering (CSE)",
      college: "C.P & Berar high school Ravinagar nagpur",
      percentage : "71.60",
      passing_year : 2014,
    }
  ]
  return (
   <>
      <div className='grid grid-cols-12 gap-4  '>
        {
          EDUCATIONS.map((item =>{
            return (
              <>
                <div className='col-span-8 border-b-2 hover:border-yellow-500'>
                    <div className='h-32 bg-gray-950 p-4 my-4 '>
                        <h1 className='text-lg font-bold fade_from_left'>{item.name}</h1>
                        <span className='fade_from_left'>{item.college}</span>
                        <p className='fade_from_left'>Passed with {item.percentage} %</p>
                    </div>
                </div>

                <div className='col-span-4'>

                    <div className='h-32 my-4 flex items-center justify-center hover:text-yellow-500 '>
                        <div className='bg-gray-950 h-32 w-32 rounded-full flex items-center justify-center'>
                            <span className='font-bold text-3xl fade_from_top'>{item.passing_year}</span>
                        </div>
                    </div>
                </div>

              </>
            )
          }))
        }
      </div>
   </>
  )
}
