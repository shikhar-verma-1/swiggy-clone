import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Items from './Items';
import { useState } from 'react';
const ItemCategory = ({categoryData}) =>{
    
    const[isOpen,setisOpen] = useState(false);

    const handleAccordion = () =>{
        setisOpen((prevState)=>!prevState);
    }

    return(
        <div>
            <div className="px-4 py-4 flex  gap-1 items-center cursor-pointer" onClick={handleAccordion}>
                <h1 className='font-semibold sm:text-lg'>{categoryData.title}</h1>
                <h1 className='font-semibold sm:text-lg'>({categoryData.itemCards.length})</h1>
                <FontAwesomeIcon  className={`ml-auto sm:text-xl ${ isOpen? "rotate-180" : "rotate-0" }`} icon={faCaretDown} />
                
            </div>
            {isOpen && <Items itemsData={categoryData.itemCards}/>}
           
            <hr className='border-t-8 '/>

        </div>
    )
};

export default ItemCategory;