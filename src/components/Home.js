import React, { Component } from 'react'
import egunsi from './images/pounded-yam-with-egusi.jpg'
const Home = () =>  {
    return (
            <>
                <div className='Body-container'>
                    <div className='Body-text'>
                        <h1>
                            Where you get to satisfy your taste buds!
                        </h1>
                        <p>
                            Meido Chops is a restuarant that caters to all your daily needs in terms of mouth watering dishes, our services ranges from locally prepared foods by expert chefs, to intercontinental cuisines, we also have small chops for your refreshemnet and not limitted to our assortment of drinks.
                        </p>
                        <p>What's your preference? You'll surely get it at <b className='Highlight'>Meido Chops</b></p>
                    </div>
                    <div className='Body-image'>
                        <img src={egunsi} alt='Sample of our service'/>
                    </div>
                </div>
            </>
        )
    
}

export default Home
