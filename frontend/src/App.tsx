import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './conponents/Homepage'
import SideBar from './conponents/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <div className='homepage-title'><Homepage /></div>
      <div className="sidebar-conponent"><SideBar /></div>
    </>
  )
}

export default App
