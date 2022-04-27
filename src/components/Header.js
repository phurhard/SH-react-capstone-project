import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Body from "./components/Body"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Promotions from "./components/Promotions"
const Header =()=> {
    return(
        <Router>
        <div className='Nav-Container'>
            <div className='BrandName'>
                <h1>
                    Meido Chops
                </h1>
            </div>
            <div className='nav'>
                <ul className='nav-title'>
                    <li className='nav-list'>
                        <Link to='/Body' >Home</Link></li>
                    <li className='nav-list'>
                        <Link to='/Service'>Services</Link>
                    </li>
                    <li className='nav-list'><Link to='/About'>About</Link></li>
                    <li className='nav-list'><Link to='/Contact'>Contact</Link>
                    </li>
                    <li className='nav-list'><Link to='/Promotions'>Promotions</Link></li>
                </ul>
            </div>
        </div>
        <Routes>
            <Route exact path='/Body' element={<Body/>}></Route>
            <Route exact path='/About' element={<About/>}></Route>
            <Route exact path='/Contact' element={<Contact/>}></Route>
            <Route exact path='/Promotions' element={<Promotions/>}></Route>
            <Route exact path='/Services' element={<Services/>}></Route>
        </Routes>

    </Router>
    )
}
export default Header