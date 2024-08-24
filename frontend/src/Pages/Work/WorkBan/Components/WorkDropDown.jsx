import React, { useState, useRef, useEffect } from 'react';

function WorkDropDown({ tit, icon, i }) {
  const [boolean, setBoolean] = useState(false);
  const icons = useRef([]);

  function handleDropDown(event) {
    let header = event.target;
    let dropdown = header.nextElementSibling;
    let iconArrow = event.target.lastElementChild;

    if (boolean) {
      dropdown.style.display = 'flex';
      iconArrow.style.transform = 'rotate(90deg)';
      setBoolean(false);
    } else {
      dropdown.style.display = 'none';
      iconArrow.style.transform = 'rotate(0deg)';
      setBoolean(true);
    }
  }

  useEffect(() => {
    if (icons.current[i]) {
      let icon = icons.current[i];
      if (icon && icon.firstElementChild && icon.firstElementChild.lastElementChild) {
        let path = icon.firstElementChild.lastElementChild.lastElementChild;
        if (path) {
          path.style.fill = 'white';
        }
      }
    }
  }, [icons, i]);

  return (
    <>
      <div 
        onClick={handleDropDown}
        className={`py-2 px-4 flex items-center gap-12 rounded-lg border bg-white/10 border-white/10 hover:bg-white/15 backdrop-blur-sm`}
      >
        <div className='pointer-events-none flex items-center gap-2'>
          <li className="" ref={(ref) => (icons.current[i] = ref)}>{icon}</li>
          <li className='text-white'>{tit}</li> 
        </div>
        <svg className='pointer-events-none transition duration-400 ease' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><title>right_line</title><g id="right_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='white' d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z'/></g></svg>
      </div>
    </>
  );
}

export default WorkDropDown;
