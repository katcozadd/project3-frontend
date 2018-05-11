import React, { Component } from 'react';

class FoodMenu extends Component {
  render() {
    return (
        <section id='foodmenu-wrapper'>
            <div id='salad-container' className='six columns'>
                <h3 className="info-text ">SALAD</h3>
                <ul className="info-text ">
                    <li>LENNY SALAD</li>
                    <li>BOWL O' GREENS</li>
                    <li>STRAWBERRY SPRING</li>
                    <li>ROASTED BEET</li>
                    <li>GREEN TOMATO</li>
                </ul>
            </div>
            <div id='sandwich-container' className='six columns'> 
                <h3 className="info-text ">SANDWICHES</h3>
                <ul className="info-text ">
                    <li>VEGGIE DELIGHT</li>
                    <li>PENNY'S GRILLED CHEESE</li>
                    <li>ROASTED TURKEY</li>
                    <li>BLT</li>
                    <li>ROAST BEEF</li>
                </ul>
            </div>
            <div id='sweets-container' className='six columns'> 
                <h3 className="info-text ">SWEETS</h3>
                <ul className="info-text ">
                    <li>ORANGE MUFFIN</li>
                    <li>CHOCOLATE CROISSANT</li>
                    <li>SALTED CHOCOLATE CHIP COOKIE</li>
                    <li>LEMON BREAD</li>
                </ul>
            </div>
            <div id='soup-container' className='six columns'> 
                <h3 className="info-text ">SOUP</h3>
                <ul className="info-text ">
                    <li>CAULIFLOWER</li>
                    <li>SPICY TOMATO</li>
                    <li>HOMEMADE CHICKEN NOODLE</li>
                    <li>SEASONAL ROASTED VEGETABLES</li>
                    <li>SOUP DU JOUR</li>
                </ul>
            </div>
            <div id='soup-container' className='six columns'> 
                <h3 className="info-text ">SNACKS</h3>
                <ul className="info-text ">
                    <li>SALT & VINEGER POPCORN</li>
                    <li>ROASTED BRUSSEL SPROUTS</li>
                    <li>KETTLE POTATO CHIPS</li>
                    <li>HUMMUS AND VEGGIE PLATTER</li>
                    <li>ROTATING SNACK OF THE WEEK</li>
                </ul>
            </div>
        </section>
    );
  }
}

export default FoodMenu;