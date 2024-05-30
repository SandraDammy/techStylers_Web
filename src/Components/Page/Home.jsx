import React from 'react'
import LandingPage from '../Section/LandingPage'
import Community from '../Section/Community'
import Services from '../Section/Services'
import Benefits from '../Section/Benefits'
import Articles from '../Section/Articles'
import Team from "../Section/Team";
import Testimonials from "../Section/Testimonials";

const Home = () => {
  return (
    <div>
      <LandingPage/>
      <Community/>
      <Services/>
      <Benefits/>
      <Articles/>
      <Team/>
      <Testimonials/>
    </div>
  )
}

export default Home