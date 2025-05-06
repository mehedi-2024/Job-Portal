import React from 'react'
import { toast, ToastContainer } from 'react-toastify'

const PostJob = () => {

  function handleSubmit(e) {
    e.preventDefault()

    const form = e.target
    const formData = new FormData(form)
    const enitialData = Object.fromEntries(formData)

    const { min, max, currency, requirement, responsibilitie, ...data } = enitialData

    const salaryRange = {
      min,
      max,
      currency
    }
    const requirements = requirement.split(',')
    const responsibilities = responsibilitie.split(',')
    data.salaryRange = salaryRange
    data.requirements = requirements
    data.responsibilities = responsibilities

    console.log(data)

    fetch('https://job-portal-backend-ashy-seven.vercel.app/jobs', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Job post successful!', {
          position: "bottom-left",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate('/allJobs');
        }, 2500);
      })
      .catch(err => {
        toast.error('Get an error', {
          position: "bottom-left",
          autoClose: 2000,
        });
      })
  }
  return (
    <div className='mt-4 min-h-96 py-4'>
      <ToastContainer />
      <h3 className='text-center'>Give us your job details</h3>
      <div className='border border-gray-300 px-4 py-6'>
        <form onSubmit={handleSubmit} className=''>
          <div className='grid gap-4 md:grid-cols-2 mb-6'>
            {/* Name */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Company Name</p>
              <input type="text" name='companyName' placeholder="Company Name" className="input w-full " required />
            </label>

            {/* title */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Title</p>
              <input type="text" name='title' placeholder="Software Engineer" className="input w-full " required />
            </label>

            {/* jobType */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Type</p>
              <input type="text" name='jobType' placeholder="Job type" className="input w-full " required />
            </label>

            {/* category  */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Category</p>
              <input type="text" name='category' placeholder="Job Category" className="input w-full " required />
            </label>

            {/* requirements */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Requirements <span className='text-sm'>(if two or more must separate with ",")</span></p>
              <input type="text" name='requirement' placeholder="Job Requirements" className="input w-full " required />
            </label>

            {/* responsibilities */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Responsibilities <span className='text-sm'>(if two or more must separate with ",")</span></p>
              <input type="text" name='responsibilitie' placeholder="Responsibilities" className="input w-full " required />
            </label>

            {/* status */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Status</p>
              <input type="text" name='status' placeholder="Job Status" className="input w-full " required />
            </label>

            {/* hr_name */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>HR Name</p>
              <input type="text" name='hr_name' placeholder="HR Name" className="input w-full " required />
            </label>

            {/* hr_email */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>HR Email</p>
              <input type="email" name='hr_email' placeholder="HR Email" className="input w-full " required />
            </label>

            {/* description */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Description</p>
              <input type="text" name='description' placeholder="Job Description" className="input w-full " required />
            </label>

            {/* location */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Location<span className='text-sm'>(if two or more must separate with ",")</span></p>
              <input type="text" name='location' placeholder="Location" className="input w-full " required />
            </label>

            {/* company logo  */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Company Logo URL</p>
              <input type="url" name='logo' placeholder="Company Logo URL" className="input w-full " required />
            </label>

            {/* applicationDeadline */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Application Deadline</p>
              <input type="date" name='applicationDeadline' placeholder="Application Deadline" className="input w-full " required />
            </label>

            {/* salary  */}
            <div>
              <p className='opacity-75 font-semibold'>Salary</p>
              <div className="flex flex-co flex-row gap-3 border border-gray-300 p-3">
                {/* Min  */}
                <label className="w-full">
                  <p className='opacity-75 font-semibold'>Min</p>
                  <input type="text" name='min' placeholder="Min" className="input w-full " required />
                </label>
                {/* max */}
                <label className="w-full">
                  <p className='opacity-75 font-semibold'>Max</p>
                  <input type="text" name='max' placeholder="Max" className="input w-full " required />
                </label>
                {/* currency */}
                <label className="w-full">
                  <p className='opacity-75 font-semibold'>Currency</p>
                  <input type="text" name='currency' placeholder="Currency" className="input w-full " required />
                </label>
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-neutral w-full'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default PostJob