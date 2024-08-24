import React from 'react'

// Pages
import AboutBanner from './AboutBanner/AboutBanner'
import Values from './Values/Values';
import Charapters from '../../Components/Charapters/Charapters';
import PurPose from './Purpose/PurPose';
import AboutHistory from './AboutHistory/AboutHistory';
import Iso from './Iso/Iso';
import AboutEardth from './AboutEardth/AboutEardth';

function About(props) {
  return (
    <>
      <AboutBanner/>
      <Values/>
      <AboutHistory></AboutHistory>
      {/* <PurPose/> */}
      <Iso></Iso>
      <AboutEardth></AboutEardth>
    </>
  )
}

export default About
