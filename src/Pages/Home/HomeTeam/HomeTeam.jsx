import React, { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import DataTeam from '../../../Components/DataTeam/DataTeam';
import Team from '../../../Components/Team/Team';

function HomeTeam(props) {
  const [filteredTeam, setFilteredTeam] = useState([]);

  useEffect(() => {
    const dataTeamFilter = DataTeam.filter(obj => obj.section == 'Administracion');
    setFilteredTeam(dataTeamFilter);
  }, [DataTeam,filteredTeam]);
  
  return (
    <>
      <section className='homeTeam'>
        <h2 className='homeTeam__title'>EQUIPO</h2> 
        <Team users={filteredTeam} />
      </section>
    </>
  );
}

export default HomeTeam;
