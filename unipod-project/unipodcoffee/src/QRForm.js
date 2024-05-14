import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRForm.css';

function QRForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    telNumber: '',
    college: '',
    feedback: ''
  });
  const [showQR, setShowQR] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQR(true);
  };

  return (
    <div className="form-container">
      <h2>Generate QR Code</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="input" />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            Telephone Number:
            <input type="tel" name="telNumber" value={formData.telNumber} onChange={handleChange} className="input" />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            College:
            <input type="text" name="college" value={formData.college} onChange={handleChange} className="input" />
          </label>
        </div>
        <div className="form-group">
          <label className="label">
            Feedback:
            <textarea name="feedback" value={formData.feedback} onChange={handleChange} className="textarea" />
          </label>
        </div>
        <button type="submit" className="submit-btn">Generate QR Code</button>
      </form>
      {showQR && (
        <div className="qr-code">
          <h3>QR Code:</h3>
          <QRCode value={JSON.stringify(formData)} />
        </div>
      )}
    </div>
  );
}

export default QRForm;
