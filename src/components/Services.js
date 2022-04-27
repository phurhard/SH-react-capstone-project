import Poundo from './images/pounded-yam-with-egusi.jpg'
import pizza from './images/pizza3D.webp'
import burger from './images/burger.jpg'
const Services = ()=>{
    return(
        <>
            <div className='Services-container'>
                <div className='services'>
                    <div className='card'>
                        <h2 className='cardtitle'>Pounded yam + Egusi soup</h2>
                        <div className='cardImage'><img src={Poundo} alt='Local dish'/></div>
                        <p className="cardbottom"><span className='Orderbtn btn-primary'>Order </span><span>#3,500</span></p>
                    </div>
                </div>
                
                <div className='services'>
                    <div className='card'>
                        <h2 className='cardtitle'>Pizza</h2>
                        <div className='cardImage'><img src={pizza} alt='Foreign delicacy'/></div>
                        <p className="cardbottom"><span className='Orderbtn btn-primary'>Order</span> <span>#3,000</span></p>
                    </div>
                </div>
                <div className='services'>
                    <div className='card'>
                        <h2 className='cardtitle'>Burger</h2>
                        <div className='cardImage'><img src={burger} alt='Snack'/></div>
                        <p className="cardbottom"><span className='Orderbtn btn-primary'>Order</span><span>#2,000</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services