import "./button.scss";

const Button = ({ className, onClick, text, icon, type }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      <span>{icon}</span>
      <span className="btn-back--text">{text}</span>
    </button>
  );
};

export default Button;
