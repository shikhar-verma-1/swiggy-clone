import { useMediaQuery } from "react-responsive";
import BodyMobile from "./BodyMobile";
import BodyDesktop from "./BodyDesktop";
const Body = () => {
    const isMobile = useMediaQuery( {maxWidth:480} );

    return isMobile?<BodyMobile/>:<BodyDesktop/>

}

export default Body;