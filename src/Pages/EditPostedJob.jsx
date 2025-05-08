import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../authentication/Auth'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const EditPostedJob = () => {
    const { hasUser } = useContext(AuthContext)
    const jobData = useLoaderData()
    const jobId = useParams().id
    const navigate = useNavigate()

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

        fetch(`http://localhost:5000/jobs/${jobId}`, {
            method: 'PATCH',
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
                    navigate('/myPostedJobs');
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
                            <input type="text" name='company' defaultValue={jobData.company} placeholder="Company Name" className="input w-full " required />
                        </label>

                        {/* title */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Title</p>
                            <input type="text" name='title' defaultValue={jobData.title} placeholder="Software Engineer" className="input w-full " required />
                        </label>

                        {/* jobType */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Type</p>
                            <input type="text" name='jobType' defaultValue={jobData.jobType} placeholder="Job type" className="input w-full " required />
                        </label>

                        {/* category  */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Category</p>
                            <input type="text" name='category' defaultValue={jobData.category} placeholder="Job Category" className="input w-full " required />
                        </label>

                        {/* requirements */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Requirements <span className='text-sm'>(if two or more must separate with ",")</span></p>
                            <input type="text" name='requirement' defaultValue={jobData.requirements.join(',')} placeholder="Job Requirements" className="input w-full " required />
                        </label>

                        {/* responsibilities */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Responsibilities <span className='text-sm'>(if two or more must separate with ",")</span></p>
                            <input type="text" name='responsibilitie' defaultValue={jobData.responsibilities.join(',')} placeholder="Responsibilities" className="input w-full " required />
                        </label>

                        {/* status */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Status</p>
                            <input type="text" name='status' defaultValue={jobData.status} placeholder="Job Status" className="input w-full " required />
                        </label>

                        {/* hr_name */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>HR Name</p>
                            <input type="text" name='hr_name' defaultValue={jobData.hr_name} placeholder="HR Name" className="input w-full " required />
                        </label>

                        {/* hr_email */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>HR Email</p>
                            <input type="email" value={hasUser.email} readOnly name='hr_email' placeholder="HR Email" className="input w-full " required />
                        </label>

                        {/* description */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Job Description</p>
                            <input type="text" name='description' defaultValue={jobData.description} placeholder="Job Description" className="input w-full " required />
                        </label>

                        {/* location */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Location<span className='text-sm'>(if two or more must separate with ",")</span></p>
                            <input type="text" name='location' defaultValue={jobData.location} placeholder="Location" className="input w-full " required />
                        </label>

                        {/* company logo  */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Company Logo URL</p>
                            <input type="url" name='company_logo' defaultValue={jobData.company_logo} placeholder="Company Logo URL" className="input w-full " required />
                        </label>

                        {/* applicationDeadline */}
                        <label className="w-full">
                            <p className='opacity-75 font-semibold'>Application Deadline</p>
                            <input type="date" name='applicationDeadline' defaultValue={jobData.applicationDeadline} placeholder="Application Deadline" className="input w-full " required />
                        </label>

                        {/* salary  */}
                        <div>
                            <p className='opacity-75 font-semibold'>Salary</p>
                            <div className="flex flex-co flex-row gap-3 border border-gray-300 p-3">
                                {/* Min  */}
                                <label className="w-full">
                                    <p className='opacity-75 font-semibold'>Min</p>
                                    <input type="text" name='min' defaultValue={jobData.salaryRange.min} placeholder="Min" className="input w-full " required />
                                </label>
                                {/* max */}
                                <label className="w-full">
                                    <p className='opacity-75 font-semibold'>Max</p>
                                    <input type="text" name='max' defaultValue={jobData.salaryRange.max} placeholder="Max" className="input w-full " required />
                                </label>
                                {/* currency */}
                                <label className="w-full">
                                    <p className='opacity-75 font-semibold'>Currency</p>
                                    <input type="text" name='currency' defaultValue={jobData.salaryRange.currency} placeholder="Currency" className="input w-full " required />
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

export default EditPostedJob