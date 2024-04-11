import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown, faCartShopping, faCircleUser,  faHandsHelping,  faMagnifyingGlass,  faPercentage } from '@fortawesome/free-solid-svg-icons';


const HeaderDesktop = () =>{


    

    return (
        <div className="flex items-center shadow-lg  px-2 py-6 md:px-20 md:py-4 ">
            <img className="sm:w-12 md:w-16" src="../assets/swiggy-logo.png"></img>
            <div className='flex items-center gap-2 text-sm  hover:text-orange-500 cursor-pointer'> 
                <span className='underline'>Other</span>Nagpur, Maharashtra <FontAwesomeIcon className='text-lg' icon={faCaretDown}/>
            </div>
            <nav className='ml-auto'>
                <div className='flex gap-2 items-center text-sm  md:text-lg md:gap-6'>
                    <div className='flex items-center gap-1 hover:text-orange-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        <h1>Search</h1>
                    </div>
                    <div className='flex items-center gap-1  hover:text-orange-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faPercentage}/>
                        <h1>Offers</h1>
                    </div>
                    <div className='flex items-center gap-1  hover:text-orange-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faHandsHelping}/>
                        <h1>Help</h1>
                    </div>
                    <div className='flex items-center gap-1  hover:text-orange-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faCircleUser}/>
                        <h1>Sign In</h1>
                    </div>
                    <div className='flex items-center gap-1   hover:text-orange-500 cursor-pointer'>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <h1></h1>
                        <h1>Cart(0)</h1>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderDesktop;