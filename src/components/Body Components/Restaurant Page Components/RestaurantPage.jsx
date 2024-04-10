
import { useParams } from "react-router-dom";
import useRestaurantData from "../../../../utils/hooks/useRestaurantData";
import WOYMShimmer from "../../Shimmers/WOYMShimmer";
import ItemCategory from "./ItemCategory";
import { useState } from "react";




const RestaurantPage = () => {

    const {restaurantID} = useParams();
    const restaurantInfo = useRestaurantData(restaurantID);
    const [show,setShow] = useState(false);
    

    if (restaurantInfo===null) return <WOYMShimmer/>
    
    const {name,cuisines,avgRating,totalRatingsString,costForTwoMessage,areaName} = restaurantInfo?.cards[2]?.card?.card?.info;
    const {slaString} = restaurantInfo?.cards[2]?.card?.card?.info?.sla;
  
    const menuCategories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card)=>card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
   const handleClick = () =>{
    setShow((prevState)=>!prevState)
   };




    return (
        <div className="sm:max-w-[80%] sm:mx-auto md:max-w-[60%] ">
        
            <div className="bg-gray-200 pt-1 pb-4 rounded-b-3xl sm:pb-2 ">
                <div className="bg-white flex flex-col gap-2 mx-4 my-6 px-2 py-3  rounded-xl sm:gap-4">
                    <h1 className="text-xl font-semibold sm:text-2xl">{name}</h1>
                    <div className="flex items-center gap-1 text-xs sm:text-lg"><img className="w-4 h-4" src="../../assets/star-rating.png"></img> {avgRating} - ({totalRatingsString}) - {costForTwoMessage}</div>
                    <h1 className="text-sm font-thin sm:text-lg">{cuisines.join(", ")}</h1>
                    <hr></hr>
                    <div className="flex gap-4">
                        <h1 className="text-sm sm:text-lg">Outlet</h1>
                        <h1 className="text-sm font-thin sm:text-lg">{areaName}</h1>
                    </div>
                    <h1 className="text-xs font-semibold sm:text-sm">{slaString}</h1>
                </div>
            </div>
            
            <div className="mx-4 border border-black">
                <div className="my-4  flex flex-col gap-2 items-center sm:gap-6">
                    <h1 className="font-thin text-sm sm:text-xl">⤝  MENU  ⤞</h1>
                    <input  type="text" placeholder="Search for dishes" className="w-[90%] py-2 text-center rounded-lg bg-gray-100 sm:w-[80%] sm:p-4"/>      
                </div>
                <hr className="border-t-[10px] rounded-lg sm:my-2"></hr>                    
            </div>



            <div className="w-[100%]  border-4 border-blue-500 relative">
                <div className="border border-red-500">
                    {menuCategories.map((category)=> <ItemCategory key={category.card.card.title} categoryData={category.card.card} /> )}
                </div>
            </div>
            
            <button onClick={handleClick} className="border border-black px-4 py-6  rounded-[50%] bg-black font-thin  text-white fixed right-[5%]  sm:right-[15%] md:right-[22%]  bottom-5 ">MENU</button>

            
            {show && <div className="bg-black w-[60%] h-[30%] p-4 mx-auto fixed right-[5%] sm:w-[50%] sm:right-[15%] md:w-[30%] md:right-[22%] bottom-[12%] rounded-lg overflow-y-scroll no-scrollbar ">

                {menuCategories.map((category)=>
                    {return(
                        <div key={category.card.card.title}>
                                    
                            <h1 className="text-white my-4  font-thin ">{category.card.card.title}</h1>
                                    
                        </div> )          
                    }
                )}
            </div>}
            
            
        </div>

        
    )

}

export default RestaurantPage;