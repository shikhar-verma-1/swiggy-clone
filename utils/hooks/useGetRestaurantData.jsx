import { useEffect, useState } from "react";
import { DEFAULT_LAT,DEFAULT_LNG } from "../constants";
import { CITY_COORDINATES_API , CITY_RESTAURANTS_API} from "../constants";

const useGetRestaurantData = (city) => {

    const [cityRestaurants,setcityRestaurants] = useState(null);

    useEffect(()=>{
        fetchCityRestaurantsData();
    },[]);

    let lat="";
    let lng="";
   
    const fetch_Location_Object =   
    {
        method: 'GET',
        headers: { 'X-Api-Key': 'b7QYgGFeZ5M8KFp+m1B+ag==dcMMg5LHqGIoRi36'},
        contentType: 'application/json'
    };

    const fetchCityRestaurantsData = async() => {
        try{
            try{
                const location_data = await fetch(CITY_COORDINATES_API + city, fetch_Location_Object);
                const location_json = await  location_data.json();
                                    
                lat = location_json.data[0].latitude;
                lng = location_json.data[0].longitude;
            }
            catch{}    
            try{                    
                const city_restaurants_data =  await fetch(CITY_RESTAURANTS_API.replace(DEFAULT_LAT,lat).replace(DEFAULT_LNG,lng));
                const city_restaurants_json =  await city_restaurants_data.json();
                setcityRestaurants(city_restaurants_json);
                return cityRestaurants;        
            }
            catch{}
        }    
        catch{console.log("error")}

    }     
    
    
    
}
     








