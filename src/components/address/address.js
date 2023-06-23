import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./address.scss";

const Address = () => {
  const addressData = [
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      content: "+77071480046",
      href: "tel:+77071480046",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      content: "nurpeisovganibek@gmail.com",
      href: "mailto:nurpeisovganibek@gmail.com",
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedinIn} />,
      heading: "LinkedIn",
      content: "https://www.linkedin.com/in/ganibek-nurpeisov-69084425a",
      href: "https://www.linkedin.com/in/ganibek-nurpeisov-69084425a",
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} />,
      heading: "GitHub",
      content: "https://github.com/ganiosBrr/",
      href: "https://github.com/ganiosBrr/",
    },
  ];

  return (
    <div id="address" className="address">
      <ul className="address-list">
        {addressData.map(({ icon, content, heading, href }, index) => {
          return (
            <li key={index} className="address-list__item" data-testid="address-item">
              <div className="address__icon fa-2xl" data-testid="icon">{icon}</div>
              <div className="address__info">
                {heading && <h6>{heading}</h6>}
                <a href={href} className="address__info-link" target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Address;