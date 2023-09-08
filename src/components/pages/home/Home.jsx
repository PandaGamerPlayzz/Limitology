// import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import Section1 from './Home.Section1';
import Section2 from './Home.Section2';

function Home() {
  return (
    <>
      <Navigation transparentWhileDocked={true} />
      <main id="home">
        <Section1 />
        <Section2 />
      </main>
      <Footer />
    </>
  );
}

export default Home;
