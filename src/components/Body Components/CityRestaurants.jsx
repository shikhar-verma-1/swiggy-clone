import { useEffect, useState } from "react";


const CityRestaurants = ({cityRestaurantsData}) =>{
    
    const[cityRestaurantsList,setcityRestaurantsList] = useState([]);
    const [filteredcityRestaurantsList,setfilteredcityRestaurantsList] = useState([]);


    useEffect(()=>{
        if(cityRestaurantsData){
            setcityRestaurantsList(cityRestaurantsData);
            setfilteredcityRestaurantsList(cityRestaurantsData);   
        }; 

    },[cityRestaurantsData]);
    
    return <h1>this bitch is flying</h1>
};

export default CityRestaurants;