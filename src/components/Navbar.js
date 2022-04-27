import {Link} from 'react-router-dom'
const Navbar =()=> {
    return(
        <div className='Nav-Container'>
            <div className='BrandName'>
                <h1>
                    Meido Chops
                </h1>
            </div>
            <div className='nav'>
                <ul className='nav-title'>
                    <li className='nav-list'>
                        <Link to='/' >Home</Link></li>
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
    )
}
export default Navbar