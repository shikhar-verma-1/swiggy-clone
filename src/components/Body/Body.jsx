import { useEffect, useState } from "react";
import { CITY_RESTAURANTS_API } from "../../../utils/constants";
import WOYM from "../Body Components/01. WOYM/WOYM";
import TopRestaurantChains from "../Body Components/02. Top Chains/TopRestaurantChains";
import CityRestaurants from "../Body Components/03. City Restaurants/CityRestaurants";
import mockData from "../../../utils/mockData";




const Body = () => {

    
   
    const [WoymList,setWoymList]=useState(null);
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
        <div className="h-screen mx-auto sm:max-w-[80%] sm:border-red-500">
            
            <WOYM woymData={WoymList}/>

            <hr></hr>

            {TopRestaurantChainsList && <TopRestaurantChains topChainsData={TopRestaurantChainsList || mockData}/>}

            <hr></hr>

            <CityRestaurants cityRestaurantsData={CityRestaurantsList}/>

            <hr></hr>
            
        </div>
    )

    

}

export default Body;