import React from 'react';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}

export default App;
