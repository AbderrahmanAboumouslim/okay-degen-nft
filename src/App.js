import { ThemeProvider } from 'styled-components';
import './App.css';
import MainStyle from './Styling/MainStyle';
import { light } from './Styling/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Roadmap from './components/pages/Roadmap';
import Staking from './components/pages/Staking';
import Declaration from './components/pages/Declaration';
import Launchpad from './components/pages/Launchpad';
import Navbar from './components/Navbar';

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
            <Route path="staking" element={<Staking />} />
            <Route path="launchpad" element={<Launchpad />} />
            <Route path="declaration" element={<Declaration />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
