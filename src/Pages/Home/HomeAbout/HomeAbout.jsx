import React,{useState,useEffect,useContext} from 'react'

// Components 
import ButtonStrong from '../../../Components/ButtonStrong/ButtonStrong';
import LoaderContext from '../../../Components/Loader/LoaderContext';

function HomeAbout(props) {

  const [setscroll, setSetscroll] = useState(0);
  const handleScroll = useContext(LoaderContext);

  return (
    <>
      <section className='homeAbout'>
        <article className='homeAbout__container'>
          <h5 className='homeAbout__container--text solutionHome__animation--card'>
            Con más de 20 años de experiencia, en Inversiones nos destacamos como uno de los líderes en la industria. Especializados en diversos campos del sector, nuestro compromiso con la calidad y la seguridad es inquebrantable.
            Nuestra misión es entregar resultados que superen las expectativas de nuestros clientes en cada proyecto. Siempre aspirando a ser reconocidos como uno de los mejores contratistas del Perú, estableciendo un estándar de excelencia en cada tarea que emprendemos.
          </h5>
        </article>
      </section>
    </>
  )
}

export default HomeAbout
