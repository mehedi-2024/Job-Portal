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
import MyPostedJob from './Pages/MyPostedJob.jsx'
import MyPosetdJobDetails from './Pages/MyPosetdJobDetails.jsx'
import EditPostedJob from './Pages/EditPostedJob.jsx'

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
        loader: ({ params }) => fetch(`https://job-portal-backend-ashy-seven.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/allJobs',
        element: <AllJobs />,
        loader: () => fetch('https://job-portal-backend-ashy-seven.vercel.app/jobs')
      },
      {
        path: '/postJob',
        element: <PrivateRoute><PostJob /></PrivateRoute>,
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoute><MyPostedJob /></PrivateRoute>,
      },
      {
        path: '/myPostedJobs/details/:id',
        element: <PrivateRoute><MyPosetdJobDetails /></PrivateRoute>,
        loader: ({params}) => fetch(`https://job-portal-backend-ashy-seven.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/myPostedJobs/edit/:id',
        element: <PrivateRoute><EditPostedJob /></PrivateRoute>,
        loader: ({params}) => fetch(`https://job-portal-backend-ashy-seven.vercel.app/jobs/${params.id}`)
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
