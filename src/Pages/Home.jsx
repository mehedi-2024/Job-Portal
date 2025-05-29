
import React from 'react'
import Banner from '../Components/Banner'
import HotJob from '../Components/HotJob'
import JobCategories from '../Components/JobCategories'
import FeaturedCompanies from '../Components/FeaturedCompanies'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div className='pt-4'>
      <Banner />
      <HotJob />
      <JobCategories />
      <FeaturedCompanies />
      <Testimonials />
    </div>
  )
}

export default Home