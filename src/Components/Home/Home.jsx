import React, { useState } from 'react'
import { HomeMenuList } from './Partials/HomeMenuList'
import { About } from './About/About'
import { TechnicalSkills } from './TechnicalSkills/TechnicalSkills'
import { Projects } from './Projects/Projects'
import { Education } from './Education/Education'
import { WorkExperience } from './WorkExperience/WorkExperience'
import { Certifications } from './Certifications/Certifications'
// import { SoftSkills } from './SoftSkills/SoftSkills'
// import { Hobbies } from './Hobbies/Hobbies'


const menuList = {
  "ABOUT" : <About/>,
  "WORK EXPERIENCE" : <WorkExperience/>,
  "EDUCATION" : <Education/>,
  "PROJECTS" : <Projects/>,
  "TECHNICAL SKILLS" : <TechnicalSkills/>,
  "CERTIFICATIONS" : <Certifications/>,
  // "SOFT SKILLS" : <SoftSkills/>,
  // "HOBBIES" : <Hobbies/>,
}


export const Home = () => {
  const [homeCurrentMenu,setHomeCurrentMenu] = useState('ABOUT')

  return (
    <>
    <div className='grid grid-cols-12 '>
      
      <div className='col-span-2'>
        <HomeMenuList 
          menu_list = {menuList}
          set_current = {setHomeCurrentMenu}
          selected_home_menu = {homeCurrentMenu}
        />
      </div>
      <div className='col-span-10 overflow-y-scroll  h-[80vh]'>
        <div className='my-7'>
        {menuList[homeCurrentMenu]}
        </div>
      </div>

    </div>
    </>

  )
}
