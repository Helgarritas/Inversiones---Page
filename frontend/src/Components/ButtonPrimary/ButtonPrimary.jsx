import React,{useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

import { SpotlightButton } from "./SpotLightButton"
import LoaderContext from "../Loader/LoaderContext"

export default function ButtonPrimary() {
  const {handleScroll} = useContext(LoaderContext);

  //* Function Link
  let navigate = useNavigate();
  const {showLoader} = useContext(LoaderContext);
  const tiempoRestante = 1600; 

  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  };

  return (
    <NavLink className="" 
      onClick={(e) => { delayLink(e, '/about'); showLoader(); }}  
    >
      <SpotlightButton>
        <span className="relative bg-gradient-to-b text-white  bg-clip-text font-mona text-lg font-medium text-transparent transition-all duration-200">
          {/* from-white/25 to-white */}
          Spotlight Button
        </span>
      </SpotlightButton>
    </NavLink>
  )
}
