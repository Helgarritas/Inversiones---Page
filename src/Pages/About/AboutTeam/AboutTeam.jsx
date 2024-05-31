import React, { useEffect, useState } from 'react';

// Components
import DataTeam from '../../../Components/DataTeam/DataTeam';
import Team from '../../../Components/Team/Team';

function AboutTeam(props) {
  const [filteredTeamAdmin, setFilteredTeamAdmin] = useState([]);
  const [filteredTeamOperations, setFilteredTeamOperations] = useState([]);

  useEffect(() => {
    const dataTeamFilterAdmin = DataTeam.filter(obj => obj.section === 'Administracion');
    setFilteredTeamAdmin(dataTeamFilterAdmin);
    
    const dataTeamFilterOperations = DataTeam.filter(obj => obj.section === 'Operaciones');
    setFilteredTeamOperations(dataTeamFilterOperations);
  }, []);

  return (
    <section className='aboutTeam'>
      <article className='aboutTeam__container'>
        <h2 className='aboutTeam__title'>EQUIPO</h2>
        <div className='aboutTeam__cards'>
          <h3 className='aboutTeam__subtitle'>Administración</h3>
          <Team users={filteredTeamAdmin} />
        </div>   
        <div className='aboutTeam__cards'>
          <h3 className='aboutTeam__subtitle'>Operaciones</h3>
          <Team users={filteredTeamOperations} />
        </div> 
      </article>
    </section>
  );
}

export default AboutTeam;
