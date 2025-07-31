import React from 'react'
import '../styles/compass.css'
import compass from '../assets/icons8-compass-80.png'

export default function Compass() {
    return (
        <div className='compass'>
            <main>
    
                <img src={compass} alt="compass" style={{width:80}}/>

                <p className='mission'>01 // OUR MISSION</p>
                <h3><span>Stand out</span> and get noticed</h3>
                <p>Click once to style, move and resize. Click twice to edit text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt felis purus, quis euismod lorem aliquet egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rhoncus, dolor sit amet euismod ultrices, enim dolor hendrerit felis, eu luctus neque ante sed sapien.</p>

            </main>
        </div>
    )
}