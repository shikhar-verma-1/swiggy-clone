import { useEffect, useState ,useRef } from "react";
import { useMediaQuery } from "react-responsive";
import FilterBar from "./FilterBar";
import CityRestaurantsCard from "./CityRestaurantsCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';



const CityRestaurants = ({cityRestaurantsData}) =>{
    
    const [cityRestaurantsList,setcityRestaurantsList] = useState([]);
    const [filteredcityRestaurantsList,setfilteredcityRestaurantsList] = useState([]);
    const filterContainerRef=useRef(null);
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

  
    
    return(
        <div className="my-4">
            {isMobile ? 
                <div>
                    <div className="my-4 flex items-center justify-between">
                        <h1 className="px-4 font-semibold text-xl">restaurants to explore</h1>
                        <div className="mr-6 flex items-center gap-4">
                            <FontAwesomeIcon onClick={scroll_left}  icon={faArrowLeft}  className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                            <FontAwesomeIcon onClick={scroll_right} icon={faArrowRight} className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                        </div>
                    </div>
                    <div >
                        <FilterBar refData={filterContainerRef}/>
                    </div>
                </div> 
                :
                 
                <div className="mx-4">
                    <h1 className="font-semibold text-lg sm:text-xl">Restaurants with online food delivery in Nagpur</h1>
                    <FilterBar/>
                </div>
            }
            
            

                

            
            
            <div className=" border border-black flex justify-center  flex-wrap">
                {filteredcityRestaurantsList.map((restaurant)=>{
                    return <CityRestaurantsCard key={restaurant.info.id} restaurantData={restaurant.info}/>
                })}
            </div>
           

        </div>
    )
};

export default CityRestaurants;