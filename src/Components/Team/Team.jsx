import React from 'react'

// components
import DataIconsMedia from '../DataIconsMedia/DataIconsMedia';
import DescriptionSocial from '../DescriptionSocial/DescriptionSocial';

function Team({users}) {

  const nameIcon = ['whatsapp','linkedin','instagram'];
  const filterIcon = DataIconsMedia.filter(obj => nameIcon.includes(obj.name));  
  
  return (
    <>
      <article className='team'>
        {/* Card */}
        {users.map((obj,index)=>(
        <div className='team__card' key={index}>
          <img className='team__card--img' src={obj.image} alt="Usuario" />
          <div className='team__card--description'>
            <p>{obj.user}</p>
            <p>{obj.range}</p>
            <DescriptionSocial filterIcon={filterIcon} iconStyle={'iconMedia__dark'}></DescriptionSocial>
          </div>
        </div>))}
      </article>
    </>
  )
}

export default Team;
