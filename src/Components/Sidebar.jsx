import React from 'react'
import logo from '../assets/logo.png'
import profile from "../assets/profile.png"
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react"
import { createContext, useContext, useState } from "react"
const SidebarContext = createContext();
const Sidebar = ({children}) => {
  const[Expanded,setExpanded]= useState(true)
  // const[alert,setalert]=useState(true)
  console.log(children)
  return (
    <>
      <aside className="  sticky top-0  h-screen ">
      <nav className=' h-full flex flex-col  border-r shadow-sm '>

       <div className=' p-4 pb-2 flex justify-between items-center'>
       <img src={logo} className={`${Expanded ? ("w-11  md:w-32"):("w-0")}`}></img>
       <button className='p-1 rounded-lg  hover:bg-gray-100 '
        onClick={()=>setExpanded(!Expanded)}>
        
        {Expanded ? (<ChevronFirst />):(<ChevronLast/>)}
       </button>
       </div>
       
       <SidebarContext.Provider value={{ Expanded, setExpanded }}>

           <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
       

       <div className="border-t flex p-3 ">
       <img src={profile} className="md:w-10 md:h-10 w-6 h-5 rounded-md" />

       <div className={`flex justify-between items-center overflow-hidden transition-all ${Expanded ? ("w-full"):("w-0")}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold text-xs md:text-xl">constGenius</h4>
                                <span className="text-xs text-gray-600 hidden md:block">constgenius@gmail.com</span>
                            </div>
                            <MoreVertical size={20} />
                        </div>

       </div>

      </nav>

      </aside>
    </>
  )
}

export default Sidebar
export const useSidebarContext = () => useContext(SidebarContext);