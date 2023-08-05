import React from "react";
import './css/Homepage.css'
import img1 from '../assets/howard-bouchevereau-Ql4Y26OsEoY-unsplash.jpg'
import img2 from '../assets/howard-bouchevereau-Db-tzBhd500-unsplash.jpg'
import img3 from '../assets/andre-tan-8yesL5ZPjIU-unsplash.jpg'
import img4 from '../assets/redd-f-3mWxKnqET3E-unsplash.jpg'
import img5 from '../assets/arian-darvishi-wh-RPfR_3_M-unsplash.jpg'
import img6 from '../assets/mohamed-trabelsi-atISPjt1Ryk-unsplash.jpg'
import img7 from '../assets/ella-don-hmBTH6hIyw8-unsplash.jpg'
import img8 from '../assets/onur-binay-P3PpD5k7jfI-unsplash.jpg'

const Homepage = (props) => {
    return (
        <div className="homepageContainer">
            <div className="homepageTop">
                <h1>Welcome to Community PC's</h1>
            </div>
            <div className="homepageMiddle">
                <p>Feel free to brows or even contribute your own build to the community.</p>
            </div>
            <div className="homepageBottom">
                <div className="imgCollage">
                    <div className="imgCollageLeft">
                        <div className="imgCollageLeftTop">
                            <img className="topLeftImg" src={img1} alt="" />
                        </div>
                        <div className="imgCollageLeftBottom">
                            <img className="bottomLeft" src={img2} alt="" />
                            <img className="bottomLeft2" src={img3} alt="" />
                        </div>
                    </div>
                    <div className="imgCollageMiddle">
                        <div className="imgCollageMiddleTop">
                            <img className="middleTop" src={img4} alt="" />
                        </div>
                        <div className="imgCollageMiddleBottom">
                            <img className="middleBottom" src={img5} alt="" />
                        </div>
                    </div>
                    <div className="imgCollageRight">
                        <div className="imgCollageRightTop">
                            <img className="rightTop" src={img6} alt="" />
                            <img className="rightTop2" src={img7} alt="" />
                        </div>
                        <div className="imgCollageRightBottom">
                            <img className="rightBottom" src={img8} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homepage;
