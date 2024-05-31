import React,{useEffect,useState,useRef} from 'react'

//  Components
import DataHomeOpinions from './DataHomeOpinions';
import DataIconsMedia from '../../../Components/DataIconsMedia/DataIconsMedia';
import DescriptionSocial from '../../../Components/DescriptionSocial/DescriptionSocial';
import ButtonSlider from '../../../Components/ButtonSlider/ButtonSlider';

// Image
import image from '/src/assets/Backgrounds/foto.jpg';

function HomeOpinion() {
  const carousel = useRef();
  const container = useRef();

  const [state, setstate] = useState({
    scroller: null,
    itemWidth: 0,
    isPrevhiddde: true,
    isNextHidden: false,
  })

  const next = () => {
    state.scroller.scrollBy({
      left: state.itemWidth*3,top: 0,behavior: 'smooth'
    })
    setstate({...state,isNextHidden: true,isPrevhiddde: false})
  }

  const prev = () => {
    state.scroller.scrollBy({
      left: -state.itemWidth*3,top: 0,behavior: 'smooth'
    })
    setstate({...state,isNextHidden: false,isPrevhiddde: true})
  }

  useEffect(() => {
    let item = container.current.childNodes;
    let scroller = container.current;
    let itemWidth = container.current.firstElementChild.clientWidth;

    setstate({...state,scroller,itemWidth})
    return () => {
      
    };
  }, [carousel,container]);

  
  useEffect(() => {
    const slider = document.querySelector('.homeOpinion__slider');
    const container = document.querySelector('.homeOpinion__container');

    const width = container.clientWidth*3+608;
    // slider.style.width = `${width}px`

    return () => {
    };

  }, []);

  const nameIcon = ['whatsapp','linkedin','instagram'];
  const filterIcon = DataIconsMedia.filter(obj => nameIcon.includes(obj.name));  

  return (
    <>
      <section className='homeOpinion' ref={carousel}>
        <h3 className='homeOpinion__title'>¿ Qué dicen <br /> nuestros clientes ?</h3>
        <article className='homeOpinion__container' ref={container}>
          {DataHomeOpinions.map((obj)=>(
            <div className='homeOpinion__card' key={obj.id} >
              <div className='homeOpinion__slider--imgs'>
                <img className='homeOpinion__slider--img' src={image} alt="Usuario" />
              </div>
              <div className='homeOpinion__slider--content'>
                <p>{obj.text}</p>
                <div className='homeOpinion__slider--description'>
                  <p>{obj.user}</p>
                  <p>{obj.range}</p>
                </div>
                <DescriptionSocial filterIcon={filterIcon} iconStyle={'iconMedia__dark'}></DescriptionSocial>
              </div>
            </div>   
          ))}
        </article>
        <ButtonSlider prev={prev} next={next}></ButtonSlider>
      </section>
    </>
  )
}

export default HomeOpinion
