import React, { useState, useEffect, useCallback,useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
// Component
import DataProjects from '../../../Components/Data/DataProjects';
import LoaderContext from '../../../Components/Loader/LoaderContext';
import ProjectCard from '../../../Components/CardLight/ProjectCard';
import { SpotLightCard } from '../../../Components/CardLight/SpotLighCard';
import BtnArrow from '../../../Components/Buttons/BtnArrow';
// Image
import image from '/src/assets/Backgrounds/Home-Blog-Image1.png';

function HomeProjects() {
  let item = [
    {
      image: image,
      title: 'Shuntur'
    },
    {
      image: image,
      title: 'Shuntur'
    },
    {
      image: image,
      title: 'Shuntur'
    },
  ]

  const [datafilter, setdatafilter] = useState([]);

  const DataFilterProject = useCallback(() => {
    setdatafilter([DataProjects[0], DataProjects[1], DataProjects[2], DataProjects[3]]);
  }, []);

  useEffect(() => {
    DataFilterProject();
  }, [DataFilterProject]);

  //* chance boolean Loader
  let navigate = useNavigate();
  const {showLoader} = useContext(LoaderContext);
  const tiempoRestante = 1600; 
  
  const delayLink = (e, path) => {
    e.preventDefault();
    showLoader(true);
    setTimeout(() => {
      navigate(path);
    }, tiempoRestante);
  };

  return (
    <section className='homeProjects flex flex-col'>
      <div className='mb-14'>
        <p className='text-sm mb-3 text-colorPrimary'>Proyectos</p>
        <h2 className='text-black dark:text-white text-3xl font-medium'>
          Otorgamos un alto <br /> estándar de eficiencia
        </h2>
      </div>
      <div className='flex justify-between'>
        {item.map((item,index)=>(
          <ProjectCard item={item} index={index}></ProjectCard>
        ))}
        
        <SpotLightCard
          mode="after"
          from="rgba(255,255,255,0.20)"
          size={400}
          // onClick={() => chancheBoolean(true, index)}
          className="group flex items-end min-w-64 w-64 min-w-content rounded-2xl border border-white/10 bg-white/5 p-2 pb-[18px] sliderProjects__card">
          <NavLink 
            className="relative w-full"
            onClick={(e) => { delayLink(e, 'project/peru'); showLoader(); }}  
          >
            <img
              className="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
              src={image}
            />
            <div className="w-full flex justify-between items-center mt-4 px-2 z-10">
              <div className="text-black dark:text-white">Descubrir mas</div>
              <BtnArrow link={'/project/peru'}></BtnArrow>
            </div>
          </NavLink>
        </SpotLightCard>
      </div>
    </section>
  );
}

export default HomeProjects;
