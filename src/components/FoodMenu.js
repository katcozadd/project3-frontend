import React, { Component } from 'react';

class FoodMenu extends Component {
  render() {
    return (
        <section id='foodmenu-wrapper'>
            <div id='salad-container' className='column'>
                <h3 className="info-text column">COFFEE</h3>
                <ul className="info-text column">
                    <li>AMERICANO</li>
                    <li>CAPPUCINO</li>
                    <li>LATTE</li>
                    <li>MACCHIATO</li>
                    <li>MOCHA</li>
                    <li>ESPRESSO SHOT</li>
                </ul>
            </div>
            <div id='sandwich-container' className='column'> 
                <h3 className="info-text five columns">TEA</h3>
                <ul className="info-text five columns">
                    <li>ENGLISH BREAKFAST</li>
                    <li>EARL GREY</li>
                    <li>JASMINE GREEN</li>
                    <li>CHAI</li>
                    <li>WHITE PEONY</li>
                    <li>CHAMOMILE</li>
                </ul>
            </div>
            <div id='sweets-container' className='column'> 
                <h3 className="info-text column">TEA</h3>
                <ul className="info-text column">
                    <li>ENGLISH BREAKFAST</li>
                    <li>EARL GREY</li>
                    <li>JASMINE GREEN</li>
                    <li>CHAI</li>
                    <li>WHITE PEONY</li>
                    <li>CHAMOMILE</li>
                </ul>
            </div>
            <div id='soup-container' className='column'> 
                <h3 className="info-text column">TEA</h3>
                <ul className="info-text column">
                    <li>ENGLISH BREAKFAST</li>
                    <li>EARL GREY</li>
                    <li>JASMINE GREEN</li>
                    <li>CHAI</li>
                    <li>WHITE PEONY</li>
                    <li>CHAMOMILE</li>
                </ul>
            </div>
        </section>
    );
  }
}

export default FoodMenu;