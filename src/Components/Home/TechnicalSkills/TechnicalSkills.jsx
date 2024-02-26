import React from 'react'

export const TechnicalSkills = () => {
  const PROGRAMMING_LANGUAGES = [
    {
      name : "Python",
      description : "About Your Work Experiences and challanges",
      projects : [
        "Student Performance Prediction",
        "E learning Portal",
        "Payroll Management",
        "Test project1",
        "Test project 2",
        "test Project 3 he bhai",
        "test project 5"
      ],
      image : "https://imgs.search.brave.com/BeRXD3btXHHEDf_vJ4gobUNlrilDLKBn7RFvLTRO--o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlX2dh/bGxlcnkyL1B5dGhv/bi1Mb2dvLUZyZWUt/RG93bmxvYWQtUE5H/LnBuZw",
    },
    {
      name : "C Language",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/wcL73kQWtX0gKjnG4n5zkuYbU2nmUphU8z4dgwmyNfI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMzA1MDYx/MTI4MTQvQy1Qcm9n/cmFtbWluZy1MYW5n/dWFnZS5wbmc",
    },
    {
      name : "C++ Language",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/tVA-6rjMn8Qn-PCSeZrOCyDDZT4-m6VVpVp4DrIs7gI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/NzAzMTQ0NjE5L0NQ/UC1MYW5ndWFnZS5w/bmc",
    },
    {
      name : "Javascript",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/58lyYz4GFG6d6b7fLWrBRi3U76p10tGv7O7f_1p7xNg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/YXBlLmNvbS93cC1j/b250ZW50L3BuZ19s/b2dvX3ZlY3Rvci9q/YXZhc2NyaXB0LWpz/LWxvZ28ucG5n",
    },
    {
      name : "PostgreSQL",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/OTV_ARxIxcEXvmDZebn0yme7n1KQsOfH8AZCK5-kWuQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9zdGdyZXNxbHR1/dG9yaWFsLmNvbS8v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDQvcG9zdGdyZXNx/bC10dXRvcmlhbC1o/b21lcGFnZS5zdmc.svg",
    },
    {
      name : "MySQL",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/fckhLwL7zNh0gyvm_Vjce0Da0UxVMu1xDaTZIPIYcYk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9teXNxbC1sb2dv/LnN2Zw.svg",
    },
    {
      name : "Mongodb",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/5KVvcPDTkYVObvzGFo15v9gKR6i6JhgG7wqnjRXKErE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YmxlZXBzdGF0aWMu/Y29tL2NvbnRlbnQv/aGwtaW1hZ2VzLzIw/MjMvMTIvMTYvbW9u/Z29kYi1oZWFkZXIt/by5qcGc",
    },
    {
      name : "Django Framework",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/LSvTEkLwQGFQSWHxLCybRPqqODqv_AbzvCRwMR-2kGA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/amF2YXRwb2ludC5j/b20vZGphbmdvL2lt/YWdlcy9kamFuZ28t/dHV0b3JpYWwucG5n",
    },
    {
      name : "Django Rest Framework",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/mkuScVBx0Q2sG-A2UdkqGqDAz5AgGHO9awEwj1Of6CY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ub2N1YmVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNy9EamFuZ29z/LVJFU1QtZnJhbWV3/b3JrLnBuZw",
    },
    {
      name : "HTML",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/b5wjByR8v3xehaovzkcvONnLg6FmyL_9zKYAsw1PAy8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbXMt/YXNzZXRzLnR1dHNw/bHVzLmNvbS9jZG4t/Y2dpL2ltYWdlL3dp/ZHRoPTQwMC91cGxv/YWRzL3VzZXJzLzMw/L3Bvc3RzLzEwNjgz/OC9wcmV2aWV3X2lt/YWdlL2h0bWwucG5n",
    },
    {
      name : "CSS",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/N1hgWKHudLbcpp0RBaetQ76JGZu8Djm_02jt8OagdHo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQ ud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYyL0NTUzNfbG9n/by5zdmc.svg",
    },
    {
      name : "Bootstrap",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/EuBcjjKl-0g6y6ixA0EqbNni2-HyseAX6wcMjsM_Vnk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzU5NS9z/Y3JlZW5zaG90cy8x/NDQxNzg2My9tZWRp/YS84OTEzY2MxYWFl/NWRlMGNjN2FmZGQx/NzI3ZTU1ODJjMC5w/bmc_cmVzaXplPTQw/MHgzMDAmdmVydGlj/YWw9Y2VudGVy",
    },
    {
      name : "React Js",
      description : "About Your Work Experiences and challanges",
        projects : [
        "Student Performance Prediction",
        "E learning Portal"
      ],
      image : "https://imgs.search.brave.com/TSi0cGpEKa6_g92RltsBoEhzFv3uM35IGf0eQwrEAKM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw",
    },
  ]

  const TechnologySkillsCaraousal = (skills) =>{
    return(
      <div class="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 m-3">
          {
              skills.map((item) => (

                  <div className="block relative max-w-lg h-72 rounded-lg p-6 shadow-lg dark:bg-neutral-900 scale-90 hover:-translate-y-1 hover:scale-110  duration-500 text-center overflow-y-scroll ">
                    <div className='bg-cover absolute left-0 right-0 top-0 bottom-0 '  
                    style={{backgroundImage: `url(${item.image})`, opacity:"0.08", backgroundPosition:"center", backgroundSize : "contain", backgroundRepeat:"no-repeat"}}></div>
                  <div className='fade_from_left'>
                      <h5
                        className="mb-2 opacity-100 text-xl font-medium">
                        {item.name}
                      </h5>
                      <p
                        className="mb-4 text-base text-left">
                      {item.description}
                      </p>
                      <p className='text-left mb-3 font-medium text-lg'>Projects : </p>
                      <div className='text-left mb-3  '>
                        {
                          item.projects.map((item =>{return (
                            <span className='bg-gray-800 py-1 px-3 m-1 inline-block '>
                                {item}
                            </span>
                            )}))
                        }
                      </div>

                      <div className='align-text-bottom text-left '>
                        <p className='text-lg mb-3 font-medium'>Expertise : </p>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-yellow-700 " >
                          <div 
                            className="bg-green-600 text-xs  p-0.5 leading-none rounded-full"
                            style={{width:`${'70'}%`}}
                            > </div>
                        </div>
                      </div>
                  </div>

                </div>


              ))
          }
      </div>
  )  
  }

  return (
    <>
    {/* <h1 className='text-3xl mb-5 text-yellow-400'>Programming Languages</h1> */}
      <div className="">

        {TechnologySkillsCaraousal(PROGRAMMING_LANGUAGES)}
      </div>
        
    </>
    
  )
}
