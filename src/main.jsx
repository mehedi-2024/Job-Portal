import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './authentication/Signin.jsx'
import Auth from './authentication/Auth.jsx'
import Signup from './authentication/Signup.jsx'
import Home from './Pages/Home.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth>
      <RouterProvider router={route} />
    </Auth>
  </StrictMode>,
)
