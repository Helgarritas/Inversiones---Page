import React from 'react'
import { NavLink } from 'react-router-dom';

// Coponents
import ButtonStrong from '../ButtonStrong/ButtonStrong'; 
import DataIconsMedia from '../DataIconsMedia/DataIconsMedia';
import DataFooterIcons from '../DataIconsMedia/DataFooterIcons';
import DescriptionSocial from '../DescriptionSocial/DescriptionSocial';
function Footer(props) {
  return (
    <>
      <section className="footer">
        <article className="footer__container">
          <div className="footer__title">
            <h2>Trabaja <br />con nosotros</h2>
          </div>
          <div className='footer__description'>
            <ul className='footer__media--container'>
              {DataFooterIcons.map((obj,index)=>(
                <div className='footer__media' key={index}>
                  {obj.icon}
                  <NavLink to={`/ `}target='_black'>{obj.text}</NavLink>
                </div>   
              ))}
            </ul>
            <div className='footer__links--container'>
              <ul className='footer__links'>
                <li>Compañia</li> 
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Proyectos</li>
              </ul>
              <ul className='footer__links'>
                <li>Equipos</li>
                <li>R1300G</li>
                <li>R1200G</li>
                <li>R1100G</li>
              </ul>
              <ul className='footer__social'>
                <p>Síguenos</p>
                <DescriptionSocial filterIcon={DataIconsMedia} iconStyle={'iconMedia__dark'}></DescriptionSocial>
              </ul>
            </div>
          </div>
          <div className='footer__law'>
            <p>&copy; 2023 inversiones Mendoza</p>
            <p>Indice</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Footer
