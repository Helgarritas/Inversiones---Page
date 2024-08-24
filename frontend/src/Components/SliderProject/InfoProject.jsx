import React,{useEffect,useState} from 'react'
// Image 
import image from '/src/assets/Backgrounds/back.png';
// Data 
import DataProjectIcon from '../Data/DataProjectIcon';
import LawGraphic from '../LawGraphic/LawGraphic';

function InfoProject({boolean,chancheBoolean,DataProjectFilterCard}) {

  const data = [
    {sub: ['Profundidad:','500 m']},
    {sub: ['Producción anual:','100,000 tn']},
    {sub: ['Mineral procesado:','Zinc, Plomo, Plata']},
    {sub: ['Inicio operación:','20 Enero 2023']},
    {sub: ['Ubicación:','Yauli, Perú']},
  ]

  const tags = [
    {tag: 'Subterránea'},
    {tag: 'Operativa'}
  ]
  
  return (
    <>
      <article className={`inforProject ${boolean?'':'inforProject__event1'}`}>
        <section className={`inforProject__container ${boolean?'':'inforProject__event2'}
          bg-black/30 
        `}
        >
          <div 
            className='inforProject__delete border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15'  
            onClick={ ()=>chancheBoolean( false) }
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><title>close_line</title><g id="close_line" fill='none' fillRule='evenodd' ><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path 
            strokeWidth={'4px'} className='fill-black/70 dark:fill-white/70' d='m12 13.414 5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586 6.343 4.929A1 1 0 0 0 4.93 6.343L10.586 12l-5.657 5.657a1 1 0 1 0 1.414 1.414L12 13.414Z'/></g></svg>
          </div>
          <h2 className=' text-4xl font-semibold text-white dark:text-white mt-5'>{DataProjectFilterCard.title}</h2>
          <div className='relative aspect-[3/2] w-[100%s] mt-6'>
            <img src={DataProjectFilterCard.image} alt="" />
          </div>
          <div className='flex gap-4 mt-5'>
            {tags.map((obj)=>(
              <p 
                className={`w-min-content px-3 py-1 text-sm leading-snug rounded-3xl border cursor-pointer
                bg-white/10 border-white/10 text-white/75 hover:bg-white/15`}>
                {obj.tag}
              </p>
            ))}
          </div>

          <p className='text-sm mt-4 text-black/75 dark:text-white/75'>{DataProjectFilterCard.description}</p>

          <div className='flex flex-col gap-3 mt-10'>
            <h3 className='font-medium text-black dark:text-white'>Características</h3> 
            <div className='flex flex-col gap-1 mb-8'>
              {data.map((obj,index)=>(
                <div className='flex items-center gap-3' key={index}>
                  <p className='text-sm text-black/75 dark:text-white/75'>
                    <span className='text-white'>{obj.sub[0]}</span> <span>{obj.sub[1]}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-8 flex flex-col items-center gap-4'>
            <p className='text-black dark:text-white text-base uppercase '>Evolución de promedio de ley</p>
            <LawGraphic></LawGraphic>
          </div>
        </section>
      </article>
    </>
  )
}

export default InfoProject
