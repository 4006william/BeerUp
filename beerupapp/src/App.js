import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Beers from './components/Beers'


function App() {
  return (
    <div className="App">
      <Header subtitle="A Great List Of Some Of Your Favorite Beers!"/>
      <Beers />
    </div>
  );
}

export default App;
