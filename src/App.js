//The root component or the wrapper component that houses all
//the other component, or wrapper component that houses all of 
//the other components. 

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
