import React from 'react';
//Components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects' 
import Footer from './components/Footer/Footer'
import PortfolioThemeProvider from './themes/ThemeProvider';
import GlobalStyles from './themes/GlobalStyles';
import { Container } from './themes/LayoutStyles'
import { Section, LineSeparator } from './themes/GlobalComponents';

//Images
import BackgroundImage from './components/Hero/BackgroundImage';
import Technologies from './components/Technologies/Technologies';
import Background from './components/Background/Background';

//Scripts
import { scrollToSection } from './scripts/scrollConfig';

const App = () => (
  <PortfolioThemeProvider>
    <GlobalStyles />
    <Container>

      <Header/>

      <Section grid>
        <Hero/>
        <BackgroundImage/>
      </Section> <LineSeparator/>
      <Projects/> <LineSeparator/>
      <Technologies/> <LineSeparator/>
      <Background/> <LineSeparator/>
      <Footer/>
    </Container>
  </PortfolioThemeProvider>
);


export default App;