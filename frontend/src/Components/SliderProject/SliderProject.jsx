import React, { useEffect, useState, useRef, useContext,useCallback } from 'react';

// Components 
import ButtonSlider from '/src/Components/ButtonSlider/ButtonSlider';
import InfoProject from './InfoProject';
import LoaderContext from '../Loader/LoaderContext';
import ProjectCard from '../CardLight/ProjectCard';

function SliderProject({ projects }) {
  const [DataProjectFilterCard, setDataProjectFilterCard] = useState(null);
  const [totalProject, setTotalProject] = useState(projects.length);
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

  let chancheBoolean = useCallback((boolean, index)=>{
    let selectedCard = null;
    if (boolean) {
      selectedCard = projects[index].card;
      setDataProjectFilterCard(selectedCard);
    } else {
      setDataProjectFilterCard(null);
    }
    
    setBooleanStyle(boolean);
  }) 


  //* Scroll animation
  const { handleScroll } = useContext(LoaderContext);
  
  useEffect(() => {
    let cards = document.querySelectorAll('.sliderProjects__card');
    let titles = document.querySelectorAll('.sliderProject__opacity');
    
    function onscroll(){
      cards.forEach((card) => {
        let cardClass = card.classList.contains('solutionsHome__animation');
        
        if(cardClass){
          titles.forEach((title) => {
            title.style.opacity = '1';
          });
        }else{
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
        <h3 className='text-3xl font-normal mb-8 text-black dark:text-white'>Proyectos</h3>
        <div className="sliderProjects__slider" ref={container}>
          {projects.map((item, index) => (
            <div key={index}>
              <ProjectCard item={item} index={index} chancheBoolean={chancheBoolean}></ProjectCard>
            </div>
          ))}
        </div>  
        <ButtonSlider prev={prev} next={next} totalProject={totalProject} ></ButtonSlider>
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
