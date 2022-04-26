import facebook from './images/facebook.svg'
import LinkedIn from './images/linkedin.svg'
import github from './images/github.svg'
import twitter from './images/twitter.svg'
import Dribble from './images/dribbble.svg'
const Footer = () => {
    return ( 
        <div className = 'Footer' >
            <div className = 'Social-Contacts' >
                <a href = 'https://www.facebook.com/fuhad.yusuf6' target = '_blank' rel = 'noreferrer' > < img src = { facebook } alt = '' /> </a> 
                <a href = 'https://www.dribble.com/phurhard' target = '_blank' rel = 'noreferrer' > < img src = { Dribble } alt = '' /> </a> 
                <a href = 'https://www.linkedIn.com/Fuhad.Yusuf' target = '_blank' rel = 'noreferrer' > < img src = { LinkedIn } alt = '' /> </a>
                <a href = 'https://www.twitter.com/phurhard' target = '_blank' rel = 'noreferrer' > < img src = { twitter } alt = '' /> </a>
                <a href = 'https://www.github.com/phurhard' target = '_blank' rel = 'noreferrer' > < img src = { github } alt = '' /> </a>
            </div> 
        </div>
    )
}
export default Footer