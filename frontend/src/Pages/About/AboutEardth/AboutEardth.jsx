import React from 'react'
import background from '/src/assets/About/About-Eardth-background2.jpeg';

function AboutEardth(props) {
  return (
    <>
      <article className='aboutEardth'>
        <img src={background} alt="" />
        <section className='aboutEardth__container rounded-2xl'>
          <p className=' text-white text-lg'>Responsabilidad Ambiental</p>
          <p className=' text-contSecondary mt-2'>Somos una entidad minera comprometida y respetuosa con el entorno natural.. Nuestra filosofía se refleja en un Plan de Biodiversidad meticulosamente diseñado, implementado internamente en todas nuestras operaciones.</p>
        </section>
      </article>
    </>
  )
}

export default AboutEardth
