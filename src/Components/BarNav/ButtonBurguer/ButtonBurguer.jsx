import { useRef,useState,useEffect } from 'react';

function ButtonBurguer({boolean,setBoolean}) {
  // Funcion para menú movil.
  const hamburguer = useRef();

  const changeHamburguer = ()=>{
    const hamburguerRoll = hamburguer.current;
    
    hamburguerRoll.classList.contains('transform__line')
    ?hamburguerRoll.classList.remove('transform__line')
    :hamburguerRoll.classList.add('transform__line')

    setBoolean((boolean)=>{
      return boolean?false:true
    });
  }

  return (
    <>
      {/* Hamburguer */}
      <div className={`hamburguer ${boolean?'':'transform__line'} nav__link--animation`} onClick={changeHamburguer} ref={hamburguer}>
        <div className='hamburguer__line hamburguer__line1'></div>
        <div className='hamburguer__line hamburguer__line2'></div>
        <div className='hamburguer__line hamburguer__line3'></div>
      </div>    
    </>
  )
}

export default ButtonBurguer
