import React from "react";
import { useState } from "react";

export const  Clock = () => {

    const [time, setTime] = useState(new Date(new Date().getTime()).toLocaleTimeString("en-US", {timeZone: "Asia/Calcutta"}));
   
     React.useEffect(() => {
       setInterval(() => {
        setTime(new Date(new Date().getTime()).toLocaleTimeString("en-US", {timeZone: 'Asia/Kolkata'}));
       }, 1000);
     }, []);

   
    return <span className="text-white bg-gray-800 mx-2 px-2 py-1 text-sm hover:text-yellow-400"> {time} </span>
    }