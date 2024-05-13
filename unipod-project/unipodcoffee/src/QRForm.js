import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRForm() {
  const [text, setText] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <div>
      <h2>Generate QR Code</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <button type="submit">Generate QR Code</button>
      </form>
      {showQR && (
        <div>
          <h3>QR Code:</h3>
          <QRCode value={text} />
        </div>
      )}
    </div>
  );
}

export default QRForm;
