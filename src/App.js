import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

import Box from "./shared/box/box";
import Info from "./components/info/info";
import Button from "./shared/button/button";
import Panel from "./components/panel/panel";
import Timeline from "./components/timeline/timeline";
import Expertise from "./components/expertise/expertise";
import Portfolio from "./components/portfolio/portfolio";
import Address from "./components/address/address";
import Feedback from "./components/feedback/feedback";
import Spinner from "./shared/spinner/spinner";
import Error from "./shared/error/error";
import Skills from "./components/skills/skills";

import { experienceData, cvInfo } from "./static-data/staticData";

import { fetchEducations } from "./features/education/educationSlice";

import "./App.scss";

function App() {
  const [panelRender, setPanelRender] = useState(true);
  const panelRef = useRef(null);

  const dispatch = useDispatch();
  const education = useSelector((state) => state.education.data);
  const isLoading = useSelector((state) => state.education.isLoading);
  const error = useSelector((state) => state.education.error);

  useEffect(() => {
    dispatch(fetchEducations());
  }, [dispatch]);

  const handlePanelToggle = () => {
    setPanelRender((prevState) => !prevState);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="cv">
      <Button
        className={`btn btn-action btn-action--toggle ${
          panelRender ? "" : "moveButton"
        }`}
        icon={<FontAwesomeIcon icon={faBars} />}
        onClick={handlePanelToggle}
      />
      <CSSTransition
        in={panelRender}
        timeout={500}
        classNames="panel-transition"
        unmountOnExit
        nodeRef={panelRef}
      >
        <div className="cv-panel" ref={panelRef}>
          <Panel panelRender={panelRender} />
        </div>
      </CSSTransition>

      <div
        className={
          panelRender
            ? "cv-content cv-content--right"
            : "cv-content cv-content--left"
        }
      >
        <Box 
          className="cv-content__info"
          id="info-section"
          title="About me">

          <Info text={cvInfo}/> 
        </Box>
        <Box
          className="cv-content__timeline"
          id="education-section"
          title="Education"
      > 
          {
            isLoading ? (
              <Spinner />
            ) : error ? (
              <Error message="Something went wrong; please review your server connection!" className="error-wrapper" />
            ) : (
              <Timeline data={education} />
            )
          }
        </Box>
        <Box 
          className="cv-content__expirience"
          id="experience-section"
          title="Experience">

          <Expertise data={experienceData}/> 
        </Box>
        <Box 
          className="cv-content__skills"
          id="skills-section"
          title="Skills">

          <Skills /> 
        </Box>
        <Box 
          className="cv-content__portfolio"
          id="portfolio-section"
          title="Portfolio">

          <Portfolio /> 
        </Box>
        <Box 
          className="cv-content__address"
          id="address-section"
          title="Contacts">

          <Address /> 
        </Box>
        <Box 
          className="cv-content__feedback"
          id="feedback-section"
          title="Feedback">

          <Feedback photo="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" />
        </Box>
      </div>

      <Button
        className="btn btn-action btn-action--up"
        icon={<FontAwesomeIcon icon={faAngleUp} />}
        onClick={handleScrollToTop}
      />
    </section>
  );
}

export default App;
