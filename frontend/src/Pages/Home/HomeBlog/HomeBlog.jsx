import React,{useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// Components
import DataHomeBlog from './DataHomeBlog';
import LoaderContext from '../../../Components/Loader/LoaderContext';

// Image


function HomeBlog() {
  const handleScroll = useContext(LoaderContext);

  //* chance boolean Loader
  let navigate = useNavigate();
  const {showLoader} = useContext(LoaderContext);
  const tiempoRestante = 1600; 
  
  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  };
  
  return (
    <>
      <section className='homeBlog'>
        <article className='homeBlog__container'>
          <h3 className='text-black dark:text-white text-3xl font-medium'>Nuestro Blog</h3>
          <div className='homeBlog__slider mouse__animation--scope'>
            {DataHomeBlog.map((obj)=>(
              <NavLink 
                onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                className='homeBlog__card' key={obj.id}
                >
                <div className="a relative aspect-[3/2] w-[265px] ">
                  <img className="homeBlog__card--img rounded-lg" src={obj.image} alt="Blog Image" />
                </div>
                <div className=''>
                  <p className='text-black/55 dark:text-contTerceary text-xs mt-2'>{obj.date}</p>
                  <p className='text-black dark:text-contPrimary text-lg mt-2'>{obj.title}</p>
                  <p className='text-black/75 dark:text-contSecondary text-sm font-light mt-1 mb-2'>{obj.description}</p>
                  <a className='text-black dark:text-contPrimary underline underline-offset-2'>Conocer</a>
                </div>
              </NavLink>  
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default HomeBlog
