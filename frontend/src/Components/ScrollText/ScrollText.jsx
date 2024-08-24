"use client"

import clsx from "clsx"

import { MotionText } from "./MotionText";
import { ScrollReveal } from "./ScrollReveal";

const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia modi illum odio. Delectus, tempora"

export default function ScrollText() {
  return (
    <div className="min-h-screen w-screen pt-12">
      <ScrollReveal mode="middle" className="mx-auto flex h-screen max-w-2xl items-center">
        {(isActive) => (
          <MotionText body={text} mode="symbol">
            {(tokens) => (
              <h1 className="text-center text-3xl font-bold md:text-lg">
                {tokens.map((token, index) => (
                  <span
                    key={index}
                    style={{
                      "--delay": `${index * 20}ms`,
                    }}
                    className={clsx(
                      {
                        "translate-y-8 opacity-0": !isActive,
                        "delay-[--delay]": isActive,
                      },
                      "inline-block whitespace-pre-wrap transition-[transform,opacity] duration-150",
                    )}>
                    {token}
                  </span>
                ))}
              </h1>
            )}
          </MotionText>
        )}
      </ScrollReveal>
    </div>
  )
}
