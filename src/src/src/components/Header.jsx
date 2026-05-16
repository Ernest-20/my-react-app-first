import React from 'react';
import logo from './assets/C:\Users\ernes\OneDrive\Desktop\Exercise\images\725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg';

function Header() {
  return (
    <header>
        <img src={logo} className="App-logo" alt="logo" />
      <h1>🍽️ My Restaurant</h1>
    </header>
  );
}

export default Header;