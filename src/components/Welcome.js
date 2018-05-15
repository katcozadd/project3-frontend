import React, { Component } from 'react';
import homepageCover from '../images/home.jpg';

class Welcome extends Component {
  render() {
    return (
    	<section id="welcome-section">
	    	<div className='cover-image'>
		    	<img className="img-responsive" id='homepage-cover' src={homepageCover} alt="logo"/>
		    </div>
		    <div id='welcome-text'>
		    	<h1>Welcome to Ā Café</h1>
				<p> Hey there! Welcome to Ā Café. Whether you are here on purpose or by coincidence, 
				equally glad you are here. Located in the heart of Boise's downtown district. 
				We are here to not only serve everything from scratch, but to serve with a smile.
				Good food and good drinks deserve to be enjoyed in an amazing environment and that
				is exactly what you will find here at Ā Café.  </p>
				<p> Take a moment to explore our website and learn a litte more about 
				us! </p>
			</div>
		</section>
    );
  }
}

export default Welcome;