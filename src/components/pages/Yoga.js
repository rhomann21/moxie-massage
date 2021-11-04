import React from 'react';
import { useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';



{/* <script async defer crossorigin="anonymous" 
src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0" nonce="f12vbQmt">
</script> */}



// ((d, s, id) => {
// 	var js, fjs = d.getElementsByTagName(s)[0];
// 	if (d.getElementById(id)) {return;}
// 	js = d.createElement(s); js.id = id;
// 	js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
// 	fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// let window.fbAsyncInit = () => {
// 	//SDK loaded, initialize it
// 	FB.init({
// 		appId      : 'your-app-id',
// 		xfbml      : true,
// 		version    : 'v2.2'
// 	});



function Yoga() {
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);


    return(    
    <>

  <div id="fb-root"></div>
    
    <div><h1 className='yoga'>Yoga</h1></div>
   
   <div className='yogaWrapper'>
      <div className='yogaTitleText'>
     <p> Now introducing Moxie Yoga! Beginner's classes are now available online or in studio at our Spa. No judgement, no pressure - just a good stretch and a great time.</p>
     <br />
     <p>Our classes are a little sporatic and a lot of fun, so check out our Facebook page for the latest updates on schedules.</p>
      <br />
 </div>
      <div className='yogaFacebookBtnContainer'>
        <Button
            classname='btns' 
            buttonStyle='btn--outline--blk' 
            buttonSize='btn--lrg'
            onClick={{pathname: "https://facebook.com/MoxieBacktini" }}  
            target='_blank'
            aria-label='Facebook'
        >
          Check out the latest info here
          <br />
          <i class='fab fa-facebook-f' />
        </Button>
       {/* <div class="fb-page" 
        data-href="https://www.facebook.com/MoxieBacktini/" 
        data-tabs="timeline" 
        data-width="" 
        data-height="" 
        data-small-header="true" 
        data-adapt-container-width="true" 
        data-hide-cover="false" 
        data-show-facepile="false">
          <blockquote cite="https://www.facebook.com/MoxieBacktini/" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/MoxieBacktini/">Moxie Massage</a></blockquote>
          </div> */}
      </div>

 </div>
 </>
    )}
    
export default Yoga;

