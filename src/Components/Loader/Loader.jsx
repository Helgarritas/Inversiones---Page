import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { useEffect,useState,useRef } from 'react';
import { EasePack } from 'gsap/all';

function Loader(props) {

  const dotsStyle = {
    '--size': '90px',
    '--dot-size': '8px',
    '--dot-count': '6',
    '--color': '#000',
    '--speed': '.8s',
    '--spread': '60deg'
  };

  const barrasRef = useRef();
  const icon = useRef();
  useGSAP(()=>{
    let tl = gsap.timeline();
        tl.from('.loader__barra',{ yPercent:-100,duration:.9,stagger:.07,ease: "expo.out" })
          .to('.loader__barra',{ yPercent:0,duration:2,ease: "expo.out" })
          .to('.loader__barra',{ yPercent:100,duration:.9,stagger:.07,ease: "expo.out" },"+=0")

    let tlIcon = gsap.timeline();
        tlIcon.to(icon.current, { y:16,opacity: 1, duration: 1.8, ease: "expo.out" },"+=.65")
          .to(icon.current, { y:16,opacity: 0, duration: .9 },);
  
  },{scope:barrasRef})

  return (
    <>
      <section className='loader'>
        <div className='loader__barras' ref={barrasRef}>
          <div className='loader__barra'>1</div>
          <div className='loader__barra'>2</div>
          <div className='loader__barra'>3</div>
          <div className='loader__barra'>4</div>
          <div className='loader__barra'>5</div>
        </div>

        <div className='loader__logo--container' >
          <div style={dotsStyle} className="icon" ref={icon}>
            <div style={{'--i': '0'}} className="dot"></div>
            <div style={{'--i': '1'}} className="dot"></div>
            <div style={{'--i': '2'}} className="dot"></div>
            <div style={{'--i': '3'}} className="dot"></div>
            <div style={{'--i': '4'}} className="dot"></div>
            <div style={{'--i': '5'}} className="dot"></div>
          </div>        
        </div>    
      </section>
    </>
  )
}

export default Loader
