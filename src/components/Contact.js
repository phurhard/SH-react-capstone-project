import React from 'react'
const About = () => {
  return (
    <>
      <div className='Contact-container'>
        
          <div className='contact'>
            <div className='Contact-Info'>
              <h3>Address: Shop 84A, Asisat Osuole shopping complex, Agbo Oba Ilorin Kwara State</h3>
              <h3>Telephone: <a href='tel: 09029466655'>+234 (0) 9029466655</a></h3>
              <h3>E-mail Address: <a href='mailto:phurhardeen@gmail.com'>phurhardeen@gmail.com</a></h3>
            </div>
            <div className='Contact-Message'>
              <form className='Contact-form'>
                <h3>Have a need to message us?  Let's hear it!</h3>
              <label >Your E-mail: <br/>
                <input type="email" name='email' required/>
              </label>
                <p>Your Message</p>
                <textarea name=" " placeholder='your message' id="" cols="20" row="10"></textarea>
                <button className='btn-primary btn'>Send</button>
              </form>
            </div>
          </div>
          <div className='Contact-image'>
              <img src='#' alt=''/>
          </div>
      </div>
    </>
  )
  
}

export default About