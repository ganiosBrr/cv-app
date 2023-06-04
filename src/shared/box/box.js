import "./box.scss";

const Box = ({ title, className, id, children }) => {
  return (
    <div id={id} className={className} data-testid="box-component">
      <h2 className="cv__title">{title}</h2>
      {children}
    </div>
  );
};

export default Box;
