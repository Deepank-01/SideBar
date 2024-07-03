import SideElements from "./Components/SideElements"
import Sidebar from "./Components/Sidebar"
import {useState} from "react"
import{Routes,Route,useLocation } from "react-router-dom"

import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Dashboard from "./Page/Dashboard";
import Project from "./Page/Project";
import Homepage from "./Page/Homepage";
function App() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const handleNavigation = (path) => {
    setActivePath(path);
  }
  return (
    <>
      <div className="flex ">
      <Sidebar>
          <SideElements 
            icon={<Home size={20} />} 
            text="Home"  
            alert 
            active={activePath === '/'} 
            nav=""
            onNavigate={() => handleNavigation('/')}
          />
          <SideElements 
            icon={<LayoutDashboard size={20} />} 
            text="Dashboard" 
            nav="dashboard"  
            active={activePath === '/dashboard'}
            onNavigate={() => handleNavigation('/dashboard')}
          />
          <SideElements 
            icon={<StickyNote size={20} />} 
            text="Projects"  
            nav="projects" 
            alert
            active={activePath === '/projects'}
            onNavigate={() => handleNavigation('/projects')}
          />
          <SideElements icon={<Calendar size={20} />} text="Calendar" />
          <hr className="my-3" />
          <SideElements icon={<Settings size={20} />} text="Settings"/>
          <SideElements icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>

        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
