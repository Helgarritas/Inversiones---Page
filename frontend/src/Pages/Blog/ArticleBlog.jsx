import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { NavLink,useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import DescriptionSocial from '../../Components/DescriptionSocial/DescriptionSocial';
import DataContentBlog from './Components/DataContentBlog';
import DataIconsMedia from '../../Components/DataIconsMedia/DataIconsMedia';
import LoaderContext from '../../Components/Loader/LoaderContext';

function ArticleBlog(props) { 
  // Parametro search router id. 
  let { blogId } = useParams();
  // Filtrar el articulo de portada.
  let currentArticle = DataContentBlog.find(article => article.id === parseInt(blogId));
  // Filtrar los articulos de secciones.
  let filterSectionNotice = DataContentBlog.filter(obj => obj.id !== parseInt(blogId)) 

  const nameIcon = ['facebook','linkedin','instagram'];
  const filterIcon = DataIconsMedia.filter(obj => nameIcon.includes(obj.name));  
  
  //* chance boolean Loader
  let navigate = useNavigate();
  const {showLoader} = useContext(LoaderContext);
  const tiempoRestante = 1600; 
  
  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
      window.scrollTo({
        top: 0
      })
    }, tiempoRestante);

  };

  return (

    <>
      <article className='blogNotice'>
        <section className='blogNotice__container'>
            <div className='blogNotice__notice'>
              <h3 className='text-black dark:text-white text-4xl font-medium'>{currentArticle.title}</h3>
              <p className='text-black/55 dark:text-white/55 text-sm mt-4'>{currentArticle.date}</p>
              <div className='relative mt-5'>
                <img className='' src={currentArticle.image} alt="" />
              </div>
              <p className='text-sm leading-normal text-black/75 dark:text-white/75 font-normal my-5'>{currentArticle.text}</p>
              <DescriptionSocial filterIcon={filterIcon} iconStyle={'iconMedia__light'}></DescriptionSocial>
            </div>
            <div className='blogNotice__section'>
              <p className='text-black dark:text-white text-base font-medium' >Más de nuestro blog</p>
              <div className='blogNotice__notices'>
                {
                  filterSectionNotice.map((obj)=>(
                    <NavLink
                      onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                      className='blogNotice__section--container' key={obj.id} to={`/blog/${obj.id}`}>
                      <div className='relative aspect-[4/3] h-[100%]'>
                        <img src={obj.image}/>
                      </div>
                      <div className='blogNotice__content'>
                        <p className='text-black/55 dark:text-white/55 text-xs'>{obj.date}</p>
                        <p className='text-black dark:text-white font-medium'>{obj.title}</p>
                        <p className='text-black/75 dark:text-white/75 text-sm'>{obj.portada}</p>
                      </div>
                    </NavLink>  
                  ))
                }
              </div>
            </div>
        </section>
      </article>
    </>
  )
}

export default ArticleBlog;
