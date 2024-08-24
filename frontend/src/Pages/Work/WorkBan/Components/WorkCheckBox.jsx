import React, { useState, useContext, useEffect } from 'react';
import Ubication from '../../../../Components/Icons/Ubication';
import WorkDropDown from './WorkDropDown';
import DataWork from '../../DataWork';

const data = [
  {
    icon: <Ubication />,
    title: 'Ubicación',
    category: 'location',
    options: ['lima', 'ica']
  },
  {
    icon:
      <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'>
        <title>notebook_2_line</title>
        <g id='notebook_2_line' fill='none' fillRule='evenodd'>
          <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' />
          <path
            fill='white' d='M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H6Zm4 0H6v16h11a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1v8.976c0 .9-1.088 1.35-1.724.714L13 12.414l-1.276 1.276c-.636.636-1.724.186-1.724-.714V4Zm4 0h-2v6.586l.286-.286a1.01 1.01 0 0 1 1.428 0l.286.286V4Z'/>
        </g>
      </svg>,
    title: 'Contrato',
    category: 'contract',
    options: ['operador', 'tecnico']
  }
];

function WorkCheckBox() {
  const { dataWork, setDataWork } = useContext(DataWork);

  const [categories, setFiltros ] = useState({
    location: [],
    contract: []
  });
 
  const changeBooleanItem = ( category, option) => {
    setFiltros(prevState => ({
      ...prevState,
      [category]: prevState[category].includes(option) // Si location contiene una de las 'lima'
        ? prevState[category].filter(item => item !== option) // si contiene será: [ 'Ica', '' ];
        : [...prevState[category], option]// si no contine será: ['lima']
    }));
  };

  const getJobByFilter = async ( categories, setDataWork ) => {

    try{    
      const JobByFilter = await fetch(`http://localhost:5000/api/jobs/filter`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( categories )
      })

      if( !JobByFilter.ok ){
          throw new Error('http JobByFilter error!! no found')
      }
      
      const data = await JobByFilter.json();
      
      setDataWork(data)

    }catch( error ){
      console.log(error);
    }
  }

  useEffect(() => {
    
    getJobByFilter( categories, setDataWork)

  }, [categories, setDataWork]);

  const checkBox = (event, option) => {
    let checked = event.target.checked;
    let iconCheck = event.target.previousElementSibling;
    let parent = iconCheck.parentNode;

    if (checked) {
      iconCheck.style.opacity = '1';
      parent.style.background = 'white';
    } else {
      iconCheck.style.opacity = '0';
      parent.style.background = 'none';
    }
  };

  return (
    <div className='flex gap-8'>
      {data.map((obj, index) => (
        <ul className='cursor-pointer' key={index}>
          <WorkDropDown tit={obj.title} icon={obj.icon} i={index} />
          <ul className='py-2 px-5 mt-2 hidden flex-col gap-2 rounded-lg border border-white/10 bg-white/10'>
            {obj.options.map(( option, i ) => (
              <div className='flex items-center gap-2 backdrop-blur-sm' key={i}>
                <label className={`pl-3 pt-3 relative border bg-white/10 rounded-sm cursor-pointer`}>
                  <svg className={`w-full h-full absolute top-0 left-0 transition duration-300 ease opacity-0`} xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><title>check_line</title><g id='check_line' fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z' /><path fill='black' d='M21.192 5.465a1 1 0 0 1 0 1.414L9.95 18.122a1.1 1.1 0 0 1-1.556 0l-5.586-5.586a1 1 0 1 1 1.415-1.415l4.95 4.95L19.777 5.465a1 1 0 0 1 1.414 0Z' /></g></svg>
                  <input
                    className='w-0 h-0 absolute top-0 left-0'
                    type='checkbox'
                    onClick={(event) => checkBox( event, option )}
                    checked={categories[obj.category] && categories[obj.category].includes( option )}
                    onChange={() => changeBooleanItem( obj.category, option )}
                  />
                </label>
                <label className='text-white'>{option}</label>
              </div>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  );
}

export default WorkCheckBox;
