import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationDelay(showLoader) {
  //* Animation clean en route "Solutions"
  const cleanAnimations = useCallback(() => {
    const animatedElements = document.querySelectorAll('.solutionsHome__animation');
    animatedElements.forEach((element) => {
      element.classList.remove('solutionsHome__animation');
    });
  }, []);

  //* Handle delay after of link pagination
  const navigate = useNavigate();
  const tiempoRestante = 1500;
  
  const navigationDelay = useCallback((e, path) => {
    e.preventDefault();
    showLoader(true);

    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0 });
    }, tiempoRestante);
  
    setBoolean(true);
    cleanAnimations();
  }, [navigate, showLoader, cleanAnimations, tiempoRestante]);

  return {navigationDelay}
}

export default NavigationDelay
