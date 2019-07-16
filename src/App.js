import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <div>
     <Header/>
     {routes}
    </div>
  )
}

export default App;
