import React from 'react';
import PropTypes from 'prop-types';


const DataBarNav = [
  {id:1,
    link: '/about',
    description: 'Nosotros',
    subs: []
  },
  {id:2,
    link: '',
    description: 'Soluciones',
    subs: [
      {
        link: '/solution/mineriaSubterranea',
        description: 'Minería Subterránea',
      },
      {
        link: '/solution/mineriaSuperficial',
        description: 'Minería Superficial',
      },
      {
        link: '/solution/alquilerDeMaquinaria',
        description: 'Alquiler de Maquinaria',
      },
      {
        link: '/solution/ventaDeMaquinaria',
        description: 'Venta de Maquinaria',
      },
    ]
  },
  {id:3,
    link: '/project',
    description: 'Proyectos',
    subs: [
      {
        link: '/solution/mineriaSubterranea',
        description: 'Perú',
      },
      {
        link: '/solution/mineriaSubterranea',
        description: 'Bolivia',
      },
    ]
  },
  {id:4,
    link: '/blog/1',
    description: 'Blog',
    subs: []
  }
]


export default DataBarNav;
