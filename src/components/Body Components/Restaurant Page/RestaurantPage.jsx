
import { useParams } from "react-router-dom";
import useRestaurantData from "../../../../utils/hooks/useRestaurantData";
import WOYMShimmer from "../../Shimmers/WOYMShimmer";



const RestaurantPage = () => {

    const {restaurantID} = useParams();
    const restaurantInfo = useRestaurantData(restaurantID);
    

    if (restaurantInfo===null) return <WOYMShimmer/>
    
    const {name,cuisines,avgRating,totalRatingsString,costForTwoMessage,areaName} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {slaString} = restaurantInfo?.cards[2]?.card?.card?.info?.sla;


    return(
        <div>
            <div className="bg-gray-200 pt-1 pb-4 rounded-b-3xl">
                <div className="bg-white flex flex-col gap-2 mx-4 my-6 px-2 py-3  rounded-xl">
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <div className="flex items-center gap-1 text-xs"><img className="w-4 h-4" src="../../assets/star-rating.png"></img> {avgRating} - ({totalRatingsString}) - {costForTwoMessage}</div>
                    <h1 className="text-sm font-thin">{cuisines.join(", ")}</h1>
                    <hr></hr>
                    <div className="flex gap-4">
                        <h1 className="text-sm">Outlet</h1>
                        <h1 className="text-sm font-thin">{areaName}</h1>
                    </div>
                    <h1 className="text-xs font-semibold">{slaString}</h1>
                </div>
            </div>
            
            <div className="mx-4 border border-black">
                <div className="my-4  flex flex-col gap-2 items-center">
                    <h1 className="font-thin text-sm">⤝  MENU  ⤞</h1>
                    <input type="text" placeholder="Search for dishes" className="w-[90%] py-2 text-center rounded-lg bg-gray-100"/>
                    
                </div>
                <hr className="border-t-[10px] rounded-lg"></hr>
                <div className="my-4 border border-red-500 ">
                </div>

            </div>

        </div>
    )

}

export default RestaurantPage;