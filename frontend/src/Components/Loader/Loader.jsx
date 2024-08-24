import React from 'react'
import { useEffect,useState,useRef } from 'react';

function Loader({boolLoader}) {

  const barrasRef = useRef();

  return (
    <>
      <section className='loader' 
        ref={barrasRef}
        style={{zIndex: boolLoader?'9997': '0'}}
      >
        <div className='loader__barras'>
          <div className='loader__barra'></div>
          <div className='loader__barra'></div>
          <div className='loader__barra'></div>
          <div className='loader__barra'></div>
          <div className='loader__barra'></div>
        </div> 
      </section>
    </>
  )
}
export default Loader
