import React from 'react';
import './center.css';   
import leftImage from './center1.png';
import rightImage from './center2.png';

function Center() {
  return (
    <div className="center-container">
      <div className="left-image-container">
        <img class="center-image1" src={leftImage} alt="Filters" />
      </div>

      <div className="right-image-container">
        <img src={rightImage} alt="No results" />
      </div>
    </div>
  );
}

export default Center;
