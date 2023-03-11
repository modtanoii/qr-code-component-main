import React from 'react'
import Card from './Card'
import { QRCodeSVG } from 'qrcode.react'
import "./Qrcode.css"

const qrcode = (
  <QRCodeSVG
  id="qrCode"
  value={"https://www.frontendmentor.io/"}
  size={160}
  bgColor={"#2069df"}
  fgColor={"#FFFFFF"}
  level={"H"}
  />
);

const Qrcode = () => {
  return (
    <Card>
      <div className="qr-container">
        {qrcode}
      </div>
        <p className='title'>Improve your front-end
        skills by building projects</p>
        <p className='text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </Card>
  );
};

export default Qrcode;