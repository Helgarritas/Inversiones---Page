import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Components
import SolutionsBanner from './SolutionsBanner/SolutionsBanner';
import Charapters from '../../Components/Charapters/Charapters';
import Advance from '../../Components/Advance/Advance';
import SliderProject from '../../Components/SliderProject/SliderProject';
import SolutionsDetails from './SolutionsDetails';
// Data
import DataSolutions from '../../Components/Advance/DataSolutions';
import DataProjects from '../../Components/Data/DataProjects';
function Solutions() {
  const {solutionId} = useParams();

  const banner = DataSolutions[solutionId].banner;
  const process = DataSolutions[solutionId].process;
  const counter = DataSolutions[solutionId].counter;
  const projects = DataProjects.filter((obj)=>{
    return obj.type == solutionId;
  });
  
  return (
    <>
      <SolutionsBanner banner={banner} solutionId={solutionId}/>
      <Charapters process={process}/>
      <Advance counter={counter}/>
      <SliderProject projects={projects}/>
      <SolutionsDetails/>
    </>
  );  
}

export default Solutions;
