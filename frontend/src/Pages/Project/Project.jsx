import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import EchartsMap from '../../Components/EchartsMap/EchartsMap';
import ProjectBanner from './ProjectBanner/ProjectBanner';
import ProjectMap from './ProjectMap/ProjectMap';
import SliderProject from '../../Components/SliderProject/SliderProject';
import DataProjects from '../../Components/Data/DataProjects';

function Project() {
  const [DataProjectFilter, setDataProjectFilter] = useState([]);
  const { projectId } = useParams();

  const filteredProjects = useMemo(() => {
    return DataProjects.filter(obj => obj.country === projectId);
  }, [projectId]);

  useEffect(() => {
    setDataProjectFilter(filteredProjects);
  }, [filteredProjects]);

  const handleSomeEvent = useCallback(() => {
    // Lógica para el evento
  }, []);

  return (
    <>
      <ProjectMap projectId={projectId} />
      <SliderProject projects={DataProjectFilter} onSomeEvent={handleSomeEvent} />
      <EchartsMap/>
    </>
  );
}

export default Project;
