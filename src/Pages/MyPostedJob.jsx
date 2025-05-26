
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authentication/Auth'
import { Link } from 'react-router-dom'
import axios from 'axios'

const MyPostedJob = () => {
    const { hasUser } = useContext(AuthContext)

    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get(`https://job-portal-backend-ashy-seven.vercel.app/jobs?email=${hasUser.email}`, {
            withCredentials: true
        })
            .then(res => setDatas(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='mt-4 pt-5 min-h-[100vh]'>
            {
                !datas.length
                    ?
                    <div className='flex items-center justify-center h-[100vh] text-center w-full pb-44'>
                        <h5>No post available</h5>
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Job</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {(datas?.map((data, i) => <tr key={i}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="border border-gray-300 rounded-full h-14 w-14">
                                                    <img
                                                        src={data.company_logo}
                                                        alt="Avatar Tailwind CSS Component" className=' ' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {data.title}
                                    </td>
                                    <th>
                                        <button className="btn btn-neutral btn-sm"><Link to={`/myPostedJobs/details/${data._id}`}>Details</Link></button>
                                    </th>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    )
}

export default MyPostedJob