import FingerprintJS from '@fingerprintjs/fingerprintjs'

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [fingerprint, setFingerprint] = useState('');
  useEffect(() => {
    // Initialize an agent at application startup.
    const fpPromise = FingerprintJS.load()

    ;(async () => {
      // Get the visitor identifier when you need it.
      const fp = await fpPromise
      const result = await fp.get()
      const ID = result.visitorId;
      localStorage.setItem('uuid', ID);
      setFingerprint(ID);
    })()
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          uuid: {fingerprint}
        </p>
      </header>
    </div>
  );
}

export default App;
