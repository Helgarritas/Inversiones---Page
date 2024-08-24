import React,{useState, useEffect, useContext} from 'react';
// Components 
import DataWork from '../../DataWork';

function WorkSearch() {

  const [itemValue, setItemValue] = useState('');
  const [arrayValue, setArrayValue] = useState([]);

  const { dataWork, setDataWork } = useContext(DataWork);

  const handleValue = (event)=>{
    let changeValue = event.target.value;
    setItemValue(changeValue)

    let filterValue;

    if(changeValue == ''){
      setArrayValue([])
    }else{
      filterValue = dataWork.filter((obj)=>{
        return obj.job.toLowerCase().includes(itemValue.toLowerCase());
      })  
      setArrayValue(filterValue)  

    }
  }   

  const handleLinkSearch = async (e) => {
    const innerText = e.currentTarget.innerText;

    try{  
      const http = await fetch('http://localhost:5000/api/jobs/searchJob',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job: innerText
        })
      }) 

      if( !http.ok ){
        throw new error('HTTTP SearchLink no found');
      }

      const data = await http.json( http ); 
      setDataWork(data)
      setItemValue('')
    }catch( error ){
      console.log( {error: error} );
    }

  }

  useEffect(() => {
    return () => {
      
    };
  }, []);

  return (
    <>
      <div className=''>
        <div className={`px-5 w-96 flex items-center gap-2 rounded-xl border bg-white/10 border-white/20 hover:bg-white/15 backdrop-blur-sm`}>
          <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24'><title>search_line</title><g id="search_line" fill='none' fillRule='evenodd'><path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/><path fill='white' d='M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2ZM4 10.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z'/></g></svg>
          <input className='py-2 w-full bg-transparent outline-none text-white'
            value={itemValue}
            onChange={handleValue}
            type="text"
            placeholder='Buscar'
          />
        </div>
        {itemValue &&
          <ul className={`py-2 px-5 flex flex-col gap-1 ml-[40px] mt-2 rounded-xl bg-bgContain border border-bgBorder backdrop-blur-sm`}>
            {arrayValue.map((obj,index)=>(
              <li 
                className='text-contSecondary hover:text-contPrimary transition duration-300 ease cursor-pointer'
                key={index}
                onClick={ (e) => handleLinkSearch(e) }
              >
                {obj.job}
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  )
}

export default WorkSearch
