import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import SobreMim from './pages/SobreMim';
import BestMovies from './pages/BestMovies';
import MelhoresCidades from './pages/MelhoresCidades';
import NossoPlaneta from './pages/NossoPlaneta';
import StanislavAdamovich from './pages/StanislavAdamovich';
import VioloesCardin from './pages/VioloesCardin';
import PgHomenagem from './pages/PgHomenagem';

const App = () => {
  return (
    <div className='mt-10'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/Projetos' element={<Projetos />}></Route>
          <Route path='/SobreMim' element={<SobreMim />}></Route>

          <Route path='/BestMovies' element={<BestMovies />}></Route>
          <Route path='/MelhoresCidades' element={<MelhoresCidades />}></Route>
          <Route path='/NossoPlaneta' element={<NossoPlaneta />}></Route>
          <Route
            path='/StanislavAdamovich'
            element={<StanislavAdamovich />}
          ></Route>
          <Route path='/VioloesCardin' element={<VioloesCardin />}></Route>
          <Route path='/PgHomenagem' element={<PgHomenagem />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
