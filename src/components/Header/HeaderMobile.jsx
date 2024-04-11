import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faCircleUser,faPaperPlane,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const HeaderMobile = () =>{

    const navigate = useNavigate();

    function navigate_To_SearchPageMobile(){
        navigate('/searchpagemobile');
    };

    function navigate_To_SetLocationMobile(){
        navigate('/setlocationmobile');
    };

    function navigate_To_UserPageMobile(){
        navigate('/userpagemobile')
    }
    
    return(
        
        <header >
            <div className='border border-black px-4 py-4 flex  '>
                <div className='location-details cursor-pointer'>
                    <span onClick={navigate_To_SetLocationMobile} className='font-bold'><FontAwesomeIcon icon={faPaperPlane} /> Location <FontAwesomeIcon icon={faAngleDown} /></span>
                    <h3 className=' font-thin text-sm'>Location details</h3>
                </div>

                <FontAwesomeIcon onClick={navigate_To_UserPageMobile} icon={faCircleUser} className='ml-auto w-8 h-8 cursor-pointer'/>
            </div>

            <div onClick={navigate_To_SearchPageMobile} className='border border-gray-300 rounded-lg w-[90%] flex items-center mx-auto my-4 px-4 py-4  hover:border-orange-300'>
                Search for restaurants and foods
                <FontAwesomeIcon className='ml-auto' icon={faMagnifyingGlass} /> 
            </div>
        </header>
        
    );
};

export default HeaderMobile;