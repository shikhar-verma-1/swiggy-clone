import { useState } from "react";
import { ITEM_IMAGES_URL } from "../../../../utils/constants";


const Items = ({itemsData}) =>{
    
    
    
    const[isClicked,setisClicked] = useState(false);

    



    

    
    


    return(
        <div>
            
            <hr/>   
            {itemsData.map((item)=>(
                
                
                <div key={item.card.info.id} className="py-2">
                    <div className="mx-4 flex items-center md:py-3">
                        <div className="w-[60%] px-2 py-2 flex flex-col gap-1">
                            {item.card.info.itemAttribute.vegClassifier === "VEG"?
                               <span><img className="w-5 h-5" src="../assets/veg-item.png"/></span> 
                               :
                               <span><img className="w-6 h-6" src="../assets/non-veg-item.png"/></span>
                            }
                            <h1 className="font-semibold md:text-xl">{item.card.info.name}</h1>
                            <h1 className="md:text-lg">₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</h1>
                            <div className="flex items-center gap-1 text-sm md:text-lg"><img className="w-4 h-4 md:w-5 md:h-5" src="../../assets/star-rating.png"></img> {item.card.info.ratings.aggregatedRating.rating} - ({item.card.info.ratings.aggregatedRating.ratingCountV2 || 0})</div>
                            <p className="font-thin">{item.card.info.description}</p>
                        </div>
                        
                        <div className="w-[40%] flex flex-col items-center py-4">

                            <div className="w-[140px] h-[140px] md:w-[210px] md:h-[180px] flex flex-col items-center relative">
                                
                                <img className="w-[100%] h-[97%] rounded-lg"  src={ITEM_IMAGES_URL + item.card.info.imageId} />
                                <div className=" bg-white border border-gray-300 w-[60%] pt-1 pb-2 md:py-2 md:mt-5 md:w-[70%] rounded-lg text-center font-bold shadow-lg text-green-600 absolute top-3/4  cursor-pointer">
                                    {
                                        isClicked?
                                        <div className="flex gap-4 justify-center">
                                            <button>-</button>
                                            <h1>1</h1>
                                            <button>+</button>
                                        </div>
                                        :
                                        <button>ADD</button>
                                    }
                                </div>  
                               
                                
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