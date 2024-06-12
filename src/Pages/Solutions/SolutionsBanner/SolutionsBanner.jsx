import React, { useEffect } from 'react';

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
      <header className='solutionsBanner banner__animation banner__animation--image'>
        <img className='solutionsBanner__background' src={banner.background} alt="Banner Background" />
        <article className='solutionsBanner__container banner__animation banner__animation--content'>
          <h1>{banner.title}</h1>
          <p className='translate__animation'>{banner.description}</p>
        </article>
      </header>
    </>
  );
}

export default SolutionsBanner;
