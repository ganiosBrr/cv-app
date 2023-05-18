import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import "./spinner.scss";

const Spinner = () => {
    return(
        <div className="spinner-wrapper">
             <FontAwesomeIcon icon={faRotate} spin size="2xl" style={{color: "#26c176",}} />
        </div>
    );
}

export default Spinner;