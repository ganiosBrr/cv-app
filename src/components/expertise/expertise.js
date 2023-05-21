import "./expertise.scss";

const Expertise = ({ data }) => {
  return (
    <div className="experience">
      <ul className="experience-list">
        {data.map((item, index) => {
          return (
            <li className="experience-list__item" key={index} data-testid="expertise-item">
              <div className="experience-date">
                <h3>{item.info.company}</h3>
                <span>{item.date}</span>
              </div>
              <div className="experience-event">
                <h3>{item.info.job}</h3>
                <p>{item.info.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Expertise;
