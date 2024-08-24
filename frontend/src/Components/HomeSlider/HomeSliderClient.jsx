import React from 'react';

// Components
import SliderOpinion from '../SliderOpinion/SliderOpinion';
  
function HomeSliderClient(props) {
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
    <>
      <SliderOpinion items={items} background={'#F5CB1F'} color={'black'}></SliderOpinion>
    </>
  )
}

export default HomeSliderClient
