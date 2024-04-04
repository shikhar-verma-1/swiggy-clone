import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TopChainRestaurantCard from './TopChainRestaurantCard';

const TopRestaurantChains = ({topChainsData}) =>{

    const[chainsList,setchainsList] = useState([]);
    const restaurantContainerRef=useRef(null);

    useEffect(()=>{
        if(topChainsData){
            setchainsList(topChainsData); 
            
        }
    },[topChainsData]);
  
   

    const scroll_left = () => {
        if (restaurantContainerRef.current) {
            restaurantContainerRef.current.scrollLeft -= 300;
            
        };
    };

    const scroll_right = () => {
        if (restaurantContainerRef.current) {
          restaurantContainerRef.current.scrollLeft += 300; 
        };
    };

    return(
        <div className="my-4">
            <div className="my-4 flex items-center justify-between">
                <h1 className="my-2 px-4 font-semibold text-xl sm:text-xl">Top restaurant chains in Nagpur</h1>
        
                <div className="mr-6 flex items-center gap-4">
                    <FontAwesomeIcon onClick={scroll_left}  icon={faArrowLeft}  className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                    <FontAwesomeIcon onClick={scroll_right} icon={faArrowRight} className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                </div>
            </div>

            <div className='flex overflow-hidden scroll-smooth' ref={restaurantContainerRef}>
                {chainsList.map((restaurant)=>{
                    return <TopChainRestaurantCard key={restaurant.info.id} restaurantData={restaurant.info}/>
                })}
            </div>

        </div>


    );

};

export default TopRestaurantChains;