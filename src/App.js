import React from 'react';
import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
import Body from './components/layout/Body';

const App = () => {
  return (
    <div className='App'>
      <DarkMode />
      <header className='App-header'>
        <Body />
      </header>
    </div>
  );
};

export default App;
