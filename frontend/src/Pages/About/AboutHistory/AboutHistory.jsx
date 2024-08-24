import React,{useRef,useState,useEffect} from 'react';
import image from '/src/assets/Backgrounds/Home - Services - background.png';

import ButtonSlider from '../../../Components/ButtonSlider/ButtonSlider';

const data = [
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
  {
    date: 1925,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nam perspiciatis illo.`,
    image: image
  },
];

function AboutHistory() {
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

  return (
    <article className="aboutHistory px-[130px] my-[70px]">
      <h2 className='text-3xl font-medium text-black dark:text-white'>Historia</h2>
      <section className='flex flex-col mt-[50px]' ref={carousel}>
        <div className="aboutHistory__container pt-2 flex overflow-x-scroll" ref={container}>
          {data.map((obj, index) => (
            <div 
              className={`aboutHistory__card pt-11 px-11 flex flex-col relative border-colorPrimary border-t-[.5px]`}
              key={index}
            >
              <div className='relative aspect-[3/2] w-[250px]'>
                <img className='rounded-xl' src={image} alt="Image" />
              </div>
              <p className="text-black dark:text-white text-2xl font-medium mt-3">{obj.date}</p>
              <p className="text-black/75 dark:text-white/75 dark:text-contSecondary mt-2 ">{obj.description}</p>
              <div className="aboutHistory__card--point"></div>
            </div>
          ))}
          <div className="aboutHistory__line"></div>
        </div>
        {/* crear un componente */}
        <ButtonSlider prev={prev} next={next}></ButtonSlider>
      </section>
    </article>
  );
}

export default AboutHistory;
