import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// Context
import LoaderContext from '../../Loader/LoaderContext';

function NavigationSubLink({ obj }) {

  const { navigationDelay } = useContext(LoaderContext)

  return (
    <>
      <ul className='nav__sub--links'>
        {obj.subs.map((sub, subIndex) => (
          <NavLink 
            className='nav__link nav__sub--link  text-base' 
            key={subIndex}
            onClick={(e) => navigationDelay(e, sub.link)}
          >
            {sub.description}
          </NavLink>
        ))}
      </ul> 
    </>
  )
}

export default NavigationSubLink;
