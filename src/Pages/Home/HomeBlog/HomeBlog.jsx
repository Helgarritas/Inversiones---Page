import React,{useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
// Components
import DataHomeBlog from './DataHomeBlog';
import ButtonSecondary from '../../../Components/ButtonSecondary/ButtonSecondary';
import ButtonStrong from '../../../Components/ButtonStrong/ButtonStrong';
import LoaderContext from '../../../Components/Loader/LoaderContext';
import MouseCursor from '../../../Components/AnimationMouse/MouseCursor';

// Image


function HomeBlog({animationMouse}) {

  useEffect(() => {
    animationMouse();
  }, [animationMouse]);

  //* chance boolean Loader
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
      <section className='homeBlog'>
        <h2 className='homeBlog__title'>BLOG</h2>
        <article className='homeBlog__container'>
          <div className='homeBlog__description'>
            <p>Explora nuestro blog donde compartimos ideas, consejos y tendencias relevantes acerca de la industria.</p>
            <ButtonSecondary description={'Descubrir'} fill={'black'} link={'/blog/1'}></ButtonSecondary>
          </div>
          <div className='homeBlog__slider mouse__animation--scope'>
            {DataHomeBlog.map((obj)=>(
              <NavLink 
                onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                className='homeBlog__card' key={obj.id}
                >
                <img className='homeBlog__card--img' src={obj.image} alt="" />
                <div className='homeBlog__card--text'>
                  <div className='homeBlog__date'>
                    <p>{obj.indes}</p>
                    <p>{obj.date}</p>
                  </div>
                  <p className='homeBlog__card--title'>{obj.description}</p>
                </div>
                <ButtonStrong fill={'white'} description={'Descubrir'}></ButtonStrong>
              </NavLink>  
            ))}
            <MouseCursor></MouseCursor>
          </div>
        </article>
      </section>
    </>
  )
}

export default HomeBlog
