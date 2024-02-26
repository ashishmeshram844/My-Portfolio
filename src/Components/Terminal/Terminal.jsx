import React, { useState } from 'react'
import { useEffect } from 'react'
import { UserCircle } from 'heroicons-react'
import Typewriter from './Typewriter'
import { ClipboardCopyOutline } from 'heroicons-react'
import { Trash } from 'heroicons-react'


export const Terminal = () => {
  const [allSearch,setAllSearch] = useState([])
  const [searchCount,setSearchCount] = useState(0)

  const clearSessionStorage = () =>{
    sessionStorage.clear();
    setAllSearch([])
  }
  
  const checkUserHistoryDataUpdate = () =>{
    let user_history_count = 0
    try{
      user_history_count = JSON.parse(
        sessionStorage.getItem("userHistoryData")
      ).length
    }
    catch{
      
    }
    if (user_history_count !== searchCount){
      setSearchCount(user_history_count)
    }
  }
  checkUserHistoryDataUpdate()
  
  useEffect(() =>{
    setAllSearch(
      JSON.parse(
        sessionStorage.getItem("userHistoryData")
      )
    )
  },[searchCount])

  return (
   <>
      <div className='justify-end flex m-auto w-4/5'> 
        {allSearch?
          <button className='bg-gray-900 w-36  p-2 my-1 flex' onClick={clearSessionStorage}>
              CLEAR ALL
              <span className='mx-3'>
                <Trash/>
              </span>
          </button> : ''
        }
      </div>
   <div className='m-5 overflow-y-scroll  h-[80vh] place_cursor_bottom'>  
      <div className='mt-1 p-3 w-4/5 m-auto'>
            {allSearch? allSearch.map(((obj,index) =>{
                return(
                  <>
                  <div className='mb-6'>
                    <div className=''>
                      <div className='flex justify-end'>
                        <span className='p-1 px-3 flex'>
                          {obj.datetime} <ClipboardCopyOutline className='mx-3 hover:cursor-pointer'/>
                        </span>
                      </div>
                      <div>
                        <span className='font-bold p-1 flex text-lg font-mono hover:text-yellow-500 hover:cursor-pointer'>
                          <UserCircle className='me-8'/>  {obj.query} 
                        </span>
                       
                      </div>
                    </div>

                    <div className='flex'>
                      {index === searchCount-1 ? 

                      <span className=' ms-14 p-1 font-sans text-lg'>
                        <Typewriter text={obj.answer} delay={50} />
                      </span> : 
                      <span className=' ms-14 p-1'>
                        {obj.answer}
                      </span> 

                      }
                    
                    </div>
                  </div>

                  </>
                )
              })) :
              ''
            }
      </div>
   </div>
   
   </>
  )
}
