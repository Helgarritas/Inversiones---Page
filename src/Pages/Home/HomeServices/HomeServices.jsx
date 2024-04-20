import React from 'react'

// Data
import DataHomeServices from './DataHomeServices';

function HomeServices(props) {

  return (
    <>
      <section className='homeServices'>
        <article className='homeServices__container'>
            <h2 className='homeServiices__title'>Our Services</h2>
            <div className='homeServices__card'>
                <div className='homeServices__card--animation'>
                    img
                </div>
                <div className='homeServices__card--text'>
                    <h3>Esto es un subtitulo</h3>
                    <p>Esto es un testo para el subtitulo</p>
                </div>
                <a className='homeServices__card--link'>link</a>
            </div>
        </article>
      </section>
    </>
  )
}

export default HomeServices
