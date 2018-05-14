import React, { Component } from 'react';


class DrinkMenu extends Component {
  render() {
    return (
        <div class="section group">
            <div class="col span_1_of_2">
                <h3 className=" info-text column title">COFFEE</h3>
                <h5><em>small $3 | large $4.50</em></h5>
                    <ul className="info-text column">
                        <li>AMERICANO</li>
                         <p><em>espresso, hot water</em></p>
                        <li>CAPPUCINO</li>
                        <p><em>espresso, foamed milk</em></p>
                        <li>LATTE</li>
                        <p><em>espresso, warmed milk</em></p>
                        <li>ESPRESSO SHOT</li>
                        <p><em>single or double shot</em></p>
                    </ul>
            </div>
            <div class="col span_1_of_2">
                <h3 className="info-text title column">TEA</h3>
                <h5><em>cup $3 | pot of tea $7</em></h5>
                    <ul className="info-text column">
                        <li>BLACK TEAS</li>
                        <p><em>earl grey, english breakfast, assam</em></p>
                        <li>GREEN TEAS</li>
                        <p><em>jasmine green, dragon well, imperial gunpowder</em></p>
                        <li>CHAI BLENDS</li>
                        <p><em>tusli, kashmiri, masala</em></p>
                        <li>HERBAL TEAS</li>
                        <p><em>peppermint, chamomile, berry bunch</em></p>
                    </ul>
            </div>
        </div>
    );
  }
}

export default DrinkMenu;




