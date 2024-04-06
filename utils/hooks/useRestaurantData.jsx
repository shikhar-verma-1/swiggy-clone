
import { useState,useEffect } from "react";
import { RESTAURANT_DATA_API } from "../constants";


const useRestaurantData = (restaurantID) => {

    const[resdata,setresdata] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {

        const data = await fetch(RESTAURANT_DATA_API + restaurantID + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER" );
        const json = await data.json();
        setresdata(json.data);
    };

    return resdata;

}

export default useRestaurantData;