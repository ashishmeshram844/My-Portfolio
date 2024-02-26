import React from 'react'
import { ArrowNarrowRight } from 'heroicons-react'



const generateMenuListDesign = (menuList,setCurrent,selected) =>{

    const selectNewMenu = (e) =>{
        setCurrent(e.target.value)
    }
    return(
        <div>
            {
                Object.keys(menuList).map((menu) => (
                        <div className='flex justify-start my-7'>
                            <button 
                                className={selected === menu ?'text-green-500 text-1xl hover:text-yellow-300':  'hover:text-yellow-300 hover:text-2xl'} 
                                value={menu} 
                                onClick={ selectNewMenu }>
                                {menu}
                            </button> 
                            {selected === menu ?  <ArrowNarrowRight className='text-yellow-500 ml-8'/> :''}  
                        </div>
                ))
            }
        </div>
    )  
}

export const HomeMenuList = (props) => {
    const { menu_list,set_current,selected_home_menu } = props
  return (
    <>
        {generateMenuListDesign(menu_list,set_current,selected_home_menu)}
    </>
  )
}


