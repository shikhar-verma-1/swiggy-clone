import { useEffect, useState ,useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CityRestaurantsCard from "./CityRestaurantsCard";
import WOYMShimmer from "../../Shimmers/WOYMShimmer";






const CityRestaurants = ({cityRestaurantsData}) =>{
    
    const [cityRestaurantsList,setcityRestaurantsList] = useState([]);
    const [filteredcityRestaurantsList,setfilteredcityRestaurantsList] = useState([]);
      
    const filterContainerRef = useRef();

    const isMobile = useMediaQuery( {maxWidth:639} );

    useEffect(()=>{

        if(cityRestaurantsData){
            setcityRestaurantsList(cityRestaurantsData);
            setfilteredcityRestaurantsList(cityRestaurantsData);   
        }; 

    },[cityRestaurantsData]);




    const scroll_left = () => {
        if (filterContainerRef.current) {
            filterContainerRef.current.scrollLeft -= 200;
            
        };
    };

    const scroll_right = () => {
        if (filterContainerRef.current) {
          filterContainerRef.current.scrollLeft += 200; 
        };
    };

    
    
    const fast_delivery_filter = () => {
        
        const filteredList = cityRestaurantsList.filter((restaurant)=> restaurant?.info?.sla?.deliveryTime < 25);
        setfilteredcityRestaurantsList(filteredList);
        
    };   

    const new_filter = () => {
        
        const filteredList = cityRestaurantsList.filter((restaurant)=> restaurant?.info?.isNewlyOnboarded === true);
        setfilteredcityRestaurantsList(filteredList);  
    };

    const ratings_filter = () => {
        
        const filteredList = cityRestaurantsList.filter((restaurant)=> restaurant.info.avgRating > 4.0);
        setfilteredcityRestaurantsList(filteredList);    
    };

    const pureVeg_filter = () => {
        
        const filteredList = cityRestaurantsList.filter((restaurant)=> restaurant?.info?.veg === true);
        setfilteredcityRestaurantsList(filteredList);
       
    };

    const reset_filter = () => {
        
        setfilteredcityRestaurantsList(cityRestaurantsList);
    };


    return (cityRestaurantsList.length===0)?
    (<WOYMShimmer/>)
    :
    (
        <div className="my-6">
            {isMobile ? 
                <div>
                    <div className="my-4 flex items-center justify-between">
                        <h1 className="px-4 font-semibold text-xl">Restaurants to explore</h1>
                        <div className="mr-6 flex items-center gap-4">
                            <FontAwesomeIcon onClick={scroll_left}  icon={faArrowLeft}  className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                            <FontAwesomeIcon onClick={scroll_right} icon={faArrowRight} className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                        </div>
                    </div>  
                </div> 

                :
                 
                <div className="mx-4">
                    <h1 className="font-semibold text-lg sm:text-xl">Restaurants with online food delivery in Nagpur</h1>
                </div>
            }
            
            <div className="mx-4 my-6 sm:mx-0">
                <div className="flex gap-2 sm:gap-2 overflow-hidden scroll-smooth" ref={filterContainerRef}>

                    <button  onClick={fast_delivery_filter}   className="border border-gray-300 rounded-2xl font-semibold text-sm text-nowrap px-4 py-3">Fast Delivery</button>
                    <button  onClick={new_filter}             className="border border-gray-300 rounded-2xl font-semibold text-sm text-nowrap px-4 py-3">New on Swiggy</button>
                    <button  onClick={ratings_filter}         className="border border-gray-300 rounded-2xl font-semibold text-sm text-nowrap px-4 py-3">Ratings 4.0+</button>
                    <button  onClick={pureVeg_filter}         className="border border-gray-300 rounded-2xl font-semibold text-sm text-nowrap px-4 py-3">Pure Veg</button>
                    <button  onClick={reset_filter}           className="border border-gray-300 rounded-2xl font-semibold text-sm text-nowrap px-4 py-3">Reset filters</button> 

                </div>
            </div>

            
            
            <div className="flex flex-col gap-4 border border-black overflow-hidden  sm:flex-row sm:gap-0 sm:justify-center sm:flex-wrap">
                
                {filteredcityRestaurantsList.map((restaurant)=>{
                    
                    return isMobile?
                    (<Link to={'/restaurants-mobile/' + restaurant.info.id} key={restaurant.info.id}><CityRestaurantsCard restaurantData={restaurant.info}/></Link>):
                    (<Link to={'/restaurants-desktop/' + restaurant.info.id} key={restaurant.info.id}><CityRestaurantsCard restaurantData={restaurant.info}/></Link>)
                })};
      
            </div>
           
            

        </div>
    )
};

export default CityRestaurants;