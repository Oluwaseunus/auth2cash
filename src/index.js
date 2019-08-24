import React from 'react';
import { render } from 'react-dom';

function App() {
  return (
    <div>
      <p>This is the auth2cash app</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
