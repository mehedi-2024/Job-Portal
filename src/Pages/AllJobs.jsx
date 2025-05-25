import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import HotJobCard from '../Components/HotJobCard'
import { FaSliders } from 'react-icons/fa6'
import { FaSearch, FaTimes } from "react-icons/fa";
import axios from 'axios';

const AllJobs = () => {
  const [jobs, setJobs] = useState([])
  const [jobTitle, setJobTitle] = useState('')
  const [isDataLoading, setIsDataLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://job-portal-backend-ashy-seven.vercel.app/allJobs?title=${jobTitle}`, {
      withCredentials: true
    })
      .then(res => {
        setJobs(res.data)
        setIsDataLoading(false)
      })
      .catch(err => console.error('Error fetching jobs:', err))
  }, [jobTitle])

  const [openFilter, setOpenFilter] = useState(false)

  const toggleFilter = () => setOpenFilter(!openFilter)

  const handleJobTitle = (e) => {
    const title = e.target.value
    setJobTitle(title)
  }
  return (
    <div className='mt-4 pt-8  mb-10 min-h-96'>
      <div className="relative mb-6">
        <button onClick={toggleFilter} className='ml-3 lg:ml-0'>{!openFilter ? <FaSliders size={30} /> : <FaTimes size={30} />}</button>
        {/* for filter  */}
        <div className={`absolute top-10 left-0 z-20 w-[70vw] md:w-[350px] min-h-96 bg-white shadow-lg border border-gray-200 rounded-lg p-5 pt-8 flex flex-col gap-6 ${!openFilter && 'hidden'}`}>
          <div className='flex items-center gap-4 border border-gray-300 p-2 pl-4 w-full rounded-md'>
            <FaSearch size={22} />
            <input onChange={handleJobTitle} type="text" className='outline-none  tracking-wide text-[1rem] font-semibold font-mono' placeholder='job title' />
          </div>

          <div className='flex items-center gap-3'>
            <h5 className='flex-grow'>Location : </h5>
            <select className="select select-md max-w-48">
              <option>Any</option>
              <option>Dhaka</option>
              <option>Khulna</option>
              <option>Rajshahi </option>
              <option>Chattogram </option>
              <option>Barishal  </option>
              <option>Sylhet </option>
              <option>Rangpur  </option>
              <option>Mymensingh </option>
            </select>
          </div>
          <div className='flex items-center gap-3'>
            <h5 className='flex-grow'>Salary : </h5>
            <select className="select select-md max-w-48">
              <option>Any</option>
              <option>10000 BDT</option>
              <option>20000 BDT</option>
              <option>30000 BDT </option>
              <option>40000 BDT </option>
              <option>50000 BDT  </option>
            </select>
          </div>
          <div className='flex items-center gap-3'>
            <h5 className='flex-grow'>Job Type : </h5>
            <select className="select select-md max-w-48">
              <option>Any</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Part-time</option>
              <option>Full-time</option>
              <option>Flexible</option>
              <option>Temporary</option>
              <option>Internship</option>
            </select>
          </div>
        </div>
      </div>
      <div className={`${jobs.length && 'grid'}  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4`}>
        {
          !isDataLoading ? (
            jobs.length ? jobs.map((job, index) => {
              return <HotJobCard job={job} key={index} />
            }) : <h4 className='text-center mt-28 w-full'>No job available</h4>
          ) : (
            <div className='grid grid-cols-3 gap-2'>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default AllJobs