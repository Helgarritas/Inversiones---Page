import React from 'react'
import CardLight from '../../../Components/CardLight/CardLight'

function Values(props) {

  const data = [
    {
      title: 'Innovación',
      desc: 'Fomentar la adopción de nuevas tecnologías y métodos para mejorar la eficiencia y la efectividad.',
      icon: 
        <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24'><title>cardano_ADA_line</title><g id="cardano_ADA_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className="fill-black dark:fill-white" d='M12 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2.75-12.763a1.5 1.5 0 1 1-1.5 2.598 1.5 1.5 0 0 1 1.5-2.598ZM9.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-6.2 4.214a1.5 1.5 0 1 0-2.599-1.5 1.5 1.5 0 0 0 2.598 1.5Zm4-1.5a1.5 1.5 0 1 0-2.599 1.5 1.5 1.5 0 0 0 2.598-1.5ZM9.25 7.237a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598Zm8.407.52a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm-9.9 9.9a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415ZM18 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm12.243 5.657a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Zm-9.9-9.9a1 1 0 1 1 1.414-1.414 1 1 0 0 1-1.414 1.414Zm10.84-3.734a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5Zm-9.5 16.454a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5ZM19.794 7.5a.5.5 0 1 0 .866-.5.5.5 0 0 0-.866.5ZM3.34 17a.5.5 0 1 0 .866-.5.5.5 0 0 0-.866.5Zm18.16-4.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm-19 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1Zm17.294 4a.5.5 0 1 0 .866.5.5.5 0 0 0-.866-.5ZM3.34 7a.5.5 0 1 0 .866.5.5.5 0 0 0-.866-.5Zm12.977 13.477a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5Zm-9.5-16.454a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5Z'/></g></svg>,
    },
    {
      title: 'Integridad',
      desc: 'Mantener altos estándares éticos y actuar con transparencia y honestidad en todas las operaciones.',
      icon: 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-10 w-10 stroke-[1] text-white"><path transform="translate(0.25,0.5)" opacity="0.1" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"/><path className='stroke-black dark:stroke-white' strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"/></svg>
    },
  ]

  return (
    <>
      <section className='px-[130px] py-[70px]'>
        <h2 className='text-3xl font-medium text-center text-black dark:text-white'>Nuestros Valores</h2>
        <article className='flex justify-center gap-[50px] mt-[50px]'>
          {data.map((obj)=>(
            <CardLight title={obj.title} desc={obj.desc}icon={obj.icon}></CardLight>
          ))}
        </article>
      </section>
    </>
  )
}

export default Values
