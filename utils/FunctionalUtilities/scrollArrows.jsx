import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faArrowRight } from '@fortawesome/free-solid-svg-icons';

const scrollArrows = () => {

    const scroll_left = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100; // Adjust scroll distance as needed
        }
    };

    const scroll_right = () => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 100; // Adjust scroll distance as needed
        }
    };

    return(
        <div>
            <div className='flex gap-6'>
                <FontAwesomeIcon onClick={scroll_left} icon={faArrowLeft} className='cursor-pointer'/>
                <FontAwesomeIcon onClick={scroll_right} icon={faArrowRight} className='cursor-pointer'/>
            </div>
            
        </div>
    )
}

export default scrollArrows;