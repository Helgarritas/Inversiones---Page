import React from 'react';

function BtnArrow(link) {
  return (
    <>
      <div to={link}
        className='p-1 flex justify-center items-center rounded-[50%] transition ease-in-out duration-300
        border border-black/20 bg-black/10 dark:border-bgBorder dark:bg-bgContain dark:hover:bg-bgContainHover cursor-pointer z-50'
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><title>arrow_right_line</title><g id="arrow_right_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className='fill-black dark:fill-white/70' d='m14.707 5.636 5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414Z'/></g></svg>
      </div>
    </>
  )
}

export default BtnArrow;
