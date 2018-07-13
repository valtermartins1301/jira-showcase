import React from 'react';
import { ThemeProvider } from 'react-jss';
import Header from '../Header/component';

const theme = {
  textAlign: 'center',
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
