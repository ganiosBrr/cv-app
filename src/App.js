import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from 'react-transition-group';

import Box from './shared/box/box';
import Info from './components/info/info';
import Button from './components/button/button';
import Panel from './components/panel/panel';
import Timeline from "./components/timeline/timeline";
import Expertise from "./components/expertise/expertise";
import Portfolio from "./components/portfolio/portfolio";
import Address from "./components/address/address";
import Feedback from "./components/feedback/feedback";

import { experienceData, educationData, cvInfo } from './static-data/staticData';

import './App.scss';

function App() {
  const [panelRender, setPanelRender] = useState(true);
  const panelRef = useRef(null);

  const content = [
    {
      component: <Info text={cvInfo}/>,
      className: "__info",
      id: "info",
      title: "About me"
    },
    {
      component: <Timeline data={educationData}/>,
      className: "__timeline",
      id: "education",
      title: "Education"
    },
    {
      component: <Expertise data={experienceData}/>,
      className: "__expirience",
      id: "experience",
      title: "Experience"
    },
    {
      component: <Portfolio/>,
      className: "__portfolio",
      id: "portfolio",
      title: "Portfolio"
    },
    {
      component: <Address/>,
      className: "__address",
      id: "address",
      title: "Contacts"
    },
    {
      component: <Feedback photo="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"/>,
      className: "__feedback",
      id: "feedback",
      title: "Feedback"
    }
  ];

  const handlePanelToggle = () => {
    setPanelRender(prevState => !prevState);
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className="cv">
        <Button 
          className={`btn btn-action btn-action--toggle ${panelRender ? '' : 'moveButton'}`} 
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
            <Panel panelRender={panelRender}/>
          </div>
        </CSSTransition>

        <div className={panelRender ? "cv-content cv-content--right" : "cv-content cv-content--left"}>
          {content.map(item => {
            return(
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
          icon={<FontAwesomeIcon icon={faAngleUp}/>}
          onClick={handleScrollToTop} 
        />

    </section>
  );
}

export default App;
