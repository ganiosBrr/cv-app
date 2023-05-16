import './button.scss';

const Button = ({className, onClick, text, icon}) => {
    return (
        <button 
            className={className} 
            onClick={onClick}>
            <span>{icon}</span>
            <span className="btn-back--text">{text}</span>
        </button>
    );
}

export default Button;