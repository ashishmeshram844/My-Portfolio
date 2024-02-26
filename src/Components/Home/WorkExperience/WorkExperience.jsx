import React from 'react'

export const WorkExperience = () => {
  const WORK_EXPERIENCE = [
    {
      company_name : "ABC",
      designation: "Python Web Developer",
      responsibilities : "dont know ",
      start_year : 2020,
      end_year : 2020,
      completed : 3
    },
    {
      company_name : "ABCJIUGJI",
      designation: "Python Web Developer",
      responsibilities : "dont know ",
      start_year : 2020,
      end_year : 2020,
      completed : 0
    },
    {
      company_name : "Pikjyiugiu iufuyg",
      designation: "Python Developer",
      responsibilities : "dont know ",
      start_year : 2020,
      end_year : 2020,
      completed : 2
    },
   
  ]
  return (
   <>
      <div className='grid grid-cols-12 gap-4 m-5 '>
        {
          WORK_EXPERIENCE.map((item =>{
            return (
              <>
                <div className='col-span-8  border-b-2 hover:border-yellow-500 '>
                    <div className='h-32 bg-gray-950 p-4 my-4' >
                      <div className='fade_from_left'>
                        <h1 className='text-lg font-bold'>{item.designation}</h1>
                        <span>{item.company_name}</span>
                        <p> {item.responsibilities} %</p>
                        <p> {item.start_year} - {item.end_year}</p>
                      </div>
                    </div>
                </div>

                <div className='col-span-4'>

                    <div className='h-32 my-4 flex items-center justify-center hover:text-yellow-500 '>
                        <div className='bg-gray-950 h-32 w-32 rounded-full flex items-center justify-center '>
                            <span className='font-bold text-2xl fade_from_top'>{item.completed} years</span>
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
