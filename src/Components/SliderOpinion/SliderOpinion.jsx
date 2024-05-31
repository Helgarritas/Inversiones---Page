  
export default function SliderOpinion({background,color}) {
  const items = [
    {id: 1,
      name: "PERSONAL",
    },
    {id: 2,
      name: "-",
    },
    {id: 3,
      name: "MAQUINARIA",
    },
    {id: 4,
      name: "-",
    },
    {id: 5,
      name: "ESTRUCTURAS",
    },
    {id: 6,
      name: "-",
    },
    {id: 7,
      name: "GEOLOGÍA",
    },
    {id: 8,
      name: "-",
    },
    {id: 9,
      name: "INGENIEROS",
    },
    {id: 10,
      name: "-",
    },
  ]
  return (
    <div className="relative flex items-center homeSlider">
      <div className="relative flex max-w-[100vw] overflow-hidden homeSlider__container" style={{background: `${background}`}}>
        <div className="flex w-max animate-marquee [--duration:20s] hover:[animation-play-state:paused]">
          {[...items, ...items].map((obj, index) => (
            <div key={index} className="h-full px-2.5 homeSlider__card">
              <div className="relative h-full rounded-2xl  px-8 ">
                <p style={{color: `${color}`}} className="homeSlider__description">{obj.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}