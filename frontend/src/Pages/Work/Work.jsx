import { useEffect, useState } from 'react';
// Components
import WorkBan from './WorkBan/WorkBan';
import WorkJobs from './WorkJobs/WorkJobs';
import WorkForm from './WorkForm/WorkForm';

// Data 
import DataWork from './DataWork';

function Work() {
  const [dataWork, setDataWork] = useState([]);
  
  useEffect(() => {
    // console.log( dataWork );
  }, [dataWork]);

  return (
    <>
      <DataWork.Provider value={{ dataWork, setDataWork }}>
        <WorkBan />
        <WorkJobs />
      </DataWork.Provider>
    </>
  )
}

export default Work;
