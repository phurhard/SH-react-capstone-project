import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Promotions from "./components/Promotions"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"

const App = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/About' element={<About/>}></Route>
                <Route exact path='/Contact' element={<Contact/>}></Route>
                <Route exact path='/Promotions' element={<Promotions/>}></Route>
                <Route exact path='/Services' element={<Services/>}></Route>
            </Routes>
            <Footer />

        </Router>
        
        
        </>
    )
}
export default App
