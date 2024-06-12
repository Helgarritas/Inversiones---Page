import React from 'react'
import Spline from '@splinetool/react-spline';

function ProjectMap({projectId}) {
  console.log(projectId);
  return (
    <>
      <article className='projectMap'>
        <section className='projectMap__container'>
          <p className='projectMap__description'>Imaginamos el futuro de la minería; lo construimos. A través de proyectos innovadores y
            sostenibles, transformamos nuestra visión en logros concretos que benefician a las comunidades locales
            y protegen el medio ambiente
          </p>
          {projectId == 'peru' 
            ? <Spline scene="https://prod.spline.design/q0Oyqxr0gAq0cyw9/scene.splinecode"/>
            : <Spline scene="https://prod.spline.design/oImru6Jn8bN9MX17/scene.splinecode" />
          }
        </section>  
      </article>
    </>
  )
}

export default ProjectMap;
