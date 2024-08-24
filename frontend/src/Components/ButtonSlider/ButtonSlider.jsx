import { useState, useEffect } from "react";

let data = [
  {
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>left_line</title><g id="left_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className='fill-black/55 dark:fill-white' d='M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z'/></g></svg>
  },
  {
    icon: <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>right_line</title><g id="right_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className='fill-black/55 dark:fill-white' d='M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z'/></g></svg>
  },
]

function ButtonSlider({ prev, next, totalProject }) {
  const [count, setCount] = useState(0);
  const [countProject, setCountProject] = useState(Math.floor(totalProject/2));
  useEffect(() => {
    // Handle button opacity based on count
    const buttons = document.querySelectorAll('.buttonSlider__buttons button');
    buttons.forEach((btn, index) => {
      if (index === 0 && count === 0) {
        btn.style.opacity = '0.5';
      } else if (index === 1 && count === countProject) {
        btn.style.opacity = '0.5';
      } else {
        btn.style.opacity = '1';
      }
    });
  }, [count, countProject]);

  const handleCount = (direction) => {
    setCount((prevCount) => {
      const newCount = direction === "prev" ? prevCount - 1 : prevCount + 1;

      if (newCount < 0 || newCount > countProject) {
        return prevCount;
      }

      return newCount;
    });
  };


  return (
    <div className='buttonSlider__action'>
      <div className='buttonSlider__buttons'>
        {data.map((obj, i) => (
          <button
            key={i}
            className={`
              flex items-center justify-center p-[2px] rounded-full transition duration-300 border cursor-pointer
              bg-black/10 border-black/10 
              dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/15
            `}
            onClick={(e) => {
              i === 0 ? prev() : next();
              handleCount(i === 0 ? "prev" : "next", e);
            }}
            disabled={(i === 0 && count === 0) || (i === 1 && count === countProject)}
          >
            {obj.icon}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ButtonSlider;
