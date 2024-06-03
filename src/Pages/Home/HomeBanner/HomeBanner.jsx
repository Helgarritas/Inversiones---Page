import React,{useEffect,useState,useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
// Components
import ButtonStrong from '../../../Components/ButtonStrong/ButtonStrong';
import LoaderContext from '../../../Components/Loader/LoaderContext';
// Image
import background from '/src/assets/Home/istockphoto-1340507925-640_adpp_is.mp4';

function HomeBanner(props) {

  useEffect(() => {
    const translateScroll = document.querySelectorAll('.translate__animation');

      translateScroll.forEach((element)=>{
        setTimeout(function(){
          element.classList.add('translate__animation--scroll');
        },3200)
      })

      //* Slider title
      const scrollText = document.querySelector('.scrollText');
      const scrolljHeight = scrollText.scrollHeight;
      const bannerSliders = document.querySelector('.homeBanner__title--sliders');
      bannerSliders.parentElement.style.setProperty('--slider-height',`${scrolljHeight}px`)
      
      const root = document.documentElement;
            
      function updateMoveSliderValue(newValue) {
          root.style.setProperty('--move-slider', newValue);
      }
      
      for(let i=0 ; i<=6; i++){
        updateMoveSliderValue(`${scrolljHeight}px`);
      }
    return () => {
      
    };
  }, []);

  //* Function Link
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
      <header className='homeBanner'>
        <video className='homeBanner__background' autoPlay loop muted>
          <source  src={background} type='video/mp4'/>
        </video>

        <article className='homeBanner__container'>
          <div className='homeBanner__title'>
            <h1 className=' scrollText'>Implementamos</h1><br/>
            <div className='homeBanner__title--slider'>
              <div className='homeBanner__title--sliders'>
                <h1>Equipos de mineria</h1>
                <h1>Personal Capacitado</h1>
                <h1>Grandes Resultados</h1>
                <h1>Equipos de mineria</h1>
                <h1>Personal Capacitado</h1>
                <h1>Grandes Resultados</h1>
              </div>
              <h1>para</h1>
            </div>
            <br/>
            <h1 className='w-[max-content] mt-[-14px]'>desbloquear su potencial</h1>
          </div>
          <p className=''>Somos aliados estratégicos de nuestros clientes para enfrentar los desafíos más complejos sobre la industria.</p>
          <NavLink 
            onClick={(e) => { delayLink(e, '/about'); showLoader(); }}  
            className='homebanner__button'
          >
            Explorar
          </NavLink>
        </article>
      </header>
    </>
  )
}

export default HomeBanner
