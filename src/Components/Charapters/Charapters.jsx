import React, { useContext, useEffect } from 'react';
import LoaderContext from '../Loader/LoaderContext';

function Charapters({process}) {

  const {handleScroll} = useContext(LoaderContext);
  
  return (
    <>
      <section className='charapters'>
        <article className='charapters__container'>
          <h3 className='charapters__title'>Nuestro Proceso</h3>
          <div className='process'>
            {process.map((obj,index)=>(
              <div className='process__card solutionHome__animation--card' key={index}>
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
