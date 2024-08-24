import React from 'react'
// Components
import Eardth from '../../../Components/Eardth/Eardth'
import Pointers from '../../../Components/Pointers/Pointers'

function Selection(props) {
  return (
    <>
      <article className='px-[130px] py-[70px] flex flex-col gap-[60px] justify-between'>
        <h2 className='text-[rgba(0,0,0,1)] text-3xl text-center dark:text-contPrimary'>¿Por qué elegirnos?</h2>
        <section className='flex justify-center gap-[50px]'>
          <Eardth/>
          <Pointers/>
        </section>
      </article>
    </>
  )
}

export default Selection
