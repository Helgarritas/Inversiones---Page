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
          "Expandiendo nuestra influencia global, nos consolidamos como la principal opción en la industria minera, mediante la exploración y desarrollo ético rentable de yacimientos"
          </p>
          <img className='purpose__background' src={image} alt="Proposito" />
        </article>
      </section>
    </>
  )
}

export default PurPose
