"use client"

import { SpotLightCard } from "./SpotLighCard"

export default function CardLight({icon,title,desc}) {
  return (
    <div className="flex items-center">
      <SpotLightCard
        hsl
        hslMin={10}
        hslMax={30}
        size={300}
        className="mx-auto w-full max-w-80 rounded-[--radius] p-8 shadow-xl bg-black/10 shadow-black/2.5 [--radius:theme(borderRadius.2xl)]
          dark:bg-white/10 dark:shadow-white/2.5
        ">
        <div className="absolute inset-px rounded-[calc(var(--radius)-1px) bg-zinc-200
        dark:bg-zinc-800
        "></div>

        <div className="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"></div>

        <div className="relative">
          <div className="flex items-center justify-center py-6">
            <div className="rounded-full border-4 border-zinc-950/10 bg-black/5 p-4
              dark:border-zinc-950/20 dark:bg-white/5
            ">
              {icon}
            </div>
          </div>

          <div className="mt-6">
            <div className="text-lg text-black dark:text-white">{title}</div>

            <p className="mt-2 text-sm font-light leading-relaxed text-black/75 dark:text-contSecondary">
              {desc}
            </p>
          </div>
        </div>
      </SpotLightCard>
    </div>
  )
}
