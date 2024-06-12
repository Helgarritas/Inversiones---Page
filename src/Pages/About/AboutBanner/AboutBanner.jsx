import React,{useContext} from 'react';

// Image
import background from '/src/assets/About/Mask group.png'

function AboutBanner(props) {

  setTimeout(()=>{
    let container = document.querySelectorAll('.banner__animation');
    container.forEach((elment)=>{
      elment.style.opacity = '1';
      elment.style.transform = 'translateY(0)';
    })
  },1000)

  return (
    <>
      <header className='aboutBanner banner__animation banner__animation--image'>
        <img className='aboutBanner__background' src={background}/>
        <article className='aboutBanner__container banner__animation banner__animation--content'>
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
