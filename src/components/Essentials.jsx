import '../styles/essentials.css'
import camera from '../assets/icons8-camera-50.png'
import calendar from '../assets/icons8-calendar-100.png'
import photo from '../assets/icons8-photos-100.png'
import React from 'react'


export  function Essentials() {
  return (
    <div className="essential">
      <div className="essentials-container">
        <h2>02 // The essentials</h2>
        <h3>All the things you need</h3>

        <div className="grid">
          <div className="grid1">
            <img src={camera} alt="camera" style={{ width: 57 }} />
            <h4>My mission</h4>
            <p>Click once to style, move and resize.</p>
            <p> Click twice to edit text.</p>
            <button className='essential-button'>Learn more</button>
          </div>

          <div className="grid2">
            <img src={photo} alt="photos" style={{ width: 57 }} />
            <h4>My portfolio</h4>
            <p>Click once to style, move and resize.</p>
            <p> Click twice to edit text.</p>
            <button className='essential-button'>Learn more</button>
          </div>

          <div className="grid3">
            <img src={calendar} alt="calendar" style={{ width: 57 }} />
            <h4>Get in touch</h4>
            <p>Click once to style, move and resize.</p>
            <p> Click twice to edit text.</p>
            <button className='essential-button'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}