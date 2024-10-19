import React, { useState } from 'react';
import { hashFile, verifyDocumentHash } from '../utils/contractInteractions';

const VerifyFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const fileHash = await hashFile(selectedFile);
    const timestamp = await verifyDocumentHash(fileHash);

    if (timestamp) {
      alert(`Document was stored on: ${new Date(timestamp * 1000).toLocaleString()}`);
    } else {
      alert('Document does not exist on the blockchain.');
    }
  };

  return (
    <div>
      <h2>Verify Document</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Verify</button>
    </div>
  );
};

export default VerifyFile;
