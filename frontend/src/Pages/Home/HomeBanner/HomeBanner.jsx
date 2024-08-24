import React,{useEffect,useState,useContext} from 'react'
import ButtonPrimary from '/src/Components/ButtonPrimary/ButtonPrimary';

function HomeBanner() {
  return (
    <>
      <header className='homeBanner'>
        <article className='w-[50%]'>
          <h1 className='text-[rgba(0,0,0,1)] text-5xl font-semibold leading-tight dark:text-contPrimary'>Innovación y <br /> Seguridad en <br /> Soluciones Mineras</h1>
          <p className='text-[rgba(0,0,0,0.75)] mt-4 mb-9 dark:text-contPrimary'>
            En Inversiones Mendoza, ofrecemos alquiler y venta de maquinaria minera de última generación,
            además de servicios especializados.
          </p>
          <ButtonPrimary></ButtonPrimary>
        </article>
      </header>
    </>
  )
}

export default HomeBanner
