import React from 'react'
import PropTypes from 'prop-types'

function HomeOpinion(props) {
  return (
    <>
      <section className='homeOpinion'>
        <article className='homeOpinion__container'>
        <h2 className='homeOpinion__title'>Esto es un título</h2>
          {/* Card */}
          <div className='homeOpinion__card'>
            <img src="" alt="Usuario" />
            <div className='homeOpinion__card--description'>
                <p>Nombre de Usuario</p>
                <p>Cargo</p>
                <div className='homeOpinion__card--social'>
                    <span>Social</span>
                    <span>Social</span>
                    <span>Social</span>
                </div>
            </div>
          </div>  
          {/* Card */}
        </article>
      </section>
    </>
  )
}

export default HomeOpinion
