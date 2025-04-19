import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/shareRoute/Navbar'

function App() {

  return (
    <div className='max-w-[1280px] bg-white mx-auto px-8'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
