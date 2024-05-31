import React from 'react'

function Advance({counter}){

  return (
    <>
      <section className='counter'>
        <article className='counter__container'>
          {counter.map((obj,index)=>(
            <div className='counter__card' key={index}>
              <p className='counter__card--num'>{obj.number[0]}<span>{obj.number[1]}</span></p>
              <p className='counter__card--num'>{obj.description}</p>
            </div>
          ))}
        </article>
      </section>
    </> 
  )
}

export default Advance
