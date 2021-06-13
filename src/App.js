import React from 'react';
import logo from './logo.svg';
import { LoginForm } from './LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='loginContainer'>
          <img className='logo' src={logo} alt='logo' />
          <LoginForm />
          <img className='sponsor' src={`${process.env.PUBLIC_URL}/logo192.png`} alt='sponsor'/>
        </div>
      </div>
    </div>
  );
}

export default App;
