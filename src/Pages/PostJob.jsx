import React from 'react'

const PostJob = () => {

  function handleChange(e) {
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <div className='mt-4 min-h-96 py-4'>
      <h3 className='text-center'>Give us your job details</h3>
      <div className='border border-gray-300 px-4 py-6'>
        <form onChange={handleChange} className=''>
          <div className='grid gap-4 md:grid-cols-2 mb-6'>
            {/* Name */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Company Name</p>
              <input type="text" name='companyName' placeholder="Company Name" className="input w-full " required />
            </label>

            {/* title */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Job Title</p>
              <input type="text" name='title' placeholder="Job title" className="input w-full " required />
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
              <p className='opacity-75 font-semibold'>Job Requirements</p>
              <input type="text" name='requirements' placeholder="Job Requirements" className="input w-full " required />
            </label>

            {/* responsibilities */}
            <label className="w-full">
              <p className='opacity-75 font-semibold'>Responsibilities</p>
              <input type="text" name='responsibilities' placeholder="Responsibilities" className="input w-full " required />
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
              <p className='opacity-75 font-semibold'>Location</p>
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