import { useCallback, useEffect } from "react";

const HandleScrollAnim = () => {
  const handleScroll = useCallback(() => {
    const cardOT = document.querySelectorAll('.solutionHome__animation--card');
    const windowHeight = window.innerHeight * 0.7;

    cardOT.forEach((element) => {
      const cardsTop = element.getBoundingClientRect().top;
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }
    });

    const cardO = document.querySelectorAll('.card__animation--opacity');
    cardO.forEach((element) => {
      const cardsTop = element.getBoundingClientRect().top;
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null; // No renderiza nada, solo maneja la lógica.
}

export default HandleScrollAnim;
