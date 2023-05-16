import { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from 'react-transition-group';

import Box from './components/box/box';
import Info from './components/info/info';
import Button from './components/button/button';
import Panel from './components/panel/panel';
import Timeline from "./components/timeline/timeline";
import Expertise from "./components/expertise/expertise";
import Portfolio from "./components/portfolio/portfolio";
import Address from "./components/address/address";
import Feedback from "./components/feedback/feedback";

import './App.scss';

function App() {
  const [panelRender, setPanelRender] = useState(true);
  const panelRef = useRef(null);

  const educationData = [
    {
      "date": 2001,
      "title": "Title 0",
      "text": "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n"
    },
    {
      "date": 2000,
      "title": "Title 1",
      "text": "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n"
    },
    {
      "date": 2012,
      "title": "Title 2",
      "text": "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n"
    }
  ];

  const experienceData = [
    {
      date: '2013-2014', 
      info: {
        company: 'Google',
        job: 'Front-end developer / php programmer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
      }
    },
    {
      date: '2012', 
      info: {
        company: 'Twitter',
        job: 'Web developer',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor'
      }
    }
  ];

  const cvInfo = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque";

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
