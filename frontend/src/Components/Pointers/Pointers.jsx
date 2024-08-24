import { StarGrid } from "./StarGrid"
import clsx from "clsx"

export default function Pointers() {
  const items = Array(90).fill(0)

  return (
    <div className="flex items-center">
      <div className="relative h-80 max-w-md rounded-2xl border border-black/10 bg-zinc-200 dark:border-white/10 dark:bg-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"></div>

        <div className="px-6 pt-6">
          <StarGrid active={20} duration={100} featureDuration={1500} className="grid w-full grid-cols-10 gap-4">
            {items.map((item, index) => (
              <StarGrid.Item key={index} className="relative flex aspect-square w-full items-center justify-center">
                {({ isActive, isFeatured }) => (
                  <>
                    <svg
                      className={clsx(
                        isFeatured ? "scale-1" : "scale-0 opacity-0",
                        "absolute h-6 w-6 stroke-[#f5cb1f] stroke-[1] transition-all duration-1000",
                      )}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10.5" />
                    </svg>

                    <div
                      style={{ "--duration": `${(index % 3) * 1.5}s` }}
                      className={clsx(
                        {
                          "scale-50 bg-black/20 dark:bg-white/20": !isActive && !isFeatured,
                          "h-1 w-1 ": isActive || isFeatured,
                          "bg-black/30 dark:bg-white/30": isActive && !isFeatured,
                          "bg-[#f5cb1f]": isFeatured,
                        },
                        "relative h-1 w-1 rounded-full transition-all duration-500 [animation-duration:--duration]",
                      )}></div>
                  </>
                )}
              </StarGrid.Item>
            ))}
          </StarGrid>
        </div>

        <div className="mt-6 px-8 pb-8">
          <div className="text-lg text-black dark:text-white">Cobertura Extensa y Versatilidad</div>

          <p className="mt-2 text-sm font-light leading-relaxed text-black/75 dark:text-white/75">
            Contamos con una presencia significativa en múltiples locaciones mineras estratégicas.
          </p>
        </div>
      </div>
    </div>
  )
}
