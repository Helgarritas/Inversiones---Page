import React from 'react'
import { useEffect } from 'react';
// Component
import { SpotLightCard } from './SpotLighCard';
import BtnMore from '../Buttons/BtnMore';

function ProjectCard({item,index,chancheBoolean}) {

  return (
    <>
      <SpotLightCard
        index={index}
        mode="after"
        from="rgba(255,255,255,0.20)"
        size={400}
        onClick={() => chancheBoolean(true, index)}
        className={`group min-w-64 w-64 min-w-content rounded-2xl border p-2 pb-4 sliderProjects__card 
        border-black/15 dark: bg-black/5 dark:border-black/10 dark:bg-black/5
        dark:border-white/10 dark: bg-white/5 dark:border-white/10 dark:bg-white/5`}>
        <div className="relative">
          <img
            className="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0" 
            src={item.image}
          />
          <img
            className="relative h-64 w-64 rounded-xl object-cover transition-all duration-300 group-hover:grayscale-0"
            src={item.image}
          />
          <div className="flex justify-between items-center mt-4 px-2 z-10">
            <div className="text-black dark:text-white">{item.title}</div>
            <BtnMore></BtnMore>
          </div>
        </div>
      </SpotLightCard>
    </>
  )
}

export default ProjectCard
