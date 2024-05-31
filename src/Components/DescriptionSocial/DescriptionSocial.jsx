import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function DescriptionSocial({filterIcon,iconStyle}) {
  useEffect(() => {
    const iconsMedia = document.querySelectorAll('.iconsMedia');
    const iconMediaStroke = document.querySelectorAll('.dataIcons__stroke');

    iconMediaStroke.forEach((element)=>{
      const parentNodeDark = element.parentElement.parentElement.parentElement.classList.contains('iconMedia__dark');
      const parentNodeLight = element.parentElement.parentElement.parentElement.classList.contains('iconMedia__light');
      const icon = element.parentElement.parentElement;
      parentNodeDark 
        ? element.style.stroke = 'white'
        : element.style.stroke = 'black'
      
      icon.addEventListener('mouseover',function(){
        if(element.classList.contains('dataIcons__inner') && parentNodeDark){
          icon.style.fill = 'white'
          element.style.stroke = 'black'
          console.log('aaaa');
        }
        if(element.classList.contains('dataIcons__inner') && parentNodeLight){
          icon.style.fill = 'black'
          element.style.stroke = 'white'
          console.log('tetas');
        }
      })
      icon.addEventListener('mouseout',function(){
        if(element.classList.contains('dataIcons__inner') && parentNodeDark){
          icon.style.fill = 'black'
          element.style.stroke = 'white'
        } 
        if(element.classList.contains('dataIcons__inner') && parentNodeLight){
          icon.style.fill = 'white'
          element.style.stroke = 'black'
        }
      })
    
    })

    return () => {
      
    };
  }, []);

  return (
    <>
      <div className='iconsMedia'>
        {filterIcon.map((obj)=>(
          <NavLink className={`${iconStyle}`} key={obj.id}>{obj.icon}</NavLink>
        ))}
      </div>
    </>
  )
}

export default DescriptionSocial;
