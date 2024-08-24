
// Pages
import HomeBanner from './HomeBanner/HomeBanner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeServices from './HomeServices/HomeServices';
import Selection from './Selection/Selection';
import HomeProjects from './HomeProjects/HomeProjects';
import HomeOpinion from './HomeOpinion/HomeOpinion';
import HomeBlog from './HomeBlog/HomeBlog';
import HomeCollaboration from './HomeCollaboration/HomeCollaboration';

function Home() {
  return (
    <>
      <HomeBanner/>
      {/* <HomeAbout/> */}
      <HomeServices/>
      <Selection/>
      <HomeProjects/>
      <HomeOpinion/>
      <HomeCollaboration/>
      <HomeBlog/>
    </>
  );
}

export default Home;
