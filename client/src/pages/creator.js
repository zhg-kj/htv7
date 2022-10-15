import '../styles/creator.css'
import '../styles/tiers.css'
import '../styles/preview.css'

import pic from '../assets/profile1.png';
import banner from '../assets/banner.webp';
import Button from '../components/btn';
import image from '../assets/neon.webp';


function Creator() {
  
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
      <h5 className="bio">Hi, my name is David Lin  </h5>
      <hr></hr>
      <h6 className="sub">Choose a Membership Level!</h6>
    </div>


    <div class='float-container'>

      <div class='float-child'>
        <h7 className="t1">TIER 1</h7>
        <hr className='line'></hr>
        <h7 className="t1">25 COINS</h7>
        <hr className='line'></hr>
        <h11 className='t1'>About this Tier</h11>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>

      </div>

      <div class='float-child'>
        <h8 className="t2">TIER 2</h8>
        <hr className='line'></hr>
        <h8 className="t2">50 COINS</h8>
        <hr className='line'></hr>
        <h11 className='t2'>About this Tier</h11>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>
        
      </div>
      

      <div class='float-child'>
        <h9 className="t3">TIER 3</h9>
        <hr className='line'></hr>
        <h9 className="t1">100 COINS</h9>
        <hr className='line'></hr>
        <h11 className='t3'>About this Tier</h11>
        <hr className='line'></hr>
        <div className=' button'>
          <Button />
        </div>
      </div>
    </div>

    <div className='bio2'>
        <h10 className='bio-header'> ABOUT ME</h10>
        <h11 className='bio-content'> My name is David Lin, a second year student at the unviersty of Toronto,
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto
        My name is David Lin, a second year student at the unviersty of Toronto</h11>
    </div>

<div class='float-container2'>

<div class='float-child'>
  <h7 className="t1">PREVIEW</h7>
  <hr className='line'></hr>
  <div className='preview'>
      <img className="preview-img" src={image} alt="picture" />
  </div>


</div>

<div class='float-child'>
  <h8 className="t2">PREVIEW</h8>
  <hr className='line'></hr>
  <div className='preview'>
      <img className="preview-img" src={image} alt="picture" />
  </div>

  
</div>


<div class='float-child'>
  <h9 className="t3">PREVIEW</h9>
  <hr className='line'></hr>
  <div className='preview'>
      <img className="preview-img" src={image} alt="picture" />
  </div>
  
  
</div>
</div>
 

  

    

  </div>
  );
}

export default Creator;