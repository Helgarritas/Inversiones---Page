import React from 'react'

// Image
import background from '/src/assets/About/About-Banner-background.png';
function AboutBanner(props) {
  return (
    <>
      <header className='aboutBanner'>
        <img className='aboutBanner__background' src={background}/>
        <article className='aboutBanner__container'>
          <h1 className='translate__animation'>Liderazgo<br/>con responsabilidad</h1>
          <p  className='translate__animation'>
          Creemos en la importancia de innovar de un trabajo integro y adaptado a las demandas del mercado
          global. Conoce la dedicación que nos convierte en la opción principal en la industria.
          </p>
        </article>
      </header>
    </>
  )
}


export default AboutBanner
