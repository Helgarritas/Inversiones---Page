import React, { useEffect,useContext } from 'react';

function Advance({counter}){

  return (
    <>
      <section className='counter bg-bgSecondary'>
        <article className='flex justify-between'>
          {counter.map((obj,index)=>(
            <div className='flex flex-col gap-1 items-center w-[100%]' key={index}>
              <p className='text-white text-5xl font-medium'>{obj.number[0]}<span className='text-4xl'>{obj.number[1]}</span></p>
              <p className='text-contSecondary'>{obj.description}</p>
            </div>
          ))}
        </article>
      </section>
    </> 
  )
}

export default Advance
