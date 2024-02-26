import React from 'react'

export const Projects = () => {

  const ALL_PROJECTS = [
    {
      project_name : "Student Performance Predictions",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://imgs.search.brave.com/Kit4_6DdSRy9OhLr_cRVXbXmrI7zXAKv-s62xqXDOIU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL21vaGFt/bWVkQWxqYWRkL3N0/dWRlbnRzLXBlcmZv/cm1hbmNlLXByZWRp/Y3Rpb24vcmF3L21h/aW4vcGxvdHMvcHJv/amVjdC5jb3Zlci9o/ZWFsdGguanBn"
    },
    {
      project_name : "Student Performance Predictions 2",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://imgs.search.brave.com/LZSRWhqEGHnftV0OuQj6jXui1LBccv4MZ-MRq6Umuls/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bnRhc2ttYW5hZ2Vy/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9Bc2Fu/YS03MDB4MzIzLnBu/Zw"
    },
    {
      project_name : "Student Performance Predictions 3",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://imgs.search.brave.com/JYrOV_VQfWeUSPWvD6DHPsBP1ZVJp6zXNjRwlYvhQCc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MTE4MzczNTgvZmls/ZS9vcmlnaW5hbC0y/OGI3ZDMwNWQwNzY0/MWY3N2RjMjNhNDRh/ZGYyZWNiNC5wbmc_/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy"
    },
    {
      project_name : "Student Performance Predictions 2",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://imgs.search.brave.com/fzrPKZGvBh1AvXZbPUNoFmri81ICxfwCN0jJ7jbalpg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE5Lzg1/L2E0LzE5ODVhNDAz/NTA3OTVmMWJlN2Vm/MTlkMDAzNDRlNTll/LmpwZw"
    },
    {
      project_name : "Student Performance Predictions 2",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
    },
    {
      project_name : "Student Performance Predictions 2",
      description : "This is a project description and here we write started learning and complete this project",
      used_languages : ["Python","HTML","CSS","Javascript","Django"],
      thumnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
    },
  ]


  return (
    <>
     <div className="">
        {
          ALL_PROJECTS.map((item =>{
            return(
              <>
                <div className=" h-56 ">
                 <div className=" w-full lg:max-w-full h-48 lg:flex bg-gray-950 scale-90 hover:scale-100 rounded-lg text-white my-5 hover:animate-pulse duration-700 hover:border-b-4 hover:border-yellow-500">
                  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden fade_from_left_card_image" 
                  style={{backgroundImage:`url(${item.thumnail})`}}
                  title="thumnail"
                  >
                  </div>
                  <div className=" rounded-b  lg:rounded-r p-4 flex flex-col justify-between  leading-normal fade_from_left">
                    <div className="mb-8">
                      <div className=" font-bold text-xl my-5">{item.project_name.toUpperCase()}</div>
                      <p className="text-base my-5">{item.description}</p>
                      <div className="text-xl my-5">
                        {
                          item.used_languages.map((language =>{
                            return(
                              <>
                                <span className='bg-gray-900 py-1 px-2 m-2'>{language}</span>
                              </>
                            )
                          }))
                        }
                      </div>
                    
                    </div>
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


