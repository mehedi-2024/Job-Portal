
import React, { useContext } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { AuthContext } from '../authentication/Auth';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';



const HotJobCard = ({ job }) => {

  const { hasUser } = useContext(AuthContext)
  // console.log(job)
  return (
    <div className='border border-gray-400 rounded p-3 flex gap-5 py-8'>
      <div>
        <img src={job.company_logo} className='w-48' alt="" />
      </div>
      <div className='flex flex-col gap-2'>
        <h4>Category : {job.category}</h4>
        <p className='flex items-center gap-1 -mt-1 text-blue-500 text-sm mb-3'><CiLocationOn size={21} />{job.location}</p>
        <p className='opacity-80'>{job.description}</p>
        <h5>Job type : {job.jobType}</h5>
        <h5>Salary : {job.salaryRange.min} - {job.salaryRange.max} <span className='uppercase'>{job.salaryRange.currency}</span></h5>

        <div className='flex-grow flex items-end'>
          <Link to={`/jobApply/${job._id}`}>
            <motion.button
              className='px-12 py-1 mt-3 hover:text-white hover:bg-gray-800 rounded-full border duration-75 border-gray-500'
              whileTap={{ scale: .95 }}>{hasUser ? 'Apply' : 'Login to Apply'}</motion.button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HotJobCard