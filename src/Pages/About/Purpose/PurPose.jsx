import React,{useEffect} from 'react'
import Spline from '@splinetool/react-spline';

// Components
import MouseCursor from '../../../Components/AnimationMouse/MouseCursor';

function PurPose({animationMouse}) {
  useEffect(() => {
    animationMouse();
  }, []);

  return (
    <>
      <section className='purpose mouse__animation--scope'>
        <article className='puerpose__container'>
        {/* <Spline scene="https://prod.spline.design/FsmiOeWPCW5wxUkz/scene.splinecode"/> */}
          <div className='purpose__description'>
            <p>
            "Ampliando nuestra influencia global, nos posicionamos como la opción líder en la industria minera, a través de la exploración y desarrollo ético responsable"
            </p>
          </div>
          <div className='purpose__animation'>
            <Spline scene="https://prod.spline.design/FsmiOeWPCW5wxUkz/scene.splinecode" />
          </div>
        </article>
        <MouseCursor></MouseCursor>
      </section>
    </>
  )
}

export default PurPose
