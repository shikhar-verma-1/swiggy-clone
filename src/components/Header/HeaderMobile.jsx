import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faCircleUser,faPaperPlane,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
const HeaderMobile = () =>{
    const navigate = useNavigate();
    function navigatorSearchmob(){
        navigate('/searchpagemobile');
    };
    function navigatorLocation(){
        navigate('/Body');
    };
    
    return(
        
        <header >
            <div className='border border-black px-4 py-4 flex '>
                <div className='location-details'>
                    <span onClick={navigatorLocation} className='font-bold'><FontAwesomeIcon icon={faPaperPlane} /> Location <FontAwesomeIcon icon={faAngleDown} /></span>
                    <h3 className=' font-thin text-sm'>Location details</h3>
                </div>
                <FontAwesomeIcon icon={faCircleUser} className='ml-auto w-8 h-8'/>
            </div>
            <div onClick={navigatorSearchmob} className='border border-gray-300 rounded-lg w-[90%] flex items-center mx-auto my-4 px-4 py-4 cursor-pointer hover:border-orange-300'>
                Search 
                <FontAwesomeIcon className='ml-auto' icon={faMagnifyingGlass} /> 
            </div>
        </header>
        
    );
};

export default HeaderMobile;