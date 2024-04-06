import { useEffect } from "react";
import { RESTAURANT_DATA_API } from "../constants";


const useGetRestaurantData = () => {

    const[data,setdata] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {

        const resource = await fetch(RESTAURANT_DATA_API + restaurantID + "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await resource.json();
        setdata(json);
    };

    return data;

}

export default useGetRestaurantData;