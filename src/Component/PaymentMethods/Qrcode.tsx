import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const PaymentQRCode = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleBuyButtonClick = () => {
    // Generate QR code with fixed price (e.g., 500 rupees)
    setShowQRCode(true);
  };

    const vCardData = `Name: 
    Lastname: Chaman
    Email: aman@gmail.com
    Phone Number: 4903493493
    Address: Chandlodiya`;
    
    
//     `BEGIN:VCARD
//   VERSION:3.0
//   N:Chaman;Aman;;;
//   FN:Aman Chaman
//   ORG:Tomato
//   ADR:;;Chandlodiya;;;;
//   TEL;TYPE=work,voice:4903493493
//   EMAIL:aman@gmail.com
//   BDAY:2023-12-03
//   END:VCARD`;
  

  

  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      <h2>Product Details</h2>
      <p>Price: 500 rupees</p>
      <button onClick={handleBuyButtonClick}>Buy</button>
      {showQRCode && (
        <div>
          <h2>Scan QR Code to Pay</h2>
          <QRCode value={vCardData} />
          <p>Scan this QR code using your payment app to complete the payment.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentQRCode;
