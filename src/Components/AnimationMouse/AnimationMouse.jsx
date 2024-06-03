import React, { useCallback } from 'react';

const MouseTracker = ({ children }) => {
  
  const animationMouse = useCallback(() => {
    let container = document.querySelectorAll('.mouse__animation--scope');
    let mouse = document.querySelector('.mouseCursor');

    const handleMouseOver = () => {
      mouse.classList.add('service__opacity-mouse');
    };

    const handleMouseMove = (event) => {
      const mouseX = event.clientX - 35;
      const mouseY = event.clientY + window.scrollY -35;
      mouse.style.translate = `${mouseX}px ${mouseY}px`
    };

    const handleMouseOut = () => {
      mouse.classList.remove('service__opacity-mouse');
    };

    const handleMouseDown = () => {
      event.preventDefault();
      mouse.classList.add('service__scale-mouse');
    };

    const handleMouseUp = () => {
      mouse.classList.remove('service__scale-mouse');
    };
    
    container.forEach((scope)=>{
      scope.addEventListener('mouseover', handleMouseOver);
      scope.addEventListener('mousemove', handleMouseMove);
      scope.addEventListener('mouseout', handleMouseOut);
      scope.addEventListener('mousedown', handleMouseDown);
      scope.addEventListener('mouseup', handleMouseUp);
    })

    return () => {
      container.forEach((scope)=>{
        scope.removeEventListener('mouseover', handleMouseOver);
        scope.removeEventListener('mousemove', handleMouseMove);
        scope.removeEventListener('mouseout', handleMouseOut);
        scope.removeEventListener('mousedown', handleMouseDown);
        scope.removeEventListener('mouseup', handleMouseUp);
      })
    };
  }, []);

  return <>{children(animationMouse)}</>;
};

export default MouseTracker;
