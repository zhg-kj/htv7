import '../styles/creator.css'
import '../styles/tiers.css'
import '../styles/preview.css'

import pic from '../assets/profile1.png';
import banner from '../assets/banner.webp';
import Button from '../components/btn';
import image from '../assets/neon.webp';
import profilePic from '../assets/profile1.png'

import DesoApi from '../deso/desoAPI';
import ViewContent from './viewContent';
import { useEffect, useState } from 'react';

import ImageGallery from '../components/imageGallery';

function Creator(props) {
  const [desoAPI, setDesoAPI] = useState(null);
  const [isCoinHolder, setIsCoinHolder] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const deso = new DesoApi();
    setDesoAPI(deso);
    
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }
     
    getIsHolder();
  }, [isReady]);

  const getIsHolder = async () => {
    const data = await desoAPI.getIsHodler(props.publicKey, props.creatorPublicKey);
    setIsCoinHolder(data["BalanceEntry"]["BalanceNanos"] > 0)
  }

  return (
  <div className='root'>  

    <div className='banner'>
      <img className="banner-pic" src={banner} alt="picture" />
    </div>

    <div className="pic1">
      <img className="main-profile" src={pic} alt="picture" />
    </div>

    <div className="name2">
      <h4 className="title">David Lin</h4>
      <h5 className="bio">Hi, my name is David Lin!</h5>
      <hr></hr>
    </div>

    <div>
      {isCoinHolder ? 
      <div>
        <div className='bio3'>
          <p className='bio-header'> ABOUT ME</p>
          <p className='bio-content'> "My name is David Lin. I love to draw. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div style={{position: "absolute", top: "1000px"}}>
          <ImageGallery/>
        </div>
      </div> : 
      <><div className='bio2'>
        <p className='bio-header'> ABOUT ME</p>
        <p className='bio-content'> My name is David Lin, a second year student at the unviersty of Toronto,
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto</p>
    </div>
    <div class='float-container'>
      <div class='float-child'>
        <p className="t1">TIER 1</p>
        <hr className='line'></hr>
        <p className="t1">25 COINS</p>
        <p className='line'></p>
        <p className='t1'>About this Tier</p>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>
      </div>

      <div class='float-child'>
        <p className="t2">TIER 2</p>
        <hr className='line'></hr>
        <p className="t2">50 COINS</p>
        <hr className='line'></hr>
        <p className='t2'>About this Tier</p>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>
      </div>
      
      <div class='float-child'>
        <p className="t3">TIER 3</p>
        <hr className='line'></hr>
        <p className="t1">100 COINS</p>
        <hr className='line'></hr>
        <p className='t3'>About this Tier</p>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>
      </div>
    </div>
    </>}
    </div>
  </div>
  );
}

export default Creator;