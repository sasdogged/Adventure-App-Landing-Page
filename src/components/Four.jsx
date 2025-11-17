import '../styles/four.css'
import Like  from '../assets/icons8-like-30.png'
import Image1 from '../assets/brad-knight-huWlb1NP67w-unsplash.jpg'
import Image2 from '../assets/peter-orsel-JELRUsDAu-A-unsplash.jpg'
import Image3 from '../assets/pexels-luis-rodrigues-198790-794579.jpg'
import Image4 from '../assets/vansep-awan-xuRE8JcuzKk-unsplash.jpg'


export function Four() {
    return(
        <div className='four'>
            <button>
                Are You Truly Happy?
                <img src={Like} alt="" style={{width:22}}/>
            </button>
            <div className="layered-images">
                <div className="image1">
                    <img src={Image1} alt=""/>
                </div>
                <div className="image2">
                    <img src={Image2} alt=""/>
                </div>
                <div className="image3">
                    <img src={Image3} alt=""/>
                </div>
                <div className="image4">
                    <img src={Image4} alt=""/>
                </div>
            </div>
        </div>
    )
}