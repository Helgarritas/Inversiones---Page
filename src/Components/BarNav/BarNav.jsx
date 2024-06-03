import React from 'react';
import { useRef,useState,useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

// Components
import DataBarNav from './DataBarNav'
import ButtonBurguer from './ButtonBurguer/ButtonBurguer';
// Image

function BarNav({showLoader}) {
  const [boolean, setBoolean] = useState(true)
  
  const nav = useRef(),
  link = useRef([])
  let a = [];  

  useEffect(() => {
    let countScroll = 0;
    const navRoll = nav.current;
    const linkRoll = link.current;
    const hamburguer = document.querySelector('.hamburguer');

    // Funcion para background nav mediante scroll.
    function navScroll(){
      let windowScroll = document.documentElement.scrollTop
      
      if(windowScroll > countScroll){
        navRoll.classList.remove('active');
        hamburguer.classList.add('navLinks__animation')        
        setBoolean(true)
      }else{
        navRoll.classList.add('active')
        hamburguer.classList.remove('navLinks__animation')        
        setBoolean(true)
      } 

      linkRoll.forEach((element)=>{
        windowScroll > countScroll
        ?element.classList.add('navLinks__animation')
        :element.classList.remove('navLinks__animation')
      })


      countScroll = windowScroll <= 0 ? 0 : windowScroll; 
    }
    
    window.addEventListener('scroll',navScroll)

    return () => {
      window.removeEventListener('scroll',navScroll)
    }
  }, [nav,link])
  
  let opacitySubsOn = (element) => {
    let child = element.lastElementChild;
    let heightChild = child.scrollHeight;
    
    child.style.height = `${heightChild}px`;
    child.style.opacity = `1`;
  };  

  let opacitySubsOff = (element) => {
    let child = element.lastElementChild;
    
    child.style.height = `0px`;
    child.style.opacity = `0`;
  };
  
  //* function for loader boolean
  const navigate = useNavigate();
  const tiempoRestante = 1600;

  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);

    setBoolean(true)
  };

  return (
    <>
      <nav className='nav' ref={nav}>
        <NavLink 
          className='nav__container--logo nav__link--animation' 
          ref={(ref) => (link.current[0] = ref)}
          onClick={(e) => { delayLink(e, '/'); showLoader(); }}  
          >
          <li className='nav__logo'>Logo</li>
        </NavLink>
        {/* Link */}
        <ul className={`nav__container--link ${boolean?'':'transform__container--links'} nav__link--animation`} ref={(ref) => (link.current[1] = ref)}>
          {DataBarNav.map((obj,index)=>(
            <div
              onMouseOver={(e) => opacitySubsOn(e.currentTarget)}
              onMouseOut={(e) => opacitySubsOff(e.currentTarget)}
              className={`nav__sub--container ${boolean?'':'nav__link--animation'}`}
              key={index}
            >
              <div className={`nav__link--container nav__link--animation`}>
                {obj.subs.length === 0 
                  ? <NavLink 
                    to={`${obj.link}`}
                    className='nav__link' 
                    onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                    >
                      {obj.description}
                    </NavLink>
                  : <a style={{cursor:'pointer'}} className='nav__link'>{obj.description}</a>
                } 
                {
                  obj.subs.length > 0 && <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>right_line</title><g id="right_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className='icon__stroke' d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z'/></g></svg>
                }
              </div>
              <ul className='nav__sub--link'>
                {obj.subs.map((sub,index)=>(
                  <NavLink 
                    className='nav__link' 
                    key={index}
                    onClick={(e) => { delayLink(e, sub.link); showLoader(); }}  
                  >
                  {sub.description}
                  </NavLink>                     
                ))}
              </ul>          
            </div>
          ))}
          {/* <div className='nav__lenguages' >
            <a>ES</a>
            <span>|</span>
            <a>EN</a>
          </div> */}
        </ul>
        <ButtonBurguer boolean={boolean} setBoolean={setBoolean}></ButtonBurguer>
      </nav>
    </>
  )
}

export default BarNav
