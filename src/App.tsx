import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Movies from './components/Movies';

function App() {
  const [theme, setTheme] = useState(light);

  const toogleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Main />
        <div className="content">
          <Navigation toogleTheme={toogleTheme} />

          <Movies />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
