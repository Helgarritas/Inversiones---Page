import React, { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

function DescriptionSocial({ filterIcon, iconStyle }) {
  return (
    <>
      <div className='iconsMedia'>
        {filterIcon.map((obj) => (
          <NavLink className={`${iconStyle}`} key={obj.id}>{obj.icon}</NavLink>
        ))}
      </div>
    </>
  );
}

export default DescriptionSocial;
