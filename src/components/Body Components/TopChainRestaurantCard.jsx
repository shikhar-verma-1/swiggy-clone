import { TOP_CHAINS_ICON_API } from "../../../utils/constants";


const TopChainRestaurantCard = ({restaurantData}) =>{
    const{name,avgRating,cuisines,cloudinaryImageId} = restaurantData;
    const{slaString} = restaurantData?.sla;
   

    

    return (

        <div className="mx-4">

            <div className="w-[200px] h-[280px] sm:w-[280px] sm:h-[320px] flex flex-col gap-1   hover:scale-95 cursor-pointer">
                
                <div className="w-[100%] h-[75%]">
                    <img className="rounded-lg w-[100%] h-[100%]" src={TOP_CHAINS_ICON_API + cloudinaryImageId}></img>
                    <h1 className=" ml-1 sm:mt-2 font-semibold truncate">{name}</h1>
                    <div className="flex items-center gap-1 font-bold"><img className="ml-1 w-5 h-5" src="../../assets/star-rating.png"></img> {avgRating} - {slaString}</div>
                    <h1 className="ml-1 font-thin truncate">{cuisines.join(' , ')}</h1>
                </div>
                
            </div>
            
        </div>

    );
   
};

export default TopChainRestaurantCard;