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
      <header className='aboutBanner banner__animation banner__animation--image mb-[60px]'>
        <img className='aboutBanner__background' src={background}/>
        <article className='banner__animation banner__animation--content'>
          <h1 className='translate__animation text-5xl font-semibold leading-tight'>Liderazgo<br/>con responsabilidad</h1>
          <p  className='translate__animation text-[rgba(255,255,255,0.75)] w-[40%] mt-4'>
          Creemos en la importancia de innovar de un trabajo integro y adaptado a las demandas del mercado
          global. Conoce la dedicación que nos convierte en la opción principal en la industria.
          </p>
        </article>
      </header> 
    </>
  )
}


export default AboutBanner
