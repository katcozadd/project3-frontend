import React, { Component } from 'react';

class FoodMenu extends Component {
  render() {
    return (
        <section id="foodmenu">
            <div class="section group">
                <div class="col span_1_of_2">
                    <h3 className="info-text title">SWEETS</h3>
                    <h5><em>single $4</em></h5>
                    <ul className="info-text ">
                        <li>ORANGE MUFFIN</li>
                        <p><em>candied orange, thyme, moist muffin</em></p>
                        <li>CHOCOLATE CROISSANT</li>
                        <p><em>flaky chocolate filled goodness</em></p>
                        <li>SALTED CHOCOLATE CHIP COOKIE</li>
                        <p><em>crispy on the outside and chewy on the inside</em></p>
                        <li>LEMON BREAD</li>
                        <p><em>just like grandma used to make</em></p>
                    </ul>
                </div>
                <div class="col span_1_of_2">
                    <h3 className="info-text title">SNACKS</h3>
                    <h5><em>small $6 | share $10</em></h5>
                    <ul className="info-text ">
                        <li>SALT & VINEGER POPCORN</li>
                        <p><em>we promise it's amazing</em></p>
                        <li>ROASTED BRUSSEL SPROUTS</li>
                        <p><em>drizzled in olive oil, balsamic reduction, sea salt, pepper</em></p>
                        <li>KETTLE POTATO CHIPS</li>
                        <p><em>crispy, salty, perfect Idaho potato chips</em></p>
                        <li>HUMMUS AND VEGGIE PLATTER</li>
                        <p><em>seasonal veggies, housemade hummus, warm pita bread</em></p>
                    </ul>
                </div>
            </div>
            <div class="section group">
                <div class="col span_1_of_3">
                    <h3 className="info-text title">SANDWICHES</h3>
                    <h5><em>half $6 | whole $10</em></h5>
                    <ul className="info-text ">
                        <li>VEGGIE DELIGHT</li>
                        <p><em>sourdough, havarti, sprouts, onion, hot peppers, avocado, tomato</em></p>
                        <li>PENNY'S GRILLED CHEESE</li>
                        <p><em>sourdough, cheddar, mozzarella, gruyere, parmesan</em></p>
                        <li>ROASTED TURKEY</li>
                        <p><em>cranberry walnut bread, sharp white cheddar, gala apple, lettuce, turkey, honey dijon aioli</em></p>
                        <li>ROAST BEEF</li>
                        <p><em>ciabatta, roast beef, arugula, fresh basil, red onion </em></p>
                        <li>BLT</li>
                        <p><em>sourdough, bacon, lectuce, tomato, sprouts</em></p>
                    </ul>
                </div>
                <div class="col span_1_of_3">
                    <h3 className="info-text title">SALAD</h3>
                    <h5><em>half $4 | whole $9</em></h5>
                    <ul className="info-text ">
                        <li>LENNY SALAD</li>
                        <p><em>red bell pepper, cucumber, sunflower seeds, mixed greens, choice of dressing</em></p>
                        <li>BOWL O' GREENS</li>
                        <p><em>sauteed broccolini, arugula, lemon, parmesan, sea salt, pepper</em></p>
                        <li>STRAWBERRY SPRING</li>
                        <p><em>spinach, strawberries, toasted almonds, red onion, choice of dressing</em></p>
                        <li>ROASTED BEET</li>
                        <p><em>pickled red and gold beets, toasted pecans, goat cheese crumbles, balsamic drizzle</em></p>
                        <li>GREEN TOMATO</li>
                        <p><em>fresh green tomatos, mozzarella, olive oil, sea salt</em></p>
                    </ul>
                </div>
                <div class="col span_1_of_3">
                    <h3 className="info-text title">SOUP</h3>
                    <h5><em>cup $4 | bowl $7</em></h5>
                    <ul className="info-text ">
                        <li>CAULIFLOWER</li>
                        <p><em>cauliflower, onion, salt, pepper</em></p>
                        <li>SPICY TOMATO</li>
                        <p><em>tomato, jalapeno, cumin, garlic, onion</em></p>
                        <li>HOMEMADE CHICKEN NOODLE</li>
                        <p><em>rotisserie chicken, celery, carrots, garlic, lots of love</em></p>
                        <li>SEASONAL ROASTED VEGETABLES</li>
                        <p><em>constantly changing to fit the season</em></p>
                        <li>SOUP DU JOUR</li>
                        <p><em>ask us about our soup of the day!</em></p>
                    </ul>
                </div>
            </div>
        </section>
    );
  }
}

export default FoodMenu;



