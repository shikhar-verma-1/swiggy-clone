import SearchPageMobile from "./SearchPageMobile";
import { useMediaQuery } from "react-responsive";

const SearchPage = () => {
    const isMobile = useMediaQuery( {maxWidth:480} );
    return(
        <div>
            {isMobile ? <SearchPageMobile /> : <h1>searchdesktop</h1>}
            
        </div>
    )

}

export default SearchPage;