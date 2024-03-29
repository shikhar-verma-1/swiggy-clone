import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const SearchLocationMobile = () =>{

    const navigate = useNavigate();
    function navigate_To_Home(){
        navigate('/')
    };

    return (
        <div className="flex flex-col  my-4 px-4">
            
           
            <div className='flex items-center gap-6'>
                <FontAwesomeIcon onClick={navigate_To_Home} className='cursor-pointer' icon={faArrowLeft} />
                <h1>Enter your city</h1>
            
            </div>
           
            
            <input className='border self-start border-gray-400 rounded-lg w-full  my-4 px-4 py-4 cursor-pointer hover:border-orange-300' type="text" placeholder="Nagpur, New Delhi etc."/>
            <h1 className="self-start font-thin ">RECENT SEARCHES</h1>
        </div>
    )
}

export default SearchLocationMobile;