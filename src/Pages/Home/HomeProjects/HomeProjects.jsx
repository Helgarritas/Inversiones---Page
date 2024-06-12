import React, { useEffect,useContext } from 'react';
import DataHomeProjects from './Components/DataHomeProjects';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import LoaderContext from '../../../Components/Loader/LoaderContext';

function HomeProjects() {
  const handleScroll = useContext(LoaderContext);
  
  useEffect(() => {
    animateStars('1.5px','.span1', 50, '5s','#F5F7FA');
    animateStars('3px','.span2', 50, '10s','#f9d649');
  }, []);

  const animateStars = (size, selector, totalStarts, duration,color) => {
    const colors = ['#f9d649', 'white'];
    const colorRandom = colors[Math.floor(Math.random() * colors.length)];
    const stars = [];

    const scope = document.querySelector('.homeProjects')

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

  return (
    <section className='homeProjects'>
      <span className='span span1'></span>
      <span className='span span2'></span>
      <span className='span span3'></span>
      <div className='homeProjects__description'>
        <h2 className='homeProjects__title'>DESCUBRE <br /> NUESTRO CAMINO</h2>
        <p className='solutionHome__animation--card'>Descubre cómo convertimos ideas en soluciones efectivas a través de nuestros proyectos recientes, reflejando nuestra pasión por la calidad y la tecnología</p>
        <ButtonSecondary description={'Descubrir'} fill={'white'} link={'/project/peru'}></ButtonSecondary>
      </div>
      <article className='homeProjects__cards'>
        {DataHomeProjects.map((obj, index) => (
          <div className='homeProjects__card' key={index}>
            <img className='homeProjects__card--image' src={obj.image} alt="Proyecto minero" />
            <div className='homeProjects__card--content'>
              <h2>{obj.title}</h2>
              <p className='homeProjects__card--height'><span>{obj.height}</span><span>msnm</span></p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default HomeProjects;
