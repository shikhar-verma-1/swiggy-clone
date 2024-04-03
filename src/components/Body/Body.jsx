import { useEffect, useState } from "react";
import { CITY_RESTAURANTS_API } from "../../../utils/constants";
import WOYM from "../Body Components/WOYM";
import TopRestaurantChains from "../Body Components/TopRestaurantChains";
import CityRestaurants from "../Body Components/CityRestaurants";




const Body = () => {

    
   
    const[WoymList,setWoymList]=useState(null);
    const [TopRestaurantChainsList,setTopRestaurantChainsList] = useState(null);
    const [CityRestaurantsList,setCityRestaurantsList] = useState(null);
    

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const resource = await fetch(CITY_RESTAURANTS_API);
        const json = await resource.json(); 
        
        setWoymList(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setTopRestaurantChainsList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCityRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

   
    
    

    return(
        <div className="h-screen mx-auto sm:max-w-[80%] sm:border-red-700">
            
            <WOYM woymData={WoymList}/>
            <hr></hr>
            <TopRestaurantChains topChainsData={TopRestaurantChainsList}/>
            <hr></hr>
            <CityRestaurants cityRestaurantsData={CityRestaurantsList}/>
            <hr></hr>
            
        </div>
    )

    

}

export default Body;