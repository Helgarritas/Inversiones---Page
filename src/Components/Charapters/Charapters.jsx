import React from 'react';

function Charapters({process}) {
  return (
    <>
      <section className='charapters'>
        <article className='charapters__container'>
          <h3 className='charapters__title'>Nuestro Proceso</h3>
          <div className='process'>
            {process.map((obj,index)=>(
              <div className='process__card' key={index}>
                <div className='process__card-content'>
                  <p>{obj.number}</p>
                  <p>{obj.title}</p>
                </div>
                <p>{obj.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}

export default Charapters;
