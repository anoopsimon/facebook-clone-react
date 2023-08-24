// FileUploader.js
import React from 'react';

function FileUploader({ onFileUpload, onSaveChanges }) {
  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        const jsonData = JSON.parse(e.target.result);
        onFileUpload(jsonData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={onSaveChanges}>Save Changes</button>
    </div>
  );
}

export default FileUploader;
