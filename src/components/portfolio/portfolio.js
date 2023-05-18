import { useState } from "react";

import Button from "../button/button";
import PortfolioInfo from "../portfolioInfo/portfolioInfo";

import card_1 from "../../assets/images/card_1.png";
import card_3 from "../../assets/images/card_3.png";

import "./portfolio.scss";

const Portfolio = () => {
  const buttonsData = [
    { name: "all", label: "All" },
    { name: "ui", label: "Ui" },
    { name: "code", label: "Code" },
  ];

  const [filter, setFilter] = useState("all");

  const onFilter = (filter) => {
    setFilter(filter);
  };

  const projects = [
    {
      image: card_1,
      filterTags: ["all", "ui"],
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis",
      url: "https://somesite.com",
    },
    {
      image: card_3,
      filterTags: ["all", "code"],
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis",
      url: "https://somesite.com",
    },
    {
      image: card_1,
      filterTags: ["all", "ui"],
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis",
      url: "https://somesite.com",
    },
    {
      image: card_3,
      filterTags: ["all", "code"],
      title: "Some text",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis",
      url: "https://somesite.com",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    return filter === "all" || project.filterTags.includes(filter);
  });

  return (
    <>
      <div className="portfolio">
        <ul className="tabs-list">
          {buttonsData.map(({ name, label }) => (
            <li key={name} className="tabs-list__item">
              <Button
                className={
                  filter === name ? "portfolio__btn active" : "portfolio__btn"
                }
                onClick={() => onFilter(name)}
                text={label}
              />
            </li>
          ))}
        </ul>
        <ul className="portfolio-list">
          {filteredProjects.map((project, index) => (
            <li className="portfolio-list__item" key={index}>
              <img src={project.image}
                alt="Project screenshot"
                style={{
                  opacity: 0,
                  transition: "opacity 1.5s ease",
                  animationDelay: `${index * 0.1}s`,
                }}
                onLoad={(e) => {
                  e.target.style.opacity = 1;
                }} 
              />
              <PortfolioInfo
                title={project.title}
                text={project.text}
                url={project.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Portfolio;

// import './portfolio.scss';
// import Button from '../button/button';
// import card_1 from '../../assets/images/card_1.png';
// import card_3 from '../../assets/images/card_3.png'
// import { useState } from 'react';
// import PortfolioInfo from '../portfolioInfo/portfolioInfo';

// const Portfolio = () => {
//     const buttonsData = [
//         {name: "all", label: "All"},
//         {name: "ui", label: "Ui"},
//         {name: "code", label: "Code"}
//     ];

//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [filter, setFilter] = useState("all");

//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//     }

//     const handleMouseLeave = () => {
//         setHoveredIndex(null);
//     }

//     const onFilter = (filter) => {
//         setFilter(filter);
//     }

//     return(
//         <><div className="portfolio">
//                 <ul className="tabs-list">
//                     {buttonsData.map(({ name, label }) => {
//                         return (
//                             <li className='tabs-list__item'>
//                                 <Button
//                                 className={filter === name ? "portfolio__btn active" : "portfolio__btn"}
//                                 key={name}
//                                 onClick={() => onFilter(name)}
//                                 text={label}
//                                 />
//                             </li>

//                         );
//                     })}
//                 </ul>
//                 <ul className={`portfolio-list ${filter}`}>
//                     <li
//                         className={`portfolio-list__item ${filter !== "all" && filter !== "ui" && "hidden"}`}
//                         onMouseEnter={() => handleMouseEnter(0)}
//                         onMouseLeave={handleMouseLeave}>
//                         <img src={card_1} alt="Project screenshot" />
//                         {hoveredIndex === 0 && (
//                             <PortfolioInfo
//                                 title="Some text"
//                                 text="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
//                                 url="https://somesite.com"
//                             />
//                         )}
//                     </li>
//                     <li
//                         className={`portfolio-list__item ${filter !== "all" && filter !== "code" && "hidden"}`}
//                         onMouseEnter={() => handleMouseEnter(1)}
//                         onMouseLeave={handleMouseLeave}>
//                         <img src={card_3} alt="Project screenshot" />
//                         {hoveredIndex === 1 && (
//                             <PortfolioInfo
//                             title="Some text"
//                             text="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
//                             url="https://somesite.com"
//                         />
//                         )}
//                     </li>
//                     <li
//                         className={`portfolio-list__item ${filter !== "all" && filter !== "ui" && "hidden"}`}
//                         onMouseEnter={() => handleMouseEnter(2)}
//                         onMouseLeave={handleMouseLeave}>
//                         <img src={card_1} alt="Project screenshot" />
//                         {hoveredIndex === 2 && (
//                             <PortfolioInfo
//                             title="Some text"
//                             text="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
//                             url="https://somesite.com"
//                             />
//                         )}
//                     </li>
//                     <li
//                         className={`portfolio-list__item ${filter !== "all" && filter !== "code" && "hidden"}`}
//                         onMouseEnter={() => handleMouseEnter(3)}
//                         onMouseLeave={handleMouseLeave}>
//                         <img src={card_3} alt="Project screenshot" />
//                         {hoveredIndex === 3 && (
//                             <PortfolioInfo
//                             title="Some text"
//                             text="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis "
//                             url="https://somesite.com"
//                             />
//                         )}
//                     </li>
//                 </ul>
//             </div></>
//     );
// }

// export default Portfolio;
