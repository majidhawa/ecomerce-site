import landingimage from './image/landingimage.png'
import './index.css'

const LandingPage =()=>{
    return(
   <div className="landing-page">
    
    <div className="landing-right">
     <h4> Welcome to Shopify</h4>
     <h1>Bringing the world to your doorstep.Shop today enjoy tomorrow</h1>
     <p className='p'>Discover the finest products frm around the world, all in one place.whether its
      fashion,electronices,home essentials
     we've got you covered. SHOP SMART!
    </p><br></br>
    <button className='button1'>Shop Now  &#x2192;</button>
    </div>
    <div className='landing-left'> 
      <img src={landingimage} alt="landing"  className="landing-image"/>
    </div>
   </div>

    )
}
export default LandingPage