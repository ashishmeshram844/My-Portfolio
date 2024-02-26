import React from 'react'
import { ArrowNarrowLeft,ArrowNarrowRight } from 'heroicons-react'
import { SearchCircle } from 'heroicons-react';
import { useState, useEffect } from 'react'
import { Home } from '../Home/Home'
import { Terminal } from '../Terminal/Terminal'
import { Clock } from './clock'
import { Contact } from '../Contact/Contact'
// import { Resume } from '../Resume/Resume'
// import { Truck } from 'heroicons-react';
import { Bike } from 'grommet-icons';
import { FastForward } from 'heroicons-react';
import { Play } from 'heroicons-react';
import { Pause } from 'heroicons-react';


const contentComponent = {
    "HOME" : <Home/>,
    "TERMINAL" : <Terminal/>,
    // "RESUME" : <Resume/>,
    "CONTACT" : <Contact/>
}

const menuItems = Object.keys(contentComponent)

export const Menubar = () => {
    const [selectedMenu,setSelectedMenu] = useState(0)
    const [currentContent,setCurrentContent] = useState(<Home/>)
    const [searchInput,setSearchInput] = useState('')

    const onNextClick = () =>{
        if(selectedMenu < menuItems.length -1){
            setSelectedMenu(selectedMenu+1)
        }
    }

    const UpdateSearch = (e) =>{
        setSearchInput(e.target.value)
    }

    const OnEnterPress = (e) =>{
        if (e.key === "Enter"){
            if(searchInput.length){
                setCurrentContent(<Terminal/>)
                setSelectedMenu(1)
                // setCurrentContent(contentComponent[menuItems[selectedMenu]])
                let resObject = {
                    query : searchInput,
                    datetime : new Date().toLocaleString(),
                    answer : 'this is a sample answer this is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answerthis is a sample answer'
                }
                if (! sessionStorage.getItem('userHistoryData')){
                    let searchHistoryData  = JSON.stringify([resObject]) 
                    sessionStorage.setItem('userHistoryData',searchHistoryData)
                }
                else{
                    let searchHistory = JSON.parse(sessionStorage.getItem('userHistoryData'))
                    searchHistory.push(resObject)
                    let searchHistoryData = JSON.stringify(searchHistory)
                    sessionStorage.setItem('userHistoryData',searchHistoryData)
                }
            }
        }    
    }

    const onPreviousClick = () =>{
        if(selectedMenu > 0){
            setSelectedMenu(selectedMenu - 1)
        }
    }

    const SubmitSearch = () =>{
        if(selectedMenu < menuItems.length -1){
            if(searchInput.length){
                setCurrentContent(<Terminal/>)
                setSelectedMenu(1)
                let resObject = {
                    query : searchInput,
                    datetime : new Date().toLocaleString(),
                    answer : 'this is a sample answer'
                }
                if (! sessionStorage.getItem('userHistoryData')){
                    let searchHistoryData  = JSON.stringify([resObject]) 
                    sessionStorage.setItem('userHistoryData',searchHistoryData)
                }
                else{
                    let searchHistory = JSON.parse(sessionStorage.getItem('userHistoryData'))
                    searchHistory.push(resObject)
                    let searchHistoryData = JSON.stringify(searchHistory)
                    sessionStorage.setItem('userHistoryData',searchHistoryData)
                }
            }
        }

    }

    useEffect(() =>{
        setCurrentContent(contentComponent[menuItems[selectedMenu]])
    },[selectedMenu])

  return (
    <>
        {/* top menu bar */}

       

        <div className='flex justify-between p-2'>
            <button onClick={onPreviousClick}>
                <ArrowNarrowLeft className={selectedMenu > 0 ? 'text-yellow-300' : 'text-gray-700'}/>
            </button>
            <div className='flex-1 mx-16'>
                {/* <span className='font-bold text-green-600 text-xl'> {menuItems[selectedMenu].toUpperCase()} </span> */}
                <div className='flex border-b-2 hover:border-b-2 focus:border-yellow-500 focus:text-white hover:border-yellow-500 justify-between'>
                    <Bike className='booster_speed'/>
                    <input type='text' placeholder='Ask Me Anything ... ' onKeyDown={OnEnterPress}  onChange={UpdateSearch} value={searchInput.length ? searchInput : ''} 
                    className='text-green-600 bg-black mx-4 px-4 w-full outline-0 focus:outline-0 '></input>
                    <SearchCircle  onClick={SubmitSearch}  className='text-white w-7 h-7 hover:cursor-pointer'/>
                </div>
            </div>
            <div className='flex me-5'>
                
                <div className='justify-start flex mx-2'>
                        <FastForward className='rotate-180 hover:text-green-500'/>
                </div>
                <div className='flex justify-center mx-2'>
                        <Play className='animate-spin outline-double rounded-lg mx-2 text-green-500'/>
                        {/* <Pause className='outline-double rounded-lg mx-2'/> */}
                </div>
                <div className='flex justify-end mx-2 hover:text-green-500'>
                        <FastForward className=''/>
                </div>
                <span className='text-gray-500'>Ye jo halka halka</span>
                
            </div>

            <div className='flex'>
                {<Clock/>}   
                <button onClick={onNextClick}>
                <ArrowNarrowRight className={selectedMenu < menuItems.length-1 ? 'text-yellow-300' : 'text-gray-700'} /> 
                </button>
            </div>
        </div>
      
            
  
       {/* end top menu bar */}

        <div className='pt-4'>
            {currentContent}
        </div>
    </>

  )
}
