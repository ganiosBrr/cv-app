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
              <li className="portfolio-list__item" key={index} data-testid="portfolio-item">
                  <img src={project.image} alt="Project screenshot" />
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
