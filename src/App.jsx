import { useEffect,useState,useCallback } from 'react';
import { Routes,Route,useNavigate } from 'react-router-dom';
import './App.scss'


// Pages
import BarNav from './Components/BarNav/BarNav';
import Footer from './Components/Footer/Footer';
import LoaderContext from './Components/Loader/LoaderContext';

// Components
import MouseCursor from './Components/AnimationMouse/MouseCursor';
import ScrollTo from './Components/ScrollTo/ScrollTo';
import Loader from './Components/Loader/Loader';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Solutions from './Pages/Solutions/Solutions';
import Project from './Pages/Project/Project';
import Blog from './Pages/Blog/Blog';

function App({animationMouse}) {
  const [booleanLoader, setBooleanLoader] = useState(true)
  const navigate = useNavigate();

  useEffect(()=>{
    // Function for animation mouse
    animationMouse();
    // Function booleanLoader change false later animation.
    setTimeout(()=>{
      if(booleanLoader) return setBooleanLoader(false);
    },3200)
  },[booleanLoader])

  const showLoader = useCallback(()=>{
    setBooleanLoader(true)
    setTimeout(()=>{setBooleanLoader(false)},3200)
  },[animationMouse])

  return (
    <>
      <div className='mouse__animation--scope'>
        <LoaderContext.Provider value={showLoader}>
          {booleanLoader && <Loader booleanLoader={booleanLoader}/>}
          <MouseCursor></MouseCursor>
          <ScrollTo></ScrollTo>
          <BarNav showLoader={showLoader}></BarNav>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/solution/:solutionId" element={<Solutions/>}/>
            <Route path="/project" element={<Project/>}/>
            <Route path="/blog/:blogId" element={<Blog/>}/>
          </Routes>
          <Footer showLoader={showLoader}></Footer>
        </LoaderContext.Provider>
      </div>
    </>
  )
}

export default App
