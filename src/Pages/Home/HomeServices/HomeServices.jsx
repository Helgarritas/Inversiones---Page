import React, { useEffect } from 'react';
import { NavLink, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import DataHomeServices from './DataHomeServices';
import MouseCursor from '../../../Components/AnimationMouse/MouseCursor';
import LoaderContext from '../../../Components/Loader/LoaderContext';

// Image

function HomeServices({animationMouse}) {
  useEffect(() => {
    animationMouse();
  }, []);

  const backgroundCardOver = (indice) =>{
    const cardArray = document.querySelectorAll('.homeServices__card');
    let a = indice
    for(let i=0; i<cardArray.length ; i++){
      if(a !== i){
        cardArray[i].classList.add('homeServices__card--background');
      } 
    }
  }

  const backgroundCardOuts = (indice) =>{
    const cardArray = document.querySelectorAll('.homeServices__card');
    let a = indice
    for(let i=0; i<cardArray.length ; i++){
      if(a !== i){
        cardArray[i].classList.remove('homeServices__card--background');
      } 
    }
  }

  //*Funcion para boolean Loader
  let navigate = useNavigate();
  const showLoader = useContext(LoaderContext);
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
      <section className='homeServices mouse__animation--scope'>
        <article className='homeServices__container'>
          {DataHomeServices.map((obj,indice) => (
            <NavLink
            onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
            className='homeServices__card' 
            onMouseOver={() => backgroundCardOver(indice)} 
            onMouseOut ={() => backgroundCardOuts(indice)} 
            key={obj.id}
            >
              <img className='homeServices__card--img' src={obj.image} alt='dads'/>
              <h5 className='homeServices__card--title'>{obj.title}</h5>
              <p className='homeServices__card--text homeServices__animation'>{obj.text}</p>
              <span className='homeServices__card--line homeServices__animation'></span>
              <span className='homeServices__card--numb homeServices__animation'>{obj.id}</span>
            </NavLink>
          ))}
        </article>
        <MouseCursor></MouseCursor>
      </section>
    </>
  );
}

export default HomeServices;
