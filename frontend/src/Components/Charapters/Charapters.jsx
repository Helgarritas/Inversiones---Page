import React, { useContext, useEffect } from 'react';
// Components
import LoaderContext from '../Loader/LoaderContext';

function Charapters({process}) {

  const {handleScroll} = useContext(LoaderContext);
  
  useEffect(() => {
    let cards = document.querySelectorAll('.charapters__card');
    let widthCard = cards[0].clientWidth;

    cards.forEach((card)=>{
      card.style.width = `${widthCard}px`
    })
    
    return () => {
      
    };
  }, []);
  

  return (
    <>
      <section className='flex py-[80px] px-[130px] rounded-tl-[30px] rounded-tr-[30px] bg-zinc-100 dark:bg-bgPrimary z-10'>
        <article className='w-full flex justify-between'>
          <h3 className='text-3xl font-medium text-black dark:text-white'>Optimización Estratégica <br /> de Procesos Mineros</h3>
          <div className=' grid grid-cols-2 gap-[40px]'>
            {process.map((obj,index)=>( 
              <div className='w-72 border rounded-xl py-4 px-4 charapters__card
              bg-black/10 border-black/10
              dark:bg-white/10 dark:border-white/10' 
              key={index}>
                {obj.number}
                <p className='font-medium mt-3 text-black dark:text-white'>{obj.title}</p>
                <p className='text-sm font-light mt-1 text-black/75 dark:text-white/75'>{obj.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default Charapters;
