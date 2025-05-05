import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from './authentication/Signin.jsx'
import Auth from './authentication/Auth.jsx'
import Signup from './authentication/Signup.jsx'
import Home from './Pages/Home.jsx'
import PrivateRoute from './Private/PrivateRoute.jsx'
import JobApply from './Components/JobApply.jsx'
import AllJobs from './Pages/AllJobs.jsx'
import PostJob from './Pages/PostJob.jsx'

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
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply /></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path: '/allJobs',
        element: <AllJobs />,
        loader: () => fetch('http://localhost:5000/jobs')
      },
      {
        path: '/postJob',
        element: <PrivateRoute><PostJob /></PrivateRoute>,
      },
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
