
import React, { useEffect, useState } from 'react'
import HotJobCard from './HotJobCard'
import axios from 'axios'

const HotJob = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {

        axios.get('https://job-portal-backend-ashy-seven.vercel.app/allJobs')
            .then(res => setJobs(res.data))
            .catch(err => console.log(err))

    }, [])
    const hotJobs = jobs?.slice(0, 6)

    // console.log(jobs)

    return (
        <div className='my-16'>
            <h3 className='mb-6 text-center'>Hot Jobs for you</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    hotJobs?.map((job, index) => {
                        return <HotJobCard job={job} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default HotJob