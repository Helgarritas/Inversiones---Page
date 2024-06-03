import React, { useEffect, useState, useRef } from 'react';
// Components
import DataAboutHistory from './DataAboutHistory';
import ButtonSlider from '../../../Components/ButtonSlider/ButtonSlider';

// Image
import image from '/src/assets/Backgrounds/back.png';

function AboutHistory(props) {
  
  const carousel = useRef();
  const container = useRef();

  const [state, setstate] = useState({
    scroller: null,
    itemWidth: 0,
    isPrevhiddde: true,
    isNextHidden: false,
  })

  const next = () => {
    state.scroller.scrollBy({
      left: state.itemWidth*3,top: 0,behavior: 'smooth'
    })
    setstate({...state,isNextHidden: true,isPrevhiddde: false})
  }

  const prev = () => {
    state.scroller.scrollBy({
      left: -state.itemWidth*3,top: 0,behavior: 'smooth'
    })
    setstate({...state,isNextHidden: false,isPrevhiddde: true})
  }

  useEffect(() => {
    let item = container.current.childNodes;
    let scroller = container.current;
    let itemWidth = container.current.firstElementChild.clientWidth;

    setstate({...state,scroller,itemWidth})
    return () => {
      
    };
  }, [carousel,container]);
  return (
    <>
      <article className='aboutHistory' ref={carousel}>
        <section className='aboutHistory__container' ref={container}>
          {DataAboutHistory.map((obj,index)=>(
            <div className='aboutHistory__slider' key={index}>
              <div className='aboutHistory__images'>
                <img className='aboutHistory__card--image' src={obj.image} alt="" key={index}/>
              </div>
              <div className='aboutHistory__line'></div>
              <div className='aboutHistory__card' key={index}>
                <div className='aboutHistory__card--year'>
                  <div className='aboutHistory__point'></div>
                  <p>{obj.year}</p>
                </div>
                <p className='aboutHistory__card--text'>{obj.description}</p>
              </div>                
            </div>
          ))}
        </section>
        <ButtonSlider prev={prev} next={next}></ButtonSlider>
      </article>
    </>
  )
}

export default AboutHistory
