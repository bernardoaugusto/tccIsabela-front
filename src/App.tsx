import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvidder from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvidder>
        <Routes />
      </AppProvidder>
      <GlobalStyle />
    </Router>
  );
};

export default App;
