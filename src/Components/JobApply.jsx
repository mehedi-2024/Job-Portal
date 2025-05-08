import { useLoaderData } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from '../authentication/Auth';

const JobApply = () => {
  const job = useLoaderData()
  console.log(job)
  const { hasUser } = useContext(AuthContext)
  const email = hasUser.email

  const handleApply = e => {
    e.preventDefault()

    const name = e.target.name.value
    const resume = e.target.resume.value
    const github = e.target.github.value
    const linkedIn = e.target.linkedIn.value
    const jobId = job._id

    const newApplication = {
      name,
      email,
      resume,
      github,
      linkedIn,
      jobId
    }

    console.log(newApplication)

    fetch('https://job-portal-backend-ashy-seven.vercel.app/jobApplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newApplication)
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data.insertedId);
        if (data.insertedId) {
          toast.success('Job apply successful!', {
            position: "bottom-left",
            autoClose: 2000,
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('To apply this job get an error', {
          position: "bottom-left",
          autoClose: 2000,
        });
      });
  }
  return (
    <div className='min-h-screen  my-10 py-8 bg-white border border-gray-400'>
      <ToastContainer />
      {/* job details  */}
      <div className=' rounded p-3 flex gap-5 py-8'>
        <div>
          <img src={job.company_logo} className='w-44' alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h4>Category : {job.category}</h4>
          <p className='flex items-center gap-1 -mt-1 text-blue-500 text-sm mb-3'><CiLocationOn size={21} />{job.location}</p>
          <p className='opacity-80'>{job.description}</p>
          <h5>Company : {job.company}</h5>
          <h5>Category : {job.category}</h5>
          <h5>Deadline : {job.applicationDeadline}</h5>
          <h5>Job type : {job.jobType}</h5>
          <h5>Salary : {job.salaryRange.min} - {job.salaryRange.max} <span className='uppercase'>{job.salaryRange.currency}</span></h5>
        </div>
      </div>
      {/* job apply  */}
      <div className='p-4 mt-6'>
        <h4>Allpy this job</h4>
        <form onSubmit={handleApply} className=' mt-3 border border-gray-200 p-6 rounded-md'>
          <div className="md:grid grid-cols-2 gap-5">
            <label>
              <p>Name</p>
              <input type="text" placeholder="Name" className="input input-bordered w-full" name='name' required />
            </label>

            <label>
              <p>Resume</p>
              <input type="url" placeholder="Resume" className="input input-bordered w-full" name='resume' required />
            </label>

            <label>
              <p>Github URL</p>
              <input type="url" placeholder="Gitgub URL" className="input input-bordered w-full" name='github' required />
            </label>

            <label>
              <p>Linked In URL</p>
              <input type="url" placeholder="Linked In URL" className="input input-bordered w-full" name='linkedIn' required />
            </label>
          </div>
          <button type='submit' className='btn btn-neutral mt-5 block mx-auto w-full'>Apply</button>
        </form>
      </div>
    </div>
  )
}

export default JobApply