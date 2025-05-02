
import React, { useEffect, useState } from 'react'
import HotJobCard from './HotJobCard'

const HotJob = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    const hotJobs = jobs.slice(0, 6)

    return (
        <div className='my-16'>
            <h2 className='mb-6'>Hot Jobs for you</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                {
                    hotJobs.map((job, index) => {
                        return <HotJobCard job={job} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default HotJob