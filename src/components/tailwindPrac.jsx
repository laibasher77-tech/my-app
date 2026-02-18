import React from "react";

function Tailwind(){
    return(
        <>
        <nav className="flex  bg-pink-950 justify-between  py-2 pt-4">
             <img src="/weather-color-moon-stars-svgrepo-com.svg " alt="" className="h-10 px-20 pt-1"/>
         <ul className="flex justify-end space-x-12 px-28">
            <li className=" cursor-pointer text-white ">Home </li>
            <li className=" cursor-pointer text-white"> ABout </li>
            <li className=" cursor-pointer text-white">Setting</li>
    
         </ul>
         
        </nav>
        <button className="bg-pink-100 w-20 h-7 mx-20 rounded-2xl">Hello</button>
        </>
    )
}

export default Tailwind;