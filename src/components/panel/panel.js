import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import PhotoBox from "../../shared/photoBox/photoBox";
import Navigation from "../navigation/navigation";
import Button from "../../shared/button/button";

import "./panel.scss";

const Panel = ({ panelRender }) => {
  return (
    <div className="panel">
      {panelRender && (
        <>
          <PhotoBox
            className="panel__photoBox"
            name="John Doe"
            avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
          />
          <Navigation />

          <Link to="/">
            <Button
              className="btn btn-action btn-action--back"
              icon={<FontAwesomeIcon icon={faAngleLeft} />}
              text="Go back"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default Panel;
