import React from 'react'

// Pages
import AboutBanner from './AboutBanner/AboutBanner'
import Charapters from '../../Components/Charapters/Charapters';
import PurPose from './Purpose/PurPose';
import SliderOpinion from '../../Components/SliderOpinion/SliderOpinion';
import AboutHistory from './AboutHistory/AboutHistory';
import AboutEardth from './AboutEardth/AboutEardth';
// Components
import MouseTracker from '../../Components/AnimationMouse/AnimationMouse';

function About(props) {
  return (
    <>
      <MouseTracker>
        {(animationMouse) => (
          <>
            <AboutBanner/>
            <PurPose animationMouse={animationMouse}/>
            {/* <AboutTeam/> */}
            <AboutHistory></AboutHistory>
            <AboutEardth></AboutEardth>
            <SliderOpinion background={'#F5CB1F'} color={'black'}/>
          </>
        )}
      </MouseTracker>
    </>
  )
}

export default About
