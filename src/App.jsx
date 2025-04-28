import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='mx-auto pt-16'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
