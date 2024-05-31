import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect,useState,useRef } from 'react';

function Loader({booleanLoader}) {

  const barrasRef = useRef();

  useGSAP(()=>{
    let tl = gsap.timeline();
        tl.from('.loader__barra',{ yPercent:-100,duration:1,stagger:.07,ease: "expo.out" })
          .to('.loader__barra',{ yPercent:0,duration:1,ease: "expo.out" })
          .to('.loader__barra',{ yPercent:100,duration:1,stagger:.07,ease: "expo.out" },"+=0")  
  },{scope:barrasRef})

  return (
    <>
      <section className='loader' style={{zIndex: booleanLoader?'9999':0}}>
        <div className='loader__barras' ref={barrasRef}>
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
