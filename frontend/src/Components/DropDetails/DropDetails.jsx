import { Details } from "./Details"
import clsx from "clsx"
// Components
import LawGraphic from "../LawGraphic/LawGraphic"

export default function DropDetails() {
  const items = [
    {
      title: "Análisis Anual de Producción de Minerales.",
      content:
        "You are in control of how much information you share on X or any other website. Don’t post information you consider to be private, and be thoughtful about when you want to publicly share your location.",
    },
    {
      title: "Distribución de Costos Operativos.",
      content:
        "Record: You can record, edit and share videos from the X app (X for iPhone or X for Android OS 4.1 and higher).",
    },
    {
      title: "Evolución del Empleo en el Sector.",
      content:
        "Type your X (up to 280 characters) into the compose box at the top of your Home timeline, or select the X button in the navigation bar.",
    },
    {
      title: "Evaluación de Indicadores de Impacto Ambiental",
      content:
        "Click the More icon and select Settings and privacy from the drop-down menu. Click on Your account tab and choose Account information. Select Phone from the drop-down menu.",
    },
  ]

  return (
    <div className="">
      <Details className="w-[600px] mx-auto space-y-5">
        {items.map((item, index) => (
          <Details.Item
            key={index}
            className={`group rounded-2xl transition duration-500 border
            bg-black/10 border-black/10 hover:bg-black/[0.075]
            dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.075]`}>
            {({ isActive, toggle }) => (
              <>
                <div className="flex cursor-pointer items-center p-4" onClick={toggle}>
                  <div className={`transition 
                  black-white/75 group-hover:text-black
                  dark:text-white/75 dark:group-hover:text-white`}>
                    {item.title}
                  </div>
                  <div className="relative ml-auto">
                  <svg
                    className={clsx(
                      { "rotate-[135deg]": isActive, "rotate-0": !isActive },
                      "h-[18px] w-[18px] text-black/55 dark:text-white/55 transition-transform duration-500",
                    )}xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><title>add_line</title><g id="add_line" fill='none' fillRule='nonzero'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path className="fill-black/70 dark:fill-white/70 " d='M11 20a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 1 0-2 0v7H4a1 1 0 1 0 0 2h7v7Z'/></g></svg>
                  </div>
                </div>

                <Details.Content className="overflow-hidden px-4 transition-all duration-500 will-change-[height]">
                  <LawGraphic></LawGraphic>
                </Details.Content>
              </>
            )}
          </Details.Item>
        ))}
      </Details>
    </div>
  )
}
