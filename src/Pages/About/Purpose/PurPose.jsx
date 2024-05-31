import React from 'react'
import Spline from '@splinetool/react-spline';
import image from '/src/assets/Backgrounds/Abou-Purpose-Image.png';


function PurPose(props) {
  return (
    <>
      <section className='purpose'>
        <article className='puerpose__container'>
        {/* <Spline scene="https://prod.spline.design/FsmiOeWPCW5wxUkz/scene.splinecode"/> */}
          <p className='purpose__description'>
          “AGRUPAR TODAS LAS <br /> INSTRUCCIONES <br />DIGITALES IFORMACIÓN 
          <br />CONTEXTUAL SOBRE <br /> LAS TAREAS A REALIZAR <br />
          SOBRE EL OBJETO <br /> REAL.”</p>
          <img className='purpose__background' src={image} alt="Proposito" />
        </article>
      </section>
    </>
  )
}

export default PurPose
