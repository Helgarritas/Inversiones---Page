import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';


function SolutionsBanner({ banner, solutionId }) {

  useEffect(() => {
    let container = document.querySelectorAll('.banner__animation');
    
    container.forEach((element) => {
      // Restablecer el estilo inicialmente
      element.style.opacity = '0';
      element.style.transform = 'translateY(3rem)';

      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 1000);  
    });    
  }, [solutionId]);

  return (
    <>
      <header 
        className='h-[100vh] px-[130px] flex items-center relative banner__animation banner__animation--image -z-10'
      >
        <img src={banner.image} alt="" className='object-fit height-[150%] object-left -z-10'/>
        {/* <div className='solutionsBanner__contSplin'>
          {solutionId == 'mineriaSubterranea'
            ? <Spline scene="https://prod.spline.design/GfOXIJymSi1Vu2oS/scene.splinecode" />
            : <Spline scene="https://prod.spline.design/pzrDOeI-a8vQMnPo/scene.splinecode" />
          }
        </div> */}
        <article className='solutionsBanner__container banner__animation banner__animation--content'>
          <div className='text-white text-5xl font-semibold leading-tight'>{banner.title}</div>
          <p className='text-white/75 translate__animation'>{banner.description}</p>
        </article>
      </header>
    </>
  );
}

export default SolutionsBanner;
