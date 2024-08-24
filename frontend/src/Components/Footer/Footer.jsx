import React,{useContext,useCallback} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
// Coponents
import DataIconsMedia from '../DataIconsMedia/DataIconsMedia';
import DataFooterIcons from '../DataIconsMedia/DataFooterIcons';
import DescriptionSocial from '../DescriptionSocial/DescriptionSocial';
import LoaderContext from '../Loader/LoaderContext';

function Footer(props) {

  const DataLinkCom = {
    "compañia":[
      {
        link:'/',
        description: 'Inicio  '
      },
      {
        link:'/about',
        description: 'Nosotros'
      },
      {
        link:'/project/peru',
        description: 'Proyectos'
      },
      {
        link:'/blog/1',
        description: 'Blog'
      },
    ],
    "soluciones":[
      {
        id:1,
        link:'/solution/mineriaSubterranea',
        description: 'Minería Subterránea'
      },
      {
        id:2,
        link:'/solution/mineriaSuperficial',
        description: 'Minería Superficial'
      },
      {
        id:3,
        link:'/solution/alquilerDeMaquinaria',
        description: 'Alquiler de Maquinaria'
      },
      {
        id:4,
        link:'/solution/ventaDeMaquinaria',
        description: 'Venta de Maquinaria'
      },
    ]
  }

  const DataLinksFooter = [
    {
      link: `https://www.facebook.com/CONTMIN/`
    },
    {
      link: `https://www.facebook.com/CONTMIN/`
    },
    {
      link: `https://pe.linkedin.com/in/contratos-mineros-e-inversiones-sac-a43a0821b?original_referer=https%3A%2F%2Fwww.google.com%2F`
    }
  ]

  const navigate = useNavigate();
  const tiempoRestante = 1500;
  const {showLoader} = useContext(LoaderContext);
  
  const delayLink = useCallback((e, path) => {
    e.preventDefault();
    showLoader(true);

    setTimeout(() => {
      navigate(path);
      window.scrollTo({ top: 0 });
    }, tiempoRestante);
    // cleanAnimations();
  }, [navigate, showLoader, tiempoRestante]);

  function buttonTopPage(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } 

  return (
    <>
      <section className="footer">
        <article className="footer__container">
          <div className="footer__title">
            <h2 className='text-3xl font-semibold leading-normal'>Sigamos <br />Creciendo</h2>
          </div>
          <div className='footer__description'>
            <ul className='footer__media--container'>
              {DataFooterIcons.map((obj,index)=>(
                <div className='footer__media' key={index}>
                  {obj.icon}
                  <NavLink className='text-base' to={obj.link}target='_black'>{obj.text}</NavLink>
                </div>   
              ))}
            </ul>
            <div className='footer__links--container'>
              <ul className='footer__links'>
                <li className=''>Compañia</li>
                {DataLinkCom['compañia'].map((obj,index)=>(
                  <NavLink className={'footer__links--a text-base'} onClick={(e) => delayLink(e, obj.link)} to={obj.link} key={index}>{obj.description}</NavLink>
                ))}
              </ul>
              <ul className='footer__links'>
                <li className=''>Soluciones</li>
                {DataLinkCom['soluciones'].map((obj,index)=>(
                  <NavLink className={'footer__links--a text-base'} onClick={(e) => delayLink(e, obj.link)} to={obj.link} key={index}>{obj.description}</NavLink>
                ))}
              </ul>
              <ul className='footer__social'>
                <li className='text-normal'>Síguenos</li>
                <DescriptionSocial filterIcon={DataIconsMedia} iconStyle={'iconMedia__dark'}></DescriptionSocial>
              </ul>
            </div>
          </div>
          <div className='footer__law'>
            <p className='text-base'>&copy; 2023 inversiones Mendoza</p>
            <svg onClick={buttonTopPage} xmlns='http://www.w3.org/2000/svg' width='23' height='23' viewBox='0 0 23 23'><title>arrow_up_line</title><g id="arrow_up_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='#FFFFFFFF' d='M12.707 3.636a1 1 0 0 0-1.414 0L5.636 9.293a1 1 0 1 0 1.414 1.414L11 6.757V20a1 1 0 1 0 2 0V6.757l3.95 3.95a1 1 0 0 0 1.414-1.414l-5.657-5.657Z'/></g></svg>          </div>
        </article>
      </section>
    </>
  )
}

export default Footer
