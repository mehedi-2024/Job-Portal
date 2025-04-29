import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className='mx-auto pt-16'>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
