import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const MyPosetdJobDetails = () => {

    const navigate = useNavigate()
    const jobId = useParams().id

    const [application, setApplication] = useState([])

    useEffect(() => {
        fetch(`https://job-portal-backend-ashy-seven.vercel.app/jojobApplication/${jobId}`)
            .then(res => res.json())
            .then(data => setApplication(data))
            .then(err => console.log(err))
    }, [])

    const jobData = useLoaderData()

    const handleStatus = (e, id) => {
        const data = {
            status: e.target.value
        }
        console.log(e.target.value, id)
        fetch(`http://localhost:5000/jojobApplication?id=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(err => console.log(err))
    }

    const handleDeleteJob = () => {
        if (confirm('Are you want to delete this job ?')) {
            fetch(`https://job-portal-backend-ashy-seven.vercel.app/jobs/${jobId}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Delete successful!', {
                        position: "bottom-left",
                        autoClose: 2000,
                    });
                    setTimeout(() => {
                        navigate('/myPostedJobs');
                    }, 2500);
                })
                .catch(err => {
                    toast.error('To delete this get an error!', {
                        position: "bottom-left",
                        autoClose: 2000,
                    });
                })
        }
    }
    return (
        <div className='mt-4 pt-5 min-h-[100vh]'>
            <ToastContainer />
            <div className='min-h-[30vh] p-2 flex flex-col items-center gap-2'>
                <img src={jobData.company_logo} className='w-20 h-20 mx-auto rounded-full border border-gray-300 p-1' alt="" />
                <h3>{jobData.title}</h3>
                <div className='flex items-center gap-4 mt-4'>
                    <button className='btn btn-success btn-sm'><Link to={`/myPostedJobs/edit/${jobId}`}>Edit this job</Link></button>
                    <button onClick={handleDeleteJob} className='btn btn-error text-[1rem] btn-sm'>Delete this job</button>
                </div>
                <h4 className='mt-16 text-start w-full'>All application for this job :</h4>
            </div>
            {
                !application.length
                    ?
                    <div className='flex items-center justify-center text-center w-full mt-16'>
                        <h5>No one applied for this job</h5>
                    </div>
                    :
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Details</th>
                                    <th>Stasus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    application?.map((applicationData, i) => {
                                        return <tr key={i} className="bg-base-200">
                                            <th>{i + 1}</th>
                                            <td>{applicationData.name}</td>
                                            <td>
                                                <p>Email : {applicationData.email}</p>
                                                <p>Github : {applicationData.github}</p>
                                                <p>LinkedIn : {applicationData.linkedIn}</p>
                                                <p>Resume : {applicationData.resume}</p>
                                            </td>
                                            <td>
                                                <select onChange={e => handleStatus(e, applicationData._id)} className="select select-bordered select-sm w-full max-w-xs">
                                                    <option>On view</option>
                                                    <option>Hired</option>
                                                    <option>Rejected</option>
                                                </select>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>}
        </div>
    )
}

export default MyPosetdJobDetails