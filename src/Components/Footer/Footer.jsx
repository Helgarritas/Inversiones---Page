import React from 'react'

function Footer(props) {
  return (
    <>
      <section className="footer">
        <article className="footer__container">
          <div className="footer__title">
            <h2>Trabaja con nosotros</h2>
            <a>Contactanos</a>
          </div>
          <div className='footer__description'>
            <ul className='footer__links'>
              <li>Products</li> 
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='footer__links'>
              <li>Compani</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className='footer__social'>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <p>2023 inversiones Mendoza</p>
            <p>Indice</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Footer
