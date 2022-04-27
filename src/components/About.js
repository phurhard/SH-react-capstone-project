import React from 'react'
import Footer from './Footer'
import Header from './Header'
import spag from './images/spag.webp'

const About = () => {
  return (
      <>
      <Header/>
    <div className='About-container'>
        <div className='About'>
            <h2 className='About-title'>
                Who we are!
            </h2>
            <div className='About-text-container'><div className='About-text'><p>MeidoChops is an innovative restuarant that seeks to use the emerging technology to provide services for our clientelle. <br/>We seek to bridge the gap between daily needs and the satisfaction gotten from having the taste buds stimulated by our sumptous meals.</p></div><div className='About-logo'><img src={spag} alt=""/></div></div>
            <h2 className='About-title'>Our manager</h2>
            <div className='About-text-container'>
                <div className='Manager-hero'>
                    <img src={spag} alt=''/>
                </div>
                <div className='About-text'>
                    <p>Meet the brains behind MeidoChops, in person of a innovative product designer, she is an alummi of kwara state university, she studied aeronautical engineering nd she is a first class graduate.</p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About