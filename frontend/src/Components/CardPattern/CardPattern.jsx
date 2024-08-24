"use client"

import { DotPattern } from "./DotPattern"
// Image
import a from '/src/assets/Backgrounds/EEE.png';

export default function CardPattern({title,desc,index}) {
  return (
    <div className="flex items-center" key={index}>
      <div className="relative px-4 flex h-72 w-64 items-center justify-center overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-zinc-200 dark:bg-white/5">
        <DotPattern
          size={32}
          radius={1.5}
          offset-x={0}
          offset-y={0}
          className="absolute h-full w-full inset-0 fill-white/10 [mask-image:radial-gradient(white,transparent_85%)]"
        />
        <div className="relative font-display">
          <div className="absolute inset-0 rounded-full bg-black/25 dark:bg-white/25 blur-2xl"></div>
          <span className="relative flex flex-col items-center text-center bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent">
            <div className="relative aspect-[1/1] w-[70px] h-[70px]">
              <img className="" src={a} alt="" />
            </div>
            <span className="text-black dark:text-contPrimary mt-4">{title}</span>
            <span className="text-black/75 dark:text-white/75 text-sm mt-1">{desc}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
