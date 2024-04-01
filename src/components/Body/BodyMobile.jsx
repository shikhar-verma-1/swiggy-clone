import { CITY_RESTAURANTS_API } from "../../../utils/constants";
//import WOYM from "../WOYM";
import { useEffect } from "react";
//import { homePageData } from "../SetLocationPage/SetLocationMobile";
const BodyMobile = () => {

    useEffect(()=>{fetchData();},[])


    const fetchData = async() =>{
        const homePageData = await fetch(CITY_RESTAURANTS_API);
        const homePageJson = await homePageData.json();
        console.log(homePageJson);
         
    }


    return (
        <div>
            <div className="h-screen w-[90%] mx-6 border border-black">
                
                
            </div>        
        </div>
    )
}

export default BodyMobile;