import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// Componentes
import BtnMode from './Components/Buttons/BtnMode';
import BtnBurguer from './Components/Buttons/BtnBurguer';
import NavigationSubLink from './Components/NavigationSubLink';
// Context
import LoaderContext from '../Loader/LoaderContext';
// DATA
import DataBarNav from './DataBarNav';

function BarNav() {
  const [boolean, setBoolean] = useState(true);
  const nav = useRef(null);
  const link = useRef([]);

  const { navigationDelay } = useContext(LoaderContext)

  useEffect(() => {
    let countScroll = 0;
    const navRoll = nav.current;
    const linkRoll = link.current;
    const hamburguer = document.querySelector('.hamburguer');

    //* Background Nav in scroll
    const navScroll = () => {
      let windowScroll = document.documentElement.scrollTop;
      
      if (windowScroll > countScroll) {
        navRoll.classList.remove('active');
        hamburguer.classList.add('navLinks__animation');
        setBoolean(true);
      } else {
        navRoll.classList.add('active');
        hamburguer.classList.remove('navLinks__animation');
        setBoolean(true);
      }

      linkRoll.forEach((element) => {
        windowScroll > countScroll
          ? element.classList.add('navLinks__animation')
          : element.classList.remove('navLinks__animation');
      });

      countScroll = windowScroll <= 0 ? 0 : windowScroll;
    };
    
    window.addEventListener('scroll', navScroll);

    return () => {
      window.removeEventListener('scroll', navScroll);
    };
  }, []);

  //* DropDown for Routes of pagination
  const opacitySubsOn = useCallback((element) => {
    let child = element.lastElementChild;
    if (child.classList.contains('nav__sub--links')) {
      child.style.height = `${child.scrollHeight}px`;
      child.style.opacity = '1';
      }
  }, []);
      
      const opacitySubsOff = useCallback((element) => {
        let child = element.lastElementChild;
        if (child.classList.contains('nav__sub--links')) {
          child.style.height = '0px';
          child.style.opacity = '0';
        }
  }, []);

  const hasNextElementSibling = (element) => {
    return element.nextElementSibling !== null;
  };

  const heightSubs = useCallback((element) => {
    let svgArrow = document.querySelectorAll('.icon__arrow');
    svgArrow.forEach((item) => {
      item.classList.remove('arrow');
    });

    let arrow = element.lastChild;
    if (arrow.classList.contains('icon__arrow')) {
      arrow.classList.toggle('arrow');
    }

    if (hasNextElementSibling(element)) {
      let child = element.nextElementSibling;
      child.style.height = child.clientHeight === 0 ? `${child.scrollHeight}px` : '0px';
    }
  }, []);

  return (
    <nav className='nav' ref={nav}>
      {/* BURGUER */}
      <BtnBurguer boolean={ boolean } setBoolean={ setBoolean }/>
      {/* LOGO */}
      <NavLink 
        className='nav__link--animation' 
        ref={(ref) => (link.current[0] = ref)}
        onClick={(e) => navigationDelay(e, '/')}
      >
        <li className=''>Logo</li>
      </NavLink>
      
      {/* Container Rutes of pagination */}
      <ul className={`nav__container--link ${boolean ? '' : 'nav__link--animation'}`} ref={(ref) => (link.current[1] = ref)}>
        {/*  Routes of pagination */}
        {DataBarNav.map((obj, index) => (
          <div
            onMouseOver={(e) => opacitySubsOn(e.currentTarget)}
            onMouseOut={(e) => opacitySubsOff(e.currentTarget)}
            className={`nav__sub--container`}
            key={index}
          >
            <div  
              className={`nav__link--container`}
              onClick={(e) => heightSubs(e.currentTarget)}
            >              
              <div className='flex gap-2.5 items-center'>
                {obj.icon}
                {obj.subs.length === 0 
                  ? <NavLink 
                      to={`${obj.link}`}
                      className='nav__link text-base text-[rgba(255,255,255,1)]' 
                      onClick={(e) => navigationDelay(e, obj.link)}
                    >
                      {obj.description}
                    </NavLink>
                  : <a style={{ cursor: 'pointer' }} className='nav__link text-base text-[rgba(255,255,255,1)]'>{obj.description}</a>
                } 
              </div>
              {obj.subs.length > 0 && 
                <svg className='icon__arrow' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <g id="right_line" fill='none' fillRule='evenodd'>
                    <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
                    <path className='icon__stroke' d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z' />
                  </g>
                </svg>
              }
            </div>
            {/* Navigation sub routes */}
            {obj.subs.length !== 0 && <NavigationSubLink obj={obj}/>}
          </div>
        ))}

        {/* Button dark or light mode */}
        <BtnMode/>
      </ul>
    </nav>
  );
}

export default BarNav;
