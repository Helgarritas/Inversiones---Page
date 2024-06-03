import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useContext } from 'react';

// Components
import LoaderContext from '../Loader/LoaderContext';

const ButtonSecondary = ({description,fill,link}) => {

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
      <NavLink 
        className='button__secondary' 
        onClick={(e) => { delayLink(e, link); showLoader(); }}
        style={{borderColor: `${fill}`}}
        to={link} 
      >
        <span style={{color: `${fill}`}}>{description}</span>
        <div className='button__secondary--icons'>
          <div className='button__secondary--slider'>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>arrow_right_up_line</title><g id="arrow_right_up_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill={`${fill}`} d='M18 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8.414l-9.95 9.95a1 1 0 0 1-1.414-1.414L15.586 7H10a1 1 0 1 1 0-2h8Z'/></g></svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>arrow_right_up_line</title><g id="arrow_right_up_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill={`${fill}`} d='M18 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8.414l-9.95 9.95a1 1 0 0 1-1.414-1.414L15.586 7H10a1 1 0 1 1 0-2h8Z'/></g></svg>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default ButtonSecondary;
