import React from 'react'
import PropTypes from 'prop-types'

function HomeAbout(props) {
  return (
    <>
      <section className='homeAbout'>
        <article className='homeAbout__container'>
            <div className='homeAbout__container--text'>
                <p>tminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in .tminim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .</p>
            </div>
            <div className='homeAbout__container--button'>
                <a className='homeAbout__button'>Revisar</a>
                <a className='homeAbout__button'>Revisar</a>
            </div>
        </article>
      </section>
    </>
  )
}

export default HomeAbout
