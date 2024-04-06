// WOYM = What's on your mind?

import { useEffect, useState ,useRef  } from "react";
import { WOYM_ICONS_API } from "../../../../utils/constants";
import WOYMShimmer from "../../Shimmers/WOYMShimmer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';





const WOYM = ({woymData}) =>{
    
    const[itemList,setItemList] = useState([]);

    const itemContainerRef=useRef(null);
  
    useEffect(()=>{
        if(woymData){
            setItemList(woymData);    
        };

    },[woymData]);

   
    const scroll_left = () => {
        if (itemContainerRef.current) {
            itemContainerRef.current.scrollLeft -= 450;   
        };
    };

    const scroll_right = () => {
        if (itemContainerRef.current) {
          itemContainerRef.current.scrollLeft += 450; 
        };
    };


    

    const woymElements = itemList.map((element)=>{
        return (
            
            
            <img  key={element.id} className="w-[21%] sm:w-[11%] cursor-pointer" src={WOYM_ICONS_API + element.imageId}/>
            
            
        )
    });
    
    return itemList.length===0? (<WOYMShimmer/>) : (
        <div className="my-4">
            <div className="my-4 flex items-center justify-between">
                <h1 className="my-2 px-4 font-semibold text-xl sm:text-xl">Shikhar, what's on your mind?</h1>
                
                <div className="mr-6 flex items-center gap-4">
                    <FontAwesomeIcon onClick={scroll_left}  icon={faArrowLeft}  className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                    <FontAwesomeIcon onClick={scroll_right} icon={faArrowRight} className='w-3 h-3 p-2 sm:p-3 bg-gray-200  rounded-[50%] hover:bg-gray-300 hover:text-white cursor-pointer'/>
                </div>
                
            </div>
            
            <div className="flex  overflow-hidden scroll-smooth" ref={itemContainerRef} >
                {woymElements}
            </div> 
             
        </div>
    );

};

export default WOYM;