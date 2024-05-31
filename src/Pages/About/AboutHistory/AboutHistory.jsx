import React from 'react'
// Components
import DataAboutHistory from './DataAboutHistory';
// Image
import image from '/src/assets/Backgrounds/back.png';

function AboutHistory(props) {
  return (
    <>
      <article className='aboutHistory'>
        <section className='aboutHistory__container'>
          {DataAboutHistory.map((obj,index)=>(
            <div className='aboutHistory__slider' key={index}>
              <div className='aboutHistory__images'>
                <img className='aboutHistory__card--image' src={obj.image} alt="" key={index}/>
              </div>
              <div className='aboutHistory__line'></div>
              <div className='aboutHistory__cards'>
                <div className='aboutHistory__card' key={index}>
                  <div className='aboutHistory__card--year'>
                    <div className='aboutHistory__point'></div>
                    <p>{obj.year}</p>
                  </div>
                  <p className='aboutHistory__card--text'>{obj.description}</p>
                </div>                
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  )
}

export default AboutHistory
