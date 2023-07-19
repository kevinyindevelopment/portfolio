import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects'
import PortfolioThemeProvider from './themes/ThemeProvider';
import GlobalStyles from './themes/GlobalStyles';
import { Container } from './themes/LayoutStyles'
import { Section, LineSeparator } from './themes/GlobalComponents';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BackgroundImage from './components/Hero/BackgroundImage';
import Technologies from './components/Technologies/Technologies';

const App = () => (
  <PortfolioThemeProvider>
    <GlobalStyles />
    <Container>

      <Router>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="projects"/>
            <Route path="tech" />
            <Route path="background" />
          </Routes>
      </Router>

      <Section grid>
        <Hero/>
        <BackgroundImage/>
      </Section> <LineSeparator/>
      <Projects/> <LineSeparator/>
      <Technologies/> <LineSeparator/>
    </Container>
  </PortfolioThemeProvider>
);


export default App;