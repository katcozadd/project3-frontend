import React, { Component } from 'react';
import aboutCover from '../images/counter.jpg';

class About extends Component {
  render() {
    return (
    	<section id="about-section">
	    	<div className='cover-image'>
		    	<img className="img-responsive" id='about-cover' src={aboutCover} alt="logo"/>
		    </div>
		    <div id='about-text'>
		    	<h1>Founded on the belief that...</h1>
		    	<p> Good coffee and good food should guide the direction of your day, drive your next adventure,
				 and inspire your very best. </p>
				<p> Nothing brings people together like good food does. Ā café was established 
				in the summer of 2018 by Ashley Syms, a Boise local. After 12+ years of living in Colorado, 
				Ashley decided it was time to pack up, head home and chase her dreams of opening a café. Ā Café emanates
				Ashley's love for the art of gathering. It is not everyday that people get the opportunity
				to stop and be amoungst one another, but it should be! Some of the best memories are made
				when gathered around a table.</p>
				<p> Great food and drinks aren’t about overwhelming your palate. They are about giving your senses a rebirth. 
				At Ā Café, that’s what we pursue from the very first hit of aroma as you step through our doors
				 to the last sip of coffee in your cup as you are walking out the door.</p>
				<p>Just as Ashley felt as she arrived back in Boise, you will feel at home at Ā Café. We promise. </p>
			</div>
		</section>
    );
  }
}

export default About;