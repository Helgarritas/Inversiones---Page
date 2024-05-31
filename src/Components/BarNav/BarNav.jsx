import React from 'react';
import { useRef,useState,useEffect } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';

// Components
import DataBarNav from './DataBarNav'

// Image

function BarNav({showLoader}) {
  
  const nav = useRef(),
  link = useRef([])
  const hamburguer = useRef();
  let a = [];
  console.log(a.length);
  
  const [boolean, setBoolean] = useState(false)
  
  // Funcion para menú movil.
  const changeHamburguer = ()=>{
    const hamburguerRoll = hamburguer.current;
    
    hamburguerRoll.classList.contains('transform__line')
    ?hamburguerRoll.classList.remove('transform__line')
    :hamburguerRoll.classList.add('transform__line')

    setBoolean((boolean)=>{
      return boolean?false:true
    });
  }

  useEffect(() => {
    let countScroll = 0;
    const navRoll = nav.current;
    const linkRoll = link.current;

    // Funcion para background nav mediante scroll.
    function navScroll(){
      let windowScroll = document.documentElement.scrollTop
      
      windowScroll > countScroll
      ?navRoll.classList.remove('active')
        :navRoll.classList.add('active')
        
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
    
    child.style.height = `${heightChild}px`
    child.style.opacity = `1`
    let te = document.querySelectorAll('.nav__sub--link')
    console.log(te[1].scrollWidth);
  };  
  let opacitySubsOff = (element) => {
    let child = element.lastElementChild;
    
    child.style.height = `0px`
    child.style.opacity = `0`
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
        <ul className='nav__container--link  nav__link--animation' ref={(ref) => (link.current[1] = ref)}>
          {DataBarNav.map((obj,index)=>(
            <div
              onMouseOver={(e) => opacitySubsOn(e.currentTarget)}
              onMouseOut={(e) => opacitySubsOff(e.currentTarget)}
              className='nav__sub--container' key={index}
            >
              <div>
                <NavLink 
                  className='nav__link' 
                  onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                  >
                {obj.description}
                </NavLink>
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
        {/* Hamburguer */}
        <div className='hamburguer' onClick={changeHamburguer} ref={hamburguer}>
          <div className='hamburguer__line hamburguer__line1'></div>
          <div className='hamburguer__line hamburguer__line2'></div>
          <div className='hamburguer__line hamburguer__line3'></div>
        </div>
      </nav>
    </>
  )
}

export default BarNav
