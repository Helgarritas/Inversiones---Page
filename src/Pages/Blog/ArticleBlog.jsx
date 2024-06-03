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
  const showLoader = useContext(LoaderContext);
  const tiempoRestante = 1600; 
  
  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  };

  return (

    <>
      <article className='blogNotice'>
        <section className='blogNotice__container'>
            <div className='blogNotice__notice'>
              <h3>{currentArticle.title}</h3>
              <p>{currentArticle.date}</p>
              <img src={currentArticle.image} alt="" />
              <p>{currentArticle.text}</p>
              <DescriptionSocial filterIcon={filterIcon} iconStyle={'iconMedia__light'}></DescriptionSocial>
            </div>
            <div className='blogNotice__section'>
              <p>Más de nuestro blog</p>
              <div className='blogNotice__notices'>
                {
                  filterSectionNotice.map((obj)=>(
                    <NavLink
                      onClick={(e) => { delayLink(e, obj.link); showLoader(); }}  
                      className='blogNotice__section--container' key={obj.id} to={`/blog/${obj.id}`}>
                      <img className='blogNotice__portada--image' src={obj.image}/>
                      <div className='blogNotice__content'>
                        <p>{obj.date}</p>
                        <p>{obj.title}</p>
                        <p>{obj.portada}</p>
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
