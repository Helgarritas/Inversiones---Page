import React from 'react'

// Pages
import AboutBanner from './AboutBanner/AboutBanner'
import Charapters from '../../Components/Charapters/Charapters';
import PurPose from './Purpose/PurPose';
import AboutTeam from './AboutTeam/AboutTeam';
import SliderOpinion from '../../Components/SliderOpinion/SliderOpinion';
import AboutHistory from './AboutHistory/AboutHistory';
import AboutEardth from './AboutEardth/AboutEardth';

function About(props) {
  return (
    <>
      <AboutBanner/>
      <PurPose/>
      {/* <AboutTeam/> */}
      <AboutHistory></AboutHistory>
      <AboutEardth></AboutEardth>
      <SliderOpinion background={'#F5CB1F'} color={'black'}/>
    </>
  )
}

export default About
