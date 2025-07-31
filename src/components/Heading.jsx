import '../styles/heading.css'
import logo from '../assets/4373274_basecamp_logo_logos_icon.png'
import React, {useState} from 'react'

export default function Heading() {

    const [isVisible, setIsVisible] = useState(false)
    const handleNavToggle = () =>{
        setIsVisible(!isVisible)
    }

    return(
        <div>
            <header>
                
                <button className='mobile-nav-toggle'
                 aria-controls='mobile-nav' 
                 aria-expanded={isVisible}
                 onClick={handleNavToggle}
                 >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>

                <div className="logo">
                    <img src={logo} alt="" style={{width:70}} />
                </div>

                <nav>
                    <ul id='primary-navigation' className='primary-navigation' data-visible={isVisible}>
                        <li><a href="#"> Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contract</a></li>
                    </ul>
                </nav>

            </header>
        </div>
    )
}