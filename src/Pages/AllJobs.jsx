import React from 'react'
import { useLoaderData } from 'react-router-dom'
import HotJobCard from '../Components/HotJobCard'

const AllJobs = () => {
  const jobs = useLoaderData()
  return (
    <div className='mt-4'>
      <div className="relative">
        <button>Filter : </button>
        <div className='absolute top-0 left-0 z-10 w-[70vw] md:w-[350px] min-h-96 bg-white shadow-md'></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          jobs?.map((job, index) => {
            return <HotJobCard job={job} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default AllJobs