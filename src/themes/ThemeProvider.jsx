import { ThemeProvider} from 'styled-components';
import React from 'react';
import DefaultTheme from './DefaultTheme'

const PortfolioThemeProvider = ({ children }) => (
  <ThemeProvider theme={DefaultTheme}>
    {children}
  </ThemeProvider>
);

export default PortfolioThemeProvider;