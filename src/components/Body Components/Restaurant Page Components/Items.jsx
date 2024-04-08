import { ITEM_IMAGES_URL } from "../../../../utils/constants";

const Items = ({itemsData}) =>{
    console.log(itemsData);
    


    return(
        <div>
            
            <hr/>   
            {itemsData.map((item)=>(
                
                <div key={item.card.info.id} className="py-2">
                    <div className="mx-4 flex items-center">
                        <div className="w-[60%] px-2 py-2 flex flex-col gap-1">
                            {item.card.info.itemAttribute.vegClassifier === "VEG"?
                               <span><img className="w-5 h-5" src="../assets/veg-item.png"/></span> 
                               :
                               <span><img className="w-6 h-6" src="../assets/non-veg-item.png"/></span>
                            }
                            <h1 className="font-semibold">{item.card.info.name}</h1>
                            <h1>₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</h1>
                            <div className="flex items-center gap-1 text-sm"><img className="w-4 h-4" src="../../assets/star-rating.png"></img> {item.card.info.ratings.aggregatedRating.rating} - ({item.card.info.ratings.aggregatedRating.ratingCountV2 || 0})</div>
                            <p className="font-thin">{item.card.info.description}</p>
                        </div>
                        <div className="w-[40%] flex flex-col items-center py-4">

                            <div className="w-[140px] h-[140px] flex flex-col items-center relative">
                                <img className="w-[100%] h-[97%] rounded-lg" src={ITEM_IMAGES_URL + item.card.info.imageId || "../../assets/generic-item.png"}/>
                                <button className=" bg-white border border-gray-300 w-[60%] pt-1 pb-2 rounded-lg font-bold shadow-lg text-green-600 absolute top-3/4 cursor-pointer">ADD</button>
                            </div>
                            
                        </div>
                        

                    </div>
                    <hr></hr>
                </div>
            
            ))}

                
            
            
                
        </div>
        
    )
}

export default Items;