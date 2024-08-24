import React,{useEffect,useState,useRef} from 'react'

//  Components
import DataHomeOpinions from './DataHomeOpinions';
import DataIconsMedia from '../../../Components/DataIconsMedia/DataIconsMedia';
import DescriptionSocial from '../../../Components/DescriptionSocial/DescriptionSocial';

// Image
import image from '/src/assets/Backgrounds/foto.jpg';

const items = [
  {
    name: "Sophia Martinez",
    title: "Lead designer, Avalon",
    image:
      "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
    body: "I've been in the design game for a while now and this kit is one of the best. It's made me fall in love with designing all over again. It's just brilliant.",
  },
  {
    name: "Caroline Lee",
    title: "Senior Graphic Designer, Echo",
    image:
      "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
  {
    name: "Tyler Otwell",
    title: "CTO, Apple",
    image:
      "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
    body: "This design kit is a game changer! My designs look better and I get things done faster. Totally recommending it to my mates!",
  },
  {
    name: "Jake Harris",
    title: "Thompson Creative",
    image:
      "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
    body: "I'm a newbie designer and this kit is just perfect. I've learnt so much and my work looks amazing now. A big thumbs up!",
  },
]


function HomeOpinion() {
  
  const nameIcon = ['whatsapp','linkedin','instagram'];
  const filterIcon = DataIconsMedia.filter(obj => nameIcon.includes(obj.name));  

  return (
    <>
    <div className="relative py-[70PX] flex  w-screen items-center">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="h-full px-2.5">
              <div className="relative h-full w-[28rem] rounded-2xl border px-8 py-6 border-black/5 bg-black/5
                dark:border-white/5 dark:bg-white/5
              ">
                <div className="text-[rgba(0,0,0,.75)] pb-4 font-light dark:text-contSecondary">{item.body}</div>

                <div className="mt-auto flex items-center gap-4">
                  <div className='relative aspect-[1/1] h-9 w-9 '>
                    <img src={item.image} className="rounded-full" />
                  </div>

                  <div className="flex flex-col text-sm">
                    <div className="text-[rgba(0,0,0,1)] dark:text-contPrimary">{item.name}</div>

                    <div className="text-[rgba(0,0,0,.75)] dark:text-contSecondary">{item.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeOpinion
