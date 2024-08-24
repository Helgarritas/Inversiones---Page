import { useEffect, useState, useCallback } from 'react';
import './App.scss';
// Context Provider
import LoaderContext from './Components/Loader/LoaderContext';
import NavigationDelay from './Components/app/context/NavigationDelay';
// Routes
import AppRoutes from './presentation/Routes';

function App() {
  
  //* Animation Loader
  const [boolLoader, setBoolLoader] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      if (boolLoader) setBoolLoader(false);
    }, 3200);
  }, [boolLoader]);
  
  const showLoader = useCallback(() => {
    setBoolLoader(true);
    setTimeout(() => { setBoolLoader(false); }, 3200);
  }, []);
  
  const { navigationDelay } = NavigationDelay( showLoader );

  return (
    <LoaderContext.Provider value={{ showLoader, navigationDelay }}>
      <AppRoutes boolLoader={boolLoader}/>
    </LoaderContext.Provider>
  );
}

export default App;
