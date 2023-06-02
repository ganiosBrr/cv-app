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

  const content = [
    {
      component: <Info text={cvInfo} />,
      className: "__info",
      id: "info",
      title: "About me",
    },
    {
      component: <Timeline data={education} />,
      className: "__timeline",
      id: "education",
      title: "Education",
    },
    {
      component: <Expertise data={experienceData} />,
      className: "__expirience",
      id: "experience",
      title: "Experience",
    },
    {
      component: <Skills />,
      className: "__skills",
      id: "skills",
      title: "Skills",
    },
    {
      component: <Portfolio />,
      className: "__portfolio",
      id: "portfolio",
      title: "Portfolio",
    },
    {
      component: <Address />,
      className: "__address",
      id: "address",
      title: "Contacts",
    },
    {
      component: (
        <Feedback photo="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" />
      ),
      className: "__feedback",
      id: "feedback",
      title: "Feedback",
    },
  ];

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
        {content.map((item) => {
          const errorMessage =
            "Something went wrong; please review your server connection!";
          if (item.id === "education") {
            return (
              <Box
                title={item.title}
                content={
                  isLoading ? (
                    <Spinner />
                  ) : error ? (
                    <Error message={errorMessage} className="error-wrapper" />
                  ) : (
                    item.component
                  )
                }
                className={`cv-content${item.className}`}
                id={`${item.id}-section`}
                key={item.id}
              />
            );
          }
          return (
            <Box
              title={item.title}
              content={item.component}
              className={`cv-content${item.className}`}
              id={`${item.id}-section`}
              key={item.id}
            />
          );
        })}
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
