import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { RotatingLinesLoader } from './components/RotatingLinesLoader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="center-content">
          <RotatingLinesLoader />
        </div>
        ) : (
        <>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

