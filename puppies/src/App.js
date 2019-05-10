import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Puppies from './components/Puppies';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Puppies/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
