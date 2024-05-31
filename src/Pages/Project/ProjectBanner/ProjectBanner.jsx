import React from 'react'

// Image
import background from '/src/assets/Project/Project-Banner-background.png';

function ProjectBanner(props) {
  return (
    <>
      <article className='projectbanner'>
        <img className='projectbanner__background' src={background} alt="" />
        <article className='projectbanner__container'>
          <div className='projectbanner__content'>
            <h2>Transformando <br /> Nuestra Visión</h2>
            <p>No solo imaginamos el futuro de la minería; lo construimos. A través de proyectos innovadores y
            sostenibles, transformamos nuestra visión en logros concretos que benefician a las comunidades locales
            y protegen el medio ambiente</p>
          </div>
        </article> 
      </article>
    </>
  )
}

export default ProjectBanner
