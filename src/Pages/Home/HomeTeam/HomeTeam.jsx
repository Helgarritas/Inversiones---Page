import React from 'react'
import PropTypes from 'prop-types'

function HomeTeam(props) {
  return (
    <>
      <section className='homeTeam'>
        <article className='homeTeam__container'>
          <h2 className='homeTeam__title'>Esto es un título</h2>
          {/* Card */}
          <div className='homeTeam__card'>
            <img src="" alt="Usuario" />
            <div className='homeTeam__card--description'>
                <p>Nombre de Usuario</p>
                <p>Cargo</p>
                <div className='homeTeam__card--social'>
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

export default HomeTeam
