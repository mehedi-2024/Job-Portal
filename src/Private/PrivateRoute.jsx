
import React, { useContext } from 'react'
import { AuthContext } from '../authentication/Auth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { hasUser, loading } = useContext(AuthContext)
    const location = useLocation().pathname

    if (loading) {
        return <div className="h-screen fixed top-0 left-0 bg-white z-10 w-screen mx-auto flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (hasUser) {
        return children
    }
    return <Navigate to={'/signin'} state={location} />

}

export default PrivateRoute