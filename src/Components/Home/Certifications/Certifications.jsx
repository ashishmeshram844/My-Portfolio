import React from 'react'

export const Certifications = () => {
  const CERTIFICATIONS = [
    {
      name : "Ideatron",
      duration: "1 day",
      description : "normal Event ",
    },
    {
      name : "Ideatron",
      duration: "1 day",
      description : "normal Event ",
    },
   
  ]
  return (
   <>
      <div className='grid grid-cols-12 gap-4 m-5 ]'>
        {
          CERTIFICATIONS.map((item =>{
            return (
              <>
                <div className='col-span-8 border-b-2 hover:border-yellow-500  '>
                    <div className='h-32 bg-gray-950 p-4 my-4 ' >
                      <div className='fade_from_left'>
                        <h1 className='text-lg font-bold'>{item.name}</h1>
                        <span>{item.description}</span>
                      </div>
                    </div>
                </div>

                <div className='col-span-4'>

                    <div className='h-32 my-4 flex items-center justify-center hover:text-yellow-500 '>
                        <div className='bg-gray-950 h-32 w-32 rounded-full flex items-center justify-center '>
                            <span className='font-bold text-2xl fade_from_top'>{item.duration} </span>
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
