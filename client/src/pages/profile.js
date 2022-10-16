import '../styles/creator.css'
import '../styles/tiers.css'
import '../styles/preview.css'
import '../styles/profile.css'

import pic from '../assets/profile1.png';
import banner from '../assets/neon.jpeg';
import Button from '../components/btn';
import Input from '../components/nameform';
import image from '../assets/neon.webp';



function handleClick(){
    console.log('Hello World');
}

function Profile() {
  return (
  <div className='root-p'>  

    <div className='banner-p'>
      <img className="banner-pic" src={banner} alt="picture" />
    </div>


    <img className="main-profile pic1-p" src={pic} alt="picture" />

    <div className="name2-p">

        <div className="greeting">
            <h4 className="title-p">HELLO, ALLEN </h4>
        </div>

        <div className='user'>
            <h5 className="title-p">@allenxxy</h5>
        </div>

    
      <hr style={{color:"black"}}/>

      <h5 className="bio">112 FOLLOWERS   90 FOLLOWING   0 POSTS</h5>
      <hr style={{color:"black", marginBottom:"0px"}}/>

      <div className="Buttons">

        
        <button className='post-button' >NEW POST</button>
        

        <button className='buy-button' >BUY</button>
        
        <button className='sell-button' onClick={handleClick}>SELL</button>
      </div>
      
      <hr className='line-p'></hr>
    </div>

    <div class='float-container-p'>

      <div className='wallet'>
        <h6 className="sub-p">YOUR WALLET</h6>
        <h7 className="sub-p-1"> DISPLAYING YOUR TOP THREE COINS</h7>
        <hr style={{color:"black"}}/>
        <button className='more-crypto-button' >MORE</button>
      </div>
        

      <div class='float-child'>
        <h7 className="t1">COIN A</h7>
        <hr className='line'></hr>
        <h7 className="t1">25 COINS</h7>
        <hr className='line'></hr>
        <h11 className='t1'>~ $28.80</h11>
        <hr className='line'></hr>
      </div>

      <div class='float-child'>
        <h8 className="t2">COIN B</h8>
        <hr className='line'></hr>
        <h8 className="t2">50 COINS</h8>
        <hr className='line'></hr>
        <h11 className='t2'>~ $57.60</h11>
        <hr className='line'></hr>
      </div>
      
      <div class='float-child'>
        <h9 className="t3">COIN C</h9>
        <hr className='line'></hr>
        <h9 className="t1">100 COINS</h9>
        <hr className='line'></hr>
        <h11 className='t3'>~ $105.20</h11>
        <hr className='line'></hr>
      </div>
    </div>


    <div class='float-container-p-2'>
  

        <div class='float-child'>
            <h7 className="t1">COIN A</h7>
            <hr className='line'></hr>
            <h7 className="t1">25 COINS</h7>
            <hr className='line'></hr>
            <h11 className='t1'>~ $28.80</h11>
            <hr className='line'></hr>
        </div>

        <div class='float-child'>
            <h8 className="t2">COIN B</h8>
            <hr className='line'></hr>
            <h8 className="t2">50 COINS</h8>
            <hr className='line'></hr>
            <h11 className='t2'>~ $57.60</h11>
            <hr className='line'></hr>
        </div>

        <div class='float-child'>
            <h9 className="t3">COIN C</h9>
            <hr className='line'></hr>
            <h9 className="t1">100 COINS</h9>
            <hr className='line'></hr>
            <h11 className='t3'>~ $105.20</h11>
            <hr className='line'></hr>
        </div>

        <div className='wallet'>
            <h6 className="sub-p">YOUR POSTS</h6>
            <h7 className="sub-p-1"> YOUR THREE MOST RECENT POSTS</h7>
            <hr style={{color:"black"}}/>
            <button className='more-posts-button' >MORE</button>

        </div>
</div>

  </div>
  );
}

export default Profile;