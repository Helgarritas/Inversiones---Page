import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import BarNav  from '../Components/BarNav/BarNav';
import Footer from '../Components/Footer/Footer';
import ScrollTo from '../Components/ScrollTo/ScrollTo';
import Loader from '../Components/Loader/Loader';

// Components
import HandleScrollAnim from '../Components/app/context/HandleScrollAnim';

// Lazy-loaded Pagess
const Home      = lazy(() => import('../Pages/Home/Home'));
const About     = lazy(() => import('../Pages/About/About'));
const Solutions = lazy(() => import('../Pages/Solutions/Solutions'));
const Project   = lazy(() => import('../Pages/Project/Project'));
const Work      = lazy(() => import('../Pages/Work/Work'));
const WorkForm  = lazy(() => import('../Pages/Work/WorkForm/WorkForm'));
const Blog      = lazy(() => import('../Pages/Blog/Blog'));

function AppRoutes({ boolLoader }) {
  return (
    <>
      {boolLoader && <Loader boolLoader={boolLoader}/>}
      <ScrollTo/>
      <HandleScrollAnim/>
      <BarNav/>
      <Suspense>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/about" element={ <About/> }/>
          <Route path="/solution/:solutionId" element={ <Solutions/> }/>
          <Route path="/project/:projectId" element={ <Project/> }/>
          <Route path="/work" element={ <Work/> }/>
          <Route path="/workform" element={ <WorkForm/> }/>
          <Route path="/blog/:blogId" element={ <Blog/> }/>
        </Routes>
      </Suspense>
      <Footer/>
    </>
  )
}

export default AppRoutes
