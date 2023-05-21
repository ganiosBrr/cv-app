import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import "./spinner.scss";

const Spinner = () => {
    return(
        <div className="spinner-wrapper" data-testid="spinner">
             <FontAwesomeIcon icon={faRotate} spin size="2xl" style={{color: "#26c176",}} />
        </div>
    );
}

export default Spinner;