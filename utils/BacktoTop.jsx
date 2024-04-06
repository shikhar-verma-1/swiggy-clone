import { useEffect, useState } from "react";


const BacktoTop = () => {
    const[isVisible , setisVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;

        scrollTop > 300 ? setisVisible(true) : setisVisible(false);
    };

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);

        return () => {
            window.removeEventListener('scroll',handleScroll);
        }

    },[]);


    return (

        <div>
            {isVisible && <button className=" border  border-black  px-2 py-2 rounded-lg text-lg" onClick = {scrollToTop}>Back to Top</button>}
        </div>
        
    );
};


export default BacktoTop;
