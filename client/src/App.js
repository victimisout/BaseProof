import React from 'react';
import UploadFile from './components/UploadFile';
import VerifyFile from './components/VerifyFile';

function App() {
  return (
    <div>
      <h1>BaseProof: File Authenticity Verification on Base</h1>
      <UploadFile />
      <VerifyFile />
    </div>
  );
}

export default App;
