import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <div style={{minWidth:'100vw',width:'100%',display:'flex'}}>
     <Header/>
     {routes}
    </div>
  )
}

export default App;
