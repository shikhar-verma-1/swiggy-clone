import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  useState  } from 'react';
import {  useNavigate  } from 'react-router-dom';

import { CITY_COORDINATES_API, CITY_RESTAURANTS_API, DEFAULT_LAT, DEFAULT_LNG } from '../../../utils/constants';



const SearchLocationMobile = () =>{

    


    const [city,setcity] = useState("");
    const [locationArr,setlocationArr] = useState([]);
    const [homePageData,sethomePageData] = useState();
    
  
    const navigate = useNavigate();
    function navigate_To_Home(){
        navigate('/')
    };
    
    
    
    
    function getCityRestaurantsData(city){

        let lat="";
        let lng="";
    
        const locationDataObj = {method: 'GET',headers: { 'X-Api-Key': 'b7QYgGFeZ5M8KFp+m1B+ag==dcMMg5LHqGIoRi36'},contentType: 'application/json'}
    
        const fetchData = async()=>{
            const locationData = await fetch(CITY_COORDINATES_API + city,locationDataObj)
            const locationjson = await locationData.json();

            lat = locationjson[0].latitude;
            lng = locationjson[0].longitude;

            const resdata = await fetch(CITY_RESTAURANTS_API.replace(DEFAULT_LAT,lat).replace(DEFAULT_LNG,lng))
            const resjson = await resdata.json();
            sethomePageData(resjson);
            console.log(homePageData);  
        }   
        fetchData(); 
        
               
    } 

   
    function enter(e){
        if(e.key==="Enter"){
            
           
            getCityRestaurantsData(city);
            
            
            
            setlocationArr((prevState)=>{
                return[...prevState,city]
            });

        }
    }

    const recentlocations = locationArr.map((city,index)=>{
        return <p key={city+index}>{city}</p>
    })
    
   
   

    return (
        <div className="flex flex-col  my-4 px-4">


            <div className='flex items-center gap-6'>
                <FontAwesomeIcon onClick={navigate_To_Home} className='cursor-pointer' icon={faArrowLeft} />
                <h1>Enter your city</h1>

            </div>


            <input onChange={(e)=>{setcity(e.target.value)}} value={city} onKeyDown={enter} className='border self-start border-gray-400 rounded-lg w-full  mt-4 px-4 py-4 cursor-pointer hover:border-orange-300' type="text" maxLength={13} placeholder="Nagpur, New Delhi etc."/>
            <h3 className='mt-2 mb-4 text-xs text-violet-400'>HIT ENTER TO LOAD</h3>
            
            <h1 className="self-start font-thin">RECENT SEARCHES</h1>
            <h1>{recentlocations}</h1>
            
        </div>

    )
        
}

export default SearchLocationMobile;
