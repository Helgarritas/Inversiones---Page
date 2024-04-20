import React from 'react'

// Data
import DataHomeProjects from './DataHomeProjects'

function HomeProjects(props) {
  return (
    <>
      <section className='homeProjects'>
        <article className='homeProjects__container'>
          <h2>Esto es el título</h2>
          {/* Card */}
          <div className='homeProjects__card'>
            <img className='homeProjects__card--img' src="" alt="" />
            <div className='homeProjects__card--description'>
              <h2>Descriptión</h2>
              <p className='homeProjects__card--contribution'>
                <span>Prueba</span>
                <span>Prueba</span>
              </p>
            </div>
          </div>
          {/* Card */}
        </article>
      </section>
    </>
  )
}

export default HomeProjects
