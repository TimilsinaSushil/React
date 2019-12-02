import React from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1'

function App() {
  return (
    <div className="App">
        React
        <Container1 nickname='Sushil' height={5.5} />
    </div>
  );
}

export default App;
