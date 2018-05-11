import React, { Component } from 'react';
import muffin from '../images/muffin.jpg';
import soup from '../images/soup.jpg';
import pastries from '../images/pastries.jpg';
import tomatoes from '../images/tomatoes.jpg';

class FoodImages extends Component {
  render() {
    return (
	    <section id='food-wrapper' className="pic">
	        <div id='food1-img' > 
    		    <img className="img-responsive" id='tomatoes' src={tomatoes} alt="tomatoes"/>
                <span className="imgtext">
                    <h3>GREEN TOMATO SALAD</h3>
                </span>
    		</div> 
    		<div id='food2-img' className="pic"> 
    		    <img className="img-responsive" id='muffin' src={muffin} alt="muffin"/>
                <span className="imgtext">
                    <h3>ORANGE MUFFINS</h3>
                </span>
            </div>
    		<div id='food3-img' className="pic"> 
    		    <img className="img-responsive" id='soup' src={soup} alt="soup"/>
                <span className="imgtext">
                    <h3>CAULIFLOWER SOUP</h3>
                </span>
    		</div>
            <div id='food4-img' className="pic"> 
                <img className="img-responsive" id='pastries' src={pastries} alt="pastries"/>
                <span className="imgtext">
                    <h3>CHOCOLATE CROISSANT</h3>
                </span>
            </div>
    	</section>
    );
  }
}

export default FoodImages;