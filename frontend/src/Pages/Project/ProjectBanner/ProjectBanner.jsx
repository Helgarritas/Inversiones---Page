import React from 'react'
import { useEffect } from 'react';
// Image
import imageDesktop from '/src/assets/Project/pro-desktop.png';
import imageMovil from '/src/assets/Project/Project-movil.png';

function ProjectBanner({projectId}) {
  
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
  }, [projectId]);

  return (
    <>
      <article className='projectbanner banner__animation banner__animation--image'>
        <picture>
          <source className='projectbanner__background' media='(max-width:640px)' srcSet={imageMovil}/>
          <img className='projectbanner__background' src={imageDesktop} alt="Proyectos de minería" />
        </picture>
        <article className='projectbanner__container'>
          <div className='projectbanner__content banner__animation banner__animation--content'>
            <h1>TRANSFORMANDO<br />NUESTRA VISIÓN</h1>
          </div>
        </article> 
      </article>
    </>
  )
}

export default ProjectBanner
