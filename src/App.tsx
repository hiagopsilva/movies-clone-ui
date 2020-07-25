import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyles from './styles/global';
import Main from './components/Main';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyles />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
