import React, { useState } from 'react';
import { hashFile, uploadDocumentHash } from '../utils/contractInteractions';

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const fileHash = await hashFile(selectedFile);
    await uploadDocumentHash(fileHash);
    alert('File hash has been stored on the blockchain.');
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UploadFile;
