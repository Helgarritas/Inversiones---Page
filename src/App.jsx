import { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';

// Components
import BarNav from './Components/BarNav/BarNav';
import Footer from './Components/Footer/Footer';
import LoaderContext from './Components/Loader/LoaderContext';
import ScrollTo from './Components/ScrollTo/ScrollTo';
import Loader from './Components/Loader/Loader';

// Lazy-loaded Pages
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Solutions = lazy(() => import('./Pages/Solutions/Solutions'));
const Project = lazy(() => import('./Pages/Project/Project'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));

function App() {
  const [booleanLoader, setBooleanLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (booleanLoader) setBooleanLoader(false);
    }, 3200);
  }, [booleanLoader]);

  const showLoader = useCallback(() => {
    setBooleanLoader(true);
    setTimeout(() => { setBooleanLoader(false); }, 3200);
  }, []);

  const handleScroll = useCallback(() => {
    const cardOT = document.querySelectorAll('.solutionHome__animation--card');
    const windowHeight = window.innerHeight * 0.7;

    cardOT.forEach((element, index) => {
      const cardsTop = element.getBoundingClientRect().top;
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }
    });

    const cardO = document.querySelectorAll('.card__animation--opacity');
    cardO.forEach((element, index) => {
      const cardsTop = element.getBoundingClientRect().top;
      if (cardsTop <= windowHeight && !element.classList.contains('solutionsHome__animation')) {
        element.classList.add('solutionsHome__animation');
      }
    });
  }, []);

  useEffect(() => {
    const handleScrollEvent = () => {
      handleScroll();
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [handleScroll]);

  return (
    <LoaderContext.Provider value={{ showLoader, handleScroll }}>
      {booleanLoader && <Loader booleanLoader={booleanLoader} />}
      <ScrollTo />
      <BarNav showLoader={showLoader} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution/:solutionId" element={<Solutions />} />
          <Route path="/project/:projectId" element={<Project />} />
          <Route path="/blog/:blogId" element={<Blog />} />
        </Routes>
      </Suspense>
      <Footer showLoader={showLoader} />
    </LoaderContext.Provider>
  );
}

export default App;
