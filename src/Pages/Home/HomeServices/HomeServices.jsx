import React, { useEffect, useCallback, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DataHomeServices from './DataHomeServices';
import MouseCursor from '../../../Components/AnimationMouse/MouseCursor';
import LoaderContext from '../../../Components/Loader/LoaderContext';

function HomeServices({ animationMouse }) {
  const navigate = useNavigate();
  const { showLoader } = useContext(LoaderContext);
  const tiempoRestante = 1600; 

  useEffect(() => {
    animationMouse();
  }, [animationMouse]);

  const backgroundCardOver = useCallback((indice) => {
    const cardArray = document.querySelectorAll('.homeServices__card');
    cardArray.forEach((card, i) => {
      if (indice !== i) {
        card.classList.add('homeServices__card--background');
      }
    });
  }, []);

  const backgroundCardOuts = useCallback((indice) => {
    const cardArray = document.querySelectorAll('.homeServices__card');
    cardArray.forEach((card, i) => {
      if (indice !== i) {
        card.classList.remove('homeServices__card--background');
      }
    });
  }, []);

  const delayLink = useCallback((e, path) => {
    e.preventDefault();
    showLoader();
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  }, [navigate, showLoader, tiempoRestante]);

  return (
    <section className='homeServices mouse__animation--scope'>
      <article className='homeServices__container'>
        {DataHomeServices.map((obj, indice) => (
          <NavLink
            onClick={(e) => delayLink(e, obj.link)}
            className='homeServices__card card__animation--opacity'
            onMouseOver={() => backgroundCardOver(indice)}
            onMouseOut={() => backgroundCardOuts(indice)}
            key={obj.id}
          >
            <img className='homeServices__card--img' src={obj.image} alt='service' />
            <h5 className='homeServices__card--title'>{obj.title}</h5>
            <p className='homeServices__card--text homeServices__animation'>{obj.text}</p>
            <span className='homeServices__card--line homeServices__animation'></span>
            <span className='homeServices__card--numb homeServices__animation'>{obj.id}</span>
          </NavLink>
        ))}
      </article>
      <MouseCursor />
    </section>
  );
}

export default HomeServices;
