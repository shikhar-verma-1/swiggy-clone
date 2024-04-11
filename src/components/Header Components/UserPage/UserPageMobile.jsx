import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faCaretRight, faCaretDown, faHeart ,faGear } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const UserPageMobile = () =>{

    const[isOpen,setisOpen] = useState(false);

    const handleAccordion = () => {
        setisOpen((prevState)=>!prevState)
    }


    const navigate = useNavigate();

    function navigate_To_Home(){
        navigate('/')
        
    }

    return (
        <div className="h-screen">
            <div className=" my-4 px-4 flex items-center  justify-between ">
                <FontAwesomeIcon onClick={navigate_To_Home} className="text-lg cursor-pointer" icon={faArrowLeft} />
                <button className=" px-3 py-1 bg-orange-100 text-orange-500 font-semibold rounded-2xl">Help</button>
            </div>

            <hr/>

            <div className="m-4 cursor-pointer">
                <div className="flex justify-between items-center ">
                    <div className="py-4">
                        <h1 className="font-semibold">Swiggy HDFC Bank Credit Card</h1>
                        <h3 className="font-thin">Apply for the card and start earning cashbacks!</h3>
                    </div>
                    <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
                </div>
                <hr/>

                <div>
                    <div className="flex justify-between items-center" onClick={handleAccordion}>
                        <div className="py-4">
                            <h1 className="font-semibold">My Account</h1>
                            <h3 className="font-thin">Favourites & Settings</h3>
                        </div>
                        <FontAwesomeIcon className={`text-xl ${isOpen? "rotate-180" : "rotate-0"}`} icon={faCaretDown} />
                    </div>
                    <hr className=" border-dotted"/>
                    {isOpen && <div className="py-4 flex flex-col gap-4">
                        <h1><FontAwesomeIcon  icon={faHeart} /> Favourites</h1>
                        <h1><FontAwesomeIcon  icon={faGear} /> Settings</h1>

                    </div>}
                </div>
                <hr/>

                <div className="flex justify-between items-center">
                    <div className="py-4">
                        <h1 className="font-semibold">Addresses</h1>
                    </div>
                    <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
                </div>
                <hr/>

                <div className="flex justify-between items-center">
                    <div className="py-4">
                        <h1 className="font-semibold">Payments & Refunds</h1>
                        <h3 className="font-thin">Refund Status & Payment Modes</h3>
                    </div>
                    <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
                </div>
                <hr/>

                <div className="flex justify-between items-center">
                    <div className="py-4">
                        <h1 className="font-semibold">Swiggy Money & Gift Cards</h1>
                        <h3 className="font-thin">Account balance, Gift cards & Transaction Money</h3>
                    </div>
                    <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
                </div>
                <hr/>

                <div className="flex justify-between items-center">
                    <div className="py-4">
                        <h1 className="font-semibold">Refer & Earn Program</h1>
                        <h3 className="font-thin">Refer friends & earn upto $200 cashback on Swiggy</h3>
                    </div>
                    <FontAwesomeIcon className="text-xl" icon={faCaretRight} />
                </div>
                <hr/>

                
                


            </div>
            
        </div>
    )
}

export default UserPageMobile;