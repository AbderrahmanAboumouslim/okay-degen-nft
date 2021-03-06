import { ThemeProvider } from 'styled-components';
import './App.css';
import MainStyle from './Styling/MainStyle';
import { light } from './Styling/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Roadmap from './components/pages/Roadmap';
import Staking from './components/pages/Staking';
import Station from './components/pages/Station';
import Launchpad from './components/pages/Launchpad';
import Navbar from './components/Navbar';
import Declaration from './components/pages/Declaration';
import Whitepaper from './components/pages/Whitepaper';

const App = () => {
  return (
    <>
      <MainStyle />
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="roadmap" element={<Roadmap />} />
            <Route path="whitepaper" element={<Whitepaper />} />
            <Route path="staking" element={<Staking />} />
            <Route path="launchpad" element={<Launchpad />} />
            <Route path="station" element={<Station />} />
            <Route path="declaration" element={<Declaration />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
