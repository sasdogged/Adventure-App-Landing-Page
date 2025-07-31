import '../styles/footer.css'
import facebook from '../assets/icons8-facebook-50.png'
import youtube from '../assets/icons8-youtube-logo-50.png'
import instagram from '../assets/icons8-instagram-logo-50.png'
import twitter from '../assets/icons8-twitter-bird-48.png'
import K from '../assets/icons8-k-64.png'

export function Footer() {
    return(
        <div className='footer'>
            
            <section className='contact-about'>

                <div className="logos">
                    <span>
                        <img src={facebook} alt="facebook icon" style={{width:30}}/>
                    </span>

                    <span>
                        <img src={youtube} alt="youtube icon" style={{width:30}}/>
                    </span>

                    <span>
                        <img src={instagram} alt="youtube icon" style={{width:30}}/>
                    </span>

                     <span>
                        <img src={twitter} alt="twitter icon" style={{width:30}}/>
                    </span>
                </div>

                <div className="k">
                    <span>
                        <img src={K} alt="" />
                    </span>

                    <span>
                        <p>koda johnson</p>
                    </span>
                </div>

                <div className="nav">
                        <ul>
                            <li> <a href="#">Home</a></li>
                            <li> <a href="#">About</a></li>
                            <li> <a href="#">Contact</a></li>
                        </ul>
                </div>

            </section>
        </div>
    )
}