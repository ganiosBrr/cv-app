import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";

import "./address.scss";

const Address = () => {
  const addressData = [
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      content: "500 342 242",
      href: "tel:+500 342 242",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      content: "office@kamsolutions.pl",
      href: "mailto:office@kamsolutions.pl",
    },
    {
      icon: <FontAwesomeIcon icon={faTwitter} />,
      heading: "Twitter",
      content: "https://twitter.com/wordpress",
      href: "https://twitter.com/wordpress",
    },
    {
      icon: <FontAwesomeIcon icon={faFacebookF} />,
      heading: "Facebook",
      content: "https://www.facebook.com/facebook",
      href: "https://www.facebook.com/facebook",
    },
    {
      icon: <FontAwesomeIcon icon={faSkype} />,
      heading: "Skype",
      content: "kamsolutions.pl",
      href: "skype:kamsolutions.pl",
    },
  ];

  return (
    <div id="address" className="address">
      <ul className="address-list">
        {addressData.map(({ icon, content, heading, href }, index) => {
          return (
            <li key={index} className="address-list__item">
              <div className="address__icon fa-2xl">{icon}</div>
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
