import React, { Component } from 'react';
import homepageCover from '../images/cafe.jpg';

class Welcome extends Component {
  render() {
    return (
    	<section id="welcome-section">
	    	<div id='cover-image'>
		    	<img className="img-responsive" id='homepage-cover' src={homepageCover} alt="logo"/>
		    </div>
		    <div id='welcome-text'>
		    	<h1>Welcome to ā café</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. Lorem ipsum dolor sit amet, consectetur 
				adipisicing elit. Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! </p>
			</div>
		</section>
    );
  }
}

export default Welcome;