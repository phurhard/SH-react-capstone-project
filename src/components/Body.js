import React, { Component } from 'react'
import Hero from './images/Hero-food.jpg'
export default class componentName extends Component {
    render() {
        return (
            <div className='Body-container'>
                <div className='Body-text'>
                    <h1>
                        Where you get to satisfy your taste buds !
                    </h1>
                    <p>
                        Meido Chops is a restuarant that caters to all your daily needs in terms pf mouth watering dishes, our services ranges from locally prepared foods by expert chefs, to intercontinental cuisines, we also have small chops for your refreshemnet and not limitted to our assortment of drinks.
                    </p>
                    <p>What's your preference? You'll surely get it at <b className='Highlight'>Meido Chops</b></p>
                </div>
                <div className='Body-image'>
                    <img src={Hero} alt='Sample of our service'/>
                </div>
            </div>
        )
    }
}
