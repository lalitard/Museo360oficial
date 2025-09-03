import React from 'react';
import './Museum360.css';
import logo360 from '../../assets/360.png';

const Museum360 = () => {
  return (
    <div className="museum360-container">
      <div className="museum360-header">
        <h1 className="museum360-title">Museo Real Alto</h1>
        <img src={logo360} alt="Logo 360" className="logo-360" />
      </div>
      <div className="museum360-frame">
        <iframe 
          width="100%" 
          height="640" 
          style={{ width: '100%', height: '640px', border: 'none', maxWidth: '100%' }} 
          allow="xr-spatial-tracking; vr; gyroscope; accelerometer; fullscreen; autoplay; xr" 
          scrolling="no" 
          allowFullScreen={true}  
          frameBorder="0" 
          src="https://webobook.com/public/68b77938f06a3057f473d732,en?ap=true&si=true&sm=false&sp=true&sfr=true&sl=true&sop=false&" 
          allowvr="yes" 
        ></iframe>
      </div>
    </div>
  );
};

export default Museum360;