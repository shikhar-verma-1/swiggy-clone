import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useMediaQuery } from "react-responsive";

const Header = () =>{
   
    const isMobile = useMediaQuery( {maxWidth:480} );
    return(
        <div>
            {isMobile ? <HeaderMobile /> : <HeaderDesktop/>}
            
        </div>
    )



}


export default Header;