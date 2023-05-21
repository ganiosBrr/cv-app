import "./photoBox.scss";

const PhotoBox = ({ className, name, title, description, avatar }) => {
  const breakLine = description ? description.split("\\n") : [];
  return (
    <div className={className}>
      <img className="user-img" src={avatar} alt="User avatar" />
      <h1 className="user-name">{name}</h1>
      {title && <h3 className="user-title">{title}</h3>}
      {breakLine.map((item, index) => {
        return (
          <p key={index} className="user-desc" data-testid="desc">
            {item}
          </p>
        );
      })}
    </div>
  );
};

export default PhotoBox;
