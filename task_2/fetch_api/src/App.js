import React, { Component } from 'react';
import Object_btn from './components/Object';
import Email_btn from './components/Email';
import Body_btn from './components/Body';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <p> <Object_btn/></p>
        <p><Email_btn/></p>
        <p><Body_btn/></p>
      </div>
    );
  }
}

export default App;
