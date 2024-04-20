import { useEffect,useState,useCallback } from 'react'
import './App.scss'

// Components
import Loader from './Components/Loader/Loader';
import BarNav from './Components/BarNav/BarNav';
import Footer from './Components/Footer/Footer';
// Pages
import HomeBanner   from './Pages/Home/HomeBanner/HomeBanner';
import HomeAbout    from './Pages/Home/HomeAbout/HomeAbout';
import HomeServices from './Pages/Home/HomeServices/HomeServices';
import HomeProjects from './Pages/Home/HomeProjects/HomeProjects';
import HomeTeam     from './Pages/Home/HomeTeam/HomeTeam';
import HomeOpinion  from './Pages/Home/HomeOpinion/HomeOpinion';
import HomeBlog     from './Pages/Home/HomeBlog/HomeBlog';
import LoaderContext from './Components/Loader/LoaderContext';

function App() {
  const [booleanLoader, setBooleanLoader] = useState(true)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(booleanLoader) return setBooleanLoader(false);
  //   },1900)
  // },[booleanLoader])

  const showLoader = useCallback(()=>{
    setBooleanLoader(true)
    setTimeout(()=>{setBooleanLoader(false)},1900)
  },[])

  return (
    <>
      <LoaderContext.Provider value={showLoader}>
        {booleanLoader && <Loader/>}
        <BarNav></BarNav>
        <HomeBanner></HomeBanner>
        <HomeAbout></HomeAbout>
        <HomeServices></HomeServices>
        <HomeProjects></HomeProjects>
        <HomeTeam></HomeTeam>
        <HomeOpinion></HomeOpinion>
        <HomeBlog></HomeBlog>
        <Footer></Footer>
      </LoaderContext.Provider>
    </>
  )
}

export default App
