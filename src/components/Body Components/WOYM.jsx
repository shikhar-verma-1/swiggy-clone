// WOYM = What's on your mind?

import { useEffect, useState } from "react";
import { WOYM_ICONS_API } from "../../../utils/constants";



const WOYM = ({elementsData}) =>{
    
    const[iconList,setIconList] = useState([]);
  
    useEffect(()=>{
        if(elementsData){
            setIconList(elementsData);
            
        }

    },[elementsData]);

    

    const woymElements = iconList.map((element)=>{
        return (
            <div key={element.id}>
                <div>
                    <img  src={WOYM_ICONS_API+element.imageId}></img>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <h1 className="font-semibold px-4">Shikhar, what's on your mind?</h1>
            <div className="flex flex-wrap justify-center">
                {woymElements}
            </div>  
        </div>
    )

}

export default WOYM;