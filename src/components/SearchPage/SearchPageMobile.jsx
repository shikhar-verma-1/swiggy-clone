import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Comp =()=>{
    const navigate = useNavigate();
    function navigator(){
        navigate('/')
    }
    
    return(
        <div className=" flex flex-col items-center border  my-4 px-4">
            
           
            <FontAwesomeIcon onClick={navigator} className="self-start" icon={faArrowLeft} />
            <h1 className="font-thin ">Search for dishes & restaurants</h1>
            
            <input className='border self-start border-gray-300 rounded-lg w-full  my-4 px-4 py-4 cursor-pointer hover:border-orange-300' type="text" placeholder="Search for restaurants and food"/>
            <h1 className="self-start">RECENTLY SEARCHED RESTAURANTS</h1>
        </div>
    )
}
export default Comp;