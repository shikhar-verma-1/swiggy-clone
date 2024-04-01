import { useEffect, useState } from "react";
import { CITY_RESTAURANTS_API } from "../../../utils/constants";
import WOYM from "../Body Components/WOYM";




const Body = () => {

    
   
    const[woymList,setwoymList]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const resource = await fetch(CITY_RESTAURANTS_API);
        const json = await resource.json(); 
        setwoymList(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    };
    

   
    
    

    return(
        <div className="max-w-[639px]  h-screen border border-black  mx-auto sm:max-w-[90%] sm:border-red-700">
            
            <div className="h-[20%] border border-black">
                
                <WOYM elementsData={woymList}/>
            </div>
            
            

        </div>
    )

    

}

export default Body;