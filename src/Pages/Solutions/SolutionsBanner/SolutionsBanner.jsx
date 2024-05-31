import React from 'react'

// Image

function SolutionsBanner({banner}) {
  return (
    <>
      <header className='solutionsBanner'>
        <img className='solutionsBanner__background' src={banner.background}/>
        <article className='solutionsBanner__container'>
          {banner.title}
          <p className='translate__animation'>{banner.description}</p>
        </article>
      </header>
    </>
  )
}

export default SolutionsBanner
