// Components
import SliderOpinion from "../SliderOpinion/SliderOpinion"


export default function HomeSlider() {
  const items = [
    {id: 1,
      name: "EXPERIENCIA",
    },
    {id: 2,
      name: "-",
    },
    {id: 3,
      name: "SEGURIDAD",
    },
    {id: 4,
      name: "-",
    },
    {id: 5,
      name: "EFICIENCIA",
    },
    {id: 6,
      name: "-",
    },
    {id: 5,
      name: "TECNOLGÍA",
    },
    {id: 6,
      name: "-",
    },
    {id: 5,
      name: "SOSTENIBILIDAD",
    },
    {id: 6,
      name: "-",
    },
  ]
  return (
    <>
      <SliderOpinion items={items} background={'transparent'} color={'white'}></SliderOpinion>
    </>
  )
}