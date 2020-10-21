import React from 'react';
import './scss/_main.scss';
import Header from './components/Header';
import routes from './routing/routes';

function App() {
  return (
    <div className="main">
      <Header />
      {routes}
    </div>
  );
}

export default App;