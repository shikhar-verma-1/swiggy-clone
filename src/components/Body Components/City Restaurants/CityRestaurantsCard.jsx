
import { CITY_RESTAURANTS_IMAGES_URL } from "../../../../utils/constants";
import { useMediaQuery } from "react-responsive";

const CityRestaurantsCard = ({restaurantData}) =>{

    const{name,avgRating,cuisines,cloudinaryImageId,totalRatingsString,costForTwo,areaName} = restaurantData;
    const{slaString} = restaurantData?.sla;
    const isMobile = useMediaQuery( {maxWidth:639} );

    

    return ( isMobile?
        (
            <div className="mx-2 my-1">
                <div className="w-[400px] h-[150px]  flex gap-3 hover:scale-[97%] cursor-pointer">
                    
                    <img className="rounded-xl w-[28%]" src={CITY_RESTAURANTS_IMAGES_URL + cloudinaryImageId}></img>
                    <div className="px-2 flex flex-col gap-1 w-[95%]">
                        <h3 className="text-xs">Badge</h3>
                        <h1 className="font-semibold text-lg">{name}</h1>
                        <div className="flex items-center gap-1 font-semibold text-sm"><img className="w-4 h-4" src="../../assets/star-rating.png"></img> {avgRating}({totalRatingsString}) - {slaString}</div>
                        <h1 className="ml-1 font-thin truncate">{cuisines.join(' , ')}</h1>
                        <h1 className="font-thin">{areaName}</h1>
                        <h1 className="font-semibold">{costForTwo}</h1>
                    </div>
                
                

                </div>
            </div>

            
        )

        :

        (

            <div className="mx-4">
                
                <div className="w-[300px] h-[280px] mx-auto my-6 hover:scale-95 cursor-pointer">
                
                    <div className="w-[100%] h-[75%]">
                        <img className="rounded-lg w-[100%] h-[100%]" src={CITY_RESTAURANTS_IMAGES_URL + cloudinaryImageId}></img>
                        <h1 className=" ml-1 mt-2 font-semibold text-xl truncate">{name}</h1>
                        <div className="flex items-center gap-1 font-bold"><img className="ml-1 w-5 h-5" src="../../assets/star-rating.png"></img> {avgRating} - {slaString}</div>
                        <h1 className="ml-1 font-thin truncate">{cuisines.join(' , ')}</h1>
                    </div>
                
                </div>
            
            </div>

            
        
        )

        
    )    
   
};



export default CityRestaurantsCard;