import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'

function App() {
  return (
    <div style={{alignItems:'center',flexDirection:'column',maxWidth:'100vw',width:'100vw',display:'flex'}}>
     <Header/>
     {routes}
    </div>
  )
}

export default App;
