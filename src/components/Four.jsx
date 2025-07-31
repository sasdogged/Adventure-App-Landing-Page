import '../styles/four.css'

export function Four() {
    return(
        <div className='four'>
            <button>
                Are You Truly Happy?
                <img src="../src/assets/icons8-like-30.png" alt="" style={{width:22}}/>
            </button>
            <div className="layered-images">
                <span className="image1">
                    <img src="../src/assets/brad-knight-huWlb1NP67w-unsplash.jpg" alt=""/>
                </span>
                <span className="image2">
                    <img src="../src/assets/peter-orsel-JELRUsDAu-A-unsplash.jpg" alt=""/>
                </span>
                <span className="image3">
                    <img src="../src/assets/pexels-luis-rodrigues-198790-794579.jpg" alt=""/>
                </span>
                <span className="image4">
                    <img src="../src/assets/vansep-awan-xuRE8JcuzKk-unsplash.jpg" alt=""/>
                </span>
            </div>
        </div>
    )
}