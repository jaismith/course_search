import React, { PureComponent } from 'react';

import Prompt from './prompt';
import Results from './results';

import './stylesheets/app.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <Prompt />
        <Results />
      </div>
    );
  }
}

export default App;
