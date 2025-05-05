import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='mx-auto pt-16 bg-gray-50 min-h-screen'>
      <ToastContainer />
      <Navbar />
      <div className='max-w-7xl px-2 md:px-8 mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
