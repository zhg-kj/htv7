import React from 'react';

import "./Footer.css";
import socialMedia from "../../assets/socialMedia.png";


export class Footer extends React.Component{
    render() {
        return(
            <div className="footerContainer">
                <div>

                </div>
                <div className="footerContent">
                    <div className="firstCol">
                        <div className='settingBtn'>
                            <button>Language: English<br/>(United States)</button>
                            <button>Canada</button>
                            <button>Currency: USD</button>
                        </div>
                        <img src={socialMedia} className="socialMedia"/>
                        <div className='privacy'>
                            <span>©PrivateBIT </span>
                            <a href='' className='onHover'>sitemap</a>
                        </div>
                        <p className='address'>40 St George St,<br/>Toronto, ON M5S 2E4, Canada<br/>phone: xxx-xxx-xxx</p>
                    </div>
                    <div className="secondCol">
                        <p>Product</p>
                        <a href=''>Lite</a>
                        <a href=''>Premium</a>
                        <a href=''>Pro</a>
                        <a href=''>Pricing</a>
                    </div>
                    <div className="secondCol">
                        <p>For Creators</p>
                        <a href=''>Podcasters</a>
                        <a href=''>Video Creators</a>
                        <a href=''>Musicians</a>
                        <a href=''>Gaming Creators</a>
                        <a href=''>Nonprofits</a>
                        <a href=''>Local Businesses</a>
                        <a href=''>Communities</a>
                        <a href=''>Writers and Journalists</a>
                    </div>
                    <div className="secondCol" style={{marginRight:"100px"}}>
                        <p>Company</p>
                        <a href=''>About</a>
                        <a href=''>Career</a>
                        <a href=''>Privacy</a>
                        <a href=''>Accessibility</a>
                    </div>
                </div>
            </div>
        );
    }
}