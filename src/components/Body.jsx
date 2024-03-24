import { useMediaQuery } from "react-responsive";

const Body = () =>{
   
    const isMobile = useMediaQuery( {maxWidth:480} );
    return(
        <div>
            {isMobile ? <h1>mobile body</h1> : <h1>desktop body</h1>}
            
        </div>
    )



}

export default Body;