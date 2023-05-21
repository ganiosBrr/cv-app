import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, scroller } from "react-scroll";

import {
  faUser,
  faGraduationCap,
  faPen,
  faGem,
  faSuitcase,
  faPaperPlane,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import "./navigation.scss";

const Navigation = () => {
  const navItems = [
    {
      id: "info-section",
      icon: faUser,
      text: "About Me",
    },
    {
      id: "education-section",
      icon: faGraduationCap,
      text: "Education",
    },
    {
      id: "experience-section",
      icon: faPen,
      text: "Experience",
    },
    {
      id: "skills-section",
      icon: faGem,
      text: "Skills",
    },
    {
      id: "portfolio-section",
      icon: faSuitcase,
      text: "Portfolio",
    },
    {
      id: "address-section",
      icon: faPaperPlane,
      text: "Contacts",
    },
    {
      id: "feedback-section",
      icon: faComment,
      text: "Feedbacks",
    },
  ];

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: "easeInOutQuart",
      offset: -200,
    });
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        {navItems.map((item) => {
          return (
            <li className="nav-list__item" key={item.id} data-testid="link">
              <Link
                className="nav-list__link"
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-list__icon">
                  {<FontAwesomeIcon icon={item.icon} />}
                </span>
                <span className="nav-list__text">{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
