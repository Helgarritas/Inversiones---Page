import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import SolutionsBanner from './SolutionsBanner/SolutionsBanner';
import Charapters from '../../Components/Charapters/Charapters';
import Advance from '../../Components/Advance/Advance';
import SliderProject from '../../Components/SliderProject/SliderProject';
// Data
import DataSolutions from '../../Components/Advance/DataSolutions';

function Solutions(props) {
  const {solutionId} = useParams();

  const banner = DataSolutions[solutionId].banner;
  const process = DataSolutions[solutionId].process;
  const counter = DataSolutions[solutionId].counter;
  const projects = DataSolutions[solutionId].projects;
  return (
    <>
      <SolutionsBanner banner={banner}/>
      <Charapters process={process}/>
      <Advance counter={counter}/>
      <SliderProject projects={projects}></SliderProject>
    </>
  );  
}

export default Solutions;
