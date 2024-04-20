import React from 'react'

function HomeBlog(props) {
  return (
    <>
      <section className='homeBlog'>
        <article className='homeBlog__container'>
        <h2 className='homeBlog__title'>Esto es un título</h2>
          {/* Card */}
          <div className='homeBlog__card'>
            <div className='homeBlog__card--description'>
                <p>Nombre de Usuario</p>
                <p>Cargo</p>
                <div className='homeBlog__card--social'>
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

export default HomeBlog
