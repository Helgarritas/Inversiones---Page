import React, { useCallback } from 'react';
// import Spline from '@splinetool/react-spline';

// Pages
import HomeBanner from './HomeBanner/HomeBanner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import HomeServices from './HomeServices/HomeServices';
import HomeProjects from './HomeProjects/HomeProjects';
import HomeTeam from './HomeTeam/HomeTeam';
import HomeOpinion from './HomeOpinion/HomeOpinion';
import HomeSliderClient from '../../Components/HomeSlider/HomeSliderClient';
import HomeBlog from './HomeBlog/HomeBlog';

// Components
import MouseTracker from '../../Components/AnimationMouse/AnimationMouse';

function Home() {
  return (
      <MouseTracker>
        {(animationMouse) => (
          <>
            <HomeBanner/>
            <HomeAbout/>
            <HomeSlider/>
            <HomeServices animationMouse={animationMouse}/>
            <HomeProjects/>
            <HomeOpinion/>
            <HomeBlog animationMouse={animationMouse}/>
            <HomeSliderClient/>
          </>
        )}
      </MouseTracker>
  );
}

export default Home;
