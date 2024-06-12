import React, { useEffect, useState, useRef, useContext } from 'react';

// Components 
import ButtonSlider from '/src/Components/ButtonSlider/ButtonSlider';
import InfoProject from './InfoProject';
import LoaderContext from '../Loader/LoaderContext';

function SliderProject({ projects}) {
  const [DataProjectFilterCard, setDataProjectFilterCard] = useState(null);
  const carousel = useRef(null);
  const container = useRef(null);

  const [state, setState] = useState({
    scroller: null,
    itemWidth: 0,
    isPrevHidden: true,
    isNextHidden: false,
  });

  const next = () => {
    state.scroller.scrollBy({
      left: state.itemWidth * 3, top: 0, behavior: 'smooth'
    });
    setState({ ...state, isNextHidden: true, isPrevHidden: false });
  };

  const prev = () => {
    state.scroller.scrollBy({
      left: -state.itemWidth * 3, top: 0, behavior: 'smooth'
    });
    setState({ ...state, isNextHidden: false, isPrevHidden: true });
  };

  useEffect(() => {
    if (container.current && container.current.firstElementChild) {
      const itemWidth = container.current.firstElementChild.clientWidth;
      setState({ ...state, scroller: container.current, itemWidth });
    }
  }, [container.current]);

  //* Modal and data for infoproject
  const [booleanStyle, setBooleanStyle] = useState(false);

  function chancheBoolean(boolean, index) {
    let selectedCard = null;
    if (boolean) {
      selectedCard = projects[index].card;
      setDataProjectFilterCard(selectedCard);
    } else {
      setDataProjectFilterCard(null);
    }
    setBooleanStyle(boolean);
  }

  function topContainer(element) {
    element.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  //* Scroll animation
  const { handleScroll } = useContext(LoaderContext);
  
  useEffect(() => {
    let cards = document.querySelectorAll('.sliderProjects__card');
    let titles = document.querySelectorAll('.sliderProject__opacity');
    function onscroll(){
      cards.forEach((card) => {
        let cardClass = card.classList.contains('solutionsHome__animation');
        
        if(cardClass){
          console.log('opacidad 1')
          titles.forEach((title) => {
            title.style.opacity = '1';
          });
        }else{
          console.log('opacidad 0');
          titles.forEach((title) => {
            title.style.opacity = '0';
          });
        }

      });
    }

    window.addEventListener('scroll',onscroll);

    return ()=>{
      window.addEventListener('scroll',onscroll);
    }
  }, []);

  return (
    <section className="sliderProjects">
      <article className="sliderProjects__container" ref={carousel}>
        <h3 className='sliderProjects__title'>Proyectos</h3>
        <div className='sliderProjects__slider' ref={container}>
          {projects.map((obj, index) => (
            <div className={`sliderProjects__card solutionHome__animation--card`} key={index}>
              <img className='sliderProjects__image' src={obj.image} alt="" />
              <p className='sliderProject__opacity'>{obj.title}</p>
              <div className='sliderProjects__card--button' onClick={() => chancheBoolean(true, index)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><title>add_line</title><g id="add_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className='icon__stroke' d='M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7Z'/></g></svg>
              </div>
            </div>
          ))}
        </div>
        <ButtonSlider prev={prev} next={next}></ButtonSlider>
      </article>
      {booleanStyle &&
        <InfoProject 
          boolean={booleanStyle} 
          chancheBoolean={chancheBoolean}
          DataProjectFilterCard={DataProjectFilterCard}
        />
      }
    </section>
  );
}

export default SliderProject;
