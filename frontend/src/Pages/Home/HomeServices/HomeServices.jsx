import React, { useEffect, useCallback, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import DataHomeServices from './DataHomeServices';
import LoaderContext from '../../../Components/Loader/LoaderContext';

function HomeServices() {
  const navigate = useNavigate();
  const { showLoader } = useContext(LoaderContext);
  const tiempoRestante = 1600; 

  const delayLink = useCallback((e, path) => {
    e.preventDefault();
    showLoader();
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  }, [navigate, showLoader, tiempoRestante]);

  return (
    <section className='homeServices'>
      <div className='text-center'>
        <p className='text-sm text-colorPrimary'>Soluciones</p>
        <h2 className='text-3xl font-medium mt-3 text-black dark:text-white'>
          Brindamos soluciones para maximizar <br /> el potencial de tus operaciones
        </h2>
      </div>
      <article className='homeServices__container mt-14'>
        {DataHomeServices.map((obj, indice) => (
          <NavLink
            onClick={(e) => delayLink(e, obj.link)}
            className='homeServices__card'
            key={obj.id}
          >
            <img className='homeServices__card--img' src={obj.image} alt='service' />
            <h2 className='text-contPrimary text-lg font-medium'>{obj.title}</h2>
            <p className='text-contSecondary text-sm  mt-1'>{obj.text}</p>
          </NavLink>
        ))}
      </article>
    </section>
  );
}

export default HomeServices;
