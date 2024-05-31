import React, { useCallback } from 'react';

const MouseTracker = ({ children }) => {
  
  const animationMouse = useCallback(() => {
    let container = document.querySelector('.mouse__animation--scope');
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
      mouse.classList.add('service__scale-mouse');
    };

    const handleMouseUp = () => {
      mouse.classList.remove('service__scale-mouse');
    };

      container.addEventListener('mouseover', handleMouseOver);
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseout', handleMouseOut);
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mouseover', handleMouseOver);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseout', handleMouseOut);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <>{children(animationMouse)}</>;
};

export default MouseTracker;
