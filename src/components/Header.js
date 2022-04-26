
const Header =()=> {
    return(
        <div className='Nav-Container'>
            <div className='BrandName'>
                <h1>
                    Meido Chops
                </h1>
            </div>
            <div className='nav'>
                <ul className='nav-title'>
                    <li className='nav-list'>Home</li>
                    <li className='nav-list'>
                        Services <b className="Caret">'''</b>
                        <ul className="dropdown">
                            <li>Breakfast</li>
                            <li>Brunch</li>
                            <li>Lunch</li>
                            <li>Dinner/Supper</li>
                            <li>Refreshements/Drinks/Dessert</li>
                        </ul>
                    </li>
                    <li className='nav-list'>About</li>
                    <li className='nav-list'>Contact</li>
                    <li className='nav-list'>Promotions</li>
                </ul>
            </div>
        </div>
    )
}
export default Header