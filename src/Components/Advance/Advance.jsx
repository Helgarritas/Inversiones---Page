import React, { useEffect,useContext } from 'react';

function Advance({counter}){
  useEffect(() => {
    animateStars('1.5px','.span1', 50, '5s','#F5F7FA');
    animateStars('3px','.span2', 50, '10s','#f9d649');
  }, []);

  const animateStars = (size, selector, totalStarts, duration,color) => {
    const colors = ['#f9d649', 'white'];
    const colorRandom = colors[Math.floor(Math.random() * colors.length)];
    const stars = [];

    const scope = document.querySelector('.counter ')

    for (let i = 0; i < totalStarts; i++) {
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      stars.push(`${x}vw ${y}vh 0 ${color},${x}vw ${y+100}vh 0 ${color}`);
    }

    const star = document.querySelector(selector);
    star.style.setProperty('--space-layer', stars.join(','));
    star.style.setProperty('--size', size);
    star.style.setProperty('--duration', duration);
  };

  // let handleScroll = useContext(LoaderContext)

  return (
    <>
      <section className='counter'>
        <span className='span span1'></span>
        <span className='span span2'></span>
        <span className='span span3'></span>
        <article className='counter__container'>
          {counter.map((obj,index)=>(
            <div className='counter__card' key={index}>
              <p className='counter__card--num'>{obj.number[0]}<span>{obj.number[1]}</span></p>
              <p className='counter__card--num'>{obj.description}</p>
            </div>
          ))}
        </article>
      </section>
    </> 
  )
}

export default Advance
