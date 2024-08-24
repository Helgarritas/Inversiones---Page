"use client"

import clsx from "clsx"
import { TextReveal } from "./TextReveal"

export default function TextRevelation() {
  const text =
    "Somos aliados estratégicos de nuestros clientes para enfrentar los desafíos más complejos, brindando soluciones innovadoras que tienen un impacto positivo y duradero en la industria minera. Nuestros clientes cuentan con nosotros para la gestión eficiente de sus operaciones y proyectos que les permitan el logro de sus objetivos y la sostenibilidad."

  return (
    <div className=" w-screen px-[130px] flex justify-end">
      <TextReveal body={text} className="relative h-[150vh] w-full max-w-xl">
        {(tokens) => (
          <div className="sticky left-0 top-0 flex h-1/2 items-center text-xl font-medium leading-snug text-white">
            <div>
              {tokens.map((token, index) => (
                <TextReveal.Token key={index} index={index}>
                  {(isActive) => (
                    <span
                      className={clsx(
                        {
                          "opacity-10": !isActive,
                        },
                        "transition",
                      )}>
                      {token}
                    </span>
                  )}
                </TextReveal.Token>
              ))}
            </div>
          </div>
        )}
      </TextReveal>
    </div>
  )
}
