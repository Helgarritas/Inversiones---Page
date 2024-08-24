import React,{ useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// Components
import Ubication from '../../../Components/Icons/Ubication';
import DataWork from '../DataWork';

function WorkJobs() {
  const [countJobs, setCountJobs] = useState(0);  
  const [jobs, setJobs] = useState([]);

  const { dataWork, setDataWork } = useContext(DataWork);

  useEffect(() => { 
    let counter = dataWork.length;
    setCountJobs(counter)
  }, [dataWork,setCountJobs]);

  //* getData
  const fetchJobsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/jobs');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setDataWork(data); // Aquí actualizas dataWork con los datos obtenidos
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }; 

  useEffect(() => {
    fetchJobsData();
  }, []);

  return (
    <>
      <article className='px-[130px] py-[70px]'>
        <section className='flex flex-col gap-10'>
          
          {/* <Title></Title> */}
          <div>
            <p className='text-lg'><span className='text-black dark:text-white'>{ countJobs } ofertas</span> <span className='text-black/75 dark:text-white/75'>coinciden con su búsqueda. </span></p>
          </div>

          {/* Array of jobs in file */}
          <div className='flex flex-col gap-14'>
            {dataWork.map((obj,index)=>(
              <div 
                className={`px-10 py-8 flex justify-between items-center border rounded-lg bg-zinc-200 border-black/10 dark:bg-white/10 dark:border-white/10`}
                key={index}
              >
                <div>
                  <h3 className='text-2xl text-black/75 dark:text-white/75'>{obj.job}</h3>
                  <p className='text-sm mt-1 text-black/75 dark:text-white/75'>Publicado el {obj.date}</p>
                  <div className='flex items-center gap-2 mt-3'>
                    <Ubication/>
                    <p className='text-black/75 dark:text-white/75'>{obj.location}</p>
                  </div>
                </div>
                <NavLink  
                  to={'/workform'}
                  className='px-4 py-2 text-cont rounded-md bg-colorPrimary hover:bg-colorHover transition duration-300 ease cursor-pointer
                  text-black '
                >
                  Postular
                </NavLink>
              </div>
            ))}
          </div>

        </section>
      </article>
    </>
  )
}

export default WorkJobs
