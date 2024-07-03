import React from 'react'
// import { createContext, useContext, useState } from "react"
import { useSidebarContext } from "./Sidebar"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
const SideElements = ({icon, text, active, alert, nav, onNavigate}) => {
    const[label,setlabel]=useState(false)
    const { Expanded } = useSidebarContext();
    const navigate=useNavigate()
    var goto=()=>{
     navigate(`/${nav}`)
    if (onNavigate) {
        onNavigate();
    }
    
    }

  return (
    <>
        <button className={`relative  w-full flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
        onClick={goto}
        >
            {icon}
            <span className={`overflow-hidden transition-all ${Expanded ? "w-full" : "w-0"}`}> {text}</span>
            {/* {alert && (<div className='absolute right-2 w-2 h-2 rounded bg-indigo-400 '>

            </div>)} */}

          
        </button>
    </>
  )
}

export default SideElements