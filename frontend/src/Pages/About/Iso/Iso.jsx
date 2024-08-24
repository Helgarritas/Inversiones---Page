import React from 'react'
// Components
import CardPattern from '../../../Components/CardPattern/CardPattern';

let data = [
  {
    title: 'ISO 9001',
    desc: 'Sistema de Gestión de Calidad'
  },
  {
    title: 'ISO 14001',
    desc: 'Sistema de Gestión Ambiental'
  },
  {
    title: 'ISO 45001',
    desc: 'Seguridad y Salud en el Trabajo'
  },
]

function Iso() {
  return (
    <>
      <article className='py-[70px] px-[130px] flex justify-between'>
        <h2 className='text-black dark:text-white text-3xl font-medium'>Nuestras certificariones destacadas</h2>
        <section className='flex gap-[40px]'>
          {data.map((obj,index)=>(
            <CardPattern title={obj.title} desc={obj.desc} index={index}></CardPattern>
          ))} 
        </section>
      </article>
    </>
  )
}

export default Iso
