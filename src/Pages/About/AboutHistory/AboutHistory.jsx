import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
import DataAboutHistory from './DataAboutHistory';
import ButtonSlider from '../../../Components/ButtonSlider/ButtonSlider';
import LoaderContext from '../../../Components/Loader/LoaderContext';

function AboutHistory() {
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const { handleScroll } = useContext(LoaderContext);
  
  const [itemWidth, setItemWidth] = useState(0);
  const [isPrevHidden, setIsPrevHidden] = useState(true);
  const [isNextHidden, setIsNextHidden] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && containerRef.current.firstElementChild) {
        const newWidth = containerRef.current.firstElementChild.clientWidth;
        setItemWidth(newWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollBy = useCallback((distance) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: distance, top: 0, behavior: 'smooth' });
    }
  }, []);

  const next = useCallback(() => {
    scrollBy(itemWidth * 3);
    setIsPrevHidden(false);
    setIsNextHidden(true);
  }, [itemWidth, scrollBy]);

  const prev = useCallback(() => {
    scrollBy(-itemWidth * 3);
    setIsPrevHidden(true);
    setIsNextHidden(false);
  }, [itemWidth, scrollBy]);

  return (
    <article className='aboutHistory' ref={carouselRef}>
      <section className='aboutHistory__container' ref={containerRef}>
        {DataAboutHistory.map((obj, index) => (
          <div className='aboutHistory__slider' key={index}>
            <div className='aboutHistory__images'>
              <img className='aboutHistory__card--image' src={obj.image} alt={obj.year} />
            </div>
            <div className='aboutHistory__line'></div>
            <div className='aboutHistory__card'>
              <div className='aboutHistory__card--year'>
                <div className='aboutHistory__point'></div>
                <p className='solutionHome__animation--card'>{obj.year}</p>
              </div>
              <p className='aboutHistory__card--text solutionHome__animation--card'>{obj.description}</p>
            </div>                
          </div>
        ))}
      </section>
      <ButtonSlider prev={prev} next={next} isPrevHidden={isPrevHidden} isNextHidden={isNextHidden} />
    </article>
  );
}

export default AboutHistory;
