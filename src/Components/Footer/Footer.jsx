import React from 'react'
import { NavLink } from 'react-router-dom';

// Coponents
import ButtonStrong from '../ButtonStrong/ButtonStrong'; 
import DataIconsMedia from '../DataIconsMedia/DataIconsMedia';
import DataFooterIcons from '../DataIconsMedia/DataFooterIcons';
import DescriptionSocial from '../DescriptionSocial/DescriptionSocial';

function Footer(props) {

  const DataLinkCom = {
    "compañia":[
      {
        id:1,
        link:'/about',
        description: 'Nosotros'
      },
      {
        id:2,
        link:'/solution/mineriaSubterranea',
        description: 'Soluciones'
      },
      {
        id:3,
        link:'/',
        description: 'Proyectos'
      },
      {
        id:4,
        link:'/blog/1',
        description: 'Blog'
      },
    ],
    "equipos":[
      {
        id:1,
        link:'/about',
        description: 'R1300G'
      },
      {
        id:2,
        link:'/',
        description: 'R1300G'
      },
      {
        id:3,
        link:'/',
        description: 'R1300G'
      },
      {
        id:4,
        link:'/',
        description: 'R1300G'
      },
    ]
  }

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
                {DataLinkCom['compañia'].map((obj,index)=>(
                  <NavLink className={'footer__links--a'} to={obj.link} key={index}>{obj.description}</NavLink>
                ))}
              </ul>
              <ul className='footer__links'>
                <li>Equipos</li>
                {DataLinkCom['equipos'].map((obj,index)=>(
                  <NavLink className={'footer__links--a'} to={obj.link} key={index}>{obj.description}</NavLink>
                ))}
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
