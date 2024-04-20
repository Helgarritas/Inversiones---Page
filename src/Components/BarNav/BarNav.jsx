import React from 'react'

function BarNav(props) {
  return (
    <>
      <nav className='nav'>
        <div className='nav__container--logo'>
            <li className='nav__logo'>Logo</li>
        </div>
        <ul className='nav__container--link'>
            <li className='nav__sub--link'>Nosotros</li>
            <li className='nav__sub--link'>Servicios</li>
            <li className='nav__sub--link'>Proyectos</li>
            <li className='nav__sub--link'>Blog</li>
        </ul>
        <div className='nav__cona¿tainer--button'>
            <input type="checkbox" id="checkbox"/>
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </div>
      </nav>
    </>
  )
}

export default BarNav
